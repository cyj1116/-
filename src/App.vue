<template>
  <div id="app">
    <ul class="tab">
      <router-link to="/list" class="tab-item">列表页</router-link>
      <router-link to="/history" class="tab-item">历史浏览页</router-link>
    </ul>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  height: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.tab-item {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid black;
}
</style>
