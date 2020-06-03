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
                    <router-link to="/commodityDetail">
                        <el-image :src="scope.row.imgUrl" style="width: 5em;"></el-image>
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
                    <el-input-number v-model="scope.row.num" @change="handleChangeNum(scope)" :min="1" :max="10" label="购买数量"></el-input-number>
                </template>
            </el-table-column>
            <el-table-column
                    label="小计"
                    width=""
                    align="center">
                <template slot-scope="scope">
                    <span style="color: red;">{{ scope.row.totalPrice }} 元</span>
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
            <router-link to="/">继续购物</router-link> |
            <span>共 {{tableData.length}} 件商品，已选择 {{multipleSelection.length}} 件</span>
            合计：{{ totalPrice }} 元
            <el-button type="primary" plain style="width: 10em;height: 3em; font-size: 1.5em;" :disabled="show">购买</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg',
                    detail: '小米10 Pro 全网通版 8GB+256GB 星空蓝',
                    price: 4999,
                    num: 1,
                    totalPrice: 4999,
                }, {
                    imgUrl: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1557804685.13891176.jpg?thumb=1&w=80&h=80',
                    detail: '米家驱蚊器基础版 3个装 白色',
                    price: 99,
                    num: 1,
                    totalPrice: 99,
                }],
                multipleSelection: [],
                totalPrice: 0,
                show: true
            }
        },

        methods: {
            handleSelectionChange(val) { // 当有选中的时候就会触发这个函数
                console.log("选中", val)
                var _this = this
                this.multipleSelection = val;
                val.forEach(function (item) {
                    _this.totalPrice = item.totalPrice + _this.totalPrice
                })
                if(_this.multipleSelection.length === 0){
                    _this.show = true
                }else{
                    _this.show = false
                }
            },
            handleClickDelete(scope) { // 删除商品
                console.log("删除操作", scope)
                this.$confirm('确认删除么？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => { // 确认删除
                    this.tableData.splice(scope.$index, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    // 取消删除
                });
            },
            handleChangeNum(scope){
                console.log("改变数量", scope.$index)
                let index = scope.$index
                this.tableData[index].totalPrice = this.tableData[index].num * this.tableData[index].price
            }
        }
    }
</script>

<style scoped>
    .mainDiv {
        width: 60%;
        margin: auto;
    }
</style>
