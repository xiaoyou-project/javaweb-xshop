<template>
  <div id="app">
    <div class="head_box">
      <div id="head_wrap">
        <div id="head_nav">
          <a class="head_nav_a" href="/">主页</a>
          <div v-for="item in topLink" :key="item">
            <span>|</span>
            <a class="head_nav_a" target="_blank" :href="item.url">{{ item.name }}</a>
          </div>
        </div>
        <div id="head_right">
          <div id="head_landing">
            <a class="head_nav_a">登陆</a>
            <span>|</span>
            <a class="head_nav_a">注册</a>
          </div>
          <div id="head_car">
            <a class="head_car_text">购物车（0）</a>
            <div id="car_content" style="height: 0px;width:0px ;background-color: #edffc6;z-index: 999">
              <a class="car_text"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <div id="foot_box">
      <div id="foot_wrap">
        <div class="footer-service">
          <ul class="list-service clearfix">
            <li>
              <a rel="nofollow" href="//www.mi.com/static/fast/" target="_blank"><v-icon name="wrench" />预约维修服务</a>
            </li>
            <li>
              <a rel="nofollow" href="//www.mi.com/service/exchange#back" target="_blank"><v-icon name="recycle" />7天无理由退货</a>
            </li>
            <li>
              <a rel="nofollow" href="//www.mi.com/service/exchange#back" target="_blank"><v-icon name="truck" />15天免费换货</a>
            </li>
            <li>
              <a rel="nofollow" href="//www.mi.com/service/buy/Postal%20policy" target="_blank"><v-icon name="gift" />满99元包邮</a>
            </li>
            <li>
              <a rel="nofollow" href="//www.mi.com/static/maintainlocation/" target="_blank" ><v-icon name="map-marker-alt"/>520余家售后网点</a>
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
            <span class="foot_note_txt">
              <a>小米商城</a><h>|</h><a>MIUI</a><h>|</h><a>米家</a><h>|</h><a>米聊</a><h>|</h><a>多看</a><h>|</h><a>游戏</a><h>|</h><a>小米天猫店</a><h>|</h><a>小米集团隐私政策</a><h>|</h><a>小米商城用户协议</a><h>|</h><a>问题反馈</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="./assets/css/xiaomi.css" scoped />
<script>
  export default {
    name: "index",
    data() {
      const topLink =[
        {name: "博客",url: "https://xiaoyou66.com"},
        {name: "github",url: "https://github.com/xiaoyou66"},
        {name: "B站",url: "https://space.bilibili.com/343147393"},
      ]
      return{
        topLink
      }
    }
  }
</script>
<style>
  body{
    margin: 0;
  }
</style>
<style scoped>
  #head_landing .head_nav_a {
    margin: 6px;
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
</style>
