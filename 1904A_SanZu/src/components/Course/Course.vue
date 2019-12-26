<template>
  <div class="Course">
    <header>
      <van-nav-bar title="特色课" class="headers">
        <van-icon name="search" slot="right" size="0.4rem" @click="search()" />
      </van-nav-bar>
      <!-- 下拉菜单 -->
      <van-dropdown-menu active-color="orangered">
        <!-- 分类 -->
        <van-dropdown-item class="downs" title="分类" ref="item" active-color="orangered">
          <p class="ti">年级</p>
          <ul class="nian">
            <li v-for="(v,i) in list.nian" :key="i">
              <p>{{v}}</p>
            </li>
          </ul>
          <p class="ti">学课</p>
          <ul class="xue">
            <li v-for="(v,i) in list.xue" :key="i">
              <p>{{v}}</p>
            </li>
          </ul>
          <div>
            <van-button type="default">重置</van-button>
            <van-button type="warning">确定</van-button>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item
          class="downs"
          title="排序"
          v-model="value1"
          :options="option1"
          style="text-align:center"
        />
        <!-- 筛选 -->
        <van-dropdown-item class="downs" title="筛选" ref="item">
          <ul class="xue" style="padding:0.3rem 0">
            <li v-for="(v,i) in list.ke" :key="i">
              <p>{{v}}</p>
            </li>
          </ul>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>

    <nav>
      <!-- 讲师信息 -->
      <ul class="teacher" to="/Course_details">
        <li v-for="(v,i) in list.teacher" :key="i" @click="detail()">
          <h2>{{v.name}}</h2>
          <span class="times">
            <p>
              <van-icon name="underway-o" />
              {{v.time}}
            </p>
            <p>|&nbsp;&nbsp;{{v.shi}}</p>
          </span>
          <div class="people">
            <img :src="v.head" alt />
            <p>{{v.names}}</p>
          </div>
          <div class="money">
            <p>{{v.people}}</p>
            <b>{{v.money}}</b>
          </div>
        </li>
      </ul>
    </nav>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from '@/components/Foot'
import axios from "axios";
export default {
  name: "Course",
  components:{Foot},
  data() {
    return {
      value1: 0,
      option1: [
        { text: "综合", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 }
      ],
      list: []
    };
  },
  mounted() {
    axios.get("./static/data.json").then(res => {
      this.list = res.data;
    });
  },
  methods: {
    search() {
      this.$router.push("/Course_search");
    },
    detail() {
      this.$router.push("/Course_details");
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
.van-nav-bar__title {
  max-width: none;
}
.van-grid-item {
  border: none;
}
body,
html,
.Course {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.downs {
  // text-align: center;
  .ti {
    font-size: 0.24rem;
    color: #646464;
    padding: 0.32rem 0 0.2rem 0.25rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: #f5f5f5 0.01rem solid;
    padding-bottom: 0.2rem;
    li {
      display: block;
      width: 25%;
      color: #646464;
      font-size: 0.24rem;
      margin-bottom: 0.14rem;
      p {
        display: block;
        width: 1.4rem;
        margin: auto;
        padding: 0.1rem;
        text-align: center;
        background: #f5f5f5;
        border-radius: 0.08rem;
      }
      p:hover {
        background: orangered;
        color: white;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.2rem 0;
    .van-button {
      display: block;
      width: 3.4rem;
      border-radius: 0.1rem;
    }
  }
}
nav {
  flex: 1;
  overflow: scroll;

  .teacher {
    background: #dce5ff;
    padding: 0.3rem;
    li {
      padding: 0.3rem 0.3rem 0.1rem;
      background: white;
      border-radius: 0.1rem;
      margin: 0.2rem 0;
      h2 {
        font-size: 0.42rem;
        font-weight: 500;
      }
      .times {
        font-size: 0.26rem;
        line-height: 0.8rem;
        display: flex;
        align-items: center;
        p {
          padding-right: 0.2rem;
          color: #666;
        }
      }
      .people {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.45);
        height: 1.3rem;
        border-bottom: 0.01rem solid #eee;
        img {
          width: 0.5rem;
          padding: 0 0.2rem;
        }
      }
      .money {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 0.7rem;
        p {
          color: rgba(0, 0, 0, 0.45);
        }
        b {
          color: red;
          background: url(https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png)
            no-repeat left;
          background-size: 0.3rem;
          padding-left: 0.4rem;
        }
      }
    }
  }
}
</style>