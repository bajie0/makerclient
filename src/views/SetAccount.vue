<template>
	<div class="fill-color-page flex-1 inner-center flex-column">
		<!-- 账号安全 -->
		<div class="flex-1 inner-center" :style="{width:viewportwidth}">
			<div class="fill-color-white width-17 center paddinglr40 padding-bottom-40 hover-ol positionbox">
				<div class="custom-icon custom-icon-user plt font-50 margin20" :style="{color:warningColor}"></div>
				<div class="tc font-24 paddingtb40">账号设置</div>
				<div class="line-height-20">
					<div class="inner-left gutter100">
						<div class="width200  tr text-color-black-light font-17">账户类型</div>
						<div class="width300 font-15">个人创客</div>
						<el-button type="text" @click="enterprise">申请企业创客</el-button>
					</div>
					<div class="inner-left gutter100">
						<div class="width200 tr text-color-black-light font-17">登录密码设置</div>
						<div class="width300 font-15">**********</div>
						<el-button type="text" @click="setpassword">修改密码</el-button>
					</div>
					<div class="inner-left gutter100">
						<div class="width200  tr text-color-black-light font-17">绑定手机号</div>
						<div class="width300 font-15">136****1257</div>
						<el-button type="text">更改绑定</el-button>
					</div>
					<div class="inner-left gutter100">
						<div class="width200  tr text-color-black-light font-17">绑定邮箱</div>
						<div class="width300 font-15">您还未绑定邮箱</div>
						<el-button type="text">立即绑定</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 修改密码对话框 -->
	<el-dialog v-model="dialogVisible" title="修改密码" :width="400">
		<div class="inner-paddingtb-10">
			<div class="inner-left gutter10">
				<div class="inner-left flex-fixed">
					<div class="text-color-warning">*</div>
					<div>原密码</div>
				</div>
				<el-input placeholder="请输入原密码" v-model="password"></el-input>
			</div>
			<div class="inner-left gutter10">
				<div class="inner-left flex-fixed">
					<div class="text-color-warning">*</div>
					<div>新密码</div>
				</div>
				<el-input placeholder="请输入新密码" v-model="newpassword"></el-input>
			</div>
			<div class="inner-left gutter10">
				<div class="inner-left flex-fixed">
					<div class="text-color-warning">*</div>
					<div>新密码</div>
				</div>
				<el-input placeholder="请再次输入新密码" v-model="newpassword_"></el-input>
			</div>
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="confirmset">确定</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import router from '../router/index.js'
	//修改密码
	const password = ref('')
	const newpassword = ref('')
	const newpassword_ = ref('')
	const dialogVisible = ref(false)
	const setpassword = ()=>{
		dialogVisible.value = true
	}
	//确认修改密码
	const confirmset = ()=>{
		//调确认修改密码的接口
		
		dialogVisible.value = false
	}
	//申请企业创客
	const enterprise = ()=>{
		router.push({
			path:'/index/profile',
			query:{
				makertype:'企业创客'
			}
		})
	}
</script>

<style>
</style>
