<template>
  <div class="HH">
    <div class="home">
        <!-- 时间开始 -->
      <div class="xiawu"><img src="/static/img/tu_01.jpg" alt=""></div>
      <!-- 时间结束 -->
      <!-- 轮播图上开始 -->
      <div class="up1">
          <div>
              <img src="/static/img/tu_04.jpg" alt="" class="upi1">
              <img src="/static/img/tu_07.jpg" alt="" class="upi2">
          </div>
      </div>
      <!-- 轮播图上结束 -->
      <!-- 轮播图开始 -->
      <van-swipe :autoplay="3000" indicator-color="white" class="banner">
        <van-swipe-item><img src="/static/img/tu_11.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="/static/img/tu_26.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="/static/img/tu_11.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="/static/img/tu_11.jpg" alt=""></van-swipe-item>
      </van-swipe>
      <!-- 轮播图结束 -->
      <!-- 名师开始 -->
      <div class="mingshi">
          <ul>
              <li @click="tiao3()"><img src="/static/img/tu_14.jpg" alt=""><p>特色课</p></li>
              <li @click="tiao2()"><img src="/static/img/tu_16.jpg" alt=""><p>一对一辅导</p></li>
              <li @click="tiao1()"><img src="/static/img/tu_18.jpg" alt="">
                <p>跳转日历</p>
              </li>
          </ul>
      </div>
      <!-- 名师结束 -->
      <!-- 专题开始 -->
      <div class="zhuan">
          <p>专题</p>
      </div>
      <!-- 专题结束 -->
      <!-- 图开始 -->
      <div class="yasi">
          <div class="left">
            <p>雅思语法专题</p>
            <img src="/static/img/ii_06.jpg" alt="">
          </div>
          <div class="right">
              <div class="top"><img src="/static/img/ii_03.jpg" alt=""><p>雅思语法专题</p></div>
              <div class="down"><img src="/static/img/ii_09.jpg" alt=""><span>耶斯写作专题</span></div>
          </div>
      </div>
      <!-- 图结束 -->
      <!-- 直播开始 -->
      <div class="zhuan">
          <p>直播</p>
      </div>
      <!-- 直播结束 -->
      <!-- 英语开始 -->
      <div class="yingyu">
          <ul>
              <li><img src="/static/img/tu_26.jpg" alt=""><p>雅思英语七日培训班</p></li>
              <li><img src="/static/img/tu_26.jpg" alt=""><p>雅思英语七日培训班</p></li>
              <li><img src="/static/img/tu_26.jpg" alt=""><p>雅思英语七日培训班</p></li>
              <li><img src="/static/img/tu_26.jpg" alt=""><p>雅思英语七日培训班</p></li>
              <li><img src="/static/img/tu_26.jpg" alt=""><p>雅思英语七日培训班</p></li>
          </ul>
      </div>
      <!-- 英语结束 -->
      <!-- 今日开始 -->
      <div class="jinri">
          <div class="jintou">
              <p class="jinke">今日好课</p>
              <span>更多 ></span>
          </div>
          <!-- 图片加字开始 -->
          <ul>
              <li>
                <img src="/static/img/tu_30.jpg" alt="">
                <p class="rip1">不只是一份毕业设</p>
                <div>
                    <p class="rip2"><img src="/static/img/tu_03.jpg" alt="" class="rii1">520</p>
                    <p class="rip3"><img src="/static/img/tu_05.jpg" alt="" class="rii2">520</p>
                    <p class="rip4">￥ 1998.0</p>
                </div>
              </li>
              <li>
                <img src="/static/img/tu_30.jpg" alt="">
                <p class="rip1">不只是一份毕业设</p>
                <div>
                    <p class="rip2"><img src="/static/img/tu_03.jpg" alt="" class="rii1">520</p>
                    <p class="rip3"><img src="/static/img/tu_05.jpg" alt="" class="rii2">520</p>
                    <p class="rip4">￥ 1998.0</p>
                </div>
              </li>
              <li>
                <img src="/static/img/tu_30.jpg" alt="">
                <p class="rip1">不只是一份毕业设</p>
                <div>
                    <p class="rip2"><img src="/static/img/tu_03.jpg" alt="" class="rii1">520</p>
                    <p class="rip3"><img src="/static/img/tu_05.jpg" alt="" class="rii2">520</p>
                    <p class="rip4">￥ 1998.0</p>
                </div>
              </li>
              <li>
                <img src="/static/img/tu_30.jpg" alt="">
                <p class="rip1">不只是一份毕业设</p>
                <div>
                    <p class="rip2"><img src="/static/img/tu_03.jpg" alt="" class="rii1">520</p>
                    <p class="rip3"><img src="/static/img/tu_05.jpg" alt="" class="rii2">520</p>
                    <p class="rip4">￥ 1998.0</p>
                </div>
              </li>
          </ul>
      </div>
      <!-- 今日结束 -->
      <!-- 知名老师开始 -->
      <div class="zhiming">
          <div class="zhitou">
              <p>知名老师</p>
              <span>更多 ></span>
          </div>
          <ul class="zhi">
            <li v-for="(item,key) in arr" :key="key" @click="tiao()">
              <img :src="'/static/img/'+item.img" alt="">
              <div class="zd1">
                  <div class="zd2">
                      <p class="zp1">{{item.name}}</p>
                      <p class="zp2">{{item.di}}</p>
                  </div>
                  <span>{{item.j}}</span>
              </div>
            </li>
          </ul>
      </div>
      <!-- 知名老师结束 -->
    </div>
      
      <Foote></Foote>
  </div>  
