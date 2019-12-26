<template>
  <footer>
    <ul class="footer_ul">
      <router-link tag="li" to="/Home"><i class="fa fa-cogs"></i><p>首页</p></router-link>
      <router-link tag="li" to="/Course"><i class="fa fa-cutlery"></i><p>课程</p></router-link>
      <router-link tag="li" to="/Subscribe"><i class="fa fa-credit-card-alt"></i><p>约课</p></router-link>
      <router-link tag="li" to="/practise"><i class="fa fa-dot-circle-o"></i><p>练习</p></router-link>
      <router-link class="li" tag="li" to="/Mine"><i class="fa fa-eye-slash"></i><p>我的</p></router-link>
      </ul>
  </footer>
</template>

<script>
  export default {
    name:"Foot"
  }
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
p{
  margin: 0;
  padding: 0;
}
footer {
  width: 100%;
  height: 1rem;
  .footer_ul {
    height: 1rem;
    display: flex;
    list-style: none;
    li {
      width: 20%;
      // line-height: 1.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i{
        display: block;
        font-size: 0.3rem;
        text-align: center;
      }
      p{
        margin-top: 0.1rem;
        font-size: 0.26rem;
        text-align: center;
      }
      
    }
    .router-link-active{
      color: #FD6103;
    }
  }
}
</style>