import {
	createRouter,
	createWebHistory
} from 'vue-router'

const routes = [{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		component: () => import('../views/Index'),
		children: [{
			path: '',
			redirect: '/index/home'
		},
		{
			path: 'home',
			component: () => import('../views/Home'),
		}]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
