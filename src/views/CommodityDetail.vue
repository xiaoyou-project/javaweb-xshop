<template>
    <div class="mainDiv">
        <h1>商品详情界面</h1>
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
                    <h2>小米10 Pro</h2>
                </el-header>
                <el-main style="width: 40em;">
                    <div>
                        {{ commodityReferral }}
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
                        <div> {{ commoditySimpleDetail }} </div>
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
        props: [ 'id' ],
        name: "CommodityDetail",
        data() {
            return {
                imgList: [ // 轮播图的图片
                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg',
                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493337.56513921.jpg',
                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493347.45562393.jpg',
                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493356.23386064.jpg',
                    'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493365.27036533.jpg'
                ],
                commodityReferral: '「赠立式风冷无线充；信用卡分期享24期免息；+99元得价值499元小米小爱老师」向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC',
                price: 66,
                commoditySimpleDetail: 'RedmiBook 13 锐龙版 R5 16G 512G SATA SSD 集显 月光银' // 简略描述信息
            }
        },
        methods: {
            addCommodity(){
                console.log(this.$props.id)
            }
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
