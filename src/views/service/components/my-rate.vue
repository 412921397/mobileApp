<template>
  <van-popup class="popup" :show="showValue" @update:show="onUpdateShow" round position="center">
    <div class="title">您对本次服务满意吗？</div>
    <div class="cont">
      <div class="box" v-for="item in rate" :key="item.id">
        <div>{{ item.emoji }}</div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <van-button class="submit" type="primary" @click="handleSubmit">提交</van-button>
  </van-popup>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue';

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

const onUpdateShow = (value: boolean) => {
  emit('update:showValue', value);
};

const rate = [
  { id: 0, name: '不好', emoji: '😔' },
  { id: 1, name: '一般', emoji: '😞' },
  { id: 2, name: '很好', emoji: '😊' }
];

const handleSubmit = () => {
  console.log('object');
  onUpdateShow(false);
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
    width: 350px;
    display: flex;
    font-size: 28px;
    justify-content: space-around;
    align-items: center;

    .box {
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
  }

  .submit {
    width: 300px;
    margin-left: 25px;
    margin-bottom: 20px;
  }
}
</style>
