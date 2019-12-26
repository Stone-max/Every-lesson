<template>
  <div class="box">
    <header>
      <p class="p" @click="tiao()"></p>
      <p>修改个人信息</p>
      <p @click="yes()">保存</p>
    </header>
    <div class="div">
      <ul>
        <li v-for="(v,i) in list" :key="i">
          <input type="checkbox" class="input" @click="ends(i)" :checked="flag" />
          <p>{{v.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Mine_xueke",
  data() {
    return {
      list: [],
      lost: [],
      flag: false
    };
  },
  mounted() {
    // 渲染学科列表------------------------------------------------------------------
    axios
      .get("https://test.365msmk.com/api/app/module/attribute/1?", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("remember")
        }
      })
      .then(res => {
        this.list = res.data.data[1].value;
      });
  },
  methods: {
    //返回上一页--------------------------------------------------------------------
    tiao() {
      this.$router.go("-1");
    },
    // 选择科目---------------------------------------------------------------------
    ends(i) {
      this.lost = [];
      this.list[i].flag = !this.list[i].flag;
      for (var j in this.list) {
        if (this.list[j].flag == true) {
          var obj = {
            attr_id: 2,
            attr_val_id: this.list[j].id
          };
          this.lost.push(obj);
        }
      }
      console.log(this.lost);
    },
    //确认提交------------------------------------------------------------------------------------
    yes() {
      axios
        .put(
          "https://test.365msmk.com/api/app/user",
          {
            user_attr: JSON.stringify(this.lost)
          },
          {
            headers: {
              Authorization:
                "Bearer " + localStorage.getItem("remember")
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.code != 200) {
            Toast(res.data.msg);
            return false;
          } else {
            Toast(res.data.msg);
            this.$router.push("/Personal_details");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
.div {
  width: 100%;
  height: 100%;
  background: white;
  box-sizing: border-box;
  padding: 0 0.5rem;
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 1rem;
      // text-align: left;
      // line-height: 1rem;
      border-bottom: 1px solid #f0f2f5;
      display: flex;
      align-items: center;
      .input {
        width: 0.4rem;
        height: 0.4rem;
      }
      p {
        margin-left: 0.2rem;
        // margin-top: 0.3rem;
      }
    }
  }
}
</style>