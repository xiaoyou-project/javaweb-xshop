<template>
  <div id="app">
    <div class="head_box">
      <div id="head_wrap">
        <div id="head_nav">
          <router-link class="head_nav_a" to="/">主页</router-link>
          <div v-for="(item,index) in topLink" :key="index">
            <span>|</span>
            <a class="head_nav_a" target="_blank" :href="item.url">{{ item.name }}</a>
          </div>
        </div>
        <div id="head_right">
          <div id="head_landing">
              <div v-show="!isLogin">
                  <router-link to="/login" class="head_nav_a">登陆</router-link>
                  <span>|</span>
                  <router-link to="/register" class="head_nav_a">注册</router-link>
              </div>
              <div class="login-name" v-show="isLogin">
                  <div class="login-nickname"><div>{{nickname}}</div><v-icon name="chevron-down"/></div>
                  <div id="J_userMenuWrapper" class="user-menu-wrapper">
                      <ul class="user-menu">
                          <li><router-link rel="nofollow" to="/me">个人中心</router-link></li>
                          <li><a rel="nofollow" href="javascript:void(0)">评价晒单</a></li>
                          <li><a rel="nofollow" href="javascript:void(0)">我的喜欢</a></li>
                          <li><a rel="nofollow" href="javascript:void(0)">小米账户</a></li>
                          <li><a rel="nofollow" @click="logout" href="javascript:void(0)">退出登录</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div id="head_car" class="shopping-cart">
            <router-link to="/shoppingCart" class="head_car_text">购物车（{{shopNum}}）</router-link>
            <div id="car_content" style="height: 0px;width:0px;z-index: 999;">
                <div class="shop-list">
                    <div v-for="(item,index) in shops" :key="index" class="shop-item">
                        <router-link class="shop-link" :to="'/commodityDetail/'+item.shopId">
                            <img :src="item.img">
                            <div class="shop-title shop-name">{{item.shopName}}</div>
                            <div class="shop-title">{{item.price}}元×{{item.count}}</div>
                        </router-link>
                    </div>
                </div>
                <div class="shop-bottom">
                    <div class="bottom-left">
                        <div class="shop-num">总价格</div>
                        <div class="shop-price">{{totalMoney}}元</div>
                    </div>
                    <div class="bottom-right">
                        <router-link to="/shoppingCart"><div class="bottom-sum">去购物结算</div></router-link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="main_head_box">
      <div id="menu_wrap">
          <div id="menu_logo">
              <img style="width:45px;height:45px" src="/img/logo.png">
              <img class="img-top-ad" src="/img/top.gif">
          </div>
          <div id="menu_nav">
              <ul>
                  <li v-for="(item,index) in topSecondLink" :key="index" class="menu_li"><a href="javascript:void(0)">{{item.name}}</a></li>
              </ul>
          </div>
          <div id="find_wrap">
              <div id="find_bar">
                  <input v-model="key" type="text" id="find_input">
              </div>
              <div id="find_but" @click="search">GO</div>
          </div>
      </div>
    </div>
    <router-view/>
    <div id="foot_box">
      <div id="foot_wrap">
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li>
              <a rel="nofollow" href="javascript:void(0)"><v-icon name="wrench" />预约维修服务</a>
            </li>
            <li>
              <a rel="nofollow" href="javascript:void(0)"><v-icon name="recycle" />7天无理由退货</a>
            </li>
            <li>
              <a rel="nofollow" href="javascript:void(0)"><v-icon name="truck" />15天免费换货</a>
            </li>
            <li>
              <a rel="nofollow" href="javascript:void(0)"><v-icon name="gift" />满99元包邮</a>
            </li>
            <li>
              <a rel="nofollow" href="javascript:void(0)"><v-icon name="map-marker-alt"/>520余家售后网点</a>
            </li>
          </ul>
        </div>
        <div class="foot_bottom">
          <div class="foot_bottom_l">
            <dl>
              <dt>帮助中心</dt>
              <dd>账户管理</dd>
              <dd>购物指南</dd>
              <dd>订单操作</dd>
            </dl>
            <dl>
              <dt>服务支持</dt>
              <dd>售后政策</dd>
              <dd>自助服务</dd>
              <dd>相关下载</dd>
            </dl>
            <dl>
              <dt>线下门店</dt>
              <dd>小米之家</dd>
              <dd>服务网点</dd>
              <dd>授权体验店</dd>
            </dl>
            <dl>
              <dt>关于小米</dt>
              <dd>了解小米</dd>
              <dd>加入小米</dd>
              <dd>投资者关系</dd>
            </dl>
          </div>
          <div class="foot_bottom_r">
            <a>400-100-5678</a>
            <a>周一至周日 8:00-18:00</a>
            <a>（仅收市话费）</a>
            <span> 24小时在线客服</span>
          </div>
        </div>
      </div>
      <div class="foot_note_box">
        <div class="foot_note_wrap">
          <div class="foot_note_con">
            <div class="foot_note_txt">
              <a>小米商城</a><span>|</span><a>MIUI</a><span>|</span><a>米家</a><span>|</span><a>米聊</a><span>|</span><a>多看</a><span>|</span><a>游戏</a><span>|</span><a>小米天猫店</a><span>|</span><a>小米集团隐私政策</a><span>|</span><a>小米商城用户协议</a><span>|</span><a>问题反馈</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./assets/css/xiaomi.css" scoped />
