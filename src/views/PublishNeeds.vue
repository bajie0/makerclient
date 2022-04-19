<template>
	<div class="inner-center margin-bottom-40">
		<div :style="{width:viewportwidth}" class="inner-left stretch">
			<!-- 需求发布区 -->
			<div class="flex-5">
				<div class="inner-justify paddingtb30">
					<div class="font-20 paddingtb20">需求发布</div>
					<div>
						<el-radio-group v-model="needstype">
							<el-radio-button label="招聘" />
							<el-radio-button label="招标" />
						</el-radio-group>
					</div>
				</div>
				<div class="fill-color-white padding20 inner-padding-bottom-30">
					<!-- 项目主题 -->
					<div class="padding-bottom-10">
						<div class="inner-left paddingtb10">
							<div class="text-color-warning">*</div>
							<div class="font-15">项目主题</div>
						</div>
						<el-input size="large" v-model="formdata.title" placeholder="一句话描述,例如:我要开发一个微信小程序" />
					</div>
					<!-- 项目类型 -->
					<div class="padding-bottom-10">
						<div class="inner-left paddingtb10">
							<div class="text-color-warning">*</div>
							<div class="font-15">项目类型</div>
						</div>
						<div class="inner-left gutter10">
							<el-select size="large" v-model="formdata.type" placeholder="选择项目类型" class="flex-1 of-hidden">
								<el-option v-for="(item,index) in 4" :key="index" label="类型" value="类型" />
							</el-select>
							<el-select size="large" v-model="formdata.service" placeholder="选择具体服务" class="of-hidden">
								<el-option v-for="(item,index) in 4" :key="index" label="服务" value="服务" />
							</el-select>
						</div>
					</div>
					<!-- 需求描述 -->
					<div class="padding-bottom-10">
						<div class="inner-left paddingtb10">
							<div class="text-color-warning">*</div>
							<div class="font-15">需求描述</div>
						</div>
						<el-input size="large" type="textarea" rows="7" v-model="formdata.content" placeholder="请简单描述您的项目需求" />
					</div>
					<!-- 创客技能 -->
					<div class="padding-bottom-10">
						<div class="inner-left paddingtb10">
							<div class="text-color-warning">*</div>
							<div class="font-15">期望创客技能</div>
						</div>
						<el-select size="large" class="width-24" v-model="formdata.skills" multiple
							placeholder="请合理期望期望创客技能,否则可能影响创客接单">
							<el-option v-for="(item,index) in 10" :key="index" label="技能" value="技能" />
						</el-select>
					</div>
					<div class="inner-left gutter10 padding-bottom-10">
						<!-- 成交价 -->
						<div class="flex-1">
							<div class="inner-left paddingtb10">
								<div class="text-color-warning">*</div>
								<div class="font-15">期望成交价/元（只能输入整数）</div>
							</div>
							<el-input size="large" v-model="formdata.price" placeholder="请合理期望成交价,否则可能影响创客接单" />
						</div>
						<!-- 工期 -->
						<div class="flex-1">
							<div class="inner-left paddingtb10">
								<div class="text-color-warning">*</div>
								<div class="font-15">期望工期/天（只能输入整数）</div>
							</div>
							<el-input size="large" v-model="formdata.days" placeholder="请合理期望工期,否则可能影响创客接单" />
						</div>
					</div>
					<!-- 附件 -->
					<div class="padding-bottom-10">
						<div class="inner-left gutter10 paddingtb10">
							<div class="font-15">附件</div>
							<div class="text-color-black-light">点击上传附件（最多7个且≤50MB，不支持.exe格式）</div>
						</div>
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" multiple>
							<el-button type="primary">上传附件</el-button>
						</el-upload>
					</div>
					<div class="inner-center paddingtb40">
						<el-button type="primary" class="width220" @click="publish" size="large">发布项目</el-button>
					</div>
				</div>
			</div>
			<!-- 温馨提示区 -->
			<div class="flex-2">
				<!-- 温馨提示 -->
				<div class="padding-left-40 padding-top-100 line-height-14">
					<div>温馨提示</div>
					<div class="text-color-black-middle">
						<div>1.用户发布需求</div>
						<div>2.24小时为您审核</div>
						<div>3.客服电话：400-777-8688</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 发布成功后的弹出框 -->
		<el-dialog v-model="dialogVisible" title="需求发布提示" width="30%">
			<div>
				<div class="custom-icon custom-icon-unie657 text-color-main font-50 inner-center"></div>
				<div class="inner-center font-17 paddingtb10">需求发布成功</div>
				<div class="paddingtb20">
					<div class="inner-left">
						<div class="ellipsis-1 font-13 padding-right-10">沟通过发生的广泛的还是多好的</div>
						<el-tag type="warning" size="small">市场营销</el-tag>
					</div>
					<div class="inner-left gutter10 text-color-black-light">
						<div>2500元预算</div>
						<div class="separateline-light-1 height20"></div>
						<div>3天工期</div>
					</div>
				</div>
				<div class="inner-justify">
					<div class="text-color-black-lighter paddingtb10">需求已进入审核中，预计1个工作日完成审核。</div>
					<div class="inner-left hover-ol" @click="tomaker">
						<div>先去看看创客吧~</div>
						<div class="custom-icon custom-icon-right"></div>
					</div>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	// 需求类型
	const needstype = ref('')

	// 表单数据
	let formdata = reactive({
		//项目主题
		title: '',
		//项目类型
		type: '',
		//具体服务
		service: '',
		//需求描述
		content: '',
		//技能
		skills: [],
		//成交价
		price: '',
		//工期
		days: ''
	})
	// 发布项目
	import router from '../router/index.js'
	import {
		ElMessageBox
	} from 'element-plus'
	const publish = () => {
		ElMessageBox.confirm(
				'确认发布这条需求吗?', {
					title: '提示',
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}
			)
			.then(() => {
				//调发布项目的接口
				
				dialogVisible.value = true
			})
	}
	//发布成功后的弹出框显示与否
	const dialogVisible = ref(false)
	// 去看创客
	const tomaker = ()=>{
		router.push('/index/maker')
	}
</script>

<style>
</style>
