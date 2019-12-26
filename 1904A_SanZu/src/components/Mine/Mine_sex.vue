<template>
  <div class="box">
    <header>
      <p class="p" @click="tiao()"></p>
      <p>修改个人信息</p>
      <p @click="yes()">保存</p>
    </header>
    <div class="div">
      <ul>
        <li v-for="(v,i) in list" :key="i" @click="ends(i)">
          <p>{{v.sex}}</p>
          <van-icon name="success" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  name: "Mine_sex",
  data() {
    return {
      list: [
        {
          sex: "男"
        },
        {
          sex: "女"
        }
      ]
    };
  },

  methods: {
    tiao() {
      this.$router.push("/Personal_details");
    },
    ends(i) {
      axios
        .put(
          "https://test.365msmk.com/api/app/user",
          {
            sex: i
          },
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("remember")
            }
          }
        )
        .then(res => {
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
          }
        });
    },
    yes() {
      this.$router.push("/Personal_details");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
  list-style: none;
}
.box {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
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
  p {
    // width: 14.4rem;
    height: 100%;
    text-align: center;
    line-height: 0.88rem;
    font-size: 18px;
  }
}

ul {
  margin-top: 0.2rem;
  padding: 0.2rem;
  background: white;
  li {
    padding: 0.2rem 0;
    border-bottom: 0.01rem solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      color: white;
    }
  }
  li:hover {
    color: orange;
    i {
      color: orange;
    }
  }
}
</style>