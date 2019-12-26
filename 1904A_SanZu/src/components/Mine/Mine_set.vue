<template>
  <div class="box">
    <div class="mine_assd">
      <van-icon name="arrow-left" @click="to()" />
      <p>设置</p>
    </div>
    <div class="mine_cont">
      <ul>
        <li>
          <p>设置密码</p>
          <van-icon name="arrow" @click="sets()" />
        </li>
        <li>
          <button @click="out()">退出登录</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine_attention",
  methods: {
    to() {
      this.$router.go(-1);
    },
    sets() {
      this.$router.push("/Mine_setmi");
    },
    out() {
      localStorage.removeItem("remember");
      localStorage.removeItem("remember_token");
      this.$router.push("/Mine_login");
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  background-color: #f0f2f5;
}
.mine_assd {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.1rem solid #f0f2f5;
  i {
    font-size: 0.5rem;
  }
  p {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
  }
}
.mine_cont {
  width: 100%;
  height: 3.5rem;
  padding: 0.1rem 0 0 0;
  background-color: #fff;
  img {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    margin: 0 auto;
    margin-top: 0.8rem;
  }
  ul {
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      p {
        text-indent: 0.2rem;
        font-size: 0.22rem;
      }
      i {
        font-size: 0.33rem;
      }
      button {
        width: 50%;
        height: 0.7rem;
        background: #eb6100;
        color: #ffffff;
        border: none;
        border-radius: 0.1rem;
        display: block;
        font-size: 0.2rem;
        line-height: 0.5rem;
        font-weight: bold;
        margin: 0 auto;
      }
    }
  }
}
</style>