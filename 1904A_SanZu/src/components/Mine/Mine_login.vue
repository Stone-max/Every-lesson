<template>
  <div>
    <div class="logimg">
      <img src="/static/img/log01.png" alt />
    </div>
    <div class="loginit">
      <ul>
        <li>
          <input type="number" placeholder="请输入手机号" v-model="tel" />
        </li>
        <li>
          <input type="password" placeholder="请输入密码" v-model="pass" />
        </li>
        <li>
          <input type="number" placeholder="找回密码" />
          <span @click="register()">注册/登录</span>
        </li>
      </ul>
      <button @click="end()">登录</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Mine_login",
  data() {
    return {
      tel: "",
      pass: ""
    };
  },
  methods: {
    register() {
      this.$router.push("/Mine");
    },
    end() {
      axios
        .post("https://test.365msmk.com/api/app/login", {
          mobile: this.tel,
          password: this.pass,
          type: 1
        })
        .then(res => {
          console.log(res);
          var obj = {
            tel: this.tel,
            pass: this.pass
          };
          // 验证手机号格式、输入框是否为空
          if (this.tel == "" || this.tel.length != 11) {
            Toast("请输入正确的手机号格式");
            return false;
            // 验证密码输入框是否为空
          } else if (this.pass == "") {
            Toast("请输入密码");
            return false;
          }
          // 验证是否登陆成功
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            console.log(this.remember_token);
            localStorage.setItem("remember", res.data.data.remember_token);
            this.$router.push("/Personal_details");
          }
        });
    }
  }
};
</script>

<style lang="scss">
.logimg {
  width: 5.7rem;
  height: 2rem;
  padding: 1.5rem 0 0.8rem 0.9rem;
  img {
    width: 5.5rem;
    height: 1.8rem;
    display: block;
    margin: 0 auto;
  }
}
.loginit {
  ul {
    width: 100%;

    li {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.2rem;
      input {
        width: 60%;
        height: 1rem;
        border: none;
        font-size: 0.3rem;
        text-indent: 0.7rem;
      }
      span {
        height: 1rem;
        line-height: 0.8rem;
        font-size: 0.25rem;
        display: block;
        padding: 0 0.5rem 0 0;
        color: #756e6ecc;
      }
    }
  }
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
    margin-top: 0.77rem;
  }
}
</style>