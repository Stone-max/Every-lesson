<template>
  <div class="mine">
    <div v-for="(v,i) in list" :key="i">
      <div class="mine_top" @click="tiao()">
        <img :src="v.img" alt />
      </div>
      <div class="mine_img">
        <img :src="v.img1" alt />
      </div>
      <div class="mine_cont">
        <div class="mine_contTop">
          <span>
            <img src="/static/img/img05.jpg" alt />
          </span>
          <div>
            <input type="number" placeholder="请输入手机号" v-model="tel" />
            <button @click="posts()">{{v.but}}</button>
          </div>
        </div>
        <div class="mine_contBot">
          <span>
            <img :src="v.img3" alt />
          </span>
          <div>
            <input type="number" placeholder="请输入手机验证码" v-model="repass" />
          </div>
        </div>
      </div>
      <div class="mine_enter">
        <button @click="reg()">{{v.butn}}</button>
        <ul>
          <p>{{v.li}}</p>
          <li @click="login()">{{v.li1}}</li>
        </ul>
      </div>
      <div class="mine_but">
        <p></p>
        <span>{{v.span}}</span>
        <p></p>
      </div>
      <div class="mine_foot">
        <ul>
          <li>
            <img :src="v.img4" alt />
            <i>{{v.i}}</i>
          </li>
          <li>
            <img :src="v.img5" alt />
            <i>{{v.i1}}</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Mine",
  data() {
    return {
      list: [],
      tel: "",
      repass: ""
    };
  },
  created() {
    axios.get("/static/mine.json").then(res => {
      console.log(res);
      this.list = res.data.mine;
    });
  },
  methods: {
    tiao() {
      this.$router.go("-1");
    },
    login() {
      this.$router.push("/Mine_login");
    },
    reg() {
       // 验证手机号格式、输入框是否为空
      if (this.tel == "" || this.tel.length != 11) {
        Toast("请输入正确的手机号格式");
        return false;
        //验证验证码
      } else if (this.repass == "") {
        Toast("请输入验证码");
        return false;
      } else {
        // 请求验证码
        axios
          .post("https://test.365msmk.com/api/app/login", {
            mobile: this.tel,
            sms_code: this.repass,
            type: 2
          })
          .then(res => {
            // 判断验证状态 验证状态为201为验证码不正确
            if (res.data.code != 200) {
              Toast(res.data.msg);
              return false;
            } else {
              Toast(res.data.msg);
              //验证通过
              //判断是否设置过密码
              //当is_new的值为1的时候密码为未设置，否之为设置过的
              localStorage.setItem("remember_token",res.data.data.remember_token)
              sessionStorage.setItem("tel",this.tel)
              sessionStorage.setItem("repass",this.repass)
              if (res.data.data.is_new != 1) {
                // 如果没有设置过就跳转到设置初始密码页面
                this.$router.push("/Mine_home");
              } else {
                //如果设置过了就直接跳转到主页
                this.$router.push("/Mine_loginthen");
              }
            }
          });
      }
    },
    posts() {
      // 验证手机号
      if (this.tel == "" || this.tel.length != 11) {
        Toast("请输入正确的手机号格式");
        return false;
      } else {
        axios
          .post("https://test.365msmk.com/api/app/smsCode", {
            mobile: this.tel,
            sms_type: "login"
          })
          .then(res => {
            if (res.data.code != 200) {
              Toast(res.data.msg);
              return false;
            } else {
              Toast(res.data.msg);
            }
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
ul,
li,
p,
span,
i {
  margin: 0;
  padding: 0;
  list-style: none;
}
.mine_top {
  width: 100%;
  height: 0.84rem;

  img {
    width: 0.28rem;
    height: 0.36rem;
    margin-left: 0.26rem;
    margin-top: 0.27rem;
  }
}
.mine_img {
  width: 100%;
  height: 3.45rem;
  text-align: center;
  line-height: 3.45rem;
  img {
    width: 5.15rem;
    height: 1.52rem;
    line-height: 1.52rem;
    padding: 1.2rem 0 0 0;
  }
}
.mine_cont {
  width: 100%;
  height: 3.09rem;
  .mine_contTop {
    width: 100%;
    height: 1.05rem;
    display: flex;
    align-items: center;
    span {
      width: 1.36rem;
      height: 0.73rem;
      line-height: 0.73rem;
      display: block;
      text-align: center;
      img {
        width: 0.24rem;
        height: 0.36rem;
        margin: 0 auto;
      }
    }
    div {
      width: 5.47rem;
      height: 0.68rem;
      line-height: 0.68rem;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      p {
        width: 3.8rem;
        height: 0.68rem;
        color: #bebebe;
        font-size: 0.26rem;
      }
      button {
        width: 1.6rem;
        height: 0.5rem;
        background: #eb6100;
        color: #ffffff;
        border: none;
        display: block;
        font-size: 0.2rem;
        line-height: 0.5rem;
      }
      input {
        width: 3.8rem;
        height: 0.68rem;
        font-size: 0.26rem;
        border: none;
      }
    }
  }
  .mine_contBot {
    width: 100%;
    height: 1.05rem;
    display: flex;
    align-items: center;
    span {
      width: 1.36rem;
      height: 0.73rem;
      line-height: 0.73rem;
      display: block;
      text-align: center;
      img {
        width: 0.3rem;
        height: 0.32rem;
        margin: 0 auto;
      }
    }
    div {
      width: 5.47rem;
      height: 0.68rem;
      line-height: 0.68rem;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      p {
        width: 3.8rem;
        height: 0.68rem;
        color: #bebebe;
        font-size: 0.26rem;
      }
      input {
        width: 3.8rem;
        height: 0.68rem;
        font-size: 0.26rem;
        border: none;
      }
    }
  }
}
.mine_enter {
  width: 100%;
  height: 1.58rem;
  text-align: center;
  button {
    width: 6.15rem;
    height: 0.9rem;
    background: #eb6100;
    border: none;
    color: #ffff;
    font-size: 0.36rem;
    border-radius: 10px;
    display: block;
    margin-left: 0.65rem;
  }
  ul {
    height: 0.6rem;
    display: flex;
    align-items: center;
    p {
      width: 5.78rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.22rem;
      color: #999999;
      margin-left: -0.88rem;
    }
    li {
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.22rem;
      color: #999999;

      margin-left: 0.7rem;
    }
  }
}
.mine_but {
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    width: 2.15rem;
    height: 0.05rem;
    line-height: 0.15rem;
    background-color: #f4f4f4;
  }
  span {
    font-size: 0.23rem;
    color: #9999;
  }
}
.mine_foot {
  width: 100%;
  height: 1.99rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  ul {
    width: 3.56rem;
    height: 1.52rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      width: 50%;
      height: 0.42rem;
      line-height: 0.42rem;
      text-align: center;
      i {
        display: block;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.22rem;
        text-align: center;
        color: #a8a8a8;
        font-style: normal;
      }
      img {
        width: 0.69rem;
        height: 0.69rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>