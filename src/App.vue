<template>
  <div id="app">
    <div class="nav-box">
      <div class="log">duyiedu</div>
      <div class="nav-list">
        <router-link to="/home">home</router-link>
        <router-link to="/learn">learn</router-link>
        <router-link to="/student">student</router-link>
        <router-link to="/activity">activity</router-link>
        <router-link to="/about">about</router-link>
      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
  .nav-box {
    display: flex;
    padding-left: 60px;
    padding-right: 60px;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    background-color: #3385ff;
    color: #fff;
    
  }

  .nav-box .log {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }

  .nav-box .nav-list {
    color: #fff;
  }

  .nav-box .nav-list a{
    display: inline-block;
    margin: 0px 5px;
    width: 65px;
    height: 100%;
    text-align: center;
    color: inherit;
  }

    .nav-box .nav-list a:hover{
    color: #f40;
  }

   .nav-box .nav-list a.link-active{
    font-weight: bold;
  }
  .container {
    margin: 20px 60px;
    border: 1px dashed;
  }
</style>
