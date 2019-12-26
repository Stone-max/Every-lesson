<template>
  <div class="box">
    <div class="mine_ass">
      <van-icon name="arrow-left" @click="go()" />
      <p>我的关注</p>
    </div>
    <div class="mine_cont">
      <img src="/static/img/img18.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:"Mine_attention",
    methods:{
      go(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
.box{
  height: 100%;
  background-color: #f0f2f5;
}
.mine_ass{
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  p{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
  }
  i{
    font-size: 0.5rem;
  }
}
.mine_cont{
  width: 100%;
  height: 3.5rem;
  text-align: center;
  padding: 0.5rem 0 0 0 ;
  img{
    width: 2.5rem;
    height: 2.5rem;
    display: block;
    margin: 0 auto;
    margin-top: 0.8rem;
  }
}
</style>