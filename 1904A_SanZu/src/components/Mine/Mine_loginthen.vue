<template>
  <div class="box">
    <div class="loginit">
      <div>
        <h3>设置密码</h3>
        <p>跳过</p>
      </div>

      <ul>
        <li>
          <input type="text" placeholder="请输入登录密码" maxlength="16" v-model="pass" />
        </li>
        <li>
          <input type="password" placeholder="请再次确认密码" v-model="passed" />
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
  name: "Mine_login",
  data() {
    return {
      tel: sessionStorage.getItem("tel"),
      pass: "",
      passed: "",
      
    };
  },
 
  methods: {
    ends() {
      axios
        .post(
          "https://test.365msmk.com/api/app/password",
          {
            mobile: sessionStorage.getItem("tel"),
            sms_code: sessionStorage.getItem("repass"),
            password: this.pass
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("remember_token")
            }
          }
        )
        .then(res => {
          if (this.pass == "" || this.pass.length <= 7) {
            Toast("密码长度至少为8个字符");
            return false;
          } else if (this.passed == "" || this.passed != this.pass) {
            Toast("两次密码输入不一致");
            return false;
          } else {
            if (res.data.code != 200) {
              Toast(res.data.msg);

              return false;
            } else {
              Toast("设置成功");

              this.$router.push("/Home");
            }
          }
        });
    }
  }
};
</script>

<style lang="scss">
.box {
  .loginit {
    div {
      width: 100%;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h3 {
      width: 91%;
      text-align: center;
      text-indent: 0.5rem;
    }
    p {
      width: 10%;
      font-size: 0.33rem;
      padding: 0 0.3rem 0 0;
    }
  }
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