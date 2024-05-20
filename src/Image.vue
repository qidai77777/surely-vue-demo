<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="image-item">
    <el-image
      v-if="path"
      loading="lazy"
      :src="path"
      :preview-src-list="[path]"
      :initial-index="0"
      :teleported="true"
      :hide-on-click-modal="true"
    />
  </div>
</template>

<style scoped lang="less">
// 定义变量
@button-color: #fff;
@button-font-weight: bolder;
@button-visibility: hidden;
@button-transition: top 0.5s;

// 定义混合，包含按钮的公共样式
.mixin-button(@top: 60%, @left: 40%) {
  position: absolute;
  top: @top;
  left: @left;
  transform: translate(-50%, -50%);
  font-weight: @button-font-weight;
  color: @button-color;
  visibility: @button-visibility;
  cursor: pointer;
}

.image-item {
  // 应用混合到.preview-button
  .preview-button {
    .mixin-button();
  }

  // 应用混合到.upload-button，并覆盖left值
  .upload-button {
    .mixin-button(60%, 60%);
  }

}
</style>
