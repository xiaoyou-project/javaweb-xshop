<template>
    <div class="mainDiv">
        <el-container style="margin-top: 3em;">
            <el-aside style="width: 400px;">
                <el-carousel trigger="click" :interval="3000">
                    <el-carousel-item v-for="(item, index) in imgList" :key="index">
                        <el-image :src="item" style=""></el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-aside>
            <div style="text-align: left; margin-left: 3em;">
                <el-header style="width: 40em;">
                    <h2 style="font-size: 2em; font-weight: bold;">{{name}}</h2>
                </el-header>
                <el-main style="width: 40em;">
                    <div v-html="commodityReferral" style="line-height: 1.5em;font-weight:450">
                    </div>
                    <div style="color: red; font-size: 1.5em;margin-top: 1em;">
                        {{ price }} 元
                    </div>
                    <el-divider></el-divider>
                    <div style="padding: 2em;border: 1px solid #eee;background: #eeeeee; margin-top: 3em;font-size: 1.2em;">
                        <i class="el-icon-location-information"></i>
                        <span> {{site}} </span>
                        <el-link v-show="isLogin" type="danger" @click="changeSite=true">修改</el-link>
                    </div>
                    <div style="padding: 2em;border: 1px solid #eee;background: #eeeeee; margin-top: 1.5em;">
                        <div style="font-size: 1em;">
                            <span style="color: black;">{{ commoditySimpleDetail + other }} </span>
                            <span style="position: absolute;margin-top: 4em;color:#616161;">
                                <span> {{price}}元 </span>
                                <span style="text-decoration: line-through;"> {{old_price}}元 </span>
                            </span>
                        </div>
                        <div style="color: red; font-size: 1.5em;margin-top: 1em;">
                            总共：{{ price }} 元
                        </div>
                    </div>
                    <div class="btn-box">
                        <div class="sale-btn">
                            <a @click="addCommodity" class="btn btn-primary">加入购物车</a>
                        </div>
                        <div class="favorite-btn">
                            <a @click="love" class="btn-gray btn-like"><v-icon style="margin-right: 2px" name="heart"/>喜欢</a>
                        </div>
                    </div>
                </el-main>
            </div>
        </el-container>
        <el-dialog
                title="修改地址"
                :visible.sync="changeSite"
                width="400px">
            <el-form ref="form" label-width="80px">
                <el-form-item label="地址">
                    <el-input v-model="site"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="changeSite = false">取 消</el-button>
            <el-button type="primary" @click="changeSiteInfo">修改地址</el-button>
          </span>
        </el-dialog>
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
                other: '', // 其它描述,
                site: '中国', // 用户地址
                isLogin:false,
                info:null,
                changeSite:false
            }
        },
        methods: {
            addCommodity(){
                if(!this.isLogin){
                    this.$message.error("请先登录!")
                    return
                }
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
                        });
                    }
                })
            },
            love(){
              this.$message.success("别点了，这个功能还没开发呢！")
            },
            initInfom(){
                // 获取商品详情信息
                this.tools.requests(this.G.SERVER+"/api/v1/shop/getInfo",{"shopID": this.$route.params.id},"get").then((res)=>{
                    if(res.code !== 1){ // 获取失败
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
                });
                //获取用户地址
                this.tools.requests(this.G.SERVER+"/api/v1/user/getInfo",{userID: this.getCookie("userID"),token: this.getCookie("token")},"get").then((response)=> {
                    if(response!=null && response.code===1){
                        this.isLogin = true
                        this.info = response.data
                        this.site = response.data.site
                    }else{
                        this.isLogin=false
                    }
                })
            },
            changeSiteInfo(){
                const data = {
                    ID:this.getCookie("userID"),
                    token:this.getCookie("token"),
                    nickname: this.info.nickname,
                    sign: this.info.sign,
                    avatar: this.info.avatar,
                    site: this.site
                }
                this.tools.requests(this.G.SERVER+"/api/v1/user/changeInfo",data,"post").then((response)=> {
                    if(response!=null && response.code===1){
                        this.changeSite=false
                        this.$message.success("更新成功")
                        this.initInfom()
                    }else{
                        this.$message.error("更新失败")
                    }
                })
            }
        },
        mounted() {
            this.initInfom();
        },
        watch:{
            $route(){
                this.initInfom();
            }
        }
    }
</script>

<style>
    .mainDiv .el-container{
        display: flex;
        justify-content: center;
    }
</style>


<style scoped>
    .btn-box{
        margin: 10px 0 20px 0;
    }
    .sale-btn{
        display: inline-block;
        margin-right: 10px;
    }
    .sale-btn .btn{
        width: 298px;
        height: 52px;
        line-height: 52px;
        font-size: 16px;
    }
    .btn-primary {
        background: #ff6700;
        border-color: #ff6700;
        color: #fff;
    }
    .favorite-btn{
        display: inline-block;
        vertical-align: top;
    }
    .btn {
        display: inline-block;
        width: 158px;
        height: 38px;
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        -webkit-transition: all .4s;
        transition: all .4s;
    }
    .btn-like{
        width: 140px;
        height: 52px;
        line-height: 52px;
        padding: 0;
        margin: 0;
        border: 1px solid #b0b0b0;
        text-align: center;
        cursor: pointer;
        -webkit-transition: all .4s;
        transition: all .4s;
        font-size: 16px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-gray {
        background: #b0b0b0;
        border-color: #b0b0b0;
        color: #fff;
    }
    .sale-btn:hover a{
        background-color: #f25807;
        border-color: #f25807;
        color: #fff;
    }

    .el-aside {
        width: 45em;
        height: 40em;
        margin-left: 5em;
    }

</style>
