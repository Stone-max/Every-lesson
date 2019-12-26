<template>
  <div class="index">
  <!--  -->
    <div class="header1">
      <p>给我们留言</p>
      <i  @click='goo()'  class="fa fa-angle-down"><span>关闭</span></i>
    </div>
      <!--  -->
    <div class="nav"  v-for="(item,index) in list" :key="index">
      <p>{{item.p1}}</p>
      <p class="p1">{{item.p2}}</p>
      <input type="text" placeholder="请输入">
      <p class="p1">{{item.p3}}</p>
      <textarea  cols="30" rows="10" placeholder="请输入" ></textarea>
    </div>
<!--  -->
    <div class="header2">
 
    </div>
 </div >
</template>

<script>
// 行为
import axios from "axios";
export default {
  name: 'Popup', 
  data(){
     return {    
        list:[]
     }
  },
  methods:{
 goo(){
    this.$router.go(-1)
    }       
  },
  created(){
       axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.list=msg.data.nav6
     })
  }

}
</script>

<style lang='scss'>
/* 样式 */
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.index{
 width: 100%;
 height: 100%;
 background:whitesmoke;
  .header1{
   height:1.2rem;
   background:blue;
   display: flex;
   justify-content: space-between;
   align-items: center;
    color: white;
   p{
       font-size: 0.3rem;
       margin-left: 0.2rem;
   }   
   i{
       span{
       margin-right: 0.2rem;     
       }
   }
  }
  .nav{
      height:3rem;
      p{
          font-size: 0.24rem;
          color: darkgray;
          margin: 0.3rem;
      }
    .p1{
        @extend p;
    }
    input{
        width:100%;
        line-height:0.76rem;
        padding-left: 0.3rem;
        font-size: 0.28rem;
        color: darkgray;
        border:1px solid white;
    }
   textarea{
      @extend input;
      font-size: 0.24rem;
      height:2rem; 
   }
  }
}

</style>
