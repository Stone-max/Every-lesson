<template>
  <div class="box">
    <div>
      <div class="home-top">
        <p class="p"></p>
        <div class="home_up">
          <div class="home_tpda">
            <ul>
              <li @click="ends()">
                <img src="/static/img/avatar.jpg" alt />
                <img src="/static/img/img00.png" alt class="img" />
                <h6>
                  {{list.nickname}}
                  <img src="/static/img/img000.png" alt class="img0" />
                </h6>
              </li>
              <!-- 跳转约课页面 -->
              <h5 @click="tiao()">去约课</h5>
            </ul>
          </div>
          <div class="home_bot">
            <ul>
              <li>
                <p>0</p>
                <h4>我的特色课</h4>
                <h5>已特色课学习</h5>
              </li>
              <li>
                <p>0</p>
                <h4>我的特色课</h4>
                <h5>已特色课学习</h5>
              </li>
              <li>
                <p>0</p>
                <h4>我的特色课</h4>
                <h5>已特色课学习</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="home_navv">
        <ul class="home_nav">
          <li>
            <img src="/static/img/img07.png" alt />
            <div>
              <p>邀请好友注册APP，享多重好礼</p>
              <h5>限时特惠，多邀多得</h5>
            </div>
            <i>
              <van-icon name="arrow" />
            </i>
          </li>
        </ul>
      </div>

      <div class="home_att">
        <h3>课程相关</h3>
        <ul>
          <router-link to="Mine_attention" tag="li">
            <img src="/static/img/img08.png" alt />
            <i>关注我的老师</i>
          </router-link>
          <router-link to="Mine_collect" tag="li">
            <img src="/static/img/img09.png" alt />
            <i>我的收藏</i>
          </router-link>
        </ul>
      </div>
      <div class="home_add">
        <h3>我的账户</h3>
        <ul>
          <li>
            <img src="/static/img/img10.png" alt />
            <i>课程订单</i>
          </li>
          <li>
            <img src="/static/img/img10.png" alt />
            <i>会员订单</i>
          </li>

          <li>
            <img src="/static/img/img10.png" alt />
            <i>约课订单</i>
          </li>
        </ul>
      </div>
      <div class="home_app">
        <h3>我的账户</h3>
        <ul>
          <li>
            <img src="/static/img/img11.png" alt />
            <i>优惠券</i>
          </li>
          <li>
            <img src="/static/img/img12.png" alt />
            <i>学习卡</i>
          </li>

          <li>
            <img src="/static/img/img13.png" alt />
            <i>会员</i>
          </li>
        </ul>
      </div>
      <div class="home_auu">
        <h3>自助服务</h3>
        <ul>
          <li>
            <img src="/static/img/img14.png" alt />
            <i>我的消息</i>
          </li>
          <li>
            <img src="/static/img/img15.png" alt />
            <i>意见反馈</i>
          </li>

          <li>
            <img src="/static/img/img16.png" alt />
            <i>在线客服</i>
          </li>
          <router-link to="/Mine_set" tag="li">
            <img src="/static/img/img17.png" alt />
            <i>设置</i>
          </router-link>
        </ul>
      </div>
    </div>
    <footer>
      <ul class="footer_ul">
        <li @click="tiao()">
          <i class="fa fa-cogs"></i>
          <p>首页</p>
        </li>
        <li @click="tiao2()">
          <i class="fa fa-cutlery"></i>
          <p>课程</p>
        </li>
        <li @click="tiao3()">
          <i class="fa fa-credit-card-alt"></i>
          <p>约课</p>
        </li>
        <li @click="tiao4()">
          <i class="fa fa-dot-circle-o"></i>
          <p>练习</p>
        </li>
        <li class="li">
          <i class="fa fa-eye-slash"></i>
          <p>我的</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Mine_home",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios
      .get("https://test.365msmk.com/api/app/userInfo?", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("remember")
        }
      })
      .then(res => {
        console.log(res);
        this.list = res.data.data;
      });
  },
  methods: {
    tiao() {
      this.$router.push("/Home");
    },
    tiao2() {
      this.$router.push("/Course");
    },
    tiao3() {
      this.$router.push("/Subscribe");
    },
    tiao4() {
      this.$router.push("/practise");
    },
    tiao5() {
      this.$router.push("/Subscribe_one");
    },
    ends() {
      this.$router.push("/Personal_details");
    }
  }
};
</script>

<style lang="scss" scoped>
ul,
li,
p,
i,
body,
span,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: normal;
}
.box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.box > div {
  // height: 12.39rem;
  flex: 1;
  overflow: scroll;
}

