<script setup>
import {reactive} from "vue";
import Image from "./Image.vue";

const dataList = reactive([
  {
    "id":1,
    "img": {
      "path": "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
    },
    "bakImg": [
      {
        "path": "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      },
      {
        "path": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
      }
    ]
  },
  {
    "id":2,
    "img": {
      "path": "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
    },
    "bakImg": [
      {
        "path": "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
      },
      {
        "path": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
      },
      {
        "path": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
      }
    ]
  }
])

const columns = reactive([
  {
    title: '序号',
    key: 'id',
    dataIndex: 'id',
    width: 60,
  },
  {
    title: '图片',
    key: 'img',
    dataIndex: 'img',
    width: 250,
    autoHeight: true,
    align: 'center',
    resizable: false,
  },
  {
    title: '待选图片集',
    key: 'bakImg',
    dataIndex: 'bakImg',
    autoHeight: false,
    width: 250,
  },
])
</script>

<template>
  <div class="table">
    <s-table
        :columns="columns"
        :pagination="false"
        :data-source="dataList"
        :deep-watch-data-source="true"
        :row-key="record => record.id"
        :locale="{ emptyText: '暂无数据' }"
        stripe
    >
      <template #bodyCell="{ record, index, column }">
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
:deep(.surely-table-body-cell:nth-of-type(3n)) {
  overflow-y: auto !important;

  .surely-table-cell-content {
    padding: 0;
    box-sizing: border-box;
  }
}
</style>
