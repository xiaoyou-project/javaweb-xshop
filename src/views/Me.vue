<template>
    <div class="mi-user-portal page-main">
        <div class="container ">
            <div class="row">
                <div class="span4">
                    <div id="J_userMenu" class="user-address-menu">
                        <div class="menu-box" v-for="item in leftFunction" :key="item">
                            <h3 class="title">{{item.name}}</h3>
                            <ul class="list">
                                <li v-for="item2 in item.child" :key="item2"><a :href="item2.url">{{item2.name}}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="span16">
                    <div class="mi-uc-box uc-main-box">
                        <div class="uc-content-box portal-content-box">
                            <div class="box-bd">
                                <div class="portal-main clearfix">
                                    <div class="user-card">
                                        <h2 class="username">小游</h2>
                                        <p class="tip">个性签名</p>
                                        <a href="//account.xiaomi.com/pass/userInfo" target="_blank" class="link">修改个人信息 &gt;</a>
                                        <a href="//account.xiaomi.com/pass/userInfo" target="_blank" class="link">修改密码 &gt;</a>
                                        <img src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/p01qGYayC5dk/UsSbkaQiQuJU5l.jpg" width="150" height="150" alt="小游" class="avatar">
                                    </div>
                                    <div class="user-actions">
                                        <ul class="action-list">
                                            <li>账户安全：<span class="level level-3">较高</span></li>
                                            <li>绑定手机：<span><span class="tel">188******10</span></span></li>
                                            <li>绑定邮箱：<span><span class="tel">15*******3@q*.com</span></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="portal-sub">
                                    <ul class="info-list clearfix">
                                        <li>
                                            <h3>待支付的订单：<span class="num">0</span></h3>
                                            <a href="//order.mi.com/order/?type=7">查看待支付订单<v-icon name="chevron-right"/></a>
                                            <img  src="//s01.mifile.cn/i/user/portal-icon-1.png" alt="">
                                        </li>
                                        <li>
                                            <h3>待收货的订单：<span class="num">0</span></h3>
                                            <a href="//order.mi.com/order/?type=7">查看待收货订单<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt="">
                                        </li>
                                        <li>
                                            <h3>待评价商品数：<span class="num">0</span></h3>
                                            <a href="//www.mi.com/user/comment">查看待评价商品<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt="">
                                        </li>
                                        <li>
                                            <h3>喜欢的商品：<span data-v-1ace6eb7="" class="num">0</span></h3>
                                            <a href="//www.mi.com/user/favorite">查看喜欢的商品<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-4.png" alt="">
                                        </li>
                                    </ul>
                                </div>
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
        name: "Me",
        data(){
            const leftFunction = [
                {
                    name:"订单中心",
                    child:[
                        {name:"我的订单",url:""},
                        {name:"评价晒单",url:""},
                        {name:"话费充值订单",url:""},
                        {name:"以旧换新订单",url:""}
                    ]
                },
                {
                    name:"个人中心",
                    child:[
                        {name:"我的个人中心",url:""},
                        {name:"消息通知",url:""},
                        {name:"收货地址",url:""},
                        {name:"喜欢的商品",url:""}
                    ]
                },
                {
                    name:"售后服务",
                    child:[
                        {name:"服务记录",url:""},
                        {name:"申请服务",url:""},
                        {name:"领取快递报销",url:""}
                    ]
                },
                {
                    name:"账户管理",
                    child:[
                        {name:"个人信息",url:""},
                        {name:"修改密码",url:""}
                    ]
                }
            ]
            return{
                leftFunction
            }
        }
    }
</script>

<style scoped>
    ul.info-list.clearfix li a {
        display: flex;
        align-items: center;
    }
    .uc-content-box.portal-content-box {
        display: flex;
    }
    .page-main {
        padding-bottom: 40px;
    }
    .page-main {
        background: #f5f5f5;
    }
    .container {
        width: 1226px;
        margin-right: auto;
        margin-left: auto;
    }
    .row {
        margin-left: -14px;
        display: table;
        padding-top: 26px;
    }
    .span4 {
        width: 234px;
    }
    .user-address-menu {
        background: #fff;
        padding: 36px 0;
    }
    .user-address-menu .menu-box {
        margin: 0 48px 12px;
    }
    .user-address-menu h3 {
        font-size: 16px;
        font-weight: 400;
        line-height: 52px;
        color: #333;
        margin: 0;
        padding: 0;
    }
    .user-address-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .user-address-menu li {
        padding: 6px 0;
    }
    .user-address-menu li a {
        color: #757575;
    }
    a, a:hover {
        text-decoration: none;
    }
    .span16 {
        width: 978px;
    }
    .span1, .span2, .span3, .span4, .span5, .span6, .span7, .span8, .span9, .span10, .span11, .span12, .span13, .span14, .span15, .span16, .span17, .span18, .span19, .span20 {
        float: left;
        margin-left: 14px;
        min-height: 1px;
    }
    .mi-uc-box {
        padding: 36px 48px;
        background: #fff;
    }
    .portal-content-box .portal-main {
        padding-top: 24px;
        display: flex;
    }
    .portal-content-box .user-card{
        position: relative;
        float: left;
        width: 302px;
        height: 160px;
        padding-left: 180px;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
    }
    .portal-content-box .user-card .username{
        margin: 0;
        font-size: 24px;
        font-weight: 400;
        color: #616161;
    }
    .portal-content-box .user-card .tip{
        margin: 0 0 10px;
        color: #b0b0b0;
    }
    .portal-content-box .user-card .link{
        font-size: 12px;
        color: #ff6700;
    }
    .portal-content-box .user-card .avatar{
        position: absolute;
        left: 0;
        top: 0;
        padding: 4px;
        border: 1px solid #e0e0e0;
        border-radius: 150px;
    }
    .portal-content-box .user-actions{
        float: right;
        width: 358px;
        margin-top: 35px;
    }
    .portal-content-box .user-actions .action-list{
        margin: 0;
        padding: 0;
        list-style-type: none;
        color: #757575;
    }
    .portal-content-box .user-actions .action-list li{
        position: relative;
        padding: 6px 0;
    }
    .portal-content-box .user-actions .action-list .level-3{
        color: #83c44e;
    }
    .portal-sub{
        border-top: 1px solid #e0e0e0;
    }
    .portal-sub .info-list{
        margin: 0;
        padding: 60px 0 0;
        list-style-type: none;
        color: #757575;
    }
    .portal-sub .info-list li{
        position: relative;
        float: left;
        width: 276px;
        height: 65px;
        padding-left: 112px;
        padding-top: 15px;
        margin-left: 14px;
        margin-bottom: 80px;
    }
    .portal-sub .info-list h3{
        margin: 0;
        font-size: 18px;
        font-weight: 400;
    }
    .portal-sub .info-list .num{
        color: #ff6700;
    }
    a {
        color: #757575;
    }
    .portal-sub .info-list img{
        position: absolute;
        left: -10px;
        top: -10px;
    }
</style>
