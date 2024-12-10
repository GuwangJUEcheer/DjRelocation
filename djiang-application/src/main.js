import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue'; // 引入图标库
import 'element-plus/dist/index.css';

// 创建 Vue 应用实例
const app = createApp(App);

// 注册 Element Plus
app.use(ElementPlus);

// 全局注册所有图标
for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component);
  }

// 注册 Vue Router
app.use(router);

// 挂载到 DOM
app.mount('#app');
