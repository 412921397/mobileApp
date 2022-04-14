<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <div :class="[themeBg ? 'light' : 'dark']">
    <home />
    <van-config-provider :theme="theme">
      <van-config-provider :theme-vars="themeVars">
        <van-form>
          <van-field name="rate" label="评分">
            <template #input>
              <van-rate v-model="rate" />
            </template>
          </van-field>
          <van-field name="slider" label="滑块">
            <template #input>
              <van-slider v-model="slider" />
            </template>
          </van-field>
          <div style="margin: 16px">
            <van-button round block type="primary" @click="themeClick" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </van-config-provider>
    </van-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import home from "@/views/homeIdex.vue";

export default defineComponent({
  name: "App",
  components: { home },
  setup() {
    const themeBg = ref(true);

    const rate = ref(4);
    const slider = ref(50);

    const themeVars = {
      rateIconFullColor: "#07c160",
      sliderBarHeight: "4px",
      sliderButtonWidth: "20px",
      sliderButtonHeight: "20px",
      sliderActiveBackground: "#07c160",
      buttonPrimaryBackground: "#07c160",
      buttonPrimaryBorderColor: "#07c160"
    };

    const themeClick = () => {
      themeBg.value = !themeBg.value;
    };

    const theme = computed(() => {
      let theme: string;
      themeBg.value ? (theme = "light") : (theme = "dark");
      return theme;
    });

    onMounted(() => {
      console.log(process.env, "process");
    });
    return {
      themeBg,
      theme,
      rate,
      slider,
      themeVars,
      themeClick
    };
  }
});
</script>

<style lang="less">
.light,
.dark {
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  position: fixed;
  top: 0;
  background-repeat: no-repeat;
}
.light {
  color: #333;
  background: #fff;
}
.dark {
  color: #fff;
  background: #202124;
}
</style>
