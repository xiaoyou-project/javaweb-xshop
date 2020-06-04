<template>
    <div class="mainDiv">
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%;"
                border
                @selection-change="handleSelectionChange">
            <el-table-column
                    type="selection"
                    width="50">
            </el-table-column>
            <el-table-column
                    label="商品"
                    width="350"
                    align="center">
                <template slot-scope="scope">
                    <router-link :to="'/commodityDetail/' + scope.row.shopId">
                        <el-image :src="scope.row.img.split('&&')[0]" style="width: 5em;"></el-image>
                        <div>{{ scope.row.detail }}</div>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column
                    label="单价"
                    width="150"
                    align="center">
                <template slot-scope="scope">
                    {{ scope.row.price }} 元
                </template>
            </el-table-column>
            <el-table-column
                    label="数量"
                    width="260"
                    align="center">
                <template slot-scope="scope">
                    <el-input-number v-model="scope.row.count" @change="handleChangeNum(scope)" :min="1" :max="10" label="购买数量"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column
                    label="小计"
                    width=""
                    align="center">
                <template slot-scope="scope">
                    <span style="color: red;">{{ scope.row.price * scope.row.count }} 元</span>
                </template>
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width=""
                    align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClickDelete(scope)" icon="el-icon-close" type="danger" size="small" plain circle></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="padding: 2em;border: 1px solid #eee;background: #eeeeee; margin-top: 3em;">
            <router-link to="/" style="font-size: 2em;">继续购物</router-link> |
            <span>共 <span style="font-size: 2em;">{{tableData.length}}</span> 件商品，已选择 <span style="font-size: 2em;">{{multipleSelection.length}}</span> 件</span>
            合计：<span style="font-size: 2em; color: #ff6700;">{{ totalPrice }}</span> 元
            <el-button type="danger" plain style="width: 15em;height: 3em; font-size: 1.5em;margin-left: 15em;" :disabled="show">结算</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    // cartId,
                    // shopId,
                    // img
                    // shopName
                    // price
                    // count

                ],
                multipleSelection: [],
                totalPrice: 0,
                show: true
            }
        },
        methods: {
            handleSelectionChange(val) { // 当有选中的时候就会触发这个函数
                var _this = this
                this.multipleSelection = val;
                _this.totalPrice = 0;
                val.forEach(function (item) { // 计算价格
                    _this.totalPrice = item.count * item.price + _this.totalPrice
                })
                if(_this.multipleSelection.length === 0){
                    _this.show = true
                }else{
                    _this.show = false
                }
            },
            handleClickDelete(scope) { // 删除商品
                this.$confirm('确认删除么？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => { // 确认删除
                    this.tools.requests(this.G.SERVER+"/api/v1/cart/deleteCart",{ // 修改商品的数量
                        "cartID": scope.row.cartId,
                        "userID": this.getCookie('userID'),
                        "token": this.getCookie('token')
                    },"post").then((res)=>{
                        if(res.code != 1){ // 删除失败
                            this.$message({
                                showClose: true,
                                message: '删除失败！',
                                type: 'error'
                            });
                        }else {
                            // 修改商品成功
                            this.tableData.splice(scope.$index, 1)
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    })
                }).catch(() => {
                    // 取消删除
                });
            },
            handleChangeNum(scope){ // 修改购物车的商品数量
                let index = scope.$index
                this.tools.requests(this.G.SERVER+"/api/v1/cart/changeCartNum",{ // 修改商品的数量
                    "shopID": scope.row.shopId,
                    "ID": this.getCookie('userID'),
                    "token": this.getCookie('token'),
                    "number": this.tableData[index].count
                },"post").then((res)=>{
                    if(res.code != 1){ // 修改失败
                        this.$message({
                            showClose: true,
                            message: res.msg + '！',
                            type: 'error'
                        });
                    }else {
                        // 修改商品数量成功
                    }
                })
                if(this.multipleSelection.length > 0){ // 有选中的商品
                    this.totalPrice = 0;
                    this.multipleSelection.forEach((item) => { // 修改总的价格
                        this.totalPrice = parseInt(item.count * item.price) + this.totalPrice
                    })
                }
            }
        },
        mounted() {
            // 获取购物车
            this.tools.requests(this.G.SERVER+"/api/v1/cart/getCart",{
                "userID": this.getCookie('userID'),
                "token": this.getCookie('token')
            },"get").then((res)=>{
                if(res.code != 1){ // 获取失败
                    this.$message({
                        showClose: true,
                        message: '获取失败！',
                        type: 'error'
                    });
                }else {
                    this.tableData = res.datas;
                }
            })
        }
    }
</script>

<style scoped>
    .mainDiv {
        width: 60%;
        margin: auto;
    }
</style>
