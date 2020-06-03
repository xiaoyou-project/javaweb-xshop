<template>
    <div>
        <div class="search-reuslt">
            <div class="reuslt-order">
                <!-- 搜索结果列表过滤 -->
                <div class="order-list-box clearfix">
                    <ul class="order-list" id="J_orderList">
                        <li class="active">
                            <a class="goods-order-item" href="javascript: void(0);" rel="nofollow" >综合</a>
                        </li>
                        <li class="">
                            <a class="goods-order-item"  href="javascript: void(0);" rel="nofollow">新品</a>
                        </li>
                        <li class="">
                            <a class="goods-order-item" href="javascript: void(0);">销量</a>
                        </li>
                        <li class="">
                            <a class="goods-order-item" href="javascript: void(0);">价格 <i class="iconfont"></i> </a>
                        </li>
                    </ul>
                </div>
                <div class="goods-list-box">
                    <div class="goods-list clearfix" id="J_goodsList">
                        <div class="goods-item">
                            <div class="figure figure-img">
                                <a target="_blank" href="https://www.mi.com/buy?product_id=1175000272&amp;cfrom=search">
                                    <img src="http://i8.mifile.cn/b2c-mimall-media/7382a91d1f2611ce859bd6fd8578c994.jpg" width="200" height="200" alt="">
                                </a>
                            </div>
                            <h2 class="title">
                                <a target="_blank" href="https://www.mi.com/buy?product_id=1175000272&amp;cfrom=search">米家电磁炉</a>
                            </h2>
                            <p class="price">259元  <del>299元 </del></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="J_recommendWrap">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info"
    }
</script>

<style scoped>
    .goods-item:hover {
        -webkit-box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    .search-reuslt {
        padding: 20px 0 100px;
        background: #f5f5f5;
    }
    .reuslt-order {
        display: table;
        width: 1226px;
        position: relative;
        margin: 0 auto;
    }
    .reuslt-order .order-list-box {
        height: 30px;
    }
    .order-list-box {
        height: 20px;
        margin: 20px 0;
        overflow: hidden;
        position: relative;
        zoom: 1;
    }
    .order-list-box .order-list {
        float: left;
        height: 20px;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .reuslt-order .order-list-box .order-list li:first-child {
         border-left: none;
     }

    .order-list-box .order-list li {
        float: left;
        padding: 0 30px;
        border-left: 1px solid #e0e0e0;
        line-height: 20px;
    }
    .order-list-box .order-list li.active a {
        color: #ff6700;
    }
    .order-list-box .order-list li a {
        color: #424242;
        -webkit-transition: color .2s;
        transition: color .2s;
    }
    .order-list-box .order-list li a:hover{
        color: #FF6700;
    }
    .goods-list-box {
        width: 1226px;
    }
    .goods-list {
        width: 1240px;
        margin: 0;
        list-style-type: none;
    }
    .goods-item {
        position: relative;
        float: left;
        width: 296px;
        height: 296px;
        margin-right: 14px;
        margin-bottom: 14px;
        text-align: center;
        background: #fff;
        -webkit-transition: -webkit-box-shadow .5s linear;
        transition: box-shadow .5s linear;
    }
    .goods-item .figure-img {
        width: 200px;
        height: 200px;
        margin: 0 auto 16px;
    }
    .goods-item .figure-img img {
        width: 200px;
        height: 200px;
    }
    .goods-item .title {
        margin: 0 auto;
        width: 230px;
    }
    .goods-item .title {
        font-size: 14px;
        font-weight: 400;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        _zoom: 1;
    }
    .goods-item .title a {
        color: #424242;
    }
    .goods-item .price {
        margin: 0 0 15px;
        color: #ff6700;
    }
    .goods-item .price del {
        color: #b0b0b0;
    }
    a {
        cursor: pointer;
    }
    a {
        color: #757575;
        text-decoration: none;
    }
    .goods-item .thumb-list img {
        width: 34px;
        height: 34px;
    }
</style>