<script>
  import $ from "jquery";
  import Vue from "vue"
  export default {
    name: "index",
    data() {
        const topLink =[
            {name: "博客",url: "https://xiaoyou66.com"},
            {name: "github",url: "https://github.com/xiaoyou66"},
            {name: "B站",url: "https://space.bilibili.com/343147393"},
        ]
        const topSecondLink = [
            {name: "小米手机",url: ""},
            {name: "Redmi 红米",url: ""},
            {name: "电视",url: ""},
            {name: "笔记本",url: ""},
            {name: "家电",url: ""},
            {name: "笔记本",url: ""},
            {name: "家电",url: ""},
            {name: "智能硬件",url: ""},
        ]
      return{
          topLink,
          topSecondLink,
          isLogin:false,
          nickname:"",
          shopNum:0,
          shops:null,
          totalMoney:0,
          key:""
      }
    },
      watch:{
          $route(){
              this.getInfo()
              this.getShoppingCart()
          }
      },
      mounted() {
      this.getInfo()
      //搜索框失去和获取焦点border颜色改变
      $("#find_input").focus(function(){
          $("#find_wrap").css("border","1px solid #ff6700");
          $("#find_but").css("border-left","1px solid #ff6700");
      })
      $("#find_input").blur(function(){
          $("#find_wrap").css("border","1px solid #F0F0F0");
          $("#find_but").css("border-left","1px solid #F0F0F0");
      })
      //搜索按钮的背景颜色改变
      $("#find_but").hover(function(){
          $(this).css({"background":"#ff6700",color:"#fff"});
      },function(){
          $(this).css({"background":"#fff",color:"#424242"});
      })
        $(".foot_bottom_r").children("span").hover(function(){
            $(this).css({"background":"#ff6700",color:"#fff"});
        },function(){
            $(this).css({"background":"none",color:"#ff6700"});
        })
    },
      methods:{
        getInfo(){
            console.log("获取用户信息")
            //获取cookie
            const data ={
                userID: this.getCookie("userID"),
                token: this.getCookie("token")
            }
            this.tools.requests(this.G.SERVER+"/api/v1/user/getInfo",data,"get").then((response)=> {
                if(response!=null && response.code===1){
                    this.isLogin = true
                    this.nickname = response.data.nickname
                }else{
                    this.isLogin=false
                }
            })
        },
        logout(){
            this.delCookie('userID')
            this.delCookie('token')
            this.isLogin=false
            this.$message.success("退出登录成功")
            this.$router.push("/")
        },
        search(){ //搜素功能

        },
        getShoppingCart(){ //获取购物车信息
            //获取cookie
            this.tools.requests(this.G.SERVER+"/api/v1/cart/getCart",{userID: this.getCookie("userID"),token: this.getCookie("token")},"get").then((response)=> {
                console.log("获取购物车")
                if (response != null && response.code === 1) {
                    const data = response.datas
                    this.shopNum = data.length
                    let money = 0
                    //遍历数组，修改数据
                    for(let index in data){
                        data[index].img =  data[index].img.split("&&")[0]
                        money += data[index].price*data[index].count
                    }
                    this.totalMoney=money
                    Vue.set(this,"shops",data)
                }
            })
        }
      }
  }
