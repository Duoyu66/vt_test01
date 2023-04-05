import { createApp } from 'vue'
import './style.css'
import '../public/reset.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
//routes
app.use(router);
import {reqBB} from "./api"
reqBB();

//pinia
import { createPinia } from 'pinia'
const pinia =createPinia();
app.use(pinia)
//element
app.use(ElementPlus)
app.mount('#app')
