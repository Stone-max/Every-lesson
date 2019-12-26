<template>
    <div class="oto">
        <!--头部-->
        <header class="he">
            <span @click="tiao()"><van-icon name="arrow-left" /></span>
            <div class="con"> 
             <h3>一对一辅导</h3>

            </div>
        <span @click="tiao1()">    <van-icon name="search" /></span>
        </header>
        <nav>

        <!--下拉框-->
        <van-dropdown-menu >
                 <van-dropdown-item title="选则上课时间" ref="item" color="red">
                        <!--日历-->

                        <div class="sj">
                            <a class="lao">日期</a>
                            <div class="sjs">
                                     <ul>
                                    <li>
                                        星期一
                                    </li>
                                    <li>
                                        星期二
                                    </li>
                                    <li>
                                        星期三
                                    </li>
                                    <li>
                                        星期四
                                    </li>
                                    <li>星期五
                                    </li>
                                    <li>
                                        星期六
                                    </li>
                                    <li>
                                        星期日
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <!--时段-->
                        <div class="sjd">
                        <a class="lao">时段</a>
                           <div class="sjd-a">
                                 <el-time-picker   v-model="value1" :picker-options="{ selectableRange: '18:30:00 - 20:30:00'}"></el-time-picker>
                               
                               
                                <el-time-picker arrow-control  v-model="value2"  :picker-options="{  }" placeholder="任意时间点">  </el-time-picker>
                                
                           </div>

                        </div>

                    <!--按钮-->
                    <div class="hig">
                     <van-button block type="info"  class="que">确认</van-button>
                    <van-button block type="info"  class="zhong">重置</van-button>
                    </div>
                   

                </van-dropdown-item>


                <van-dropdown-item title="选择老师条件" ref="item">
                    <!-- <van-switch-cell v-model="switch1" title="包邮" />
                    <van-switch-cell v-model="switch2" title="团购" /> -->
                    <div class="one">
                        <a class="lao">老师类型</a>
                        <ul>
                            <li>
                                  <a>M1</a>      
                            </li>
                             <li>
                                  <a>M2</a>      
                            </li>
                             <li>
                                  <a>M3</a>      
                            </li> <li>
                                  <a>M4</a>      
                            </li>
                             <li>
                                  <a>M5</a>      
                            </li>
                             <li>
                                  <a>M6</a>      
                            </li>
                             <li>
                                  <a>M7</a>      
                            </li>
                             <li>
                                  <a>M8</a>      
                            </li>
                             <li>
                                  <a>M9</a>      
                            </li>
                             <li>
                                  <a>M10</a>      
                            </li>
                    </ul>
                    </div>
                    <!--只看-->
                    <div class="zhikan">
                        <a class="lao">只看</a>
                            <van-checkbox-group v-model="result" class="xing">
                                <van-checkbox name="a" >已关注</van-checkbox>
                                <van-checkbox name="b">上过课的</van-checkbox>
                            </van-checkbox-group>
                    </div>
                    <!--性别-->
                    <div class="xingbie">
                        <a class="lao">性别</a>

                            <ul>
                                 <li>
                                  <a>男</a>      
                            </li>
                             <li>
                                  <a>女</a>      
                            </li>
                            </ul>
                    </div>
                    <!--年级-->
                 <div class="one">
                        <a class="lao">年级</a>
                        <ul>
                            <li>
                                  <a>一年级</a>      
                            </li>
                             <li>
                                  <a>高二</a>      
                            </li>
                             <li>
                                  <a>高二</a>      
                            </li> <li>
                                  <a>初三</a>      
                            </li>
                             <li><a>初一</a>      
                            </li>
                           
                    </ul>
                    </div>
                    <!--学科-->
                     <div class="xueke">
                        <a class="lao">学科</a>
                        <ul>
                            <li>
                                  <a>语文</a>      
                            </li>
                             <li>
                                  <a>数学</a>      
                            </li>
                             <li>
                                  <a>英语</a>      
                            </li> <li>
                                  <a>物理</a>      
                            </li>
                             <li><a>化学</a>      
                            </li>
                    </ul>



                    </div>

                    <!--按钮-->
                    <div class="hig">
                     <van-button block type="info"  class="que">确认</van-button>
                    <van-button block type="info"  class="zhong">重置</van-button>
                    </div>
                   

                </van-dropdown-item>


        </van-dropdown-menu>
        



        <!--选择课程-->

            <div class="oto-con">
                <ul class="oto-ul">
                    <li class="oto-li"> 
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
                        <div class="oto-div">
                            <p><span>TNT-MOM </span> </p>
                            <p>男 10年教龄</p>
                        </div>
                        <van-button round type="info" size="small" color="#fff" background="red" @click="tiao2()" class="clo" >
                          <span class="span">预约</span>
                        </van-button>
                    </li>
                     <li class="oto-li"> 
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
                        <div class="oto-div">
                            <p><span>TNT-MOM </span> </p>
                            <p>男 10年教龄</p>
                        </div>
                        <van-button round type="info" size="small" color="#fff" background="red" @click="tiao2()">
                          <span class="span">预约</span>
                        </van-button>
                    </li>
                     <li class="oto-li"> 
                        <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg" alt="">
                        <div class="oto-div">
                            <p><span>TNT-MOM </span> </p>
                            <p>男 10年教龄</p>
                        </div>
                        <van-button round type="info" size="small" color="#fff" background="red" @click="tiao2()">
                          <span class="span">预约</span>
                        </van-button>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>
