<template>
<div class="index">
  <!--  -->
      <div class="header6">
         <i @click='goo()'  class="fa fa-angle-left"></i>
         <input type="text"  placeholder="请输入内容" v-model="keyword" @keydown.enter="add()" >
         <p>取消</p>
      </div>
<!--  -->
<div class="header2">
 <h1>历史记录<i class="fa fa-balance-scale "  @click="del()"></i></h1> 
  <ul class="ul1">
      <li v-for="(item,key) in doo" :key="key" >
        <p>{{item}}</p>
      <i class="fa fa-cubes " @click='delat()'></i>
      </li>      
  </ul>
  </div>
<!--  -->
 <div  class="nav4">
      <router-link to='/Popup'><i class="fa fa-envelope-open-o"></i></router-link>
    </div>
 </div >
</template>

<script>
// 行为
import axios from "axios";
export default {
  name: 'Search', 
  data(){
     return {    
       keyword: "",
      list: JSON.parse(localStorage.getItem("todo")),
      doo: JSON.parse(localStorage.getItem("doo")) || [],
      our: [],
      nav:[]
     }
  },
  methods:{     
    add() {
      if (this.doo.length > 10) {
        this.doo.splice(0, 1);
      } else {
        this.doo.unshift(this.keyword);
      }
      localStorage.setItem("doo", JSON.stringify(this.doo));
      this.keyword=''
    },
    goo(){
    this.$router.go(-1)
    },
    //删除
    del() {
      this.doo = [];
      localStorage.setItem("doo", JSON.stringify(this.doo));
    },
      //  全部删除
      delat(){
      this.doo.splice(this.k,1);
      localStorage.setItem('doo',JSON.stringify(this.doo))
     }
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
div{
  .header6{
    height:1rem;
    align-items: center;
    justify-content: space-around;
    display: flex;
    i{
       font-size: 0.6rem;
        margin-left: 0.4rem;
        margin-top: -0.04rem;  
    }
     input{
        width:4.6rem;
        height:0.6rem; 
        border:1px solid #f0f2f5;
        background:#f0f2f5;
        border-radius: 0.95rem;
        color: #b6b6b6;
        font-size: 0.26rem;
        margin-left: 0.4rem;
        padding-left: 0.6rem;
        display: block;
    }
     p{
        display: block;
        margin: auto;
        color: #b6b6b6;
        font-size: 0.28rem;
    }
  }
.header2{
    width:7.5rem;
    height:5.5rem;
    justify-content: space-around;
    align-items: center;
    background:white;
    border-radius:0.2rem;
h1{
    width:7.2rem;
   line-height:1.6rem;
  font-size: 0.34rem;
  margin:0rem 0.4rem;
  display: flex;
   justify-content: space-between;
}
.ul1 {
  height: 0.4rem;
  align-items: center; 
  display: flex;
  flex-wrap: wrap;
   background:white;
   li {
   width:33.3%;
  height: 0.6rem;
  font-size: 0.22rem;
  margin-left: 0.4rem;
  background:whitesmoke;
  color:darkgray;
  justify-content: space-between;
  display: flex;
  margin-top: 0.2rem;
  align-items: center;
  i{
    font-size: 0.4rem;
    color: steelblue;
  }
i:hover{
  color: seagreen;
}
p{
    line-height: 0.4rem;
    font-size: 0.24rem;
    color: black;
    padding-left: 0.2rem;
}
}
}
 i{
    font-size: 0.4rem;
    color: steelblue;
    margin:0.6rem 0.44rem ;
  }
i:hover{
  color: firebrick;
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
