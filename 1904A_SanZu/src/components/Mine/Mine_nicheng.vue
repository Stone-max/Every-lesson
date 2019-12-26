<template>
  <div class="box">
    <header>
      <p class="p" @click="tiao()"></p>
      <p>修改个人信息</p>
      <p @click="yes()">保存</p>
    </header>
    <div class="div">
      <input type="text" placeholder="最多可输入15个字" maxlength="15" class="input" v-model="name" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Mine_nicheng",
  data() {
    return {
      name: "",
      
    };
  },
 
  methods: {
    tiao() {
      this.$router.go("-1");
    },
    yes() {
      axios
        .put(
          "https://test.365msmk.com/api/app/user",
          { nickname: this.name },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("remember")
            }
          }
        )
        .then(res => {
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            this.$router.push("/Personal_details");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.5rem;
  background: white;

  .p {
    width: 10px;
    height: 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    transform: translateY(-50%) rotate(45deg);
    margin-top: 0.2rem;
  }
  p {
    // width: 14.4rem;
    height: 100%;
    text-align: center;
    line-height: 0.88rem;
    font-size: 18px;
  }
}
.div {
  margin-top: 0.3rem;
  padding: 0 0.5rem;
  background: white;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
}
.input {
  display: block;
  width: 100%;
  min-width: 0;
  color: #323233;
  text-align: left;
  // background-color: transparent;
  border: 0;
  resize: none;
  box-sizing: border-box;
}
</style>