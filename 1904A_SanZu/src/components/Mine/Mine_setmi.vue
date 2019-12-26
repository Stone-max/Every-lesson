<template>
  <div>
    <div class="alter">
      <h3>设置密码</h3>
      <ul>
        <li>
          <input type="number" placeholder="请输入手机号" v-model="tel" />
          <span @click="yan()">获取验证码</span>
        </li>
        <li>
          <input type="number" placeholder="请输入验证码" v-model="repass" />
        </li>
        <li>
          <input type="number" placeholder="请输入密码" v-model="pass" />
        </li>
      </ul>
      <button @click="ends()">确定</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Mine_alter",
  data() {
    return {
      tel: "",
      pass: "",
      repass: ""
    };
  },
  methods: {
    yan() {
      axios
        .post("https://test.365msmk.com/api/app/smsCode", {
          mobile: this.tel,
          sms_type: "login"
        })
        .then(res => {
          // 验证手机号格式、输入框是否为空
          if (this.tel == "" || this.tel.length != 11) {
            Toast(res.data.msg);
            return false;
          } else {
            //验证验证码是否正常发送
            if (res.data.code != 200) {
              Toast(res.data.msg);
              return false;
            } else {
              Toast(res.data.msg);
            }
          }
        });
    },
    ends() {
      axios
        .post("https://test.365msmk.com/api/app/password", {
          mobile: this.tel,
          password: this.pass,
          sms_code: this.repass
        })
        .then(res => {
          //修改是否成功
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            this.$router.push("/Mine_login");
          }
        });
    }
  }
};
</script>

<style lang="scss">
.alter {
  h3 {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-weight: normal;
  }
  ul {
    width: 100%;

    li {
      width: 100%;
      height: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid#ccc;
      input {
        border: none;
        font-size: 0.31rem;
        text-indent: 0.8rem;
      }
      span {
        width: 20%;
        display: block;
        padding: 0 0.3rem 0 0;
        color: #fb5500;
      }
    }
  }
  button {
    width: 6.15rem;
    height: 0.9rem;
    background: linear-gradient(left, #ff944c, #fb5500);
    border: none;
    color: #ffff;
    font-size: 0.36rem;
    border-radius: 30px;
    display: block;
    margin-left: 0.65rem;
    margin-top: 0.77rem;
  }
}
</style>