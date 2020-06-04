<template>
    <div class="mi-user-portal page-main">
        <div class="container ">
            <div class="row">
                <div class="span4">
                    <div id="J_userMenu" class="user-address-menu">
                        <div class="menu-box">
                            <h3 class="title">订单中心</h3>
                            <ul class="list">
                                <li><a class="side-link" href="javascript:void(0)">我的订单</a></li>
                                <li><a class="side-link" href="javascript:void(0)">评价晒单</a></li>
                                <li><a class="side-link" href="javascript:void(0)">话费充值订单</a></li>
                                <li><a class="side-link" href="javascript:void(0)">以旧换新订单</a></li>
                            </ul>
                        </div>
                        <div class="menu-box">
                            <h3 class="title">个人中心</h3>
                            <ul class="list">
                                <li><a class="side-link active" href="javascript:void(0)">我的个人中心</a></li>
                                <li><a class="side-link" href="javascript:void(0)">消息通知</a></li>
                                <li><a class="side-link" href="javascript:void(0)">收货地址</a></li>
                                <li><a class="side-link" href="javascript:void(0)">现金账户</a></li>
                            </ul>
                        </div>
                        <div class="menu-box">
                            <h3 class="title">售后服务</h3>
                            <ul class="list">
                                <li><a class="side-link" href="javascript:void(0)">服务记录</a></li>
                                <li><a class="side-link" href="javascript:void(0)">申请服务</a></li>
                                <li><a class="side-link" href="javascript:void(0)">收货地址</a></li>
                                <li><a class="side-link" href="javascript:void(0)">领取快递报销</a></li>
                            </ul>
                        </div>
                        <div class="menu-box">
                            <h3 class="title">账户管理</h3>
                            <ul class="list">
                                <li><a class="side-link" href="javascript:void(0)">个人信息</a></li>
                                <li><a @click="changePasswordDialog=true" class="side-link" href="javascript:void(0)">修改密码</a></li>
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
                                        <h2 class="username">{{info.nickname}}</h2>
                                        <p class="tip">{{info.sign}}</p>
                                        <a href="javascript:void(0)" @click="changeInfoDialog=true" class="link">修改个人信息 &gt;</a>
                                        <img :src="info.avatar" width="150" height="150" alt class="avatar">
                                    </div>
                                    <div class="user-actions">
                                        <ul class="action-list">
                                            <li>上次登录时间：<span class="level level-3">{{info.lastLogin}}</span></li>
                                            <li>收货地址：<span><span class="tel">{{info.site}}</span></span></li>
                                            <li>用户名：<span><span class="tel">{{info.username}}</span></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="portal-sub">
                                    <ul class="info-list clearfix">
                                        <li>
                                            <h3>待支付的订单：<span class="num">0</span></h3>
                                            <a href="javascript:void(0)">查看待支付订单<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-1.png" alt="">
                                        </li>
                                        <li>
                                            <h3>待收货的订单：<span class="num">0</span></h3>
                                            <a href="javascript:void(0)">查看待收货订单<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt="">
                                        </li>
                                        <li>
                                            <h3>待评价商品数：<span class="num">0</span></h3>
                                            <a href="javascript:void(0)">查看待评价商品<v-icon name="chevron-right"/></a>
                                            <img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt="">
                                        </li>
                                        <li>
                                            <h3>喜欢的商品：<span data-v-1ace6eb7="" class="num">0</span></h3>
                                            <a href="javascript:void(0)">查看喜欢的商品<v-icon name="chevron-right"/></a>
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
        <el-dialog
                title="修改个人信息"
                :visible.sync="changeInfoDialog"
                width="400px">
            <el-form ref="form" label-width="80px">
                <el-form-item label="昵称">
                    <el-input v-model="info.nickname"></el-input>
                </el-form-item>
                <el-form-item label="签名">
                    <el-input v-model="info.sign"></el-input>
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-input v-model="info.site"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="changeInfoDialog = false">取 消</el-button>
            <el-button type="primary" @click="changeUserInfo">更新</el-button>
          </span>
        </el-dialog>
        <el-dialog
                title="修改密码"
                :visible.sync="changePasswordDialog"
                width="400px">
            <el-form ref="form" label-width="80px">
                <el-form-item label="原密码">
                    <el-input type="password" v-model="passwordInfo.password"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input type="password" v-model="passwordInfo.newPassword"></el-input>
                </el-form-item>
                <el-form-item label="再次输入">
                    <el-input type="password" v-model="passwordInfo.repeatPassword"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
            <el-button @click="changePasswordDialog = false">取 消</el-button>
            <el-button type="primary" @click="changePassword">修改密码</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Me",
        data(){
            return{
                info: {
                    username:"",
                    nickname:"",
                    avatar:"",
                    site:"",
                    sign:"",
                    lastLogin:""
                },
                changeInfoDialog:false,
                changePasswordDialog:false,
                passwordInfo:{
                    password:"",
                    newPassword:"",
                    repeatPassword:""
                }
            }
        },
        mounted() {
            this.getUserInfo()
        },
        methods:{
            changeUserInfo(){ //修改用户的个人信息
                const data = {
                    ID:this.getCookie("userID"),
                    token:this.getCookie("token"),
                    nickname: this.info.nickname,
                    sign: this.info.sign,
                    avatar: this.info.avatar,
                    site: this.info.site
                }
                this.tools.requests(this.G.SERVER+"/api/v1/user/changeInfo",data,"post").then((response)=> {
                    if(response!=null && response.code===1){
                        this.changeInfoDialog=false
                        this.$message.success("更新成功")
                        this.getUserInfo()
                    }else{
                        this.$message.error("更新失败")
                    }
                })
            },
            getUserInfo(){ //获取用户的个人信息
                const data ={
                    userID: this.getCookie("userID"),
                    token: this.getCookie("token")
                }
                this.tools.requests(this.G.SERVER+"/api/v1/user/getInfo",data,"get").then((response)=> {
                    if(response!=null && response.code===1){
                        this.info = response.data
                    }
                })
            },
            changePassword(){ //修改用户密码
                //判断两次用户输入是否相同
                if(this.passwordInfo.newPassword!==this.passwordInfo.repeatPassword){
                    this.$message.error("两次密码输入不相同")
                    return
                }
                const data={
                    ID:this.getCookie("userID"),
                    token: this.getCookie("token"),
                    oldPassword:this.passwordInfo.password,
                    password:this.passwordInfo.newPassword
                }
                //发送请求重置密码
                this.tools.requests(this.G.SERVER+"/api/v1/user/changePassword",data,"post").then((response)=> {
                    if (response != null && response.code === 1) {
                        this.delCookie('userID')
                        this.delCookie('token')
                        this.$message.success("密码重置成功，请重新登录")
                        this.$router.push("/login")
                    }else{
                        this.$message.error(response.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .side-link:hover{
        color: #FF6700;
    }
    a.side-link.active {
        color: #ff6700!important;
    }
    ul.info-list.clearfix li a {
        display: flex;
        align-items: center;
        margin-top: 9px;
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
        margin: 6px 0 11px 0;
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
