import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@surely-vue/table/dist/index.less';
import {STable} from "@surely-vue/table";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setConfig } from '@surely-vue/table';

setConfig({
    theme: 'dark',
});

const app = createApp(App)
app.use(STable);
app.use(ElementPlus)
app.mount('#app')