</script>
<style>
  body{
    margin: 0;
  }
</style>
<style scoped lang="scss">
    a.shop-link {
        display: flex;
    }
    .shop-title{
        line-height: 20px;
        color: #424242;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px;
        width: 87px;
    }
    .shop-name:hover{
        color: #FF6700;
    }
    /*购物车浮动效果*/
    .head_box #head_wrap #head_right #head_car #car_content{
        display: none;
    }
    .head_box #head_wrap #head_right #head_car:hover #car_content{
        display: block;
    }
    .head_box #head_wrap #head_right #head_car:hover{
        background: #ffffff;
    }
    .head_box #head_wrap #head_right #head_car:hover a{
        color: #FF6700!important;
    }
    .login-name{
        position: relative;
        .login-nickname {
            margin-right: 10px;
            display: flex;
            align-items:center;
            width: 110px;
            justify-content: center;
        }
        .login-nickname div {
            margin-right: 13px;
        }
        .user-menu-wrapper {
            background: #fff;
            position: absolute;
            display: none;
            top: 40px;
            z-index: 16;
            overflow: hidden;
            -webkit-transition: height .3s;
            transition: height .3s;
            -webkit-box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .15);
            box-shadow: 0 2px 2px rgba(0, 0, 0, .15);
        }
        .user-menu li{
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .user-menu {
            width: 110px;
            margin: 0;
            padding: 7px 0;
            list-style-type: none;
        }
        .user-menu a{
            color:#b0b0b0;
        }
        .user-menu li:hover{
            background: #f5f5f5;
        }
        .user-menu li:hover a{
            color: #FF6700!important;
        }
    }
    .login-name:hover .login-nickname{
        color: #FF6700;
        background: #fff;
    }
    .login-name:hover .user-menu-wrapper{
        display: block;
    }

    .site-topbar .user-menu a {
        display: block;
        padding: 3px 30px;
        line-height: 2;
    }
    .site-topbar a {
        color: #b0b0b0;
        line-height: 40px;
        display: inline-block;
    }

    #car_content{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px;
        display: table;
    }
    a.head_car_text {
        color: #ffffff;
    }
    .bottom-left {
        line-height: 20px;
    }
    .shop-item img {
        width: 60px;
        height: 60px;
        padding: 8px;
    }
    .shop-list {
        position: relative;
        background: #ffffff;
        width: 316px;
    }
    .shop-item {
        display: flex;
        align-items: center;
    }
    .shop-item img{
        width: 60px;
        height: 60px;
        padding: 8px;
    }
    .shop-num {
        font-size: 12px;
    }
    .shop-price {
        color: #ff6700;
        font-size: 20px;
    }
    .bottom-sum {
        background: #ff6700;
        color: #ffffff;
        width: 132px;
        height: 40px;
        margin-left: 70px;
    }
    .shop-bottom {
        background: #fafafa;
        width: 316px;
        display: flex;
        justify-content: center;
        padding: 7px;
    }
    .shop-title {
        line-height: 22px;
    }
      #head_landing .head_nav_a {
        margin: 6px;
          color: #b0b0b0;
      }
  /*底部服务*/
  .footer-service {
    height: 20px;
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .list-service {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .list-service li:first-child {
    border-left: 0;
  }
  .list-service li {
    float: left;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .list-service a {
    color: #616161;
    -webkit-transition: color .2s;
    transition: color .2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-service a:hover{
    color: #FF6700;
    text-decoration: none;
  }
  li.menu_li a {
      color: #333;
  }
  li.menu_li a:hover{
      color: #FF6700;
      text-decoration: none;
  }
</style>
