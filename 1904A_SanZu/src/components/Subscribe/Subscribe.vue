<template>
  <div class="sub">
    <!--约课记录的头-->
      <header>
        <h3>约课记录</h3>
      </header>

  <nav>


    <!--约课记录选项-->
      <van-tabs ling-width="0.16rem">
        <van-tab title="待上课" ling-width="0.16rem" >
          <div class="act-box">
            <div class="act-cont">
              <div class="boxOne"></div>
              <div class="box">
                <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png"  alt="">

              </div>
              <p class="boxp">还没有待上课记录哦</p>
              <van-button type="primary" to="/Subscribe_one"  color="#eb6100" size="small">立即约课</van-button> 
            </div>

                
          </div>
          </van-tab>
        <van-tab title="已上课" ling-width="0.16rem">
            <div class="act-box" >
            <div class="act-cont">
              <div class="boxOne"></div>
              <div class="box">
                <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt="">

              </div>
              <p class="boxp">还没有上课记录哦</p>
              <van-button type="primary" to="index" color="#eb6100" size="small">立即约课</van-button>
            </div>

                
          </div>
        </van-tab>
        <van-tab title="已取消" ling-width="0.16rem">
            <div class="act-box">
            <div class="act-cont">
              <div class="boxOne"></div>
              <div class="box">
                <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt="">
              </div>
              <p class="boxp">还没有取消上课记录哦</p>
              <!-- <van-button type="primary" to="index" color="#eb6100" size="small">路由跳转</van-button> -->
            </div>

                
          </div>
        </van-tab>
      </van-tabs>

    <!---->
  </nav>

    <Foot></Foot>
  </div>
</template>

<script>
import Foot from  "../Foot"
   export default {
    name:"Subscribe",
    components:{Foot}
  }
</script>

<style lang="scss" scoped>
body,html,.sub{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
nav{
  flex:1;
  overflow:scroll;
      background: #f0f2f5;

}
.act-box{
  width:100%;
  height:4.75rem;
  // background: #cbcbcb;
  
  .act-cont{
    width:100%;
    height: 1rem;
    // background: blue;
    .box{
      width:100%;
      height: 3rem;
      // border: 1px solid black;
      // background: blue;
      img{
        width:2.78rem;
        height: 2.29rem;
        display: block;
        margin: 0 auto
      }
    }
    .boxOne{
      width:100%;
      height: 2rem;
    }
    .boxp{
      text-align: center;
      font-size:0.2rem;
      color:#b7b7b7;
    }
    .van-button {
      margin: 0.15rem auto;
      display: block;
    }
    

  }
}
.content{
  background: #ccc;

}
  header{
      width:100%;
      height: 1rem;
      background: white;
     h3{
       
      font-weight: normal;
      font-size: 0.4rem;
      color: #595959;
      text-align: center;
      line-height: 1rem;
     }
  }
</style>