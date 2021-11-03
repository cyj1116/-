<template>
  <div class="list-wrapper">
    这是sekai列表页面
    <ul class="list">
      <li v-for="sekai in sekaiData" :key="sekai.id" class="sekai-card">
        <div class="sekai-pic-wrapper">
          <img :src="sekai.picUrl" alt="" />
        </div>
        <div class="sekai-name">
          {{ sekai.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sekaiData from '../mock/sekai';
export default defineComponent({
  setup() {
    return { sekaiData };
  }
});
</script>

<style scoped>
.list-wrapper {
  width: 100%;
  height: 100%;
  border: 1px red solid;
}

.list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.sekai-card {
  border: 1px solid black;
}

.sekai-pic-wrapper {
  height: 300px;
  width: 400px;
  border: 1px solid black;
}

.sekai-name {
  text-align: center;
}
</style>
