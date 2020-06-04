<template>
    <div>
        <div id="big_banner_wrap">
            <ul id="banner_menu_wrap">
                <li v-for="(item,index) in sideLink" :key="index" class="active">
                    <router-link :to="item.url">{{item.name}}</router-link>
                    <a class="banner_menu_i">&gt;</a>
                    <div class="banner_menu_content" style="width:990px;top:0">
                        <ul class="banner_menu_content_ul">
                            <li v-for="(item2,index2) in item.child" :key="index2"><a :href="item2.url"><img class="shop-img" :src="item2.img"><span>{{item2.name}}</span></a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div id="big_banner_pic_wrap">
                <el-carousel>
                    <el-carousel-item v-for="(item,index) in sideImg" :key="index">
                        <img :src="item.img">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div id="big_banner_change_wrap">
                <div id="big_banner_change_prev"></div>
                <div id="big_banner_change_next"></div>
            </div>
        </div>
        <div id="head_other_wrap">
            <div id="head_other">
                <ul>
                    <li v-for="(item,index) in functionImg"  :key="index">
                        <a class="function-item" href="javascript:void(0)">
                            <img class="function-img" :src="item.img">
                            <p class="function-text">{{ item.name }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-for="(item,index) in functionImgSide" :key="index" class="head_other_ad"><a :href="item.url"><img :src="item.img"></a></div>
        </div>
        <div class="page-main home-main">
            <div class="container">
                <div class="home-flashsale xm-plain-box">
                    <div class="box-hd">
                        <h2 class="title">小米闪购</h2>
                    </div>
                    <div class="box-bd clearfix">
                        <div class="row">
                            <div class="flashsale-countdown rainbow-item-4 span4">
                                <div class="round">14:00 场</div>
                                <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
                                        bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
                                        bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
                                        eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
                                        MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
                                        dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
                                        dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
                                        IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
                                        ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
                                        cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
                                        ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
                                        bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
                                        OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
                                        Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
                                        OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
                                        cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
                                        cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
                                        S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
                                        jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
                                        JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
                                        ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
                                        KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
                                        bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
                                        xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
                                        kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
                                        Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
                                        cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
                                        7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=" alt="小米闪购">
                                <div class="desc">距离结束还有</div>
                                <div class="countdown clearfix">
                                    <span>06</span><i>:</i><span>{{minute}}</span><i>:</i><span>{{second}}</span>
                                </div>
                            </div>
                            <div id="J_flashSaleList" class="span16 flashsale-list swiper-container swiper-no-swiping swiper-container-initialized swiper-container-horizontal">
                                <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                    <li v-for="(item,index) in fastShopList" :key="index" class="swiper-slide rainbow-item-103" style="width: 234px; margin-right: 14px;">
                                        <router-link :to="item.url">
                                            <div class="content">
                                                <div class="thumb">
                                                    <img :alt="item.name" width="160" height="160" :src="item.img">
                                                </div>
                                                <h3 class="title">{{ item.name }}</h3>
                                                <p class="desc">{{ item.dec }}</p>
                                                <p class="price">
                                                    <span>{{item.price}}</span>元<del>{{item.oldPrice}}元</del>
                                                </p>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="swiper-controls">
                                <span class="swiper-flashsale-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true">
                                    <v-icon name="chevron-left"/>
                                </span>
                                <span class="swiper-flashsale-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false">
                                   <v-icon name="chevron-right"/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main_show_box">
                    <div id="floor_1">
                        <div id="floor_head">
                            <span class="title_span">手机</span>
                        </div>
                    </div>
                    <div class="floor_goods_wrap">
                        <ul>
                            <li class="floor_goods_wrap_li">
                                <router-link to="/commodityDetail/10889"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90"></router-link>
                            </li>
                            <li v-for="(item,index) in phoneShop" :key="index" class="floor_goods_wrap_li">
                                <router-link :to="item.url">
                                    <a class="floor_goods_img"><img :src="item.img"></a>
                                    <a class="floor_goods_tit">{{item.name}}</a>
                                    <a class="floor_goods_txt">{{item.dec}}</a>
                                    <a class="floor_goods_price">{{item.price}}元</a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from  'jquery'
    import Vue from 'vue'
    export default {
        name: "index",
        data(){
            const sideImg = [
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da2ef0df54559d9126623b3773ce4480.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2604b964ec7d0c3f421ec47079f80f85.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f114559249447f04541a88bc654ee3a9.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a87dbabcd50db7bfcb8b980e1f5b543a.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a165d5dbb9edbffc90673c0e0262205.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3643eeb6c07ca646f2184895bbd6bf0d.jpg?thumb=1&w=1226&h=460&f=webp&q=90",url:""},
            ]
            const functionImg = [
                {name:"小米秒杀",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48",url:"https://www.mi.com/seckill"},
                {name:"企业团购",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48",url:"https://qiye.mi.com/"},
                {name:"F码通道",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48",url:"https://www.mi.com/order/fcode"},
                {name:"米粉卡",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48",url:"https://www.mi.com/mimobile"},
                {name:"以旧换新",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48",url:"https://huanxin.mi.com/"},
                {name:"话费充值",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48",url:"https://recharge.10046.mi.com/"}
            ]
            const functionImgSide = [
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340",url:"/commodityDetail/10000181"},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340",url:"/commodityDetail/10000203"},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340",url:"/commodityDetail/10000158"}
            ]
            const fastShopList = [
                {name:"小米旅行箱 24英寸 灰色 24寸",dec:"一款坚固的旅行箱伴您左右",url:"/commodityDetail/9561",price:"349",oldPrice:"399",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553778518.87814930.jpg?thumb=1&w=200&h=200"},
                {name:"米兔故事机 mini 蓝牙版 蓝色",dec:"陪伴宝宝时时刻刻",url:"/commodityDetail/9283",price:"129",oldPrice:"149",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1548833307.52655717.jpg?thumb=1&w=200&h=200"},
                {name:"米兔点读笔 蓝色",dec:"一点即读，让美好发声",url:"/commodityDetail/9834",price:"169",oldPrice:"199",img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ecfb7d29b51371785de8b83d05b6428.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"小米多功能都市休闲胸包 深灰",dec:"装下你出行的所有需求",url:"/commodityDetail/3460",price:"59",oldPrice:"69",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1t4AgBmWv1RXrhCrK.jpg?thumb=1&w=200&h=200"},
            ]
            const phoneShop = [
                {name:"小米10 青春版 5G",url:"/commodityDetail/10000224",dec:"50倍潜望式变焦 / 轻薄5G手机",price:"2099",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"小米10",url:"/commodityDetail/10000214",dec:"骁龙865/1亿像素相机",price:"3799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:" Redmi K30 Pro",url:"/commodityDetail/10000223",dec:"双模5G，骁龙865，弹出全面屏",price:"2699",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:" Redmi K30 Pro 变焦版",url:"/commodityDetail/11763",dec:"双模5G，骁龙865，弹出全面屏",price:"3799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"小米10 Pro",url:"/commodityDetail/10000213",dec:"骁龙865 / 50倍变焦",price:"4999",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"Redmi K30",url:"/commodityDetail/10000203",dec:"120Hz流速屏，全速热爱",price:"1499",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"Redmi K30 5G",url:"/commodityDetail/10000204",dec:"双模5G，120Hz流速屏",price:"1899",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
                {name:"Redmi 8",url:"/commodityDetail/10000190",dec:"5000mAh超长续航",price:"799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90"}
            ]
            return {
                sideLink: null,
                sideImg,
                functionImg,
                functionImgSide,
                fastShopList,
                phoneShop,
                minute:60,
                second:0
            }
        },
        mounted() {
            //设置倒计时
            let that = this
            let total = 3600
            setInterval( ()=>{
                total--;
                that.minute = Math.floor(total/60)
                that.second = Math.floor(total%60)
            },1000)
            // 获取所有商品
            this.tools.requests(this.G.SERVER+"/api/v1/shop/getAllShop",{},"get").then((response)=>{
                if(response!=null && response.code===1){
                    const data=response.datas
                    const links = [
                        {name:"手机 电话卡",url:"/commodityList/1?name=手机 电话卡",child:[]},
                        {name:"电视 盒子",url:"/commodityList/2?name=电视 盒子",child:[]},
                        {name:"笔记本 显示器 平板",url:"/commodityList/3?name=笔记本 显示器 平板",child:[]},
                        {name:"家电 插线板",url:"/commodityList/4?name=家电 插线板",child:[]},
                        {name:"出行",url:"/commodityList/5?name=出行",child:[]},
                        {name:"智能 路由器",url:"/commodityList/6?name=智能 路由器",child:[]},
                        {name:"电源 配件",url:"/commodityList/7?name=电源 配件",child:[]},
                        {name:"健康 儿童",url:"/commodityList/8?name=健康 儿童",child:[]},
                        {name:"耳机 音响",url:"/commodityList/9?name=耳机 音响",child:[]},
                        {name:"生活 箱包",url:"/commodityList/10?name=生活 箱包",child:[]}
                    ]
                    for(let index in response.datas){
                        let img = data[index].img
                        img = img.split("&&")[0]
                        const link={
                            name: data[index].name,
                            img: img,
                            url: "/commodityDetail/"+data[index].id
                        }
                        if(links[data[index].sort-1].child.length<24){
                            links[data[index].sort-1].child.push(link)
                        }

                    }
                    Vue.set(this,"sideLink",links)
                    setTimeout(function () {
                        //菜单栏的显示
                        $("#banner_menu_wrap").children().hover(function(){
                            $(this).css("background","#ff6700");
                            $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
                        },function(){
                            $(this).css("background","none");
                            $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
                        })
                    },500)
                }
            })
            $(".floor_goods_wrap_li").hover(function () {
                $(this).css({"top":"-5px",
                    "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
                });
            },function(){
                $(this).css({"top":"0px",
                    "box-shadow":"none"
                });
            })
        }
    }
</script>

<style>
    .el-carousel__container{
        height: 460px!important;
    }
</style>

<style src="../assets/css/xiaomi.css" scoped />

<style scoped>
    .home-main {
        padding-top: 4px;
        padding-bottom: 12px;
        margin-top: 30px;
    }
    .page-main {
        background: #f5f5f5;
    }
    .container {
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
    }
    /*小米闪购*/
    .home-flashsale {
        margin-bottom: 22px;
        position: relative;
    }
    .xm-plain-box .box-hd {
        position: relative;
        height: 58px;
        -webkit-font-smoothing: antialiased;
    }
    .xm-plain-box .box-hd .title {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
    }
    .row {
        margin-left: -14px;
        display: flex;
    }
    .home-flashsale .rainbow-item-4 {
        border-top-color: #e53935;
    }

    .home-flashsale .flashsale-countdown {
        height: 300px;
        padding-top: 39px;
        border-top-width: 1px;
        border-top-style: solid;
        background: #f1eded;
        text-align: center;
    }
    .span4 {
        width: 234px;
    }
    .home-flashsale .flashsale-countdown .round {
        font-size: 21px;
        color: #ef3a3b;
        padding-top: 15px;
    }
    .home-flashsale .flashsale-countdown img {
         margin: 25px auto;
    }
    .home-flashsale .flashsale-countdown .desc {
        color: rgba(0,0,0,.54);
        font-size: 15px;
    }
    .home-flashsale .flashsale-countdown .countdown {
        width: 168px;
        margin: 28px auto 0;
    }
    .home-flashsale .flashsale-countdown .countdown span {
        width: 46px;
        height: 46px;
        background: #605751;
        color: #fff;
        font-size: 24px;
        line-height: 46px;
        float: left;
    }
    .home-flashsale .flashsale-countdown .countdown i {
        width: 15px;
        float: left;
        height: 46px;
        line-height: 46px;
        color: #605751;
        font-size: 28px;
        font-style: normal;
    }
    .home-flashsale .flashsale-list {
        float: left;
    }
    .span16 {
        width: 978px;
    }
    .swiper-container {
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
    }
    .home-flashsale .flashsale-list ul {
        margin: 0;
        padding: 0;
        height: 340px;
        display: flex;
    }
    .home-flashsale .flashsale-list li {
        width: 234px;
        margin-right: 14px;
        border-top-width: 1px;
        border-top-style: solid;
        text-align: center;
        background: #fff;
        -webkit-transition: all .6s;
        transition: all .6s;
        position: relative;
        list-style: none;
    }
    .home-flashsale .flashsale-list li a {
        display: block;
        height: 300px;
        padding-top: 39px;
        position: relative;
    }
    .home-flashsale .flashsale-list .thumb {
        display: block;
        width: 160px;
        margin: 0 auto 22px;
    }
    .home-flashsale .flashsale-list .thumb img {
        width: 160px;
        height: 160px;
    }
    .home-flashsale .flashsale-list .title {
        margin: 0 20px 3px;
        font-size: 14px;
        font-weight: 400;
        text-overflow: ellipsis;
        color: #212121;
        overflow: hidden;
        white-space: nowrap;
    }
    .home-flashsale .flashsale-list .desc {
        height: 18px;
        margin: 0 20px 12px;
        font-size: 12px;
        text-overflow: ellipsis;
        color: #b0b0b0;
        overflow: hidden;
        white-space: nowrap;
    }
    .home-flashsale .flashsale-list .price {
        margin: 0;
        color: #ff6709;
    }
    .home-flashsale .flashsale-list .price del {
        color: #b0b0b0;
    }
    .swiper-container .swiper-notification {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
    }
    .home-flashsale .swiper-controls {
        position: absolute;
        right: 0;
        top: 24px;
    }
    .home-flashsale .swiper-flashsale-next, .home-flashsale .swiper-flashsale-prev {
        display: inline-block;
        width: 24px;
        height: 16px;
        padding: 3px 5px;
        margin-left: -1px;
        border: 1px solid #e0e0e0;
        font-size: 16px;
        line-height: 16px;
        -webkit-transition: color .5s;
        transition: color .5s;
        color: #b0b0b0;
        text-align: center;
        cursor: pointer;
    }
    .home-flashsale .swiper-flashsale-prev.swiper-button-disabled {
        color: #e0e0e0;
        cursor: default;
    }

    .home-flashsale .flashsale-list li a:hover{
        text-decoration: none;
    }



    /*其他内容*/
    .shop-img{
        width: 40px;
        height: 40px;
    }
    .function-img {
        width: 24px;
        height: 24px;
        margin-top: 15px;
    }
    p.function-text {
        color: #ffff;
    }
    .head_other_ad img {
        display: block;
        width: 316px;
        height: 170px;
    }
</style>
