import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

createApp(App).mixin(storeMixin).use(ElementPlus, {
  locale: zhCn,
}).use(store).use(router).mount('#app')
