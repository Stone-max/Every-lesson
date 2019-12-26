<template>
  <div class="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- <Foot></Foot> -->
  </div>
</template>

<script>
import Foot from '@/components/Foot'
export default {
  name: "App",
  components:{Foot}
};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
html,
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: scroll;
  font-size: 0.3rem;
}

</style>
