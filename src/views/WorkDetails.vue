<template>
	<div class="inner-center fill-color-page padding-bottom-100">
		<div class="inner-left stretch" :style="{width:viewportwidth}">
			<!-- 左侧布局 -->
			<div class="flex1">
				<div>
					<div class="fill-color-white margintb10">
						<div class="inner-left gutter10 padding10">
							<div class="inner-left" v-for="(item,index) in progresslist" :key="index">
								<div class="circle-box-20 inner-center border-around-dark-1">{{index + 1}}</div>
								<div class="">{{item.title}}</div>
								<div class="custom-icon custom-icon-right padding10"></div>
							</div>
						</div>
					</div>
					<div class="flex-column paddinglr20 fill-color-white paddingtb20 padding-bottom-10">
						<div class="inner-left font-13 text-color-black-light paddingtb10">
							<div class="padding-right-30 font-15">赵鹏</div>
							<div>发布于2015-10-14</div>
						</div>
						<div class="inner-justify padding-bottom-10">
							<div class="inner-left">
								<div class="padding-right-20 font-27">电控系统APP功能界面</div>
								<el-tag>招标</el-tag>
								<el-tag type="danger" class="marginlr10">进行中</el-tag>
							</div>
							<div class="inner-left">
								<el-button plain type="primary">联系需求方</el-button>
								<el-button type="primary">投标</el-button>
							</div>
						</div>
						<div class="inner-justify">
							<!-- 普通需求 -->
							<div class="inner-left gutter20 paddingtb20" v-if="true">
								<div :style="{color:warningColor}">￥9999-12000</div>
								<div class="separateline-light-1 height20"></div>
								<div class="text-color-black-middle">平均报价：9854</div>
								<div class="separateline-light-1 height20"></div>
								<div class="text-color-black-middle">工期27天</div>
								<div class="separateline-light-1 height20"></div>
								<div class="text-color-black-middle">已投标8人</div>
							</div>
							<!-- 招聘需求 -->
							<div  v-else class="inner-left paddingtb10">
								<div :style="{color:warningColor}" class="flex-fixed self-top">￥9999-12000</div>
								<div class="flex-z wrap inner-paddinglr-10">
									<div>已雇11人(共30人)</div>
									<div>性别不限</div>
									<div>20～30岁</div>
									<div>经验1-2年</div>
									<div>本科</div>
									<div>要求统招</div>
									<div>接受应届生</div>
									<div>允许第三方推荐</div>
								</div>
							</div>
							<div class="inner-left">
								<div class="custom-icon custom-icon-eye"></div>
								<div>125</div>
							</div>
						</div>
					</div>
					<div class="margintb10 fill-color-white padding-bottom-40">
						<div class="inner-left gutter10 paddingtb30">
							<div class="separateline-light-5 height30 fill-color-assist"></div>
							<div class="font-20">基本资料</div>
						</div>
						<div class="paddinglr40 font-40">
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light font-17">项目描述:</div>
								<div class="flex1 line-height-5 font-17">法大师傅撒更发达给范德萨给是，分隔符广泛受到广泛的是。鬼斧神工是否，广泛大使馆发都是个，广泛大使馆发给广泛的给范德萨给对方。</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light font-17">任务种类:</div>
								<div class="flex1 font-17">发生的故事的</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light font-17">技能要求</div>
								<div class="flex1 line-height-5 font-17">法撒旦光辐射大概广泛单干户范德萨，分公司的给发范德萨。广泛大使馆士大夫鬼地方公司的分隔符，广泛大使馆。</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light font-17">附件资料:</div>
								<div class="inner-left flex1 hover-ol">
									<div class="custom-icon custom-icon-file-add-fill"></div>
									<div class="font-17">范德萨给给.pptx</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 薪资待遇 -->
					<div class="margintb10 fill-color-white padding-bottom-40" v-if="false">
						<div class="inner-left gutter10 paddingtb30">
							<div class="separateline-light-5 height30 fill-color-assist"></div>
							<div class="font-20">薪资待遇</div>
						</div>
						<div class="paddinglr40">
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light">试用期:</div>
								<div class="flex1">3个月</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light">试用期薪资</div>
								<div class="flex1">全薪</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light">基本福利</div>
								<div class="flex1">五险</div>
							</div>
							<div class="inner-left stretch padding10">
								<div class="width100 text-color-black-light">其它福利</div>
								<div class="inner-left flex1 fix">
									<div>-</div>
								</div>
							</div>
						</div>
					</div>
					<div class="margintb10 fill-color-white padding-bottom-40">
						<div class="inner-left gutter10 paddingtb30">
							<div class="separateline-light-5 height30 fill-color-assist"></div>
							<div class="font-20">已雇佣11人</div>
						</div>
						<div class="flex-z paddinglr10">
							<div class="width-8 margin-bottom-20" v-for="(item,index) in 14" :key="index">
								<div class="inner-left border-around-lighter-1 padding10 marginlr10 hoverfix" @click="$router.push('/makerdetails')">
									<el-image class="circle-box-50" src="https://s.vzhuo.com/static/images/default-avatar03.png"></el-image>
									<div class="flex-column padding10">
										<div class="text-space-2 padding-bottom-10 font-17">赵鹏</div>
										<div class="inner-left text-color-black-light gutter10 font-14">
											<div>男</div>
											<div class="separateline-light-1 height10"></div>
											<div>35</div>岁
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>

			<!-- 右侧布局 -->
			<div class="width330 margin-top-10 self-top margin-left-10">
				<div class="fill-color-white">
					<div class="padding30 border-bottom-light-1">您也有类似需求？</div>
					<div class="padding30 inner-center">
						<el-button type="primary" class="width200" @click="$router.push('/needs')">快速发布</el-button>
					</div>
				</div>
				<div class="fill-color-white margin-top-10">
					<div class="padding40 paddingtb20 padding-left-30 border-bottom-light-1">热门任务</div>
					<div class="paddingtb20">
						<div class="font-14 padding10 inner-justify paddinglr30" v-for="(item,index) in 7" :key="index">
							<div class="ellipsis-1 hoverlink" @click="$router.push('/details')">
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

	//进度条数据
	const progresslist = ref([{
			title: '发布项目'
		},
		{
			title: '创客投标'
		},
		{
			title: '雇佣创客'
		},
		{
			title: '交付文件'
		},
		{
			title: '项目完成'
		}
	])
</script>

<style scoped lang="scss">
	.hoverfix{
		transition: .4s;
	}
	.hoverfix:hover{
		cursor: pointer;
		border:1px solid v-bind(mainColor);
	}
</style>