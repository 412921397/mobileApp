<template>
  <div class="home">
    <HTab />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div style="width: 100%">1</div>
      </van-swipe-item>
    </van-swipe>
    <div class="footer">
      <div class="options">
        <div class="btn" v-for="item in options" :key="item.id">{{ item.name }}</div>
      </div>
      <van-cell-group inset>
        <van-field
          class="input"
          v-model="message"
          rows="2"
          type="textarea"
          placeholder="请输入要咨询的问题"
        />
        <van-button type="primary" size="large" class="send-btn" @click="handleSend">
          发送
        </van-button>
      </van-cell-group>
      <div class="btns">
        <div class="btn-box" v-for="item in btns" :key="item.id" @click="handleBtn(item.id)">
          <van-uploader
            accept="video/*"
            v-if="item.id === 1"
            max-count="1"
            :before-read="beforeRead"
            :after-read="afterRead"
          >
            <img src="@/assets/img/video.png" alt="" />
          </van-uploader>
          <van-uploader
            v-else-if="item.id === 2"
            max-count="1"
            :before-read="beforeRead"
            :after-read="afterRead"
          >
            <img src="@/assets/img/pic.png" alt="" />
          </van-uploader>
          <template v-else>
            <img :src="item.src" alt="" />
            <div>{{ item.name }}</div>
          </template>
        </div>
      </div>
    </div>
    <my-dialog v-model:showValue="visible" />
    <EmojiPicker v-if="isEmoji" :native="true" @select="onSelectEmoji" />
    <my-rate v-model:showValue="isRate" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmojiPicker from 'vue3-emoji-picker';
import { Toast } from 'vant';
import type { UploaderFileListItem } from 'vant';

import HTab from './components/h-tab.vue';
import myDialog from './components/my-dialog.vue';
import myRate from './components/my-rate.vue';

const options = [
  { id: 0, name: '怎么注册' },
  { id: 1, name: '怎么实名' },
  { id: 2, name: '怎么买币' },
  { id: 3, name: '怎么卖币' },
  { id: 4, name: '忘记密码' }
];
const btns = [
  { id: 0, name: '发送订单', src: require('@/assets/img/emoji.png') },
  { id: 1, src: require('@/assets/img/video.png') },
  { id: 2, src: require('@/assets/img/pic.png') },
  { id: 3, src: require('@/assets/img/emoji.png') },
  { id: 4, src: require('@/assets/img/emoji.png') }
];
const message = ref('');
const visible = ref(false);
const isRate = ref(false);
const isEmoji = ref(false);

const handleSend = () => {
  console.log('object');
};

// 返回布尔值
const beforeRead = (file: File | File[]) => {
  const files = Array.isArray(file) ? file : [file];
  console.log(files, 'files');
  return files.every((f) => {
    if (f.type !== 'image/jpeg') {
      Toast({ message: '请上传 jpg 格式图片' });
      return false;
    }
    return true;
  });
};

const afterRead = (file: UploaderFileListItem | UploaderFileListItem[]) => {
  if (Array.isArray(file)) {
    file.forEach((files) => console.log(files.file, '图片上传'));
  } else {
    console.log(file.file, '图片上传');
  }
};

const onSelectEmoji = (emoji: { [key: string]: any }) => {
  message.value += emoji.i;
  isEmoji.value = false;
};

const handleClose = (visble: boolean, emoji: boolean, rate: boolean) => {
  visible.value = visble;
  isEmoji.value = emoji;
  isRate.value = rate;
};

const handleBtn = (id: number) => {
  if (id === 0) handleClose(true, false, false);
  if (id === 3) handleClose(false, true, false);
  if (id === 4) handleClose(false, false, true);
};
</script>

<style lang="less" scoped>
.home {
  background: #fefefe;

  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

  .footer {
    .options {
      width: 95%;
      margin: 0 auto;
      font-size: 16px;
      display: flex;
      overflow: scroll;
      gap: 15px; /* 项目之间的间距 */
      white-space: nowrap; /* 防止子元素换行 */
      -webkit-overflow-scrolling: touch; /* iOS 平滑滚动 */

      .btn {
        flex-shrink: 1;
        cursor: pointer;
        border: 1px solid #ededed;
        height: 40px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .options {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE/Edge */
    }

    .options::-webkit-scrollbar {
      display: none; /* Chrome/Safari/Opera */
    }

    .input {
      margin-top: 10px;
      border: 1px solid;
    }

    .btns {
      height: 60px;
      display: flex;
      align-items: center;

      .btn-box {
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
