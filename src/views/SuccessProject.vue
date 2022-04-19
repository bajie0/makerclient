<template>
	<div class="fill-color-page">
		<div class="inner-center fill-color-white paddingtb20">
			<div :style="{width:viewportwidth}">
				<!-- 搜索框 -->
				<div class="padding-bottom-10">
					<el-input placeholder="搜索案例" v-model="example" class="input-with-select" size="large">
						<template #append>
							<el-button :icon="Search"></el-button>
						</template>
					</el-input>
				</div>

				<!-- 行业类型 -->
				<div class="inner-left paddingtb10">
					<div class="text-color-black-light padding-right-10 self-top">行业类型:</div>
					<div class="flex-z gutter10 flex-10">
						<div :style="{color:index == taskcindex? mainColor : '' }" @click="changetask(item)" v-for="(item,index) in 10" :key="index">软件开发</div>
					</div>
				</div>

				<!-- 筛选 -->
				<!-- 发布时间 and 作品评级 -->
				<div class="inner-left gutter20 of-hidden padding-top-10">
					<div class="inner-left">
						<div class="font-14 padding-right-10 text-color-black-light flex-fixed">发布时间</div>
						<el-select v-model="publishtime" placeholder="请选择">
							<el-option v-for="(item,index) in 4" :key="index" value="今天">
							</el-option>
						</el-select>
					</div>
					<div class="inner-left">
						<div class="font-14 padding-right-10 flex-fixed text-color-black-light">任务状态</div>
						<el-select v-model="examplelevel" placeholder="请选择">
							<el-option v-for="(item,index) in 4" :key="index" value="精华">
							</el-option>
						</el-select>
					</div>
				</div>
			</div>
		</div>

		<!-- 案例列表 -->
		<div class="center margin-top-30" :style="{width:viewportwidth}">
			<div class="flex-z">
				<div v-for="(item,index) in 16"  class="width-6 inner-center padding-bottom-20 margin-bottom-20">
					<div class="fill-color-white padding-bottom-10 mousein hover-lg" @click="itemclick(item)">
						<el-image class="width280 height200" fit="cover" src="https://s.vzhuo.com/workDisplay/a6/2b/3e12f034-8a9d-479c-9ea6-2c10c99d08a9.jpg"></el-image>
						<div class="paddinglr10 padding-top-10">
							<div class="font-17">商品logo设计</div>
							<div class="inner-left text-color-black-light padding10 gutter20 border-bottom-lighter-1">
								<div class="paddingtb10">
									<el-tag type="info" size="small">产品设计</el-tag>
								</div>
								<div class="inner-left">
									<div class="custom-icon custom-icon-eye"></div>
									<div>34</div>
								</div>
								<div class="inner-left">
									<div class="custom-icon custom-icon-moneycollect"></div>
									<div>45000¥</div>
								</div>
							</div>
							<div class="inner-left padding-top-10">
								<el-image class="circle-box-30 marginlr10"
									src="https://s.vzhuo.com/workDisplay/a3/60/1b19bc02-be38-498e-ab88-2300aaae7d3a.jpg">
								</el-image>
								<div>感到翻跟斗</div>
							</div>
						</div>
					</div>
				</div>
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
	// 搜索案例
	const example = ref('')

	//发布时间
	const publishtime = ref('')

	//作品评级
	const examplelevel = ref('')
	
	//跳转到案例详情页
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const itemclick = (item)=>{
		router.push('/index/project')
	}
	
	//切换任务类型
	const taskcindex = ref(0)
	const changetask = (index)=>{
		taskcindex.value = index
		//重新获取数据
	}
</script>

<style>

</style>
