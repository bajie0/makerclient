import {
	createRouter,
	createWebHistory
} from 'vue-router'
import {
	store
} from '../store/index.js'
const routes = [{
		path: '/',
		redirect: '/login'
	},
	// 登录页
	{
		path: '/login',
		component: () => import('../views/Login'),
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
			},
			// 创客空间页
			{
				path: 'makerspace',
				component: () => import('../views/MakerSpace'),
			},
			// 成功案例页
			{
				path: 'project',
				component: () => import('../views/Project'),
			},
			// 任务列表页
			{
				path: 'works',
				component: () => import('../views/Works'),
			},
			// 任务详情页
			{
				path: 'workdetails',
				component: () => import('../views/WorkDetails'),
			},
			// 成功案例列表页
			{
				path: 'successproject',
				component: () => import('../views/SuccessProject'),
			},
			// 个人资料表单页
			{
				path: 'profile',
				component: () => import('../views/Profile'),
			},
			// 我的案例页
			{
				path: 'mycase',
				component: () => import('../views/MyCase'),
			},
			// 我的案例页
			{
				path: 'order',
				component: () => import('../views/Order'),
			},
			// 账户设置页
			{
				path: 'setaccount',
				component: () => import('../views/SetAccount'),
			},
			// 消息页
			{
				path: 'message',
				component: () => import('../views/Message'),
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
	document.documentElement.scrollTop = 0
	if (to.path == '/index/publishneeds') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/works') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/successproject') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/successproject') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/profile') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/mycase') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/order') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
	else if (to.path == '/index/setaccount') {
		store.vuex('$navkey', store.state.$navkey + 1)
	}
})

export default router
