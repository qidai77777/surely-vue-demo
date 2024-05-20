<script setup>
import { ref,reactive } from "vue";
import Image from "./Image.vue";

const dataList = reactive([
  {
    id: 1,
    img: {
      path: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    },
    bakImg: [
      {
        path: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      },
      {
        path: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      },
    ],
  },
  {
    id: 2,
    img: {
      path: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    },
    bakImg: [
      {
        path: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      },
      {
        path: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      },
      {
        path: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      },
    ],
  },
]);

const columns = reactive([
  {
    title: "序号",
    key: "id",
    dataIndex: "id",
    width: 60,
  },
  {
    title: "单选框",
    key: "radio",
    dataIndex: "radio",
    width: 200,
  },
  {
    title: "图片",
    key: "img",
    dataIndex: "img",
    width: 250,
    autoHeight: true,
    align: "center",
    resizable: false,
  },
  {
    title: "待选图片集",
    key: "bakImg",
    dataIndex: "bakImg",
    autoHeight: false,
    width: 250,
  },
]);

//TODO: 表头不会跟着响应式变化
const promptShowType = ref("option1");
</script>

<template>
  <div class="table">
    <s-table
      :columns="columns"
      :pagination="false"
      :data-source="dataList"
      :deep-watch-data-source="true"
      :row-key="(record) => record.id"
      :locale="{ emptyText: '暂无数据' }"
      stripe
    >
      <template #headerCell="{ column }">

        <template v-if="column.key === 'radio'">
          <div class="header-cell">
            <el-radio-group v-model="promptShowType">
              <el-radio value="option1" size="large">选项1</el-radio>
              <el-radio value="option2" size="large">选项1</el-radio>
            </el-radio-group>
          </div>
        </template>

      </template>

      <template #bodyCell="{ record, index, column }">
        <template v-if="column.key === 'radio'">
          <el-radio-group v-model="promptShowType">
            <el-radio value="option1" size="large">选项1</el-radio>
            <el-radio value="option2" size="large">选项1</el-radio>
          </el-radio-group>
        </template>

        <!-- 图片 -->
        <template v-if="column.key === 'img'">
          <div class="image-column">
            <Image :path="record.img?.path" />
          </div>
        </template>

        <!-- 待选图片集 -->
        <template v-if="column.key === 'bakImg'">
          <div class="image-bak-column">
            <el-scrollbar>
              <Image
                v-for="(item, subIndex) in record.bakImg"
                :key="item.id"
                :path="item.path"
              />
            </el-scrollbar>
          </div>
        </template>
      </template>
    </s-table>
  </div>
</template>

<style scoped>
.header-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

:deep(.surely-table-body-cell:nth-of-type(4n)) {
  overflow-y: auto !important;

  .surely-table-cell-content {
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
