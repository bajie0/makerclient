<template>
	<div class="inner-center height60 boxshadow-middle-10 sticky-top" :key="$navkey"
		:class="$route.path == '/index/publishneeds'? 'fill-color-assistfix text-color-white' : 'fill-color-white'">
		<div class="inner-justify" :style="{width:viewportwidth}">
			<div class="inner-left gutter10">
				<div class="fontfix paddinglr10 font-17 hover-ol" @click="$router.replace('/index/home')">微创客</div>
				<div class="inner-left gutter10">
					<el-popover placement="bottom-start" :offset="-4" :hide-after="0"
						popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
						<template #reference>
							<div class="paddinglr10 hover-ol height60 inner-center" @mouseenter="visiblepublish = true"
								:class="$route.path == '/index/publishneeds'? 'fill-color-main text-color-white' : 'fill-color-white'">
								发布需求</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="hover-sm padding10" v-for="(item,index) in 4" :key="index" @click="topublish(item)">
							兼职</div>
					</el-popover>
					<!-- <div class="height60 inner-center paddinglr10 hover-ol" :class="$route.path == '/index/publishneeds'? 'fill-color-main text-color-white' : ''" @click="$router.push('/index/publishneeds')">发布需求</div> -->
					<div class="height60 inner-center paddinglr10 hover-ol"
						:class="$route.path == '/index/maker'? 'fill-color-main text-color-white' : ''"
						@click="$router.push('/index/maker')">寻找创客</div>
					<el-popover :offset="-4" placement="bottom-start" width="500" :hide-after="0">
						<template #reference>
							<div class="hover-ol height60 inner-center paddinglr10" :class="$route.path == '/index/works'? 'fill-color-main text-color-white' : ''">寻找任务</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="width700 inner-left">
							<div v-for="(item,index) in 2" :key="index"
								:class="index%2? 'padding-left-30' : 'border-right-lighter-1'" class="padding-left-20">
								<div v-for="(items,indexs) in 4" :key="indexs">
									<div class="text-weight text-color-black-dark margin-top-10">市场营销</div>
									<div class="flex-z gutter10 paddingtb10 line-height-5">
										<div v-for="(itemss,indexss) in 20" class="hoverfix text-color-black-light"
											@click="toworks(itemss)" :key="indexss">细目</div>
									</div>
								</div>
							</div>
						</div>
					</el-popover>
					<el-popover placement="bottom-start" :offset="-4" :hide-after="0"
						popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
						<template #reference>
							<div class="hover-ol height60 inner-center paddinglr10" :class="$route.path == '/index/successproject'? 'fill-color-main text-color-white' : ''">成功案例</div>
						</template>
						<!-- 案例类型菜单 -->
						<div class="hover-sm padding10" v-for="(item,index) in 8" :key="index"
							@click="$router.push('/index/successproject')">市场营销</div>
					</el-popover>
				</div>
			</div>
			<div class="inner-left gutter10">
				<div class="of-hidden">
					<el-input v-model="keywords" placeholder="请输入关键词">
						<template #prepend>
							<el-select v-model="select" class="width100">
								<el-option label="项目" value="项目" />
								<el-option label="创客" value="创客" />
							</el-select>
						</template>
						<template #append>
							<el-button :icon="Search" />
						</template>
					</el-input>
				</div>
				<div class="custom-icon custom-icon-message font-20 height60 width60 inner-center positionbox hover-ol" @click="$router.push('/index/message')" :class="$route.path == '/index/message'? 'fill-color-main text-color-white' : ''">
					<div class="prt fill-color-warning circle-box-20 inner-center font-10 margin10 text-color-white">10</div>
				</div>
				<el-popover placement="bottom-start" :hide-after="0" :offset="-4"
					popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
					<template #reference>
						<div class="inner-left gutter10 height60 hover-ol">
							<el-avatar :size="30" src="https://s.vzhuo.com/static/images/default-avatar01.png" />
							<div>小戒</div>
						</div>
					</template>
					<!-- 我的-->
					<div class="hover-sm padding10" @click="$router.push('/index/profile')">个人资料</div>
					<div class="hover-sm padding10" @click="$router.push('/index/mycase')">我的案例</div>
					<div class="hover-sm padding10" @click="$router.push('/index/order')">我的订单</div>
					<div class="hover-sm padding10" @click="$router.push('/index/setaccount')">账号设置</div>
					<div class="hover-sm padding10" @click="loginout">退出登录</div>
				</el-popover>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import { store } from '@/store/index.js'
	import { ElMessage } from 'element-plus'
	import {
		Search
	} from '@element-plus/icons-vue'
	// 搜索
	const keywords = ref('')
	const select = ref('')
	//去需求发布
	import router from '../router/index.js'
	const topublish = (item) => {
		router.push('/index/publishneeds')
	}
	//进入任务列表
	const toworks = (item) => {
		router.push('/index/works')
	}
	
	//退出登录
	const loginout = ()=>{
		ElMessage.success('注销成功')
		//调注销登录的接口
		let url = store.$url.logout_url
		store.$api.get(url).then(res => {
			router.replace('/login')
		})
	}
</script>

<script>
	export default {}
</script>

<style scoped lang="scss">
	@import '@/libs/theme.scss';

	.fontfix {
		font-family: 楷体;
	}

	.hover-sm:hover {
		background-color: $main-color;
		color: $extreme-text-color;
	}

	.hoverfix:hover {
		color: $main-color;
		cursor: pointer;
	}

	.fill-color-white {
		transition: .4s;
	}

	@keyframes changebg {
		100% {
			background-color: $assist-color;
		}
	}

	.fill-color-assistfix {
		animation: changebg .4s forwards;
	}
</style>
