<template>
	<div class="inner-center padding-top-40">
		<div :style="{width:viewportwidth}" >
			<div class="font-25">小戒的案例</div>
			<div class="text-color-black-light line-height-10">需求方确认收货的项目会作为案例展示在这里。</div>
		</div>
	</div>
	<div class="inner-center">
		<div class="flex-z paddingtb30" :style="{width:viewportwidth}">
			<div v-for="(item,index) in 6"  class="width-6 inner-center padding-bottom-20 margin-bottom-20">
				<div class="fill-color-white padding-bottom-10 mousein hover-lg" @click="$router.push('/index/project')">
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
</template>

<script setup>
</script>

<style scoped>
</style>
