<template>
	<div class="fill-color-white inner-center">
		<div :style="{width:viewportwidth}">
			<!-- 创客搜索框 -->
			<div class="padding-top-20">
				<el-input v-model="maker" placeholder="搜索创客" size="large">
					<template #append>
						<el-button :icon="Search" />
					</template>
				</el-input>
			</div>
			<!-- 行业类型 -->
			<div class="inner-left gutter10 paddingtb10 padding-bottom-20">
				<div>行业类型：</div>
				<div class="inner-left gutter20">
					<div class="hover-ol" v-for="(item,index) in 8" :key="index">类型</div>
				</div>
			</div>
		</div>
	</div>
	<div class="inner-center margin-bottom-40">
		<div :style="{width:viewportwidth}" class="inner-left stretch">
			<!-- 创客列表区 -->
			<div class="flex-5">
				<!-- 创客列表 -->
				<div class="flex-z paddingtb20 of-hidden">
					<div @click="tomakerspace(item)" class="width-8 padding-right-10 margin-bottom-20 animate__animated animate__fadeInUp padding-left-10" :class="'time-' + (index + 1)" v-for="(item,index) in 27">
						<el-card :body-style="{padding:'0px'}" shadow="hover" class="hover-ol positionbox">
							<el-tag size="small" class="prt margin10 scale-sm-2">个人创客</el-tag>
							<div class="padding-top-20">
								<div class="paddinglr20 paddingtb10">
									<div class="inner-left">
										<el-avatar :size="50" src="https://s.vzhuo.com/static/images/default-avatar01.png"></el-avatar>
										<div class="flex-column padding-left-10">
											<div class="font-20">小戒</div>
											<div class="inner-left ol gutter10 text-color-black-light">
												<div>临汾</div>
												<div class="separateline-light-1 height10"></div>
												<div>前端开发</div>
												<div class="separateline-light-1 height10"></div>
												<div>7年</div>
											</div>
										</div>
									</div>
									<div class="padding-top-10 ellipsis-1 tj text-color-black-light padding-bottom-10">
										<span>技能：</span>
										<span v-for="(item,index) in 4">小程序开发<span v-if="index != 3">、</span></span>
									</div>
								</div>
								<div class="inner-justify padding10 fill-color-assistfix text-color-white">
									<div class="inner-left">
										<div>案例数:</div>
										<div>3</div>
									</div>
									<div class="inner-left">
										<div>成交量:</div>
										<div>5</div>
									</div>
									<div class="inner-left">
										<div>成交额:</div>
										<div>1.5w</div>
									</div>
								</div>
							</div>
						</el-card>
					</div>
				</div>
				<!-- 分页 -->
				<el-pagination background layout="prev, pager, next" :total="1000" />
			</div>
			<!-- 推荐创客区 -->
			<div class="flex-2">
				<div class="fill-color-white margin-top-20">
					<div class="padding20 border-bottom-lighter-1 font-17">创客推荐</div>
					<div class="inner-justify border-bottom-lighter-1 hover-sm padding20" v-for="(item,index) in 8">
						<div class="inner-left">
							<el-avatar :size="40" src="https://s.vzhuo.com/static/images/default-avatar01.png"></el-avatar>
							<div class="flex-column padding-left-10">
								<div class="font-20">小戒</div>
								<div class="inner-left gutter10 text-color-black-light">
									<div class="font-14">临汾</div>
									<div class="separateline-light-1 height10"></div>
									<div class="font-14">前端开发</div>
									<div class="separateline-light-1 height10"></div>
									<div class="font-14">1年</div>
								</div>
							</div>
						</div>
						<div>成交：<span class="text-color-warning text-weight">12单</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { Search } from '@element-plus/icons-vue'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	//搜索创客
	const maker = ref('')
	//跳转到创客空间
	import router from '../router/index.js'
	const tomakerspace = ()=>{
		router.push('/index/makerspace')
	}
</script>

<style scoped>
	.fill-color-assistfix{
		background-color: rgba(0, 0, 0, 0.2);
		transition: .4s;
	}
	.hover-ol:hover .fill-color-assistfix{
		background-color: rgba(0, 0, 0, 1);
	}
</style>