.home-top {
  width: 100%;
  height: 4.7rem;
  position: relative;
  .p {
    width: 100%;
    height: 2.7rem;
    background: url("/static/img/user_bg.ab306a5c.png") no-repeat top;
    background-size: 100%;
    display: block;
  }
  .home_up {
    width: 6.88rem;
    height: 3.4rem;
    border-radius: 0.15rem;
    position: absolute;
    box-shadow: 2px 2px 2px 2px #f3f3f3;
    top: 1.2rem;
    left: 0.3rem;
    background-color: #ffffff;
    .home_tpda {
      ul {
        height: 1.5rem;
        padding: 0.2rem 0 0 0;
        display: flex;
        align-items: center;
        li {
          display: flex;
          justify-content: space-around;
          align-items: center;
          img {
            width: 1.18rem;
            height: 1.18rem;
            margin-left: 0.1rem;
          }
          .img0 {
            width: 0.3rem;
            height: 0.3rem;
            margin-left: 0.1rem;
          }
          .img {
            width: 0.5rem;
            height: 0.5rem;
            position: absolute;
            top: 0.2rem;
            bottom: 0;
            left: 0.89rem;
          }
          h6 {
            width: 4.3rem;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.25rem;
            text-indent: 0.13rem;
          }
        }
        h5 {
          width: 1.1rem;
          height: 0.5rem;
          line-height: 0.5rem;
          display: inline-block;
          background-color: #fb5500;
          color: #ffffff;
          font-weight: normal;
          font-size: 0.1rem;
          text-indent: 0.4rem;
          border-bottom-left-radius: 0.26rem;
          border-top-left-radius: 0.26rem;
        }
      }
    }
  }
  .home_bot {
    width: 100%;
    height: 1.5rem;
    ul {
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        width: 30%;
        border-right: 1px solid#ccc;
        p {
          height: 0.4rem;
          line-height: 0.4rem;
          font-weight: bold;
          color: #fb5500;
          text-align: center;
        }
        h4 {
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          font-size: 0.25rem;
        }
        h5 {
          height: 0.4rem;
          list-style: 0.4rem;
          text-align: center;
          font-size: 0.18rem;
          color: #b1b1b1;
        }
      }
    }
  }
}
.home_navv {
  width: 100%;
  height: 1.5rem;
  padding: 0.28rem 0 0 0;
  .home_nav {
    width: 6.92rem;
    height: 0.9rem;
    background: linear-gradient(right, #ff944c, #fb5500);
    border-radius: 0.5rem;
    margin-left: 0.3rem;
    margin-top: 0.14rem;
    li {
      height: 0.9rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #ffffff;
      img {
        width: 0.45rem;
        height: 0.4rem;
      }
      p {
        font-size: 0.28rem;
      }
      h4 {
        font-size: 0.22rem;
      }
    }
  }
}
.home_att {
  width: 100%;
  height: 2.2rem;
  border-bottom: 1px solid #f0f0f0;
  h3 {
    width: 100%;
    height: 0.95rem;
    line-height: 0.95rem;
    text-indent: 0.3rem;
  }
  ul {
    height: 1.25rem;
    display: flex;
    align-items: center;

    li {
      width: 1.87rem;
      height: 1.22rem;
      text-align: center;
      font-size: 0.2rem;
      color: #b1b1b1;
      display: block;
      padding: 0.25rem 0 0 0.2rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
      }
      i {
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-style: normal;
        display: block;
      }
    }
  }
}
.home_add {
  width: 100%;
  height: 2.2rem;
  border-bottom: 1px solid #f0f0f0;
  h3 {
    width: 100%;
    height: 0.95rem;
    line-height: 0.95rem;
    text-indent: 0.3rem;
  }
  ul {
    width: 100%;
    height: 1.25rem;
    display: flex;
    align-items: center;
    li {
      width: 2rem;
      height: 1.22rem;
      text-align: center;
      font-size: 0.2rem;
      color: #b1b1b1;
      display: block;
      padding: 0.25rem 0 0 0.2rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
      }
      i {
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-style: normal;
        display: block;
      }
    }
  }
}
.home_app {
  width: 100%;
  height: 2.2rem;
  border-bottom: 1px solid #f0f0f0;
  h3 {
    width: 100%;
    height: 0.95rem;
    line-height: 0.95rem;
    text-indent: 0.3rem;
  }
  ul {
    width: 100%;
    height: 1.25rem;
    display: flex;
    align-items: center;
    li {
      width: 2rem;
      height: 1.22rem;
      text-align: center;
      font-size: 0.2rem;
      color: #b1b1b1;
      display: block;
      padding: 0.25rem 0 0 0.2rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
      }
      i {
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-style: normal;
        display: block;
      }
    }
  }
}
.home_auu {
  width: 100%;
  height: 2.2rem;
  border-bottom: 1px solid #f0f0f0;
  h3 {
    width: 100%;
    height: 0.95rem;
    line-height: 0.95rem;
    text-indent: 0.3rem;
  }
  ul {
    width: 100%;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      width: 28%;
      height: 1.22rem;
      text-align: center;
      font-size: 0.2rem;
      color: #b1b1b1;
      display: block;
      padding: 0.25rem 0 0 0;
      img {
        width: 0.5rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
      }
      i {
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-style: normal;
        display: block;
      }
    }
  }
}
footer {
  width: 100%;
  height: 1rem;
  .footer_ul {
    height: 1rem;
    display: flex;
    list-style: none;
    li {
      width: 20%;
      // line-height: 1.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i {
        display: block;
        font-size: 0.3rem;
        text-align: center;
      }
      p {
        margin-top: 0.1rem;
        font-size: 0.26rem;
        text-align: center;
      }
    }
  }
  .li {
    color: #fd6103;
  }
}
</style>