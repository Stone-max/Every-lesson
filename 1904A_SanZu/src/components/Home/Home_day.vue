<template>
  <div class="Home">
    <!-- 时间开始 -->
    <img src="/static/img/tu_01.jpg" alt="" class="ii">
    <!-- 时间结束 -->
    <!-- 头部开始 -->
    <div class="header">
        <div>
            <p @click="tiao()">&lt;</p>
            <span>日历</span>
        </div>
    </div>
    <!-- 头部结束 -->
    <!-- 日历开始 -->
    <div class="nian">
        <p>2019年12月</p>
        <span class="span1">&lt;</span>
        <span class="span2">&gt;</span>
    </div>
    <!-- 日历结束 -->
    <!-- 日起开始 -->
    <div class="ri">
        <ul>
            <li class="li1">日</li>
            <li class="li1">一</li>
            <li class="li1">二</li>
            <li class="li1">三</li>
            <li class="li1">四</li>
            <li class="li1">五</li>
            <li class="li1">六</li>
        </ul>
    </div>
    <!-- 日起结束 -->
  </div>
</template>

<script>
  export default {
    name:"Home_day",
    data() {
      return {
        currentDate: new Date()
      }
    },
    methods: {
      tiao(){
        this.$router.go("-1")
      }
    },
  }
</script>

<style lang="scss" scoped>
    img,p,body,ul,li,div,span,a,ol{
      margin: 0;
      padding: 0;
      list-style: none;
      vertical-align: top;
    }
    .Home{
      width: 7.5rem;
    }
    .ii{
      width: 7.5rem;
      height: 0.4rem;
      display: block;
    }
    .header{
      width: 7.5rem;
      height: 0.8rem;
      border-bottom: 0.02rem solid #fbfbfb;
      div{
        width: 6.7rem;
        margin: 0 auto;
        height: 0.8rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        p{
          width: 2.76rem;
          font-size: 0.32rem;
        }
        span{
          width: 3.9rem;
          display: block;
          font-size: 0.32rem;
        }
      }
    }
    .nian{
      height: 1.46rem;
      display: flex;
      flex-wrap: wrap;
      padding-left: 0.5rem;
      letter-spacing: 0.04rem;
      p{
        font-size: 0.48rem;
        color: #595959;
        line-height: 1.46rem;
      }
      .span1{
        margin-left: 2.7rem;
        display: block;
        line-height: 1.46rem;
        font-size: 0.28rem;
      }
      .span2{
        margin-left: 0.5rem;
        display: block;
        line-height: 1.46rem;
        font-size: 0.28rem;
      }
    }
    .ri{
      ul{
        width: 7.5rem;
        display: flex;
        flex-wrap: wrap;
        .li1{
          width: 14.2%;
          text-align: center;
          height: 1.05rem;
          color: #a4a4a4;
          font-size: 0.22rem;
        }
      }
    }
</style>