import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 动画库
import 'animate.css'
// 引入vuex
import {
	store,
	storeMixin
} from '@/store/index.js'
// 在store上挂载一个vuex方法用来统一commit
store.vuex = (name, value) => {
	store.commit('$uStore', {
		name,
		value
	})
}

// toast
import toast from '@/components/toast/toast.js'
store.$toast = toast

// 引入网络请求
import * as api from './http/index.js'
// 接口地址
import url from './http/api.js'
// 将网络请求挂载在store上
store.$api = api
// 将接口地址挂载在store上
store.$url = url

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

createApp(App).mixin(storeMixin).use(ElementPlus, {
  locale: zhCn,
}).use(store).use(router).mount('#app')