</template>

<script>
import axios from "axios";
import Foote from "../Foot";
  export default {
    name:"Home",
    components:{Foote},
    data(){
      return{
        arr:[]
      }
    },
    created(){
      var that=this;
      axios.get("/static/Home.json").then(function(msg){
        // console.log(msg.data)
        that.arr=msg.data;
      }).catch(function(error){
        console.log("出错了");
      })
    },
    methods:{
      tiao(){
        this.$router.push("/Lecturer_details")
      },
      tiao1(){
        this.$router.push("/Home_day")
      },
      tiao2(){
        this.$router.push("/Subscribe_one")
      },
      tiao3(){
        this.$router.push("/Course")
      }
      
    }
  }
</script>

<style lang="scss" scoped>
.HH{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home{
  width: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  // overflow: hidden;
  overflow-x: hidden;
}
span,p,div,img,ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align:top;
}
    .xiawu{
      width: 7.5rem;
      img{
        display: block;
        width: 7.5rem;
        height: 0.4rem;
      }
    }
    .up1{
      width: 7.5rem;
      div{
        width: 6.9rem;
        height: 0.88rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .upi1{
          height: 0.66rem;
          display: block;
          width: 1.74rem;
        }
        .upi2{
          height: 0.42rem;
          display: block;
          width: 0.34rem;
        }
      }
    }
    .banner{
      width: 7.5rem;
      height: 4.16rem;
        img{
          width: 7.5rem;
          height: 4.16rem;
        }
    }
    .mingshi{
      ul{
        width: 7.5rem;
        height: 1.78rem;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 33.3%;
          padding-top: 0.26rem;
          img{
            height: 0.72rme;
            width: 0.72rem;
            display: block;
            margin: 0 auto;
            vertical-align:top;
          }
          p{
            font-size: 0.2rem;
            color: #646464;
            text-align: center;
            line-height: 0.76rem;
          }
        }
      }
    }
    .zhuan{
      padding-left: 0.3rem;
      height: 1.04rem;
      background: #fafafa;
      display: flex;
      align-items: center;
      p{
        width: 0.86rem;
        font-size: 0.28rem;
        font-weight: bold;
        text-align: right;
        border-left: 0.04rem solid red;
      }
    }
    .yasi{
      width: 7.5rem;
      display: flex;
      flex-wrap: wrap;
    }
    .left{
        width: 3.5rem;
        border-right: 0.01rem solid f6f6f6;
        height: 2.98rem;
        p{
          font-size: 0.3rem;
          margin-top: 0.3rem;
          margin-left: 0.32rem;
        }
        img{
          display: block;
          height: 1.64rem;
          width: 1.84rem;
          margin: 0 auto;
          margin-top: 0.06rem;
        }
      }
      .right{
        width: 3.49rem;
        .top{
          border-bottom: 0.01rem solid #f6f6f6;
          display: flex;
          flex-wrap: wrap;
          height: 1.48rem;
          align-items: center;
          img{
            height: 0.9rem;
            display: block;
            width: 0.92rem;
            margin-left: 0.44rem;
          }
          p{
            font-size: 0.3rem;
            margin-left: 0.15rem;
          }
        }
        .down{
          height: 1.49rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          img{
            height: 0.9rem;
            display: block;
            width: 0.92rem;
            margin-left: 0.44rem;
          }
          span{
            display: block;
            font-size: 0.3rem;
            margin-left: 0.15rem;
          }
        }
      }
    .yingyu{
      width: 7.5rem;
      ul{
        width: 7.5rem;
        background: #fafafa;
        display: flex;
        overflow-X: scroll;
        padding-left: 0.28rem;
        padding-bottom: 0.3rem;
        li{
          width: 2.9rem;
          background: #fff;
          border-radius: 0.2rem;
          margin-right: 0.16rem;
          img{
            display: block;
            margin: 0 auto;
            width: 2.7rem;
            height: 1.5rem;
            vertical-align: top;
          }
          p{
            font-size: 0.3rem;
            font-weight: bold;
            margin-left: 0.1rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            width: 2.16rem;
            line-height: 0.74rem;
          }
        }
      }
    }
    .jinri{
      padding-left: 0.3rem;
      border-bottom: 0.3rem solid #fafafa;
      .jintou{
        height: 0.9rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        p{
          font-size: 0.28rem;
          width: 5.98rem;
          border-left: 0.04rem solid red;
          padding-left: 0.22rem;
        }
        span{
          display: block;
          font-size: 0.2rem;
          color: #bebebe;
        }
      }
      ul{
        width: 7.2rem;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 3.32rem;
          margin-right: 0.24rem;
          img{
            width: 3.32rem;
            display: block;
            height: 1.84rem;
          }
          .rip1{
            line-height: 0.66rem;
            font-size: 0.28rem;
          }
          div{
            display: flex;
            flex-wrap: wrap;
            height: 0.4rem;
            .rip2{
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              font-size: 0.16rem;
              color: #cdcdcd;
              .rii1{
                width: 0.26rem;
                height: 0.15rem;
                margin-right: 0.11rem;
              }
            }
            .rip3{
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              font-size: 0.16rem;
              color: #cdcdcd;
              margin-left: 0.1rem;
              .rii2{
                width: 0.2rem;
                height: 0.15rem;
                margin-right: 0.11rem;
              }
            }
            .rip4{
              font-size: 0.21rem;
              color: red;
              font-weight: bold;
              text-align: right;
              width: 1.74rem;
            }
          }
        }
      }
    }
    .zhitou{
      width: 6.9rem;
      height: 1.04rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;

      p{
        font-size: 0.28rem;
        border-left: 0.04rem solid red;
        height: 0.3rem;
        padding-left: 0.22rem;
      }
      span{
        font-size: 0.2rem;
        color: #bebebe;
        display: block;
      }
    }
    .zhi{
      li{
        width: 6.3rem;
        border: 0.02rem solid #fafafa;
        padding: 0.3rem 0.3rem 0.26rem 0.3rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.32rem;
        img{
          width: 0.88rem;
          height: 0.88rem;
          display: block;
        }
        .zd1{
          width: 5rem;
          margin-left: 0.22rem;
          .zd2{
            display: flex;
            flex-wrap: wrap;
            height: 0.52rem;
            .zp1{
              font-size: 0.28rem;
              font-weight: bold;
            }
            .zp2{
              font-size: 0.22rem;
              color: #999999;
              margin-top: 0.04rem;
              margin-left: 0.15rem;
            }
          }
          span{
            font-size: 0.22rem;
            display: block;
            color: #999;
            width: 4.96rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
</style>