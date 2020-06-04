<template>
    <div class="app-body">
        <div class="page-main channel-page">
            <div class="block">
                <el-carousel v-show="slideShowList" trigger="click" height="40em" indicator-position="none" arrow="never" direction="horizontal">
                    <el-carousel-item v-for="(item, index) in slideShowList" :key="index">
                        <el-image :src="item" style=""></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div data-v-0d371b82="" class="section">
                <div data-v-0d371b82="" class="components-list-box">
                    <div data-v-0747c611="" class="channel-lable">
                        <div data-v-0747c611="" class="channel-title">
                            <h2 data-v-0747c611="">{{ commodityTitle }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-0d371b82=""
                 class="section">
                <div data-v-0d371b82=""
                     class="components-list-box">
                    <div data-v-29f30695=""
                         class="channel-product channel-product-two4">
                        <div data-v-29f30695=""
                             class="row">
                            <div data-v-29f30695=""
                                 v-for="(item) of commodityList"
                                 :key="item.id"
                                 class="span10 product-cell shadow">
                                <div data-v-29f30695=""
                                     class="figure">
                                    <router-link :to="'/commodityDetail/' + item.id">
                                        <a data-v-29f30695=""
                                           href=""
                                           target="_blank"
                                           class="exposure"
                                           onclick="">
                                            <img data-v-29f30695=""
                                                 :data-src="item.img.split('&&')[0]"
                                                 :src="item.img.split('&&')[0]"
                                                 lazy="loaded"
                                                 style="background-color: rgb(245, 245, 245);">
                                        </a>
                                    </router-link>
                                </div>
                                <h3 data-v-29f30695=""
                                    class="title">
                                    <router-link :to="'/commodityDetail/' + item.id">
                                        <a data-v-29f30695=""
                                           href=""
                                           target="_blank"
                                           class="exposure"
                                           data-stat-id="3def1bb97ceb2075"
                                           onclick="">{{ item.name }}
                                        </a>
                                    </router-link>
                                </h3>
                                <p data-v-29f30695=""
                                   style="width: 20em;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"
                                   class="desc">{{ item.other }}</p>
                                <p data-v-29f30695=""
                                   class="price">
                                    <strong data-v-29f30695="">{{ item.price }}</strong>元<span data-v-29f30695="">起</span>
                                    <del data-v-29f30695="" style="text-decoration: line-through;">{{ item.oldPrice }}元</del>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "CommodityList",
        data(){
            return {
                slideShowList: [
                    // 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd23277ab720424d3eb9bfce439bca2a.jpg?w=5120&h=1240&bg=FCFCFC',
                    // 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd23277ab720424d3eb9bfce439bca2a.jpg?w=5120&h=1240&bg=FCFCFC'
                ],
                commodityTitle: '产品名字',
                commodityList: [
                    // {
                    //     id: 1, // 商品id
                    //     img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f3a01fbab162952324826197f9ecd76.jpg', // 封面图片
                    //     name: '小米10', // 名字
                    //     description: '骁龙865/1亿像素相机', // 详细描述
                    //     other: //简略描述
                    //     price: '3799', // 现价
                    //     oldPrice: '3999' // 原价
                    // }
                ]
            }
        },
        watch:{
            $route(){
                this.getShop()
            }
        },
        mounted() {
            this.getShop()
        },
        methods:{
            getShop(){
                // 获取某种类型的商品
                this.tools.requests(this.G.SERVER+"/api/v1/shop/getShopList",{"type": this.$route.params.id},"get").then((res)=>{
                    if(res.code !== 1){ // 获取失败
                        this.$message({
                            showClose: true,
                            message: '获取失败！',
                            type: 'error'
                        });
                    }else {
                        this.commodityList = res.datas
                        if(res.data===""){
                            this.slideShowList=null
                            return
                        }
                        this.slideShowList = res.data.split("&&")
                        if(this.slideShowList.length < 2){
                            this.slideShowList.push(this.slideShowList[0])
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>
    body {
        font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
        color: #333;
        background-color: #fff;
        min-width: 1226px;
    }
    .channel-title h2[data-v-0747c611] {
        line-height: 64px;
        margin: 0;
        padding-top: 4px;
        color: #333;
        font-size: 24px;
        font-weight: 400;
    }
    .channel-lable[data-v-0747c611] {
        width: 1226px;
        margin: 0 auto;
    }
    .channel-title[data-v-0747c611] {
        position: relative;
        z-index: 5;
    }
    .channel-page {
        padding-bottom: 80px;
    }
    .page-main {
        /*background: whitesmoke;*/
        display: grid;
    }
    .channel-product-two4[data-v-29f30695] {
        height: 482px;
        width: 1226px;
        margin: 0 auto;
    }
    .channel-product-two4 .row[data-v-29f30695] {
        height: 100%;
    }
    .row {
        margin-left: -14px;
    }
    .channel-product-two4 .product-cell[data-v-29f30695] {
        position: relative;
        height: 100%;
        background: #fff;
        text-align: left;
        overflow: hidden;
    }
    .channel-page .shadow:hover {
        -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
        box-shadow: 0 15px 30px rgba(0,0,0,.1);
        -webkit-transform: translate3d(0,-5px,0);
        transform: translate3d(0,-5px,0);
        z-index: 3;
    }
    .channel-page .shadow {
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
    }
    .span10 {
        width: 606px;
    }
    .span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12, .span13, .span14, .span15, .span16, .span17, .span18, .span19, .span20 {
        float: left;
        margin-left: 14px;
        min-height: 1px;
    }
    .channel-product-two4 .figure[data-v-29f30695] {
        width: 100%;
        height: 358px;
    }
    .channel-product-two4 .product-cell[data-v-29f30695] {
        position: relative;
        height: 100%;
        background: #fff;
        text-align: left;
        overflow: hidden;
    }
    a, a:hover {
        text-decoration: none;
    }
    a {
        color: #757575;
    }
    a {
        background-color: rgba(0,0,0,0);
    }
    .channel-product-two4 .product-cell[data-v-29f30695] {
        position: relative;
        height: 100%;
        background: #fff;
        text-align: left;
        overflow: hidden;
    }
    .channel-product-two4 .figure img[data-v-29f30695] {
        display: block;
        width: 100%;
        height: 100%;
    }
    .channel-product-two4 .title[data-v-29f30695] {
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 26px;
        margin: 38px 0 0 48px;
    }
    .channel-product-two4 h3[data-v-29f30695] {
        font-size: 1.17em;
    }
    .channel-product-two4 .title a[data-v-29f30695] {
        color: #333;
        color: rgba(51,51,51,.9);
        font-size: 24px;
    }
    a, a:hover {
        text-decoration: none;
    }
    a {
        color: #757575;
    }
    a {
        background-color: rgba(0,0,0,0);
    }
    .channel-product-two4 .desc[data-v-29f30695] {
        line-height: 18px;
        margin: 3px 0 0 48px;
        color: #333;
        color: rgba(51,51,51,.7);
        font-size: 14px;
    }
    .channel-product-two4 .price[data-v-29f30695] {
        line-height: 30px;
        color: #ff6700;
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        right: 48px;
        bottom: 30px;
        margin: 0;
    }
    .channel-product-two4 .price strong[data-v-29f30695] {
        font-weight: 400;
        font-size: 30px;
    }
    b, strong {
        font-weight: 700;
    }
    .channel-product-two4 .price del[data-v-29f30695] {
        color: #ccc;
        color: rgba(51,51,51,.6);
    }
    .channel-product-two4 .product-cell[data-v-29f30695] {
        border-radius: 2%;
        /*margin: 1em;*/
        position: relative;
        height: 100%;
        background: #fff;
        text-align: left;
        overflow: hidden;
    }
    .channel-page .shadow:hover {
        -webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
        box-shadow: 0 15px 30px rgba(0,0,0,.1);
        -webkit-transform: translate3d(0,-5px,0);
        transform: translate3d(0,-5px,0);
        z-index: 3;
    }
    .channel-page .shadow {
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
    }
    .span10 {
        width: 606px;
    }
    .channel-product-two4 .figure[data-v-29f30695] {
        width: 100%;
        height: 358px;
    }
    .channel-product-two4 .figure img[data-v-29f30695] {
        display: block;
        width: auto;
        height: 100%;
    }
    .channel-product-two4 .title[data-v-29f30695] {
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 26px;
        margin: 38px 0 0 48px;
    }
    .channel-product-two4 h3[data-v-29f30695] {
        font-size: 1.17em;
    }
    .channel-product-two4 .title a[data-v-29f30695] {
        color: #333;
        color: rgba(51,51,51,.9);
        font-size: 24px;
    }
    .channel-product-two4 .desc[data-v-29f30695] {
        line-height: 18px;
        margin: 3px 0 0 48px;
        color: #333;
        color: rgba(51,51,51,.7);
        font-size: 14px;
    }
    .channel-product-two4 .price[data-v-29f30695] {
        line-height: 30px;
        color: #ff6700;
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        right: 48px;
        bottom: 30px;
        margin: 0;
    }
    .channel-product-two4 .price strong[data-v-29f30695] {
        font-weight: 400;
        font-size: 30px;
    }
</style>
