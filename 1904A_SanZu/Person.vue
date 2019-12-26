<template>
    <div class="person">
        <div class="p-top">
            <div class="p-back">
                <img @click="back()" src="/static/img/back.png" alt="">
            </div>
            <h3>个人信息</h3>
            <div class="p-right"></div>
        </div>
        <div class="p-message">
            <ul>
                <li>
                    <span>头像</span>
                    <span>
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
                        <van-icon class="vion" name="arrow" @click="showPopup"/>
                        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
                            <ul class="s-thing">
                                <li>拍照</li>
                                <li>从手机相册选择</li>
                                <li>取消</li>
                            </ul>
                        </van-popup>
                    </span>
                    
                </li>
                <li>
                    <span>昵称</span>
                    <span>
                        <span>135****4519</span>   
                        <van-icon name="arrow" @click="showapp1"/>
                    </span>
                </li>
                <li>
                    <span>手机号</span>
                    <span>
                        <span>13520844519</span>
                    </span>
                </li>
                <li>
                    <span>性别</span>
                    <span>
                        <span>女</span>   
                        <van-icon name="arrow" @click="showapp2"/>
                    </span>
                </li>
                <li>
                    <span>出生日期</span>
                    <span>
                        <span>2001-07-19</span>   
                        <van-icon name="arrow" @click="showPopup1"/>
                        <van-popup v-model="show1" position="bottom" :style="{ height: '30%' }">
                            <van-datetime-picker
                                v-model="currentDate"
                                type="date"
                                />
                        </van-popup>
                    </span>
                </li>
                <li>
                    <span>所在城市</span>
                    <span>
                        <span>北京,北京市,东城区</span>   
                        <van-icon name="arrow" @click="showPopup2"/>
                        <van-popup v-model="show2" position="bottom" :style="{ height: '30%' }">
                            <van-area :area-list="areaList" />
                        </van-popup>
                    </span>
                </li>
                <li>
                    <span>课程</span>
                    <span>
                        <span>语文</span>   
                        <van-icon name="arrow" @click="showapp3"/>
                    </span>
                </li>
                <li>
                    <span>年级</span>
                    <span>
                        <span>高三</span>   
                        <van-icon name="arrow" @click="showPopup3"/>
                        <van-popup v-model="show3" position="bottom" :style="{ height: '30%' }">
                                <van-picker
                                show-toolbar
                                :columns="columns"
                                @cancel="onCancel"
                                @confirm="onConfirm"
                              />
                        </van-popup>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"person",
    data() {
        return {
            columns: ['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级','小学六年级','初一','初二','初三','高一','高二','高三'],
            currentDate: new Date(),
            show: false,
            show1:false,
            show2:false,
            show3:false,
            areaList:{
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区'
                    
                }
            }
        }
    },

    methods: {
        showPopup() {
            this.show = true;
        },
        showPopup1() {
            this.show1 = true;
        },
        showPopup2() {
            this.show2 = true;
        },
        showPopup3() {
            this.show3 = true;
        },
        showapp1(){
            this.$router.push("/edit")
        },
        showapp2(){
            this.$router.push("/sex")
        },
        showapp3(){
            this.$router.push("/course")
        },
        back(){
            this.$router.push("/wo")
        },
        onConfirm(value, index) {
            Toast(`当前值：${value}, 当前索引：${index}`);
        },
        onCancel() {
            Toast('取消');
        }
    }
}
</script>
<style lang="scss" scoped>
    body,ul,li,div,p,h1,h3,h6{
        margin: 0;
        padding: 0;
        list-style:none;
    }
    .person{
        width:100%;
        height:100%;
        background: #f0f2f5;
        display: flex;
        flex-direction: column;
    }
    .p-top{
        height:0.88rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        background: #fff;
    }
    .p-top>h3{
        font-size: 0.48rem;
        color:#595959;
        font-weight: normal;
    }
    .p-back{
        width:0.8rem;
        height:0.88rem;
    }
    .p-back>img{
        display:block;
        margin: auto;
        width:0.2rem;
        height:0.32rem;
        margin-top: 0.24rem;
    }
    .p-message{
        margin-top: 0.2rem;
        background: #fff;
        flex:1;
        overflow-y: scroll;
    }
    .p-message>ul{
        padding: 0.12rem 0.4rem;
    }
    .p-message>ul>li{
        height:1.1rem;
        border-bottom: 1px solid #f0f2f5;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .p-message>ul>li>span{
        font-size: 0.36rem;
        color:#595959;
    }
    .p-message>ul>li>span>span{
        font-size: 0.3rem;
        color:#8c8c8c;
    }
    .p-message>ul>li>span:nth-child(2){
        position: relative;
        margin-right: 0.6rem;
    }
    .p-message>ul>li img{
        width:0.74rem;
        height:0.74rem;
    }
    .vion{
        line-height: 0.74rem;
    }
    .van-icon{
        font-size: 0.46rem;
        color:#ccc;
        position: absolute;
        top: 0.06rem;
        right: -0.8rem;
    }
    .s-thing{
        padding: 0.13rem 0.4rem;
    }
    .s-thing>li{
        text-align: center;
        font-size:0.34rem;
        line-height: 1rem;
        color:#000;
    }
    
</style>