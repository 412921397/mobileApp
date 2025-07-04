<template>
  <van-popup
    class="popup"
    :show="showValue"
    @update:show="onUpdateShow"
    round
    position="bottom"
    :style="{ height: '60%' }"
  >
    <div class="title">请选择要咨询的订单</div>
    <div class="cont">
      <input class="input" type="text" v-model="text" />
      <div class="tabs">
        <div
          class="tab"
          :class="{ active: active === index }"
          v-for="(item, index) in tab"
          :key="item"
          @click="handleTab(index)"
        >
          {{ item }}
          <div v-if="active === index" class="line"></div>
        </div>
      </div>
      <div class="order" v-for="item in 20" :key="item">
        <div class="order-left">
          <div>
            <img src="" alt="" />
            <div>误杀</div>
            <img src="" alt="" />
          </div>
          <div>买入200B</div>
          <div>单价 ￥1.00</div>
          <img src="" alt="" />
        </div>
        <div class="order-right">
          <div>买家超时取消</div>
          <div>￥200.00</div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, ref } from 'vue';

withDefaults(
  defineProps<{
    showValue?: boolean;
  }>(),
  {
    showValue: false
  }
);

const emit = defineEmits<{
  (e: 'update:showValue', value: boolean): void;
}>();

const tab = ['我的买单', '我的卖单'];

const onUpdateShow = (value: boolean) => {
  emit('update:showValue', value);
};
const text = ref('');
const active = ref(0);

const handleTab = (index: number) => {
  active.value = index;
};
</script>

<style lang="less" scoped>
.popup {
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;

    .input {
      width: 90%;
      height: 40px;
      border-radius: 10px;
    }

    .tabs {
      display: flex;

      .active {
        color: aqua;
      }

      .line {
        background: aqua;
        width: 100%;
        height: 2px;
      }
    }

    .order {
      margin-top: 10px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      border: 1px solid #ededed;
    }
  }
}
</style>
