<template>
  <div>
    <div class="activity">
      <router-link :to="{ name: 'academic' }">academic</router-link>
      <router-link :to="{ name: 'personal' }">personal</router-link>
      <router-link :to="{ name: 'download' }">download</router-link>
    </div>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.activity {
  display: flex;
}
.activity a {
    margin-right: 20px;
    width: 100px;
    height: 20px;
    text-align: center;
    
}

.activity a.link-exact {
    background-color: #3385ff;
    color: #fff;
    
}

.box {
    margin:30px;
}
</style>