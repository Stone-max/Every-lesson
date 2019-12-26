<template>
    <div class="box">
        <!--头-->
        <header>
          <span @click="tiao2()">
           <van-icon name="arrow-left" class="xiaozi"/>
          </span>
          <h3>讲师详情</h3>
          <div style="width:0.4rem"></div>
        </header>

        <nav>

        <!--定位的模块-->
          <div class="plan">
            <div class="plan-zi">
                    <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
            <div class="plan-m">
                <p>
                    <span>郭德纲<a>M9</a></span>
                </p>
                <p>男 4年教龄</p>
            </div>
            <van-button round type="info" color="#fff" size="small" background="#fff">
              <span class="span">关注</span>
            </van-button>
           
            </div>
            
              <div class="dig">
            <ul>
                <li>  <a >幽默风趣 </a>   </li>
                <li> <a >分析到位 </a> </li>
                <li> <a >亲和力强 </a> </li>
                <li> <a >讲解专业 </a>  </li>
            </ul>
            </div>
          </div>
        <!--空的div-->
          <div class="kong"></div>
        <!--评价-->
      
          <div class="boxs">
            <van-tabs  class="jiang" line-width="0.16rem">
              <van-tab title="讲师介绍">
                <ul>
                  <li>
                      <span>教学年龄</span>
                      <font>10年</font>
                  </li>
                  <li>
                    <span>授课价格</span>
                    <font>160学习币</font>
                  </li>
                  <li>
                    <span>老师简介</span>
                    <font>教学风格善于因材施教，针对不同学生的心理，采用不同的教学方法，以求达到更好的学习境界。
                            从事多年教育工作，拥有丰富的一线经验，持有高级中学教师资格证。对于专业知识苦心孤诣，
                            格物致知，对于学科知识内在联系逻辑有自己独特的见解。
                            培养学生养成习惯，对于复杂的知识娓娓道来，将复杂的知识简单化，将教材的知识生活化，更深入，
                            更直接，更生动，更活泼。
                    </font>
                  </li>
                </ul>
            </van-tab>
        <!--主将课程-->
            <van-tab title="主题课程" class="zhujiang" id="ke">
              <ul>
                <li>
                  <div class="ke-zhu">
                    <h4>1111</h4>
                    <p> <van-icon name="underway-o"  class="i"/> 11y月90日  19：00·12月01日  00：00 |共1课时   </p>  
                    <p><img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt=""> <span>TNT--李</span></p>
                  </div>
                  <div class="ke-bao">
                    <p>4人已报名</p>
                    <p class="lv">免费</p>
                  </div>
                </li>
                <li>
                  <div class="ke-zhu">
                    <h4>1111</h4>
                    <p> <van-icon name="underway-o"  class="i"/> 11y月90日  19：00·12月01日  00：00 |共1课时   </p>  
                    <p><img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt=""> <span>TNT--李</span></p>
                  </div>
                  <div class="ke-bao">
                    <p>4人已报名</p>
                    <p class="lv">免费</p>
                  </div>
                </li>          
              </ul>

            </van-tab>
        <!--学员评价-->
            <van-tab title="学员评价">
              <van-collapse v-model="activeNames">
              <van-collapse-item title="言简意赅" name="1">内容</van-collapse-item>
              </van-collapse>
                <div class="con">
                  <ul>
                    <li>
                      <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                      <van-rate v-model="value" />
                      <p>
                        <span>言简意赅</span>
                        <span>言简意赅</span>
                        <span>言简意赅</span>
                      </p>
                    </li>
                      <li>
                        <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                        <van-rate v-model="value" />
                        <p>
                          <span>言简意赅</span>
                          <span>言简意赅</span>
                          <span>言简意赅</span>
                        </p>
                      </li>
                  </ul>
                </div>
              </van-tab>
            </van-tabs>


    </div>
</nav>
        <span @click="tiao()"><van-button type="primary" size="large" color="#eb6100" class="btnf">立即预约</van-button></span>



      <!-- <router-link to="/"></router-link>  <van-button type="primary" size="large" color="#eb6100" class="btnf">立即报名</van-button> -->
    </div>
</template>
<script>
export default {
    name:"Lecturer_details",
      data() {
    return {
      activeNames: ['1'],
       value: 3
    };
  },
  methods: {
    tiao(){
      this.$router.push("/Order_course")
    },
    tiao2(){
      this.$router.push("/Order_course")
    }
  },
};

