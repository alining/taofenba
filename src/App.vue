<template>
  <div id="app" class="wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "assets/css/reset.css";
  html,body{
    width:100%;
  }
  html{
    height:auto;
    font-size:100px;
  }
  body{
    font-size:0.14rem;
    height:100%;
  }
  .wrap{
    width:100%;
  }
</style>