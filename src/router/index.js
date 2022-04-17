import {
	createRouter,
	createWebHistory
} from 'vue-router'
import {
	store
} from '../store/index.js'
const routes = [{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		component: () => import('../views/Index'),
		children: [
			// 重定向到首页
			{
				path: '',
				redirect: '/index/home'
			},
			// 首页
			{
				path: 'home',
				component: () => import('../views/Home'),
			},
			// 发布需求表单页
			{
				path: 'publishneeds',
				component: () => import('../views/PublishNeeds'),
			},
			// 创客列表页
			{
				path: 'maker',
				component: () => import('../views/Maker'),
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// 前置路由守卫，在路由跳转之前会执行
router.beforeEach((to, from) => {
	// if (to.path !== '/login') {
	// 	const token = JSON.parse(localStorage.getItem('lifeData'))?.vuex_token
	// 	if (!token) {
	// 		router.replace('/login')
	// 	}
	// }
})
// 后置路由守卫，在路由跳转之后会执行
//修复二级菜单弹出框无法自动消失
router.afterEach((to, from) => {
	if (to.path == '/index/publishneeds') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
})

export default router
