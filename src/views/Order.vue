<template>
	<div class="inner-center">
		<div class="margin-bottom-40" :style="{width:viewportwidth}">
			<el-tabs v-model="activeName">
				<el-tab-pane label="我的投标" name="我的投标">
					<div class="flex-z">
						<div class="width-8" v-for="(item,index) in 10" :key="index">
							<div class="paddinglr20 fill-color-white marginlr10 margin-bottom-20 hover" @click="$router.push('/index/workdetails')">
								<div class="font-20 text-weight paddingtb20 ellipsis-2">红红何炅过后翻云覆雨，发发图发图衣服</div>
								<div class="inner-left gutter10 padding-bottom-20 border-bottom-light-1">
									<div class="inner-left">
										<div class="text-color-black-light">我的报价:</div>
										<div :style="{color:warningColor}">￥1.2万</div>
									</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">软件开发</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">2021-04-14投标</div>
								</div>
								<div class="paddingtb20">
									<el-tag type="info">已投标</el-tag>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="我的中标" name="我的中标">
					<div class="flex-z">
						<div class="width-8" v-for="(item,index) in 10" :key="index">
							<div class="paddinglr20 fill-color-white marginlr10 margin-bottom-20 hover" @click="$router.push('/index/workdetails')">
								<div class="font-20 text-weight paddingtb20">红红何炅过后翻云覆雨，发发图发图衣服</div>
								<div class="inner-left gutter10 padding-bottom-20 border-bottom-light-1">
									<div class="inner-left">
										<div class="text-color-black-light">我的报价:</div>
										<div :style="{color:warningColor}">￥1.2万</div>
									</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">软件开发</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">2021-04-14投标</div>
								</div>
								<div class="paddingtb20">
									<el-tag type="success">已中标</el-tag>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="已发货" name="已发货">
					<div class="flex-z">
						<div class="width-8" v-for="(item,index) in 10" :key="index">
							<div class="paddinglr20 fill-color-white marginlr10 margin-bottom-20 hover" @click="$router.push('/index/workdetails')">
								<div class="font-20 text-weight paddingtb20">红红何炅过后翻云覆雨，发发图发图衣服</div>
								<div class="inner-left gutter10 padding-bottom-20 border-bottom-light-1">
									<div class="inner-left">
										<div class="text-color-black-light">我的报价:</div>
										<div :style="{color:warningColor}">￥1.2万</div>
									</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">软件开发</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">2021-04-14投标</div>
								</div>
								<div class="paddingtb20">
									<el-tag>已发货</el-tag>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="已交付" name="已交付">
					<div class="flex-z">
						<div class="width-8" v-for="(item,index) in 10" :key="index">
							<div class="paddinglr20 fill-color-white marginlr10 margin-bottom-20 hover" @click="$router.push('/index/workdetails')">
								<div class="font-20 text-weight paddingtb20">红红何炅过后翻云覆雨，发发图发图衣服</div>
								<div class="inner-left gutter10 padding-bottom-20 border-bottom-light-1">
									<div class="inner-left">
										<div class="text-color-black-light">我的报价:</div>
										<div :style="{color:warningColor}">￥1.2万</div>
									</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">软件开发</div>
									<div class="separateline-light-1 height10"></div>
									<div class="text-color-black-light">2021-04-14投标</div>
								</div>
								<div class="paddingtb20">
									<el-tag type="warning">已交付</el-tag>
								</div>
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const handleClick = (tab, event) => {
		console.log(tab, event);
	}
	
	// tabs进度卡
	const activeName = ref('我的投标')

</script>

<style scoped>
	>>>.el-tabs__nav-scroll {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30px 0;
	}

	>>>.el-tabs__item.is-active {
		font-size: 20px;
		font-weight: 600;
	}
	>>> .el-tabs__nav-wrap::after{
		background-color: unset;
	}
</style>