<script>
export default {
    name:"oto",
    data(){
        return{
            value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40),
              result: ['a', 'b'],
            value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ]
        }
    },
    methods: {
      tiao(){
        this.$router.push("Subscribe")
      },
      tiao1(){
        this.$router.push("/Course_search")
      },
      tiao2(){
        this.$router.push("/Order_course")
      }
    },
     
}
</script>
<style lang="scss" scoped>
 .oto{
        width: 100%;
        height: 100%;
        // background: #595959;     
        // background: #595959; 
        .van-ellipsis{
            color:#595959;
        }
        .he{
            width: 100%;
            height: 1rem;
            display: flex;
            justify-content:space-around;
            align-content: center;
            .con{
                width:3.7rem;
                height: 1rem;
            }
            h3{
                font-weight: normal;
                font-size:0.35rem;
                text-align: center;
                line-height: 1rem;
                color:#595959;

            }
            .van-icon {
                font-size:0.5rem;
                text-align: center;
                line-height: 1rem;
                color:#595959;
            }
            .oto-div{
                width:2rem;
            }
        }
    }





nav{
    width:100%;
    height: 100%;
    flex:1;
    overflow: hidden;
   background: #f0f2f5;

.oto-box{
    background: #ccc;
    width: 100%;
    height: 100%;

}
.sjd{
    width:95%;
    height: 1.2rem;
    border-radius: 0.1rem;
    margin: 0 auto;
     .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }
    .sjd-a{
        display: flex;
    }

}
.sj{
    width: 95%;
    height: 4rem;
    border: 1px solid #ccc;
    margin: 0 auto;
    border-radius: 0.1rem;
    .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }
    .sjs{
        width:100%;
        height: 0.5rem;
        ul{
            width:100%;
            height: 0.5rem;
            display: flex;

            li{
                    font-size:0.15rem;
                    margin: 0.2rem 0.1rem;
                    text-align: center;

            }
        }

    }

}
.xueke{
     width:100%;
    height: 2rem;
    // border-bottom: 1px solid black;
     .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }

    ul{
         width:100%;
        height: 3.5rem;
        // display: flex;
        // justify-content: space-around;
        align-items: center;
        li{
            margin: 0.1rem 0.1rem;
            width:1.6rem;
            height: 0.8rem;
            float: left;
            background: #f5f5f5;
            border-radius: 0.1rem;
            text-align: center;
            a{
                font-size: 0.15rem;
                // color:#595959;
                text-align: center;
                line-height: 0.8rem;
                color:#646464;
                width:0.8rem;
            }
        }
          li:hover{
            color:#eb6100;
            background:#ebeefe;
        }
    }
}
.xingbie{
    width:100%;
    height: 1.5rem;
    border-bottom: 1px solid black;
     .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }

    ul{
         width:100%;
        height: 3.5rem;
        // display: flex;
        // justify-content: space-around;
        align-items: center;
        // border-bottom: 1px solid #ccc;
        li{
            margin: 0.1rem 0.1rem;
            width:1.6rem;
            height: 0.8rem;
            float: left;
            background: #f5f5f5;
            border-radius: 0.1rem;
            text-align: center;
            a{
                font-size: 0.15rem;
                // color:#595959;
                text-align: center;
                line-height: 0.8rem;
                color:#646464;
                width:0.8rem;
            height: 0.8rem;
            }
        }
          li:hover{
            color:#eb6100;
            background:#ebeefe;
        }
    }
}
.zhikan{
    width:100%;
    height: 2rem;
    border-bottom: 1px solid #ccc;
 .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }
    .xing{
    display: flex;
    line-height: 2rem;
    margin: 0.2rem 0.2rem;
    }
}
.one{
    width:100%;
    height: 5rem;
    // border: 1px solid black;
        border-bottom: 1px solid #ccc;

    .lao{
        font-size:0.05rem;
        padding: 0.2rem 0.2rem;
        color:#595959;
    }
    ul{
        width:100%;
        height: 4rem;
        // height: 100%;
        // display: flex;
        // justify-content: space-around;
        align-items: center;

    
        li{
            margin: 0.1rem 0.1rem;
            width:1.6rem;
            height: 0.8rem;
            float: left;
            background: #f5f5f5;
            border-radius: 0.1rem;
            text-align: center;
            a{
                font-size: 0.15rem;
                // color:#595959;
                text-align: center;
                line-height: 0.8rem;
                color:#646464;
                width:0.8rem;
            // height: 0.8rem;
            // height: 0.3rem;
            }
        }
        li:hover{
            color:#eb6100;
            background:#ebeefe;
        }
    }
}
    .hig{
        width:100%;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        // margin: 1.4rem 0;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        .que{
            background: white;
            color:red;
            font-size:0.24rem;

        }
        .zhong{
            background: red;
            color:#fff;
            font-size:0.24rem;
        }

    }
   
    .oto-con{
        width:95%;
        height: 100%;
        // border: 1px solid black;
        // background: blue;
        margin:  0.1rem auto;
        .oto-ul{
            width:100%;
            height: 100%;
            .oto-li{
                width:100%;
                height: 1.6rem;
                // border: 1px solid #ccc;
                display: flex;
                justify-content: space-around;
                background: white;
               align-items:center;
               border-radius: 0.05rem;
               margin: 0.2rem 0;
              
            // flex-wrap: wrap;
            .oto-div{
                width:3rem;
                height: 1rem;
                margin:0 0.1rem;
                
            }
                img{
                    width:0.6rem;
                    height: 0.6rem;
                    border-radius: 50%;
                }
                p{
                    color:#ccc;
                     font-size:0.2rem;
                    line-height: 0.1rem;
                    // text-indent: -0.2rem;
                        // padding: 0.5rem 0;



                    span{
                        font-size:0.25rem;
                        color:black;
                        line-height: 0.8rem;

                    }
                   
                }
              
            }
        }
    }
}
.span{
  color: #eb6100;
  display: block;
  width: 1.5rem;
  border: 1px solid #eb6100;
  transform: scale(1,1);
  border-radius: 0.5rem;
  // margin-left: 1rem;
}
</style>