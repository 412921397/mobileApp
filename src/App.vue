<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div class="content">
    <home />
  </div>
</template>

<script lang="ts" setup>
import home from '@/views/service/s-index.vue';
</script>

<style lang="less">
.content {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.content {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.content::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}
</style>
