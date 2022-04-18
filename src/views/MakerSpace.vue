<template>
	<div class="fill-color-page margin-bottom-40">
		<div class="inner-center">
			<div class="inner-left stretch" :style="{width:viewportwidth}">
				<div class="width330">
					<div
						class="inner-column-center fill-color-white paddingtb50 padding-top-70 margin-top-100 positionbox">
						<div class="move-to-top-120">
							<el-image class="ptop circle-box-110 padding10 fill-color-white"
								src="https://s.vzhuo.com/static/images/default-avatar02.png"></el-image>
						</div>
						<div class="inner-left gutter10 paddingtb10">
							<div>无锡非物科技</div>
							<div class="custom-icon custom-icon-qi"></div>
							<div class="custom-icon custom-icon-vip"></div>
						</div>
						<div class="inner-left gutter10 text-color-black-light padding-bottom-40">
							<div>临汾</div>
							<div class="separateline-light-1 height20"></div>
							<div>开发</div>
							<div class="separateline-light-1 height20"></div>
							<div>7年</div>
						</div>
						<el-button type="primary" class="width200">邀请创客</el-button>
					</div>
					<div class="margintb10 fill-color-white padding20">
						<div class="font-17 paddingtb10">个人信息</div>
						<div class="inner-left gutter10 paddingtb10 text-color-black-light">
							<div class="custom-icon custom-icon-mail"></div>
							<div>邮箱：签订工作合同后可查看</div>
						</div>
						<div class="inner-left gutter10 paddingtb10 text-color-black-light">
							<div class="custom-icon custom-icon-weixian"></div>
							<div>微信：签订工作合同后可查看</div>
						</div>
					</div>
					<div class="margintb10 fill-color-white padding20">
						<div class="font-17 paddingtb10">业绩</div>
						<div class="inner-justify">
							<div>成交量：14单</div>
							<div>成交额：125452元</div>
						</div>
					</div>
					<div class="fill-color-white padding20">
						<div class="font-17 paddingtb10">具备技能</div>
						<el-tag v-for="(item,index) in 10" class="margin10">PHP</el-tag>
					</div>
				</div>
				<div class="flex1">
					<div class="inner-left gutter20 padding20">
						<div @click="changeindex(index)" class="border-around-dark-1 padding20 paddingtb10 hover-ol"
							v-for="(item,index) in tabs" :key="index"
							:class="index == spaceindex? 'fill-color-assist text-color-white' : ''">{{item.title}}</div>
					</div>
					<div class="padding20 fill-color-white fix margin-left-10" v-if="spaceindex == 0">
						<div class="paddingtb20 border-bottom-lighter-1">
							<div class="inner-left gutter20 padding-bottom-20">
								<div class="separateline-light-3 height30 fill-color-assist"></div>
								<div class="font-20">基本资料</div>
							</div>
							<div class="inner-left stretch">
								<div class="width100 tr text-color-black-light paddingtbfix">
									<div>姓名:</div>
									<div>性别:</div>
									<div>出生日期:</div>
									<div>现居城市:</div>
									<div>邮箱:</div>
									<div>微信:</div>
									<div>身高:</div>
									<div>自我介绍:</div>
								</div>
								<div class="flex1 padding-left-20 paddingtbfix">
									<div>赵鹏</div>
									<div>男</div>
									<div>1984-12-14</div>
									<div>临汾</div>
									<div>416549646@qq.com</div>
									<div>4154545</div>
									<div>1.75</div>
									<div>发多少个撒梵蒂冈地方很大功夫更发达，广泛大使馆发</div>
								</div>
							</div>
						</div>
						<div class="paddingtb20 border-bottom-lighter-1">
							<div class="inner-left gutter20 padding-bottom-20">
								<div class="separateline-light-3 height30 fill-color-assist"></div>
								<div class="font-20">教育现状</div>
							</div>
							<div class="inner-left stretch">
								<div class="width100 tr text-color-black-light paddingtbfix">
									<div>最高学历:</div>
									<div>身份:</div>
								</div>
								<div class="flex1 padding-left-20 paddingtbfix">
									<div>本科</div>
									<div>已毕业</div>
								</div>
							</div>
						</div>
						<div class="paddingtb20 border-bottom-lighter-1">
							<div class="inner-left gutter20 padding-bottom-20">
								<div class="separateline-light-3 height30 fill-color-assist"></div>
								<div class="font-20">教育信息</div>
							</div>
							<div class="flex-menu">
								<div>山西大学</div>
								<div>本科</div>
								<div>计算机科学</div>
								<div>2011-2015年</div>
							</div>
						</div>
						<div class="paddingtb20 border-bottom-lighter-1">
							<div class="inner-left gutter20 padding-bottom-20">
								<div class="separateline-light-3 height30 fill-color-assist"></div>
								<div class="font-20">职业信息</div>
							</div>
							<div class="inner-left stretch">
								<div class="width100 tr text-color-black-light paddingtbfix">
									<div>职业类别:</div>
									<div>工作年限:</div>
									<div class="height50">具备技能:</div>
									<div>目前薪资:</div>
									<div>期望薪资:</div>
								</div>
								<div class="flex1 padding-left-20 paddingtbfix">
									<div>开发</div>
									<div>7年</div>
									<div class="height50 inner-left wrap of-scroll gutter10 of-hidden inner-margin-bottom-10">
										<el-tag v-for="(item,index) in 7" :key="index">PHP</el-tag>
									</div>
									<div>6000元/月</div>
									<div>6000元/月</div>
								</div>
							</div>
						</div>
						<div class="paddingtb20 border-bottom-lighter-1">
							<div class="inner-left gutter20">
								<div class="separateline-light-3 height30 fill-color-assist"></div>
								<div class="font-20">工作经历</div>
							</div>
							<div class="paddingtb20 paddinglr10 paddingtbfix" v-for="(item,index) in joblist"
								:key="index">
								<div class="inner-left">
									<div class="text-weight text-space-1">{{item.name}}</div>
									<div class="text-color-black-light paddinglr20">{{item.during}}</div>
								</div>
								<div class="inner-left">
									<div class="custom-icon custom-icon-antdesign"></div>
									<div class="text-space-2 padding-left-10">{{item.role}}</div>
								</div>
								<div class="text-color-black-light font-15">{{item.jobcontent}}</div>
							</div>
						</div>
					</div>
					<div class="flex-z margin-top-20 margin-left-10" v-if="spaceindex == 1">
						<div v-for="(item,index) in 6" class="width-8 inner-center padding-bottom-20 margin-bottom-20" @click="toproject(item)">
							<div class="fill-color-white padding-bottom-20 hover-sm">
								<el-image class="width270 height190"
									src="https://s.vzhuo.com/workDisplay/a6/2b/3e12f034-8a9d-479c-9ea6-2c10c99d08a9.jpg"></el-image>
								<div class="paddinglr10 padding-top-10">
									<div class="font-17 text-weight">发大水</div>
									<div class="inner-left text-color-black-light padding10 gutter20">
										<div>平面设计</div>
										<div class="inner-left">
											<div class="custom-icon custom-icon-eye"></div>
											<div>34</div>
										</div>
										<div class="inner-left">
											<div class="custom-icon custom-icon-mobile"></div>
											<div>450</div>
										</div>
									</div>
									<div class="text-color-black-light padding-top-20 border-top-light-1">
										2021-04-11
									</div>
								</div>
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
		useRouter
	} from 'vue-router'
	const router = useRouter()

	import {
		store
	} from '../store/index.js'

	const tabs = ref([{
			title: '个人信息',
		},
		{
			title: '案例列表',
		}
	])

	//切换个人信息和案例列表的tabs
	const spaceindex = ref(0)
	const changeindex = (index) => {
		spaceindex.value = index
	}

	// //切换作为服务方和作为需求方的tabs
	// const activeName = ref(0)
	// const tabchange = (tab) => {
	// 	console.log(tab)
	// 	if (tab == 1) {
	// 		//请求作为服务方的数据

	// 	}
	// }

	//工作经历的数据接口
	const joblist = ref([{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		},
		{
			name: '犯得上广泛撒的功夫公司',
			during: '2014/10/14 - 2015/10/01',
			role: '销售顾问',
			jobcontent: '范德萨发大水发射点反对，广泛广泛的，分公司光辐射大概豆腐干士大夫鬼地方'
		}
	])
	//去看案例
	const toproject = (item)=>{
		router.push('/index/project')
	}
</script>
<style scoped>
	>>>.el-tabs__item.is-active {
		font-size: 17px;
		font-weight: 600;
	}

	>>>.el-tabs {
		flex: 1;
	}

	.fix {
		margin-top: 16px;
	}

	.paddingtbfix>* {
		padding: 10px 0;
	}
</style>
