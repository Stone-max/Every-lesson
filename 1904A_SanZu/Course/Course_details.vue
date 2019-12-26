<template>
  <div class="detail">
    <!-- 头 -->
    <div class="headers">
      <van-icon name="arrow-left" size="0.4rem" @click="returns()" />
      <b>课程详细</b>
      <van-icon name="cluster-o" @click="share()" />
    </div>

    <!-- 内容 -->
    <nav>
      <!-- 讲师 -->
      <div class="teacher">
        <van-icon name="star" @click="yes()" class="action" />
        <h2>黄老师课堂</h2>
        <b>100.00</b>
        <span>
          共1课时
          <p>|</p>4人已报名
        </span>
        <p>
          开课时间：
          <small>2019.12.14 08:00 - 2019.12.14 20:00</small>
        </p>
      </div>

      <!-- 讲师团队 -->
      <div class="team">
        <p>教学团队</p>
        <ul>
          <li>
            <img
              src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
              alt
            />
            <p>黄杰锋</p>
          </li>
        </ul>
      </div>

      <!-- 课程介绍 -->
      <div class="introduce">
        <p>课程介绍</p>
      </div>

      <!-- 课程大纲 -->
      <div class="outline">
        <ul>
          <li>
            <span>
              <van-tag type="warning" size="large">回放</van-tag>
              <p>黄老师课堂</p>
            </span>
            <span>
              <p>黄杰锋</p>
              <p>12月14日 08:00 - 20:00</p>
            </span>
          </li>
        </ul>
      </div>

      <!-- 课程评论 -->
      <div class="comment">课程评论</div>
    </nav>

    <!-- 立即报名 -->
    <button class="over" @click="question()">立即报名</button>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from "vant";
import axios from "axios";
export default {
  name: "Course_details",
  data() {
    return {
      list: [],
      show: false,
      flag: false
    };
  },
  mounted() {
    axios.get("./static/data.json").then(res => {
      console.log(res.data);
      this.list = res.data;
    });
  },
  methods: {
    returns() {
      this.$router.push("/Course");
    },
    share() {
      Dialog.alert({
        title: "分享",
        message: "<img src='../../../static/img/two.png' />"
      }).then(() => {
        // on close
      });

      // Dialog.alert({
      //   message: "弹窗内容"
      // }).then(() => {
      //   // on close
      // });
    },
    question() {
      this.$router.push("/Course_apply");
    },
    yes() {
      this.flag = !this.flag;
      if (this.flag) {
        Toast("收藏成功");
      } else {
        Toast("取消收藏");
      }

      console.log(this);
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
body,
html,
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
nav {
  flex: 1;
  overflow: scroll;
}
.headers {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  border-bottom: 0.01rem solid #eee;
  b,
  i {
    display: block;
    font-size: 0.4rem;
  }
}
.teacher {
  padding: 0.3rem;
  border-bottom: 0.3rem solid #eee;
  color: #6f6f6f;
  font-size: 0.3rem;
  height: 2.28rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  .action {
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
  .action:hover {
    color: orangered;
  }
  h2 {
    color: black;
    font-weight: 500;
    font-size: 0.4rem;
  }
  b {
    background: url(https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png)
      no-repeat left;
    background-size: 0.3rem;
    font-size: 0.4rem;
    padding-left: 0.4rem;
    color: red;
    font-weight: 500;
  }
  span {
    display: flex;
    align-items: center;
    p {
      padding: 0 0.1rem;
    }
  }
  p {
    small {
      font-size: 0.3rem;
    }
  }
}
.team {
  padding: 0.3rem;
  border-bottom: 0.3rem solid #eee;
  > p {
    font-size: 0.3rem;
    padding-bottom: 0.3rem;
  }
  ul {
    display: flex;
    align-items: center;
    // justify-content: space-around;
    li {
      display: block;
      width: 1.4rem;
      img {
        width: 100%;
      }
      p {
        text-align: center;
      }
    }
  }
}
.introduce {
  padding: 0.3rem;
  border-bottom: 0.3rem solid #eee;
  font-size: 0.3rem;
}
.outline {
  @extend .introduce;
  ul {
    padding: 0 0.3rem;
    font-size: 0.26rem;
    li {
      list-style-type: disc;
      span {
        display: flex;
        .van-tag {
          width: 0.5rem;
          line-height: 0.36rem;
          padding: 0 0.1rem;
          font-size: 0.16rem;
          display: block;
          text-align: center;
          background: orangered;
          margin-right: 0.2rem;
        }
      }
      span:nth-child(2) {
        line-height: 0.5rem;
        p {
          padding-left: 0.2rem;
          color: #6f6f6f;
        }
      }
    }
  }
}
.comment {
  @extend .introduce;
  height: 5rem;
  background: url(../../../static/img/ll.png) no-repeat left;
  background-size: 100%;
}
.over {
  width: 100%;
  height: 1rem;
  color: white;
  background: orangered;
  border: none;
  font-size: 0.4rem;
}
</style>