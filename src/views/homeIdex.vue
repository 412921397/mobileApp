<template>
  <div class="home">
    <nav-tab></nav-tab>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import navTab from "@/components/navTab.vue";

export default defineComponent({
  components: { navTab },
  setup() {
    const a = ref(0);
    return {
      a
    };
  }
});
</script>

<style scoped lang="less">
.home {
  width: 100%;
}
</style>
