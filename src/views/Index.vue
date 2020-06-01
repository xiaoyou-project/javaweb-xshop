<template>
    <div>
        <div id="main_head_box">
            <div id="menu_wrap">
                <div id="menu_logo">
                    <img style="width:45px;height:45px" src="img/logo.png">
                    <img class="img-top-ad" src="img/top.gif">
                </div>
                <div id="menu_nav">
                    <ul>
                        <li v-for="item in topSecondLink" :key="item" class="menu_li"><a :href="item.url">{{item.name}}</a></li>
                    </ul>
                </div>
                <div id="find_wrap">
                    <div id="find_bar">
                        <input type="text" id="find_input">
                    </div>
                    <div id="find_but">GO</div>
                </div>
            </div>
        </div>
        <div id="big_banner_wrap">
            <ul id="banner_menu_wrap">
                <li v-for="item in sideLink" :key="item" class="active">
                    <a>{{item.name}}</a>
                    <a class="banner_menu_i">&gt;</a>
                    <div class="banner_menu_content" style="width:990px;top:0">
                        <ul class="banner_menu_content_ul">
                            <li v-for="item2 in item.child" :key="item2"><a :href="item2.url"><img class="shop-img" :src="item2.img"><span>{{item2.name}}</span></a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div id="big_banner_pic_wrap">
                <ul id="big_banner_pic">
                    <li v-for="item in sideImg" :key="item"><a :href="item.url"><img :src="item.img"></a></li>
                </ul>
            </div>
            <div id="big_banner_change_wrap">
                <div id="big_banner_change_prev"></div>
                <div id="big_banner_change_next"></div>
            </div>
        </div>
        <div id="head_other_wrap">
            <div id="head_other">
                <ul>
                    <li v-for="item in functionImg"  :key="item">
                        <a class="function-item" :href="item.url">
                            <img class="function-img" :src="item.img">
                            <p class="function-text">{{ item.name }}</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-for="item in functionImgSide" :key="item" class="head_other_ad"><a :href="item.url"><img :src="item.img"></a></div>
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
                                    <span>01</span><i>:</i><span>57</span><i>:</i><span>18</span>
                                </div>
                            </div>
                            <div id="J_flashSaleList" class="span16 flashsale-list swiper-container swiper-no-swiping swiper-container-initialized swiper-container-horizontal">
                                <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                    <li v-for="item in fastShopList" :key="item" class="swiper-slide rainbow-item-103" style="width: 234px; margin-right: 14px;">
                                        <a :href="item.url" target="_blank">
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
                                        </a>
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
                                <a><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90"></a>
                            </li>
                            <li v-for="item in phoneShop" :key="item" class="floor_goods_wrap_li">
                                <a class="floor_goods_img"><img :src="item.img"></a>
                                <a class="floor_goods_tit">{{item.name}}</a>
                                <a class="floor_goods_txt">{{item.dec}}</a>
                                <a class="floor_goods_price">{{item.price}}元</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            const topSecondLink = [
                {name: "小米手机",url: "https://xiaoyou66.com"},
                {name: "红米手机",url: "https://xiaoyou66.com"},
                {name: "小米平板",url: "https://xiaoyou66.com"},
                {name: "小米电视",url: "https://xiaoyou66.com"},
                {name: "小米路由器",url: "https://xiaoyou66.com"},
                {name: "小米硬件",url: "https://xiaoyou66.com"},
                {name: "服务",url: "https://xiaoyou66.com"},
                {name: "社区",url: "https://xiaoyou66.com"},
            ]
            const sideLink = [{"name":"手机 电话卡","child":[{"name":"Redmi 10X 4G","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg","url":"https://www.mi.com/buy?product_id=10000229"},{"name":"Redmi 10X 5G 系列","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg","url":"https://www.mi.com/redmi10x-5G"},{"name":"小米10 青春版","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png","url":"https://www.mi.com/mi10youth"},{"name":"Redmi K30 Pro","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92b463f8e502e5d26ac488a252a05b58.jpg","url":"https://www.mi.com/buy?product_id=10000223"},{"name":"Redmi K30 Pro 变焦版","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg","url":"https://www.mi.com/buy?product_id=10000220"},{"name":"腾讯黑鲨游戏手机3","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b0f790442e629d548f65a3f3902b7d0a.png","url":"https://www.mi.com/buy?product_id=10000217"},{"name":"腾讯黑鲨游戏手机3 Pro","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1631ce0bdbbd86918e516412f49de13.png","url":"https://www.mi.com/buy?product_id=10000218"},{"name":"小米10 Pro","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d622e8a81f81caa0f619ee750cf64501.png","url":"https://www.mi.com/buy?product_id=10000213"},{"name":"小米10","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png","url":"https://www.mi.com/buy?product_id=10000214"},{"name":"Redmi K30 4G","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2b8b609aab05d9ad184bbe5c8e8be28.jpg","url":"https://item.mi.com/product/10000203.html?selected=10000203"},{"name":"Redmi K30 5G","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a98170e97ca5df8f5ad2470a8a2d01e.jpg","url":"https://item.mi.com/product/10000204.html?cfrom=search\u0026selected=10000204\u0026pClass=p"},{"name":"Redmi 8A","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png","url":"https://www.mi.com/redmi8a"},{"name":"Redmi 8","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png","url":"https://www.mi.com/redmi8"},{"name":"小米MIX Alpha","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e8be88112405471cee2c18ae0f1f62d.png","url":"https://www.mi.com/mixalpha"},{"name":"Redmi Note 8 Pro","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cba27e53367b74271a38a4515a692816.png","url":"http://www.mi.com/redminote8pro"},{"name":"Redmi Note 8","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4534b9fd22f478314f3cbbf286b7338.png","url":"http://www.mi.com/redminote8"},{"name":"小米CC9","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b0d7d2c85734b80a1b8d1a4100c9c1f.png","url":"https://www.mi.com/micc9/"},{"name":"小米CC9美图定制版","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20e23b306f50384ab85b6658f5c963ff.jpg","url":"https://www.mi.com/xiaomicc9mt"},{"name":"小米CC9e","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d3ee15816d2ccbe922172033c3c3941.png","url":"https://www.mi.com/micc9e"},{"name":"Redmi 7A","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85d746207b997873ddfcdca0da025f78.jpg","url":"https://www.mi.com/redmi7a/"},{"name":"移动4G+专区","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c483e65040470208823a8bfb5d73c27.jpg","url":"//www.mi.com/p/5592.html"},{"name":"小米移动 电话卡","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dafced4abb82c502c087a2aca7078f48.jpg","url":"https://www.mi.com/mimobile/"},{"name":"手机上门维修","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png","url":"https://www.mi.com/buy?product_id=7532"},{"name":"云服务空间月卡","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg","url":"https://www.mi.com/buy?product_id=8262"}]},{"name":"电视 盒子","child":[{"name":"Redmi 智能电视 MAX 98\"","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg","url":"https://www.mi.com/redmitv/98/"},{"name":"小米电视5 55英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png","url":"https://www.mi.com/mitv5/55/"},{"name":"小米电视5 65英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png","url":"https://www.mi.com/mitv5/65/"},{"name":"小米电视5 75英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png","url":"https://www.mi.com/mitv5/75/"},{"name":"小米电视5 Pro 55英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/942d4f28d406f3946f0ce551c125c641.png","url":"https://www.mi.com/mitv5pro/55"},{"name":"小米电视5 Pro 65英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d096389e19ba6b79b324b7d0acfab7ca.png","url":"https://www.mi.com/mitv5pro/65"},{"name":"小米电视5 Pro 75英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png","url":"https://www.mi.com/mitv5pro/75"},{"name":"Redmi 红米电视 70英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c6f98e59f3e78eb5d959bbcff081562.jpg","url":"https://www.mi.com/redmitv/70"},{"name":"全面屏电视Pro 65英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18c9d79b3d6c6635c55ba1bb371182af.jpg","url":"https://www.mi.com/mitvall-screenpro/e65s"},{"name":"全面屏电视Pro 55英寸","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a3aff2c5e8207dafd8fc3bfad5a2e21.jpg","url":"https://www.mi.com/mitvall-screenpro/e55s"},{"name":"小米壁画电视 65英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg","url":"https://www.mi.com/arttv/"},{"name":"小米全面屏电视","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg","url":"//search.mi.com/search_%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86"},{"name":"小米电视4A 32英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/820cba6c44f7263c5fe773a7ffaf85b9.png","url":"https://www.mi.com/mitv4A/32/"},{"name":"小米电视4A 43英寸青春版","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ea8be80c82c273e167d5b282b17e9b2b.png","url":"https://www.mi.com/mitv4A/43y"},{"name":"小米电视4A 49英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a9710af2fff5548ea05950473898ef0e.jpg","url":"https://www.mi.com/mitv4A/49/"},{"name":"小米电视4A 50英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2f15dd9779865b48bfa8c8e915ac75ac.png","url":"https://www.mi.com/mitv4A/50"},{"name":"小米电视4A 55英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37ce1615e1e8fcbbda2b3f37c09ec676.png","url":"https://www.mi.com/mitv4A/55/"},{"name":"小米电视4A 58英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11e4d06f29877044ddce0f9fdd2e26d5.png","url":"https://www.mi.com/mitv4A/58/"},{"name":"小米电视4A 65英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ca8058c9c776447265b99420ff04e544.png","url":"https://www.mi.com/mitv4A/65/"},{"name":"小米电视4C 32英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cb83515483547404cd26a962bada5d5b.png","url":"https://www.mi.com/mitv4c/32/"},{"name":"小米电视4C 40英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/af572c503ed2a81ab71e2810617860c5.jpg","url":"https://www.mi.com/mitv4c/40/"},{"name":"小米电视4C 43英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bef124bc015669bdacf76d5d4b02a7e.png","url":"https://www.mi.com/mitv4c/43/"},{"name":"小米电视4C 50英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/24ee18218b3b98161e17abe23c6fd539.png","url":"https://www.mi.com/mitv4c/50/"},{"name":"小米电视4C 55英寸","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe603cc3b9c19903be14aac4e9b571d6.jpg","url":"https://www.mi.com/mitv4c/55/"}]},{"name":"笔记本 显示器 平板","child":[{"name":"RedmiBook 13","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aee86bcd8bf491eb78ae234d2e188a66.jpg","url":"https://www.mi.com/redmibook/13/"},{"name":"小米笔记本 15.6\"","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png","url":"//search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2015.6"},{"name":"小米笔记本 13.3\"","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1f95bb7c9206951e3d870cb5581b8329.png","url":"//search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2013.3"},{"name":"小米笔记本 12.5\"","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eaab0db21859e0e58cae1fb807907905.jpg","url":"//search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2012.5"},{"name":"RedmiBook 14","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a3c149225946312f2b4bbe1263f65450.png","url":"//search.mi.com/search_RedmiBook%2014"},{"name":"小米游戏本","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a66c24ee8ae2efea3ae92ec455a27352.jpg","url":"//search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%B8%B8%E6%88%8F%E6%9C%AC"},{"name":"显示器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png","url":"//search.mi.com/search_%E6%98%BE%E7%A4%BA%E5%99%A8"},{"name":"小米平板4","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/131e5d409e62eedb94577cae11c530f1.jpg","url":"https://www.mi.com/mipad4/"},{"name":"键鼠套装","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png","url":"//search.mi.com/search_%E9%94%AE%E7%9B%98"},{"name":"鼠标","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png","url":"//search.mi.com/search_%E9%BC%A0%E6%A0%87"},{"name":"转接器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e18c5807226399f5b24b340241fe8cc1.png","url":"//search.mi.com/search_%E8%BD%AC%E6%8E%A5%E5%99%A8"},{"name":"平板配件","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/32bfcdebff3058de7bc0b2855d05c240.jpg","url":"//search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6"}]},{"name":"家电 插线板","child":[{"name":"冰箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/abeb200aaaee68d4635c6235d3ffb3f3.jpg","url":"//search.mi.com/search_%E5%86%B0%E7%AE%B1"},{"name":"立式空调","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/96de94415b860f3de95b2d6294f0d0fd.png","url":"//search.mi.com/search_%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83"},{"name":"壁挂空调","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png","url":"//search.mi.com/search_%E5%A3%81%E6%8C%82%E7%A9%BA%E8%B0%83"},{"name":"滚筒洗衣机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png","url":"//search.mi.com/search_%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA"},{"name":"Redmi全自动波轮洗衣机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d3bace6e62cecb7901e306b05502535f.jpg","url":"//search.mi.com/search_%E6%B3%A2%E8%BD%AE%E6%B4%97%E8%A1%A3%E6%9C%BA"},{"name":"净水器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg","url":"//search.mi.com/search_%E5%87%80%E6%B0%B4%E5%99%A8"},{"name":"微波炉","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg","url":"https://www.mi.com/buy?product_id=10330"},{"name":"电烤箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg","url":"https://www.mi.com/buy?product_id=9866"},{"name":"扫地机器人","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg","url":"https://search.mi.com/search_%E6%89%AB%E5%9C%B0%E6%9C%BA"},{"name":"吸尘器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg","url":"https://www.mi.com/vacuum-cleaner/"},{"name":"空气净化器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg","url":"//search.mi.com/search_%E7%A9%BA%E6%B0%94%E5%87%80%E5%8C%96%E5%99%A8"},{"name":"电饭煲","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg","url":"//search.mi.com/search_%E7%94%B5%E9%A5%AD%E7%85%B2"},{"name":"电磁炉","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg","url":"//search.mi.com/search_%E7%94%B5%E7%A3%81%E7%82%89"},{"name":"电水壶","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg","url":"//search.mi.com/search_%E7%94%B5%E6%B0%B4%E5%A3%B6"},{"name":"滤水壶","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9ffcebcacca008ed2d92a692f7312ef6.jpg","url":"//search.mi.com/search_%E6%BB%A4%E6%B0%B4%E5%A3%B6"},{"name":"落地风扇","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png","url":"//search.mi.com/search_%E8%90%BD%E5%9C%B0%E9%A3%8E%E6%89%87"},{"name":"投影仪","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png","url":"https://www.mi.com/projection-youth/"},{"name":"灯具","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg","url":"//search.mi.com/search_%E7%81%AF%E5%85%B7"},{"name":"插线板","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1c8cfb055709db380c6de981a4c894b.jpg","url":"//search.mi.com/search_%E6%8F%92%E6%8E%92"},{"name":"新风机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1cc417a7cae8c4ff8b0041fa29003717.jpg","url":"//search.mi.com/search_%E6%96%B0%E9%A3%8E%E6%9C%BA"},{"name":"电暖器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg","url":"https://search.mi.com/search_%E7%94%B5%E6%9A%96%E6%B0%94"},{"name":"电压力锅","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ba8d2a2d383f612575d323ce159bdce3.jpg","url":"https://item.mi.com/1190200053.html"},{"name":"料理机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0bf0ba35dc3ad57115c59f0ebde0fd1d.jpg","url":"//search.mi.com/search_%E6%96%99%E7%90%86%E6%9C%BA"},{"name":"电煮壶","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b7de8a5bc64975df73f5fde5507fc8d1.jpg","url":"https://item.mi.com/product/9529.html"}]},{"name":"出行 穿戴","child":[{"name":"小米手表","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png","url":"//search.mi.com/search_%E6%89%8B%E8%A1%A8"},{"name":"手环手表","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png","url":"//search.mi.com/search_%E6%89%8B%E7%8E%AF%E6%89%8B%E8%A1%A8"},{"name":"VR","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg","url":"//search.mi.com/search_vr"},{"name":"平衡车","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg","url":"//search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"},{"name":"滑板车","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg","url":"//search.mi.com/search_%E6%BB%91%E6%9D%BF%E8%BD%A6"},{"name":"自行车","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png","url":"https://www.mi.com/buy?product_id=11368"},{"name":"车载充电器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/787c807176455f9ae40146af11e98b1e.jpg","url":"https://www.mi.com/buy?product_id=5942"},{"name":"平衡车配件","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ac5b263aac2ffa1894fb7b215c3ce87.jpg","url":"//search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6%E9%85%8D%E4%BB%B6"},{"name":"智能后视镜","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg","url":"//search.mi.com/search_%E5%90%8E%E8%A7%86%E9%95%9C"},{"name":"智能记录仪","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg","url":"//search.mi.com/search_%E8%AE%B0%E5%BD%95%E4%BB%AA"},{"name":"无线车充","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg","url":"https://item.mi.com/product/9357.html"},{"name":"充气宝","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b398bad185dddb5397f2c0d9a3f6271.jpg","url":"https://item.mi.com/product/9613.html"},{"name":"平衡轮","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d92b9db10f261f56b2f2dfb93ca132e.jpg","url":"https://item.mi.com/product/10003.html"},{"name":"石英表","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg","url":"https://search.mi.com/search_%E7%9F%B3%E8%8B%B1%E8%A1%A8"}]},{"name":"智能 路由器","child":[{"name":"打印机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg","url":"//search.mi.com/search_%E6%89%93%E5%8D%B0%E6%9C%BA"},{"name":"喷墨打印机","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b1c8b0308b1591ab93b7fe0937a52427.png","url":"https://www.mi.com/buy?product_id=10780"},{"name":"喷墨打印机墨水","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a18e471294cf49b6937ae90fac6d583.png","url":"https://www.mi.com/buy?product_id=10779"},{"name":"小米路由器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png","url":"https://search.mi.com/search_%E8%B7%AF%E7%94%B1%E5%99%A8"},{"name":"智能家庭","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/14107363b5dc77b18e9983bda999931d.jpg","url":"//search.mi.com/search_%E6%99%BA%E8%83%BD%E5%AE%B6%E5%BA%AD"},{"name":"对讲机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg","url":"//search.mi.com/search_%E5%AF%B9%E8%AE%B2%E6%9C%BA"},{"name":"摄像机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg","url":"//search.mi.com/search_%E6%91%84%E5%83%8F%E6%9C%BA"},{"name":"照相机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81d89cfdb72d0445ed4ef19942d9dedb.jpg","url":"//search.mi.com/search_%E7%85%A7%E7%9B%B8%E6%9C%BA"},{"name":"智能门锁","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg","url":"https://search.mi.com/search_%E9%97%A8%E9%94%81"},{"name":"视频门铃","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/feaab5bd13257dbe8f30b80b6a4472be.jpg","url":"//search.mi.com/search_%E9%97%A8%E9%93%83"},{"name":"小爱老师","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/90b75c1046e486c19f14effd9b45f488.png","url":"//search.mi.com/search_%E5%B0%8F%E7%88%B1%E8%80%81%E5%B8%88"},{"name":"Redmi路由器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/51eacc66512a31713808a60b5695ae28.png","url":"https://www.mi.com/rm2100/"},{"name":"小爱音箱","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg","url":"//search.mi.com/search_%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1"},{"name":"云服务空间年卡","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png","url":"https://www.mi.com/buy?product_id=10000197"},{"name":"云服务空间月卡","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7646993f6c382fb32ebd9bfda8ba6158.png","url":"https://www.mi.com/buy?product_id=8262"}]},{"name":"电源 配件","child":[{"name":"移动电源","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png","url":"//search.mi.com/search_%E5%85%85%E7%94%B5%E5%AE%9D"},{"name":"数据线","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg","url":"//search.mi.com/search_usb%E6%95%B0%E6%8D%AE%E7%BA%BF"},{"name":"车充","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg","url":"//search.mi.com/search_%E8%BD%A6%E8%BD%BD%E5%85%85%E7%94%B5%E5%99%A8"},{"name":"充电器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png","url":"//search.mi.com/search_%E5%85%85%E7%94%B5%E5%99%A8"},{"name":"电池","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg","url":"//search.mi.com/search_%E5%BD%A9%E8%99%B9%E7%94%B5%E6%B1%A0"},{"name":"自拍杆","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg","url":"//search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86"},{"name":"手机壳","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg","url":"https://list.mi.com/8-0-0-0-0-0-0-0-1"},{"name":"手机贴膜","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg","url":"https://list.mi.com/9"},{"name":"无线充电器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png","url":"https://search.mi.com/search_%E6%97%A0%E7%BA%BF%E5%85%85%E7%94%B5%E5%99%A8"},{"name":"平板配件","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6ce8ff4bc1e6ded2d40c53b2aa83b98c.jpg","url":"//search.mi.com/search_%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6"},{"name":"黑鲨配件","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg","url":"//search.mi.com/search_%E9%BB%91%E9%B2%A8%E9%85%8D%E4%BB%B6"},{"name":"其他配件","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg","url":"//search.mi.com/search_%E5%85%B6%E4%BB%96%E7%94%B5%E6%BA%90%E9%85%8D%E4%BB%B6"}]},{"name":"健康 儿童","child":[{"name":"洗手机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg","url":"https://www.mi.com/dispenser/"},{"name":"修剪器","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg","url":"https://www.mi.com/buy?product_id=10974"},{"name":"剃须刀","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg","url":"//search.mi.com/search_%E5%89%83%E9%A1%BB%E5%88%80"},{"name":"牙刷","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg","url":"//search.mi.com/search_%E7%89%99%E5%88%B7"},{"name":"吹风机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg","url":"https://item.mi.com/1184700005.html"},{"name":"体重秤","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png","url":"//search.mi.com/search_%E4%BD%93%E9%87%8D%E7%A7%A4"},{"name":"体脂秤","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg","url":"//search.mi.com/search_%E4%BD%93%E8%84%82%E7%A7%A4"},{"name":"早教启智","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb10391d6527bf64126a63446a38e2e.jpg","url":"//search.mi.com/search_%E6%97%A9%E6%95%99%E5%90%AF%E6%99%BA"},{"name":"遥控电动","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab36232a1004421e1a5b3efd0b9226c0.jpg","url":"//search.mi.com/search_%E5%84%BF%E7%AB%A5%E9%81%A5%E6%8E%A7"},{"name":"益智积木","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9a5feb1f6c9b9aa0dc998c17e5eb3e9.jpg","url":"//search.mi.com/search_%E7%9B%8A%E6%99%BA%E7%A7%AF%E6%9C%A8"},{"name":"儿童手表","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg","url":"//search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%89%8B%E8%A1%A8"},{"name":"儿童滑板车","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg","url":"//search.mi.com/search_%E5%84%BF%E7%AB%A5%E6%BB%91%E6%9D%BF%E8%BD%A6"},{"name":"婴儿推车","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg","url":"https://item.mi.com/product/9029.html"},{"name":"儿童书包","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d55c8943ceac7cd5ac7d8aa052f69b93.jpg","url":"https://www.mi.com/buy?product_id=9186"},{"name":"婴儿理发器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/17d625c8b5466b9527e9c06c71601939.jpg","url":"https://item.mi.com/product/9315.html"},{"name":"儿童保温杯","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/81737be7672dfa85cbb3abc65669f091.jpg","url":"https://item.mi.com/product/9317.html"},{"name":"健身车","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bf92a8a492f692a81794f52fefd1a29.png","url":"https://www.mi.com/buy?product_id=10878"},{"name":"走步机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg","url":"https://www.mi.com/treadmill/?cfrom=search"},{"name":"点读笔","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ccdce424f41806f775693748058fa2ca.jpg","url":"https://item.mi.com/product/9834.html"}]},{"name":"耳机 音箱","child":[{"name":"Redmi小爱触屏音箱 8","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7628d4253b1c1fccb5606095d0c5bbe3.png","url":"https://www.mi.com/redmi-xai"},{"name":"音箱 Pro","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png","url":"https://www.mi.com/buy?product_id=10745"},{"name":"小爱音箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png","url":"https://www.mi.com/buy?product_id=10744"},{"name":"小爱触屏音箱","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/abe665fafbef94eb3626ae8baf1de97e.jpg","url":"https://www.mi.com/aispeaker-touch/?cfrom=search"},{"name":"Redmi音箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dacef871b6af373b0212e28b028890b8.png","url":"https://www.mi.com/redmiaispeaker-play"},{"name":"小米小爱音箱 Play版","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg","url":"https://www.mi.com/aispeaker-play"},{"name":"线控耳机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3d235f4a5a5bf5c9d8d066d2166e6c.jpg","url":"//search.mi.com/search_%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA"},{"name":"蓝牙耳机","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa9306bdfc7cfa595462f87404430258.jpg","url":"//search.mi.com/search_%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA"},{"name":"头戴耳机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/28a77451da1dbd0d3e42d529777997c3.jpg","url":"//search.mi.com/search_%E5%A4%B4%E6%88%B4%E8%80%B3%E6%9C%BA"},{"name":"品牌耳机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4885bda69e45b870a5bcf5bbaea1548b.jpg","url":"//search.mi.com/search_%E5%93%81%E7%89%8C%E8%80%B3%E6%9C%BA"},{"name":"蓝牙音箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e8b89fb3702dc7c41248898f2b86f6d.png","url":"//search.mi.com/search_%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1"},{"name":"小米AI音箱","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg","url":"https://www.mi.com/aispeaker/"},{"name":"小米小爱音箱HD","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4df2fa022495e79f890a943a9d7e70a5.jpg","url":"https://item.mi.com/product/9151.html"},{"name":"k歌耳机","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a290d924c1bbd1e3ce64e96f497d4059.jpg","url":"//search.mi.com/search_k%E6%AD%8C%E8%80%B3%E6%9C%BA"}]},{"name":"生活 箱包","child":[{"name":"小背包","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg","url":"https://www.mi.com/buy?product_id=11674"},{"name":"双肩包","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg","url":"https://search.mi.com/search_%E5%8C%85"},{"name":"胸包","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg","url":"https://search.mi.com/search_%E8%83%B8%E5%8C%85"},{"name":"旅行箱","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg","url":"//search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1"},{"name":"运动鞋","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg","url":"//search.mi.com/search_%E8%BF%90%E5%8A%A8%E9%9E%8B"},{"name":"眼镜","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg","url":"//search.mi.com/search_%E7%9C%BC%E9%95%9C"},{"name":"床垫","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg","url":"//search.mi.com/search_%E5%BA%8A%E5%9E%AB"},{"name":"枕头","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png","url":"//search.mi.com/search_%E6%9E%95%E5%A4%B4"},{"name":"饰品","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e9bc4f84825f80ce520eefa4f762939.jpg","url":"//search.mi.com/search_%E9%A5%B0%E5%93%81"},{"name":"螺丝刀","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg","url":"//search.mi.com/search_%E8%9E%BA%E4%B8%9D%E5%88%80"},{"name":"保温杯","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg","url":"https://search.mi.com/search_%E4%BF%9D%E6%B8%A9%E6%9D%AF"},{"name":"伞","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/395ffd04841f70b8bdf67339ba1dfc98.jpg","url":"https://item.mi.com/product/6124.html"},{"name":"驱蚊器","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg","url":"//search.mi.com/search_%E9%A9%B1%E8%9A%8A%E5%99%A8"},{"name":"尤克里里","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2cb85b96b12395fdaa7bccaf8f94e758.jpg","url":"https://item.mi.com/product/7716.html"},{"name":"毛巾/浴巾","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg","url":"//search.mi.com/search_%E6%AF%9B%E5%B7%BE"},{"name":"米兔","img":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ac95ad25bb8f6391abcb937b03c1743.png","url":"//search.mi.com/search_%E7%B1%B3%E5%85%94"},{"name":"笔","img":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg","url":"//search.mi.com/search_%E7%AC%94"}]}]
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
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340",url:"http://www.mi.com/redminote8"},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340",url:"https://item.mi.com/product/10000203.html?selected=10000203"},
                {img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340",url:"https://www.mi.com/shouhuan4/"}
            ]
            const fastShopList = [
                {name:"MIJOY 抽纸青春版 24包/箱 ",dec:"精选原生竹浆，健康环保",url:"",price:"3499",oldPrice:"3799",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571038766.41824452.jpg?thumb=1&w=200&h=200"},
                {name:"小米旅行箱 24英寸 灰色 24寸",dec:"一款坚固的旅行箱伴您左右",url:"",price:"349",oldPrice:"399",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553778518.87814930.jpg?thumb=1&w=200&h=200"},
                {name:"米兔故事机 mini 蓝牙版 蓝色",dec:"陪伴宝宝时时刻刻",url:"",price:"129",oldPrice:"149",img:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1548833307.52655717.jpg?thumb=1&w=200&h=200"},
                {name:"米兔点读笔 蓝色",dec:"一点即读，让美好发声",url:"",price:"169",oldPrice:"199",img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ecfb7d29b51371785de8b83d05b6428.jpg?thumb=1&w=200&h=200&f=webp&q=90"},
            ]
            const phoneShop = [
                {name:"小米10 青春版 5G",dec:"50倍潜望式变焦 / 轻薄5G手机",price:"2099",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:"小米10",dec:"骁龙865/1亿像素相机",price:"3799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:" Redmi K30 Pro",dec:"双模5G，骁龙865，弹出全面屏",price:"2699",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:" Redmi K30 Pro 变焦版",dec:"双模5G，骁龙865，弹出全面屏",price:"3799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:"小米10 Pro",dec:"骁龙865 / 50倍变焦",price:"4999",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:"Redmi K30",dec:"120Hz流速屏，全速热爱",price:"1499",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:"Redmi K30 5G",dec:"双模5G，120Hz流速屏",price:"1899",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""},
                {name:"Redmi 8",dec:"5000mAh超长续航",price:"799",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",url:""}
            ]
            return {
                topSecondLink,
                sideLink,
                sideImg,
                functionImg,
                functionImgSide,
                fastShopList,
                phoneShop
            }
        }
    }
</script>

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
    li.menu_li a {
        color: #333;
    }
    li.menu_li a:hover{
        color: #FF6700;
        text-decoration: none;
    }
    .shop-img{
        width: 40px;
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
