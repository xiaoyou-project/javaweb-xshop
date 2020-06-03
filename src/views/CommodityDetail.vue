<template>
    <div class="mainDiv">
        <el-container>
            <el-aside style="width: 45em; margin-top: -5em;">
                <el-carousel trigger="click" :interval="3000" height="40em">
                    <el-carousel-item v-for="(item, index) in imgList" :key="index">
                        <el-image :src="item" style=""></el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-aside>
            <el-container style="text-align: left;">
                <el-header style="width: 40em;">
                    <h2>{{name}}</h2>
                </el-header>
                <el-main style="width: 40em;">
                    <div v-html="commodityReferral">
                    </div>
                    <div style="color: red; font-size: 1.5em;margin-top: 1em;">
                        {{ price }} 元
                    </div>
                    <hr style="border: 1px solid #eee;"/>
                    <div style="padding: 2em;border: 1px solid #eee;background: #eeeeee;">
                        <i class="el-icon-location-information"></i>
                        <span> 北京 北京市 海淀区 清河街道 </span>
                        <el-link type="primary"><router-link to=""> 修改地址</router-link></el-link>
                    </div>
                    <div style="padding: 2em;border: 1px solid #eee;background: #eeeeee; margin-top: 3em;">
                        <div style="font-size: 1em;">
                            <span>{{ commoditySimpleDetail + other }} </span>
                            <span style="position: absolute;right: 50em;">
                                <span> {{price}}元 </span>
                                <span style="text-decoration: line-through;"> {{old_price}}元 </span>
                            </span>
                        </div>
                        <div style="color: red; font-size: 1.5em;margin-top: 1em;">
                            总共：{{ price }} 元
                        </div>
                    </div>
                    <div style="margin-top: 1em;text-align: center">
                        <el-button type="primary" @click="addCommodity" plain style="width: 10em;height: 3em; font-size: 1.5em;">加入购物车</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "CommodityDetail",
        data() {
            return {
                name: '',
                imgList: [ // 轮播图的图片
                ],
                commodityReferral: '',
                price: 66,
                old_price: 66,
                commoditySimpleDetail: '', // 简略描述信息
                other: '' // 其它描述
            }
        },
        methods: {
            addCommodity(){
                // 加入购物车
                this.tools.requests(this.G.SERVER+"/api/v1/cart/addCart",{
                    "shopID": parseInt(this.$route.params.id),
                    "ID": this.getCookie('userID'),
                    "token": this.getCookie('token'),
                    "number": 1
                },"post").then((res)=>{
                    if(res.code !== 1){ // 获取失败
                        this.$message({
                            showClose: true,
                            message: res.msg + '！',
                            type: 'error'
                        });
                    }else {
                        this.$alert('加入购物车成功！！！', '提示', {
                            confirmButtonText: '确定',
                            callback: () => {
                                this.$router.push({path: '/shoppingCart'})
                            }
                        });
                    }
                })
            }
        },
        mounted() {
            // 获取商品详情信息
            this.tools.requests(this.G.SERVER+"/api/v1/shop/getInfo",{"shopID": this.$route.params.id},"get").then((res)=>{
                if(res.code != 1){ // 获取失败
                    this.$message({
                        showClose: true,
                        message: res.msg + '！',
                        type: 'error'
                    });
                }else {
                    this.imgList = res.data.img.split("&&")
                    this.price = res.data.price
                    this.old_price = res.data.oldPrice
                    this.commodityReferral = res.data.description
                    this.commoditySimpleDetail = res.data.name
                    this.name = res.data.name
                    this.other = res.data.other
                }
            })
        }
    }
</script>

<style scoped>
    .el-aside {
        width: 45em;
        height: 40em;
        margin-left: 5em;
    }

</style>
