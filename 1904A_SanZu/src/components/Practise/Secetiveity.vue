<template>
  <div class="tiku">
    <!-- 头部 -->
    <header>
       <div class="header6">
         <i @click='go()'   class="fa fa-angle-left"></i>
         <p>题库选择</p>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入所有题库名称和关键词" />
        <van-icon name="search" />
      </div>
    </header>
    <!-- 内容 -->
    <nav>
      <ul class="left">
        <li v-for="(v,i) in items" :key="i" @click="end(i)">{{v.text}}</li>
      </ul>
      <ul class="right">
        <li v-for="(v,i) in list" :key="i">
          <div class="one">
            <p>{{v.name}}</p>
            <div class="xiao">
              <small v-for="(s,n) in v.zi" :key="n">{{s.text}}</small>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <!--  -->
     <div  class="nav4">
      <router-link to='/Popup'><i class="fa fa-envelope-open-o"></i></router-link>
    </div>
  </div>
</template>
<script>
import { TreeSelect } from "vant";
import axios from "axios";
export default {
  name: "tiku",
  data() {
    return {
      activeIndex: 0,
      items: [],
      list: [],
      lost: []
    };
  },
  mounted() {
    axios.get("./static/dizhi.json").then(res => {
      //   console.log(res.data[6].children);
      this.items = res.data;
    });
  },
  methods: {
    go(){
    this.$router.go(-1)
    },
    returns() {
      this.$router.push("/practise");
    },
    end(i) {
      this.list = [];
      axios.get("./static/dizhi.json").then(res => {
        for (var j in res.data[i].children) {
          //   console.log(res.data[i].children[j]);
          this.list.push(res.data[i].children[j]);
        }
      });
      return this.list;
    }
  }
};
</script>
<style lang="scss" >
header,div,p,hr,h2,h3,h4,b,span {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,.tiku {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header{
  height:2.3rem;
  padding:0rem  0.3rem;
  border-bottom: 0.01rem solid #eee;
.header6{
   width:100%;
   height: 1rem;  
   line-height: 1rem;
   background:white;
   display: flex;
   p{
      font-size: 0.4rem;
      margin-left: 3rem;
   }
    i{
         font-size: 0.6rem;
          color:black;
          margin-top: 0.2rem;
          margin-left: 0rem;
          position: absolute;
      }
   a{
        text-decoration: none;
  }
}
  .search {
    width: 85%;
    line-height: 0.6rem;
    padding: 0 0.5rem;
    background: #f0f2f5;
    border-radius: 1rem;
    line-height: 0.9rem;
    position: relative;
    margin-top: 0.2rem;
    input {
      width: 95%;
      line-height: 0.6rem;
      border: none;
      background: none;
      &::placeholder {
        font-size: 0.26rem;
      }
    }
    i {
      font-size: 0.4rem;
      position: absolute;
      right: 0.35rem;
      top: 0.3rem;
    }
  }
}
nav {
  flex: 1;
  overflow: scroll;
  display: flex;
  color: #6f6f6f;
  margin-top: 0.24rem;
  height:6rem;
  .left {
    display: block;
    height: 100%;
    width: 30%;
    background: #f0f2f5;
    li {
      text-align: center;
      height: 1.2rem;
      line-height: 1.2rem;
    }
    li:hover {
      border-left: 0.01rem solid red;
      background: white;
    }
  }
  .right {
    display: block;
    flex: 1;
    padding: 0.3rem;
    .one {
      p {
        display: block;
        padding: 0.2rem 0;
        font-size: 0.26rem;
      }
      .xiao {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        small {
          width: 1.6rem;
          padding: 0.24rem;
          background: #f0f2f5;
          text-align: center;
        }
      }
    }
  }

}
  .nav4{
  width:1.2rem;
  height:1.2rem;
  border-radius:50%;
  background:dodgerblue;
  float: right;
  margin: 10.6rem 5.94rem;
  position: absolute;
  i{
    font-size: 0.5rem;
    color: white;
    line-height:1rem;
    margin:0.1rem 0.36rem;
  }
}
</style>