</script>
<style lang="scss" scoped>
html,body,.box{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
nav{
    flex: 1;
    overflow: scroll;
    background: #f0f2f5;
}

.btnf{
    
    overflow: scroll;

}


 header{
    width:100%;
    height: 2rem;
    background: linear-gradient(#63b7fe,#4e7de3);
    background: -webkit-linear-gradient(#63b7fe,#4e7de3);
    background: -moz-linear-gradient(#63b7fe,#4e7de3);
    background: -o-linear-gradient(#63b7fe,#4e7de3);
    display: flex;
    justify-content: space-between;
    position: relative;
    h3{
        font-weight: normal;
        font-size:0.4rem;
        // width:6rem;
        text-align: center;
        line-height: 0.8rem;
        color:white;
    }
    .xiaozi{
        color:white;
        font-size:0.5rem;
        line-height: 1rem;
        text-indent: 0.1rem;
    }
    
}
    .plan{
    top: 0.8rem;
    left: 0.2rem;
    position: absolute;
    width:95%;
    margin: 0 auto;
    height: 2.7rem;
    border-radius: 0.1rem;
    // border: 1px solid blue;
    background: white;
   
     .plan-zi{
         
        height: 1.5rem;
        border-radius: 0.1rem;
        display: flex;
        // justify-content: space-around;
        margin: 0 0 0 0;
        align-items:center;
        // flex-wrap: wrap;
        // padding: 0.0rem 0;


    img{
        width:1rem;
        height: 1rem;
        margin: 0 0.2rem;
        }
   .plan-m{
       width:100%;
       height: 1rem;

       p{
           font-size:0.2rem;
            color:#ccc;
              line-height: 0.6rem;
            //   text-indent: 0.1rem;


           span{
               font-size:0.25rem;
               color:black;
                line-height: 0.1rem;

           }
           a{
               font-size:0.1rem;
               color:red;
           }
       }
   }
   
  
}
.kong{
    width:100%;
    height: 1rem;
    border: 1px solid black;
}
    
.dig{
    width:100%;
    height: 0.4rem;
    padding: 0.2rem 0;
    ul{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        margin: 0.1rem 0;
        li{
            width:1.4rem;
            height: 0.4rem;
            // border: 1px solid black;
            font-size:0.22rem;
            border-radius: 0.5rem;
            text-align: center;
            background: #ffe4d3;
            line-height: 0.4rem;
            a{
                font-size:0.22rem;
            color:#ea7a2f;


            }
        }
    }
}

.kong{
    width:100%;
    height: 1.6rem;
    // border: 1px solid black;
}

    }
.boxs{
        // width:100%;
        // height: 4rem;
        // border: 1px solid black;
        position: relative;
        margin-top:1.8rem;

 .jiang{
    width:100%;
    // height: 10rem;
    margin-top:1.2rem;
    height: 100%;
    background: #fff;
    margin-top: 0.2rem;
    
    ul{
        width:100%;
        height: 4rem;
        li{
            width: 100%;
            height: 0.7rem;
            margin: 0.2rem 0;
            span{
                font-size:0.3rem;
                width: 2rem;
                // border: 1px solid black;
                padding: 0 0.4rem;
            }
            font{
                font-size:0.15rem;
                width:10rem;
                font-family:0.15rem;
                height: 19rem;
                // padding: 4rem;
                // font:italic arial,sans-serif;
                // font:italic bold 12px/20px arial,sans-serif;
                // border: 1px solid black;
                // padding: 0.1rem 0.7rem;


            }

        }
        
    }
}
.zhujiang{
    ul{
        width:100%;
        height: 100%;
        border-radius: 0.5rem;
        li{
            width:90%;
            height: 3.5rem;
            border-radius: 0.05rem solid #fff;
            margin: 0.2rem auto;
            background: #fff;
            border-radius: 0.05rem;
            
            h4{
                font-size:0.3rem;
                // padding: 0.2rem 0;
            }
            .ke-zhu{
                margin: 0 auto;
                width:97%;
                height: 2.6rem;
                // border: 1px solid black;
                border-bottom: 1px solid #ccc;
                p{
                    font-size:0.22rem;
                    text-indent: 0.02rem;
                    .i{
                        // line-height: 0.1rem;
                        padding: 0.2rem 0;
                    }
                }
                p{
                    width:100%;
                    height: 0.8rem;
                img{
                    width:0.5rem;
                    height: 0.5rem;
                    margin: 0 0.05rem;
                    // display: block;
                }
                span{
                    // line-height: 0.1rem;
                    font-size:0.22rem;
                    margin: 0.4rem 0;
                    // padding:  0 0.07rem;
                    // display: flex;
                }
                }
               
            }
            .ke-bao{
             display: flex;
                justify-content:space-between;
                width: 96%;
                height: 0.8rem;
               p{

                   font-size:0.22rem;
                   text-indent: 0.2rem;
                   line-height: 1rem;
               }
               .lv{
                   color:green;
                   font-size:0.36rem;
               }
            }
        }
    }
}
.con{
    width:100%;
    height: 100%;
    ul{
        width:100%;
    height: 100%;
    li{
        width:100%;

        height: 2rem;
        // border: 1px solid black;
        img{
            width:0.8rem;
            height: 0.8rem;
            display: block;
            float: left;
            margin: 0.4rem ;

        }
        p{
                height: 2rem;
        span{
            display: block;
            width:1.4rem;
            height: 0.4rem;
            border: 1px solid #ccc;
            border-radius: 0.1rem;
            float: left;
            margin: 0.1rem 0.1rem;
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
      margin-right: 1.6rem;
    }
</style>