<template>
  <div class="index">
   <div class="course">
       <i @click='go()'  class="fa fa-angle-left"></i>
        <h4>仿真模考</h4>
         <router-link to='/Course_search'><img src="/static/images/11.jpg" alt=""></router-link>     
    </div> 
    <!--  -->
    <div class="bb">
      <van-dropdown-menu active-color="orangered">
      <van-dropdown-item title="考试类型"  v-model="value1"   :options="option1" />
      <van-dropdown-item title="考试状态"  v-model="value2"   :options="option2" />
      <van-dropdown-item title="参考状态"   v-model="value3"  :options="option3" />
      </van-dropdown-menu>
    </div>
<!--  -->
 <div  class="nav3" v-for="(item,index) in list" :key="index">
        <img :src="item.img1" alt="">
        <p>{{item.p2}}</p>  
  </div>
  <!--  -->
   <div  class="nav4">
      <router-link to='/Popup'><i class="fa fa-envelope-open-o"></i></router-link>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name:'Mock_exam',
     data() {
     return {
      value1: 0,
      value2: 'a',
       value3: 'A',
      option1: [
        { text: '全部', value: 1 },
        { text: '模拟考试', value: 2 },
         { text: '正式考试', value: 3 }
      ],
      option2: [
        { text: '全部', value: "a" },
        { text: '未开始', value: 'b' },
        { text: '进行中', value: 'c' },
         { text: '已结束', value: 'd ' },
     ],
     option3: [
        { text: '全部', value: 'B' },
        { text: '已做', value: 'C' },
         { text: '未做', value: 'D ' },
     ],
     list:[]
    }
    },
     methods:{
    go(){
   this.$router.go(-1)
    }
    },
     created(){
      axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.list=msg.data.nav3
     })
}
  }
</script>

<style lang="scss" >
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.index{
   width: 100%;
  height:100%;
 .course{
        width: 100%;
        line-height:1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;   
           h4{
            width: 100%;
            height: 1rem;
            text-align: center; 
            font-size: 0.36rem;
            font-weight: normal;
        }
        i{
         font-size: 0.6rem;
          color:black;
          margin-left: 0.2rem;
          position: absolute;
      }
        img{
            width: 0.5rem;
            height: 0.5rem; 
            margin-right: 0.2rem;
            margin-top: 0.4rem;
        }          
     }  
      .nav3{
        width:100%;
        height:3.23rem;
         img{
        display: block;
        width:3.2rem;
        height:2.8rem;
        margin:0.4rem auto;
      }
      p{
         font-size: 0.32rem;
         color: #7b7b7b;
         margin-left: 0.26rem;
         text-align: center;
         margin-top: -0.4rem;
      }
      }
       .bb{
        span{         
        line-height:0.5rem;
        font-size: 0.24rem; 
        text-align: center;
        display: block;
        }
        .van-cell__value{
          display: none;
        }
        span:hover{
          text-align: center;
          color: orangered;
        }
        .van-dropdown-item__option{
          width:100%;
          line-height:0.5rem; 
        }      
        .van-ellipsis{
          font-size: 0.24rem;
        }
        .van-dropdown-item__option--active {
          color: orangered;
        }
        .van-dropdown-item__icon{
          color: #f0f2f5;
        }             
      } 
          .nav4{
  width:1.2rem;
  height:1.2rem;
  border-radius:50%;
  background:dodgerblue;
  float: right;
  margin: 4rem 5.94rem;
  position: absolute;
  i{
    font-size: 0.5rem;
    color: white;
    line-height:1rem;
    margin:0.1rem 0.36rem;
  }
}
}

</style>