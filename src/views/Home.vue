<template>
	<!-- 轮播 -->
	<el-carousel trigger="click" height="330px">
		<el-carousel-item v-for="(item,index) in carouseldata" :key="index">
			<el-image :src="item" fit="cover" class="height330 width-24"></el-image>
		</el-carousel-item>
	</el-carousel>
	<div class="inner-center">
		<div :style="{width:viewportwidth}">
			<!-- 热门展示区 -->
			<!-- 任务热门 -->
			<div class="inner-center padding20 font-20 padding-top-40">寻找任务</div>
			<div class="fill-color-white margin-bottom-20" v-for="(item,index) in 3" :key="index">
				<div class="inner-justify padding20 border-bottom-lighter-1">
					<div>命其权重</div>
					<div class="inner-left gutter10">
						<div>查看更多</div>
						<div>></div>
					</div>
				</div>
				<div class="inner-left">
					<div class="flex-column flex-1 padding20" :class="index == 4? '' : 'border-right-lighter-1'"
						v-for="(item,index) in 5" :key="index">
						<div class="ellipsis-1">高浮雕高浮雕广东佛山公司发的</div>
						<div class="padding-top-10">
							<span class="text-color-warning">$500</span>
							<span>/月</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 创客热门 -->
			<div class="padding-bottom-30">
				<div class="inner-center padding20 font-20 padding-top-40">优质创客</div>
				<!-- tabs -->
				<div class="inner-left">
					<div @click="changemakertab(index,item)" v-for="(item,index) in 9" :key="index"
						class="padding20 paddingtb10"
						:class="makercurrentTab == index? 'border-bottom-dark-4 text-weight text-color-main border-color-main' : 'text-color-black-light'">
						市场运营</div>
				</div>
				<!-- tabs对应的数据 -->
				<div class="inner-left gutter10 paddingtb30">
					<el-card :body-style="{padding:'15px'}" shadow="hover" v-for="(item,index) in 4" class="flex-1">
						<div class="inner-left">
							<el-avatar :size="30" src="https://s.vzhuo.com/static/images/default-avatar01.png"></el-avatar>
							<div class="flex-column padding-left-10">
								<div>小戒</div>
								<div class="inner-left scale-sm-2 ol gutter10">
									<div>临汾</div>
									<div class="separateline-light-1 height10"></div>
									<div>前端开发</div>
								</div>
							</div>
						</div>
						<div class="inner-justify paddingtb10 scale-sm-2 ol">
							<div class="inner-left">
								<div>作品量</div>
								<div>3</div>
							</div>
							<div class="inner-left">
								<div>成交量</div>
								<div>5</div>
							</div>
							<div class="inner-left">
								<div>成交额</div>
								<div>1.5w</div>
							</div>
						</div>
						<div class="inner-left fill-color-page padding10">
							<div>技能:</div>
							<div class="inner-left text-color-main scale-sm-1 gutter10">
								<div>小程序开发</div>
								<div>app开发</div>
							</div>
						</div>
					</el-card>
				</div>
				<div class="inner-center">
					<el-button class="width200" type="primary" plain>查看全部</el-button>
				</div>
			</div>
			<!-- 案例热门 -->
			<div class="padding-bottom-50">
				<div class="inner-center padding20 font-20 padding-top-40">优秀案例</div>
				<!-- tabs -->
				<div class="inner-left">
					<div @click="changeexampletab(index,item)" v-for="(item,index) in 9" :key="index"
						class="padding20 paddingtb10"
						:class="examplecurrentTab == index? 'border-bottom-dark-4 text-weight text-color-main border-color-main' : 'text-color-black-light'">
						市场运营</div>
				</div>
				<!-- tabs对应的数据 -->
				<div class="inner-left gutter10 paddingtb30">
					<el-card :body-style="{padding:'15px'}" shadow="hover" v-for="(item,index) in 4" class="flex-1">
						<div class="inner-left">
							<el-avatar :size="30" src="https://s.vzhuo.com/static/images/default-avatar01.png"></el-avatar>
							<div class="flex-column padding-left-10">
								<div>小戒</div>
								<div class="inner-left scale-sm-2 ol gutter10">
									<div>临汾</div>
									<div class="separateline-light-1 height10"></div>
									<div>前端开发</div>
								</div>
							</div>
						</div>
						<div class="inner-justify paddingtb10 scale-sm-2 ol">
							<div class="inner-left">
								<div>作品量</div>
								<div>3</div>
							</div>
							<div class="inner-left">
								<div>成交量</div>
								<div>5</div>
							</div>
							<div class="inner-left">
								<div>成交额</div>
								<div>1.5w</div>
							</div>
						</div>
						<div class="inner-left fill-color-page padding10">
							<div>技能:</div>
							<div class="inner-left text-color-main scale-sm-1 gutter10">
								<div>小程序开发</div>
								<div>app开发</div>
							</div>
						</div>
					</el-card>
				</div>
				<div class="inner-center">
					<el-button class="width200" type="primary" plain>查看全部</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	//请求轮播图数据
	const carouseldata = ref([])
	carouseldata.value = ['https://img.zcool.cn/community/01a11358da3298a801219c779fb047.jpg@1280w_1l_2o_100sh.jpg',
		'https://img.zcool.cn/community/01922e58da329ea801219c779ea93e.jpg@1280w_1l_2o_100sh.jpg'
	]
	//创客tab切换
	const makercurrentTab = ref(0)
	const changemakertab = (index, item) => {
		if (index == makercurrentTab.value) return
		makercurrentTab.value = index
		//请求tab下对应的数据

	}
	//案例tab切换
	const examplecurrentTab = ref(0)
	const changeexampletab = (index, item) => {
		if (index == examplecurrentTab.value) return
		examplecurrentTab.value = index
		//请求tab下对应的数据
	
	}
</script>

<style scoped>
</style>
