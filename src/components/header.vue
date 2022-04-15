<template>
	<div class="inner-center boxshadow-middle-10 fill-color-white">
		<div class="inner-justify paddingtb10" :style="{width:viewportwidth}">
			<div class="inner-left gutter20">
				<div class="fontfix">微创客</div>
				<div class="inner-left gutter20">
					<el-popover placement="bottom-start" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 5px;">
						<template #reference>
							<div class="hover-ol">发布需求</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="hover-sm padding10" v-for="(item,index) in 4" :key="index">兼职</div>
					</el-popover>
					<div>寻找创客</div>
					<el-popover placement="bottom-start" width="500">
						<template #reference>
							<div class="hover-ol">寻找任务</div>
						</template>
						<!-- 需求类型菜单 -->
						<div class="width500 inner-left">
							<div v-for="(item,index) in 2" :key="index">
								<div v-for="(items,indexs) in 4" :key="indexs">
									<div>市场营销</div>
									<div class="flex-z gutter10 paddingtb10">
										<div v-for="(itemss,indexss) in 20" class="scale-sm-1 text-color-black-light" :key="indexss">细目</div>
									</div>
								</div>
							</div>
						</div>
					</el-popover>
					<div>成功案例</div>
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
</script>

<script>
	export default {}
</script>

<style scoped lang="scss">
	@import '@/libs/theme.scss';
	.fontfix {
		font-family: 楷体;
	}
	.hover-sm:hover{
		background-color: $main-color;
		color: $extreme-text-color;
	}
</style>
