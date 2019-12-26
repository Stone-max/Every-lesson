<template>
  <div class="det">
    <header>
      <p class="p" @click="tiao()"></p>
      <p>个人信息</p>
      <p></p>
    </header>
    <div class="main">
      <ul>
        <!-- 个人信息 -->
        <van-cell is-link @click="showPopup">
          <li>
            <p>头像</p>
            <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt />
          </li>
        </van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
          <p>拍照</p>
          <p>从手机相册选择</p>
          <p>取消</p>
        </van-popup>
        <!-- 修改姓名 路由跳转 -->
        <li @click="tiao2()">
          <p class="p">昵称</p>
          <h5>{{list.nickname}}</h5>
          <van-icon name="arrow" />
        </li>
        <li>
          <p class="p">手机号</p>
          <h6>{{list.mobile}}</h6>
        </li>
        <!-- 修改性别 路由跳转 -->
        <li>
          <p class="p">性别</p>
          <h5>{{sex}}</h5>
          <van-icon name="arrow" @click="go()" />
        </li>
        <!-- 修改出生年月 -->
        <van-cell is-link @click="showwPopup">
          <li>
            <p class="p">出生日期</p>
            <h5>{{list.birthday}}</h5>
          </li>
        </van-cell>
        <van-popup v-model="showw" position="bottom" :style="{ height: '30%' }">
          <van-datetime-picker v-model="currentDate" type="date" @confirm="times()" />
        </van-popup>

        <!-- 修改学科 -->
        <li @click="tiao3()">
          <p class="p">学科</p>
          <h5 v-for="(v,i) in xueke" :key="i" v-if="v.attr_id==2">{{v.attr_value}}</h5>
          <van-icon name="arrow" />
        </li>

        <!-- 修改个人信息 -->

        <van-cell @click="showwwPopup" class="aaa">
          <li>
            <p class="p">年级</p>
            <h5 v-for="(v,i) in xueke" :key="i" v-if="(v.attr_id==1)">{{v.attr_value}}</h5>
            <van-icon name="arrow" class="aaa" />
          </li>
        </van-cell>
        <van-popup v-model="showww" position="bottom" :style="{ height: '30%' }">
          <p v-for="(v,i) in lost" :key="i" @click="ends(i)">{{v.name}}</p>
        </van-popup>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Personal_details",
  data() {
    return {
      show: false,
      showw: false,
      showww: false,
      currentDate: new Date(),
      list: [], //个人数据（渲染数据）
      lost: [], //年级(渲染数据)
      xueke: [], //学科(渲染数据)
      mour: [],
      alls: [],
      sex: ""
    };
  },
  mounted() {
    // 渲染用户信息------------------------------------------------------------------------------------------
    axios
      .get("https://test.365msmk.com/api/app/userInfo?", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("remember")
        }
      })
      .then(res => {
        this.list = res.data.data;
        // 性别----------------------------------------------------------------------------------------------
        if (this.list.sex == 0) {
          this.sex = "男";
        } else if (this.list.sex == 1) {
          this.sex = "女";
        }
        // 选择的学科渲染-------------------------------------------------------------------------------------------
        this.xueke = res.data.data.attr;
      });
    // 年级（渲染加排序   从小到大）----------------------------------------------------------------------------
    axios
      .get("https://test.365msmk.com/api/app/module/attribute/1?", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("remember")
        }
      })
      .then(res => {
        this.lost = res.data.data[0].value;
        function xu(arr) {
          arr.sort(function(a, b) {
            return a.id - b.id;
          });
          return arr;
        }
        xu(this.lost);
      });
  },
  methods: {
    //头像---------------------------------
    showPopup() {
      this.show = true;
    },
    //出生日期-------------------------------
    showwPopup() {
      this.showw = true;
    },
    times() {
      this.showw = false;
      var year = this.currentDate.getFullYear();
      var month = this.currentDate.getMonth() + 1;
      var day = this.currentDate.getDate();
      var times = year + "-" + month + "-" + day;

      axios
        .put(
          "https://test.365msmk.com/api/app/user",
          {
            birthday: times
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("remember")
            }
          }
        )
        .then(res => {
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            location.reload(); //自动刷新页面
          }
        });
    },

    //年级-----------------------------------
    showwwPopup() {
      this.showww = true;
    },
    //性别页面跳转-------------------------------
    go() {
      this.$router.push("/Mine_sex");
    },
    //修改年级-------------------------------------
    ends(i) {
      this.alls = [];
      this.showww = false;
      axios
        .put(
          "https://test.365msmk.com/api/app/user",
          {
            user_attr: JSON.stringify(this.alls) //传递修改信息
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("remember") //sessionStorage.getItem("remember_token")
            }
          }
        )
        .then(res => {
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            var obj = {
              attr_id: 1,
              attr_val_id: this.lost[i].id,
              attr: "年级",
              attr_value: this.lost[i].name
            };
            this.alls.push(obj);
            // this.alls = this.xueke.concat(this.mour);
            // console.log(this.alls);
          }
        });
    },
    tiao() {
      this.$router.push("/Mine_home");
    },
    tiao2() {
      this.$router.push("/Mine_nicheng");
    },
    tiao3() {
      this.$router.push("/Mine_xueke");
    }
  }
};
</script>

<style lang="scss">
body,
html {
  font-size: 0.24rem;
}
header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.5rem;
  background: white;

  .p {
    width: 10px;
    height: 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    transform: translateY(-50%) rotate(45deg);
    margin-top: 0.2rem;
  }

  img {
    display: block;
    width: 0.2rem;
    height: 0.32rem;
  }
  p {
    // width: 14.4rem;
    height: 100%;
    text-align: center;
    line-height: 0.88rem;
    font-size: 18px;
  }
}
.main {
  width: 100%;
  .van-cell__value {
    border: none;
  }
  ul {
    width: 100%;
    > li {
      border-bottom: 0.01rem solid #eee;
    }
    li {
      height: 1.3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      p {
        border: none;
        width: 1.5rem;
        margin-right: auto;
        font-size: 0.3rem;
      }
      .p {
        width: 1.5rem;
        height: 1rem;
        line-height: 1rem;
        margin-right: auto;
        font-size: 0.25rem;
        text-indent: 0.5rem;
      }
      h5 {
        font-weight: normal;
        padding: 0 0.3rem 0 0;
        font-size: 0.26rem;
      }
      h6 {
        font-weight: normal;
        padding: 0 0.99rem 0 0;
        font-size: 0.25rem;
      }
      img {
        width: 0.8rem;
        height: 0.8rem;
        display: block;
        padding: 0.1rem 0.3rem 0.1rem 0.1rem;
      }

      i {
        padding: 0 0.3rem 0 0;
        color: #969799;
      }
    }

    .van-icon {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.5rem;
    }
    p {
      width: 100%;
      height: 1.05rem;
      line-height: 1.05rem;
      border-bottom: 1px solid #f0f0f0;
      text-align: center;
      font-size: 0.3rem;
    }
  }
}
.aaa {
  padding: 0;
}
</style>