<template>
	<div class="inner-center height50 boxshadow-middle-10 sticky-top" :key="$navkey"
		:class="$route.path == '/index/publishneeds'? 'fill-color-assistfix text-color-white' : 'fill-color-white'">
		<div class="inner-justify" :style="{width:viewportwidth}">
			<div class="inner-left">
				<div class="fontfix paddinglr10 font-17 hover-ol" @click="$router.replace('/')">微创客</div>
				<div class="inner-left">
					<el-popover placement="bottom-start" :offset="-4"
						popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
						<template #reference>
							<div class="paddinglr10 hover-ol height50 inner-center" @mouseenter="visiblepublish = true"
								:class="$route.path == '/index/publishneeds'? 'fill-color-main text-color-white' : 'fill-color-white'">
								发布需求</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="hover-sm padding10" v-for="(item,index) in 4" :key="index" @click="topublish(item)">
							兼职</div>
					</el-popover>
					<div class="height50 inner-center paddinglr10 hover-ol" :class="$route.path == '/index/maker'? 'fill-color-main text-color-white' : ''" @click="$router.push('/index/maker')">寻找创客</div>
					<el-popover :offset="-4" placement="bottom-start" width="500">
						<template #reference>
							<div class="hover-ol height50 inner-center paddinglr10">寻找任务</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="width500 inner-left">
							<div v-for="(item,index) in 2" :key="index"
								:class="index%2? 'padding-left-10' : 'border-right-lighter-1'">
								<div v-for="(items,indexs) in 4" :key="indexs">
									<div class="text-weight text-color-black-dark margin-top-10">市场营销</div>
									<div class="flex-z gutter10 paddingtb10">
										<div v-for="(itemss,indexss) in 20"
											class="hoverfix scale-sm-1 text-color-black-light" :key="indexss">细目</div>
									</div>
								</div>
							</div>
						</div>
					</el-popover>
					<el-popover placement="bottom-start" :offset="-4"
						popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
						<template #reference>
							<div class="hover-ol height50 inner-center paddinglr10">成功案例</div>
						</template>
						<!-- 案例类型菜单 -->
						<div class="hover-sm padding10" v-for="(item,index) in 8" :key="index">市场营销</div>
					</el-popover>
				</div>
			</div>
			<div class="inner-left gutter20">
				<div class="of-hidden">
					<el-input v-model="keywords" placeholder="请输入关键词">
						<template #prepend>
							<el-select v-model="select" class="width100">
								<el-option label="项目" value="项目" />
								<el-option label="人才" value="人才" />
							</el-select>
						</template>
						<template #append>
							<el-button :icon="Search" />
						</template>
					</el-input>
				</div>
				<div>工作台</div>
				<div class="custom-icon custom-icon-message"></div>
				<el-avatar :size="20" src="https://s.vzhuo.com/static/images/default-avatar01.png" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
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
	.fill-color-white{
		transition: .4s;
	}
	@keyframes changebg {
		100%{
			background-color: $assist-color;
		}
	}
	.fill-color-assistfix{
		animation: changebg .4s forwards;
	}
</style>
