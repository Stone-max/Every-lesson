<template>
  <div class="head">
    <!--  -->
   <div class="header4">
     <i @click='go()'  class="fa fa-angle-left"></i>
      <p>题库选择</p>
   </div>
   <!--  -->
   <div class="header5">
   <div @click="tiao()">
      <i  class="fa fa-indent"></i>
      <p>题库选择</p>
      <i class="fa fa-cog" id='i1'></i>
   </div>  
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
    name:"Exam_Practise",
     data(){
     return {    
       list:[]  
     }
  },
   created(){         
      
},
methods:{
  go(){
   this.$router.go(-1)
  },
  tiao(){
    this.$router.push("/Secetiveity")
  }
}

  }
</script>

<style lang="scss" >
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.head{
  background:#f0f2f5;
.header4{
   width:100%;
   height: 1rem;  
   line-height: 1rem;
   background:white;
   display: flex;
   p{
      font-size: 0.22rem;
      margin-left: 3.2rem;
   }
    i{
         font-size: 0.6rem;
          color:black;
          margin-top: 0.22rem;
          margin-left: 0.2rem;
          position: absolute;
      }
      a{
        text-decoration: none;
      }
}
.header5{
     height:5rem;
     background: white;
     margin-top: 0.1rem;
     div{
    line-height:1rem;
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-top: 0.2rem; 
      i{
      font-size: 0.4rem;
      margin-right: 0.3rem;
      color: darkgray;
    }
    i:nth-child(1){
      margin-left: 0.3rem; 
    }
    p{
       font-size: 0.3rem;
      margin-left: -5rem;
    }    
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