<template>
	<div class="inner-center fill-color-page">
		<div class="inner-left stretch" :style="{width:viewportwidth}">
			<!-- 右侧布局 -->
			<div class="flex-5 fix1">
				<div class="fill-color-white margintb10 padding20">
					<div class="padding-bottom-10">
						<el-input placeholder="搜索任务" v-model="works" class="input-with-select" size="large">
							<template #append>
								<el-button :icon="Search"></el-button>
							</template>
						</el-input>
					</div>
					<div class="inner-paddingtb-10">
						<!-- 行业类型 -->
						<div class="inner-left">
							<div class="text-color-black-light padding-right-10 flex-1 self-top">行业类型:</div>
							<div class="flex-z gutter10 flex-10">
								<div :style="{color:index == taskcindex? mainColor : '' }" @click="changetask(item)" v-for="(item,index) in 10" :key="index">软件开发</div>
							</div>
						</div>
						
						<!-- 任务类型 -->
						<div class="inner-left">
							<div class="text-color-black-light padding-right-10 flex-1 self-top">任务类型:</div>
							<div class="flex-z gutter10 flex-10">
								<div :style="{color:index == taskcindex? mainColor : '' }" @click="changetask(item)" v-for="(item,index) in 2" :key="index">招标</div>
							</div>
						</div>
	
						<!-- 发布时间 -->
						<div class="inner-justify gutter20 of-hidden">
							<div class="inner-left">
								<div class="font-14 padding-right-10 text-color-black-light flex-fixed">发布时间</div>
								<el-select v-model="publishtime" placeholder="请选择">
									<el-option v-for="(item,index) in 4" :key="index" value="今天">
									</el-option>
								</el-select>
							</div>
							<div class="inner-left">
								<div class="font-14 padding-right-10 flex-fixed text-color-black-light">任务状态</div>
								<el-select v-model="workstate" placeholder="请选择">
									<el-option v-for="(item,index) in 4" :key="index" value="进行中">
									</el-option>
								</el-select>
							</div>
							<div class="inner-left">
								<div class="font-14 padding-right-10 flex-fixed text-color-black-light">金额排序</div>
								<el-select v-model="pricefillter" placeholder="请选择">
									<el-option v-for="(item,index) in 4" :key="index" value="从高到低">
									</el-option>
								</el-select>
							</div>
						</div>
					</div>
				</div>
				<div @click="itemclick(item)" class="padding20 padding-bottom-10 fill-color-white hover-sm margin-bottom-10"  v-for="(item,index) in listdata" :key="index">
					<div class="inner-justify">
						<div class="flex-column border-bottom-lighter-1 flex1 padding-bottom-20">
							<div class="inner-left padding-bottom-10">
								<div class="font-17 ellipsis-1">{{item.title}}</div>
								<div class="text-color-black-light font-11 paddinglr30">{{item.titme}}</div>
							</div>
							<div class="inner-left">
								<div :style="{color:warningColor}" class="text-weight">{{item.price}}</div>
								<div class="font-12 inner-left gutter10 paddinglr30">
									<div>{{item.during}}</div>
									<div class="separateline-dark-1 height10"></div>
									<div>{{item.type}}</div>
								</div>
							</div>
						</div>
						<el-button class="self-top" type="primary" @click.stop>投标</el-button>
					</div>
					<div class="inner-justify paddingtb20">
						<div class="width600 ellipsis-1 font-11 text-color-black-middle">描述：{{item.discrimination}}</div>
						<div class=" width200 font-13">投标人数：{{item.num}}</div>
					</div>
				</div>
				<div class="inner-center paddingtb30 padding-bottom-90">
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="1000">
					</el-pagination>
				</div>
			</div>

			<!-- 左侧布局 -->
			<div class="flex-2 margin-left-10">
				<div class="fill-color-white margin-top-10">
					<div class="paddingtb20 padding-left-20 border-bottom-light-1 font-17">热门任务</div>
					<div class="paddingtb20">
						<div class="font-14 padding10 inner-justify paddinglr20 text-color-black-middle" v-for="(item,index) in 7" :key="index">
							<div class="ellipsis-1 hoverfix" @click="$router.push('/details')">
								范德萨富士达广泛大使馆反对是广泛的告诉
							</div>
							<div :style="{color:warningColor}">
								￥457
							</div>
						</div>
					</div>
				</div>
				<div class="fill-color-white margin-top-10">
					<div class="paddingtb20 padding-left-20 border-bottom-light-1 font-17">浏览过的</div>
					<div class="paddingtb20">
						<div class="font-14 padding10 inner-justify paddinglr20 text-color-black-middle" v-for="(item,index) in 7" :key="index">
							<div class="ellipsis-1 hoverfix" @click="$router.push('/details')">
								范德萨富士达广泛大使馆反对是广泛的告诉对方规划单方事故多发或多个
							</div>
							<div :style="{color:warningColor}">
								￥457
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
	import { Search } from '@element-plus/icons-vue'
	const works = ref('')
	// 从vuex中读取行业类型
	import { store } from '../store/index.js'
	import { useRouter } from 'vue-router'
	const router = useRouter()

	//切换任务类型
	const taskcindex = ref(0)
	const changetask = (index)=>{
		taskcindex.value = index
		//重新获取数据
	}

	//发布时间
	const publishtime = ref('')
	//任务状态
	const workstate = ref('')
	//金额排序
	const pricefillter = ref('')
	
	// 任务列表数据的接口
	const listdata = ref([
		{
			id:1,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是人反对广泛大概所发生的个好地方，范德萨发给广东佛山韩国的换个地方华国锋',
			num:14
		},
		{
			id:2,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:3,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是浮雕是人反对广泛大概所发生的个好地方，范德萨发给',
			num:14
		},
		{
			id:4,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:5,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是浮雕是人反对广泛大概所发生的个好地方，范德萨发给',
			num:14
		},
		{
			id:6,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:7,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:8,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:9,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:10,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		},
		{
			id:11,
			title:'给犯得上广泛的广泛的光辐射大概恢复大会',
			time:'2021-02-14',
			price:'500-600',
			during:'2天',
			type:'设计',
			discrimination:'感到附属国收到非高峰时段，鬼地方高浮雕是',
			num:14
		}
	])
	
	//跳转详情页
	const itemclick = (item)=>{
		router.push({
			path:'/index/workdetails',
			query:{
				id:item.id
			}
		})
	}
</script>

<style scoped lang="scss">
	.flex-menu > *:hover{
		cursor: pointer;
	}
	.el-select .el-input {
		width: 130px;
	}

	.input-with-select .el-input-group__prepend {
		background-color: #fff;
	}

	.fix1 {
		overflow-x: hidden;
	}
	.hoverfix:hover{
		color: v-bind(mainColor);
		cursor: pointer;
	}
</style>