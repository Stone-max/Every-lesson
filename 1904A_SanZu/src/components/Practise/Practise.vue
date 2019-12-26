<template>
  <div class="pra">
    <div>
      <ul class="header">
        <li v-for="(item,index) in list" :key="index"><a href="#">{{item.a1}}</a></li>
      </ul>
      <div class="nav"> 
        <div class="nav1">
          <ul>
            <li v-for="(item,index) in nav" :key="index" > <img :src="item.img"/><router-link :to="item.to">{{item.a1}}</router-link></li>
          </ul>
        </div>
        <div  class="nav12">
          <ul>
            <li  v-for="(item,index) in nav1" :key="index">
              <p>{{item.p1}}</p>
              <p class="p11">{{item.p2}}<span>{{item.span1}}</span></p>       
            </li>
          </ul> 
          <div  class="nav3" v-for="(item,index) in nav2" :key="index">
            <img :src="item.img1" alt="">
            <p>{{item.p2}}</p>  
          </div>
        </div>
        <div  class="nav4">
          <router-link to='/Popup'><i class="fa fa-envelope-open-o"></i></router-link>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "../Foot"
import axios from "axios";
  export default {
    name:"Practise",
    components:{Foot},
    data(){
     return {    
       list:[],
       nav:[],
       nav1:[],
       nav2:[]
     }
  },
  methods:{
  
  },
  created(){
    axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.list=msg.data.header
     }),
      axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.nav=msg.data.nav
     }),
      axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.nav1=msg.data.nav1
     }),
      axios.get("/static/practise.json").then((msg)=>{
            console.log(msg)
            this.nav2=msg.data.nav2
     })
}
}
</script>

<style lang="scss" scoped>
// 
body,ul,li,ol,h2,h3,h4{
    margin: 0;
    padding: 0;
    list-style: none;
}
body,html,.pra{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.pra>div{
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
}
.pra{
  flex:1;
  background:#f0f2f5;
  
  // 
  .header{
    width:100%;
    display: flex;
    justify-content: center;
    line-height:0.9rem;
     background:white;
    li{
      a{
        font-size: 0.36rem;
        text-decoration: none;
        text-align: center;
        color: black;
      }
    }
  }
  // 
  .nav{
    width:100%;
    height:11.6rem;
    background:#f0f2f5;
    display: block;
    float: left;
    .nav1{
      width:100%;
      height:3.6rem;
      border-radius:0.05rem;
      background:#f0f2f5;
      box-sizing: border-box;
      padding: 0rem 0.18rem;
      margin-top: 0.24rem;
   ul{
  //  width:7.08rem;
   background:white;
   flex-wrap: wrap;
   display: flex;
   align-items: center;
   li{
      width:25%;
      height:1.8rem;
      text-align: center;
      a{
          line-height:0.62rem;
          font-size: 0.26rem;
          text-align: center;
          text-decoration: none;
          color: black;
          display: block;
          margin-top: -0.2rem; 
      }
      img{
        display: block;
        width:0.4rem;
        height:0.42rem;
        margin:0.4rem auto;
      }
   }
} 
    }
    .nav12{
      width:100%;
      height:4.84rem;
      background:white;
      margin:0 auto;
      margin-top: 0.24rem;
      p{
         font-size: 0.32rem;
         color: #7b7b7b;
         margin-left: 0.26rem;
         padding-top: 0.2rem;
         font-weight: bold;        
      }
      .p11{
        @extend p;
        color: #ed7631;
         margin-top: -0.24rem;
         display: flex;
         font-size: 0.3rem;
         justify-content: space-between;
         span{
           margin-right: 0.26rem;
           color: #7b7b7b;
         }
      }
      .nav3{
        width:100%;
        height:3.23rem;
         img{
        display: block;
        width:1.96rem;
        height:2.34rem;
        margin:0rem auto;
      }
      p{
         font-size: 0.32rem;
         color: #7b7b7b;
         margin-left: 0.26rem;
         text-align: center;
         margin-top: -0.1rem;
      }
      }
} 
.nav4{
  width:1.2rem;
  height:1.2rem;
  border-radius:50%;
  background:dodgerblue;
  float: right;
  margin: 1rem 5.94rem;
  position: absolute;
  i{
    font-size: 0.5rem;
    color: white;
    line-height:1rem;
    margin:0.1rem 0.36rem;
  }
}




  }
















}
</style>