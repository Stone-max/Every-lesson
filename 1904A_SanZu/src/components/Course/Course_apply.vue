<template>
  <div class="submit">
    <!-- 头部 -->
    <div class="headers">
      <van-icon name="arrow-left" size="0.4rem" @click="returns()" />
      <b>确认订单</b>
    </div>
    <!-- 内容 -->
    <nav>
      <div class="teacher">
        <span>
          <p>沈老师课堂（陈同学）</p>
          <p>100.00</p>
        </span>
        <p>12月14日 17:00~12月14日 22:00</p>
        <p>授课老师：绳华桥</p>
      </div>

      <!-- 优惠券 -->
      <div class="discounts">
        <p>优惠券</p>
        <p>无可用</p>
      </div>

      <!-- 金额 -->
      <div class="money">
        <ul>
          <li>
            <p>商品金额</p>
            <p>100.00</p>
          </li>
          <li>
            <p>优惠券金额</p>
            <p>0</p>
          </li>
          <li>
            <p>合计</p>
            <p style="color:red">100.00</p>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 提交 -->
    <div class="over">
      <p>
        实售价格：
        <b>100.00</b>
      </p>
      <button @click="over()">提交订单</button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "Course_apply",
  methods: {
    returns() {
      this.$router.push("/Course_details");
    },
    over() {
      Dialog.confirm({
        title: "提示",
        confirmButtonText:"去充值",
        confirmButtonColor:"blue",
        message: "很抱歉，学习币余额不足，无法完成支付!"
      })
        .then(() => {
          // this.$router.push("/tiku")
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="scss" scoped>
header,
div,
p,
hr,
h2,
h3,
h4,
b,
span {
  margin: 0;
  padding: 0;
  list-style: none;
}
.submit {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  nav {
    flex: 1;
    background: #eee;
  }
}
.headers {
  padding: 0.3rem;
  border-bottom: 0.01rem solid #eee;
  position: relative;
  i {
    position: absolute;
    left: 0.3rem;
  }
  b {
    display: block;
    text-align: center;
  }
}
.teacher {
  background: white;
  margin: 0.3rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem;
  font-size: 0.3rem;
  span {
    display: flex;
    justify-content: space-between;
  }
  > p {
    color: #6f6f6f;
  }
}
.discounts {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  border-bottom: 0.3rem solid #eee;
  p:nth-child(2) {
    color: #6f6f6f;
  }
}
.money {
  padding: 0.3rem;
  background: white;
  font-size: 0.3rem;
  ul {
    li {
      margin: 0.1rem;
      color: #6f6f6f;
      display: flex;
      justify-content: space-between;
      p:nth-child(2) {
        background: url(https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png)
          no-repeat left;
        background-size: 0.3rem;
        padding-left: 0.4rem;
      }
    }
  }
}
.over {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.26rem;
  p {
    b {
      background: url(https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png)
        no-repeat left;
      background-size: 0.3rem;
      padding-left: 0.4rem;
      color: red;
      font-size: 0.3rem;
    }
  }
  button {
    width: 2.7rem;
    height: 100%;
    border: none;
    background: orangered;
    color: white;
  }
}
</style>