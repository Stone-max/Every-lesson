<template>
  <div class="gob">
    <!--头-->
    <header>
      <van-icon name="arrow-left" @click="tiao()" class="zi" />
      <h3>预约课程</h3>
      <div style="width:0.4rem"></div>
    </header>
    <!--定位的模块-->
    <nav>
      <div class="plan">
        <div class="plan-zi">
          <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt />
          <div class="plan-m">
            <p>
              <span>TNT-龙</span>
            </p>
            <p>男 4年教龄</p>
          </div>
          <van-button
            round
            type="info"
            color="#fff"
            size="small"
            block="true"
            hairline="true"
            background="#ebeefe"
            class="btnp"
            @click="tiao1()"
          >
            <span class="span">查看详情</span>
          </van-button>
        </div>
      </div>
      <!--空的div-->
      <div class="kong"></div>

      <!--时间选择-->
      <p class="big">
        <a>|</a> 选择时间
        <span>(北京时间)</span>
      </p>
      <iscroll-view class="scroll-view">
        <div class="box-one">
          <div>
            <ul>
              <li>
                <p>星期一</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期二</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期三</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期四</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期五</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期六</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期一</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期二</p>
                <p>12/15</p>
              </li>
              <li>
                <p>星期三</p>
                <p>12/15</p>
              </li>
            </ul>
          </div>
        </div>
      </iscroll-view>

      <div class="img">
        <!-- <img src="" alt=""> -->
        <p class="abs">还没有内容哦</p>
      </div>
    </nav>
    <router-link to="/"></router-link>
    <van-button type="primary" size="large" color="#eb6100" class="btns">立即预约</van-button>
  </div>
</template>
<script>
export default {
  name: "less",
  data() {
    return {
      active: 0,
      true1: true
    };
  },
  methods: {
    tiao() {
      this.$router.push("/Subscribe_one");
    },
    tiao1() {
      this.$router.push("/Lecturer_details");
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body,
.gob {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
nav {
  flex: 1;
  overflow: scroll;
  background: #f0f2f5;
  .img {
    width: 100%;
    height: 4rem;
    // border: 1px solid black;
    background: url("https://wap.365msmk.com/img/empty.0d284c2e.png") no-repeat
      center;
    .abs {
      text-align: center;
      line-height: 9rem;
      font-size: 0.18rem;
    }
  }
}
.big {
  text-indent: 0.1rem;
  padding: 0.1rem 0.1rem;
  font-size: 0.15rem;
  a {
    font-weight: 0.1rem;
    color: red;
  }
  span {
    font-size: 0.1rem;
  }
}
.scroll-view {
  height: 2rem;
  touch-action: none;
  /* -- Attention-- */
  //   position: fixed;
  //   top: 0;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-x: scroll;
  .box-one {
    width: 95%;
    // height: 100%;
    // background: #ff3333;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    background: white;

    div {
      width: 15rem;
      overflow: hidden;
      overflow-x: scroll;
      -webkit-overflow-x: scroll;
      padding: 0.2rem 0;
      ul {
        width: 11rem;
        display: flex;
        padding: 0.1rem 0;
        border-bottom: 1px solid #ccc;
        li {
          padding: 0.2rem 0;
          width: 5rem;
          text-align: center;
          display: flex;
          display: block;
          justify-content: space-around;
          text-align: center;
          p {
            text-align: center;
            font-size: 0.12rem;
          }
        }
        li:hover {
          border-bottom: 0.02rem solid blue;
          // border
          // width:0.15rem;
          color: red;
          // width:0.15rem;
        }
      }
    }
  }
}

header {
  width: 100%;
  height: 2rem;
  background: linear-gradient(#63b7fe, #4e7de3);
  background: -webkit-linear-gradient(#63b7fe, #4e7de3);
  background: -moz-linear-gradient(#63b7fe, #4e7de3);
  background: -o-linear-gradient(#63b7fe, #4e7de3);
  display: flex;
  justify-content: space-between;
  position: relative;
  h3 {
    font-weight: normal;
    font-size: 0.4rem;
    // width:6rem;
    text-align: center;
    line-height: 0.8rem;
    color: white;
  }
  .zi {
    color: white;
    font-size: 0.5rem;
    line-height: 1rem;
    text-indent: 0.1rem;
  }
}
.plan {
  top: 0.8rem;
  left: 0.2rem;
  position: absolute;
  width: 95%;
  margin: 0 auto;
  height: 1.6rem;
  border-radius: 0.1rem;
  // border: 1px solid blue;
  background: white;

  .plan-zi {
    height: 1.5rem;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;
    // flex-wrap: wrap;
    // padding: 0.0rem 0;
    display: flex;

    img {
      width: 1rem;
      height: 1rem;
      margin: 0 0.2rem;
    }
    .plan-m {
      width: 100%;
      height: 1rem;

      p {
        font-size: 0.2rem;
        color: #ccc;
        line-height: 0.6rem;
        //   text-indent: 0.1rem;

        span {
          font-size: 0.25rem;
          color: black;
          line-height: 0.1rem;
        }
        a {
          font-size: 0.1rem;
          color: red;
        }
      }
    }
  }
}
.kong {
  width: 100%;
  height: 0.8rem;
  // border: 1px solid black;
}
// .btns{
//     // flex:1;
//     // position: fixed;
//     // bottom:1rem;
//     }
.btnp {
  // color:red;
  margin: 0.4rem 0.2rem;
  width: 1.2rem;
  border: 1px solid red;
}
.span {
  color: #eb6100;
  display: block;
  width: 1.5rem;
  border: 1px solid #eb6100;
  transform: scale(1, 1);
  border-radius: 0.5rem;
  margin-left: 1rem;
}
</style>