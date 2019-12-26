<template>
  <div class="search">
    <div class="headers">
      <van-icon name="arrow-left" size="0.4rem" @click="returns()" />
      <input type="text" placeholder="请输入内容" />
      <p>取消</p>
    </div>
    <span class="history">
      <p>历史搜索</p>
      <van-icon name="delete" />
    </span>
  </div>
</template>
<script>
export default {
  name: "Course_search",
  methods: {
    returns() {
      this.$router.push("/Course");
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
.search {
  font-size: 0.24rem;
  .van-nav-bar__title {
    font-size: 0.4rem;
    font-weight: 600;
  }
  .headers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem;
    border-bottom: 0.01rem solid #eee;
    input {
      width: 75%;
      background: #e4e7ed;
      height: 0.66rem;
      padding-left: 0.5rem;
      border-radius: 0.5rem;
      border: none;
      &::placeholder {
        color: #666;
        font-size: 0.3rem;
      }
    }
    p {
      font-size: 0.3rem;
      color: rgba(0, 0, 0, 0.22);
      font-weight: 600;
      margin: 0;
    }
  }
  .history {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem;
    p {
      font-size: 0.5rem;
    }
    i{
        font-size: 0.4rem;
        color: #e9e9e9;
    }
  }
}
</style>