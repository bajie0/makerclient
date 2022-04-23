<template>
	<div class="fix1 positionbox inner-center">
		<el-image :src="require('@/assets/bg.jpg')" class="pcenter zindex-down-1 width-24 h100" fit="cover"></el-image>
		<div class="inner-left padding50 font-35 text-color-white plt">
			<div class="padding-right-10 custom-icon custom-icon-cloud font-35"></div>
			<div class="font-30">微创客</div>
		</div>
		<div class="pcenter">
			<div class="inner-left stretch">
				<div class="inner-column-center width440 positionbox of-hidden fill-color-main">
					<div class="paddingtb70 font-25 text-weight text-color-white">微创客免费接单 免费发布需求</div>
					<div class="line-height-10 inner-column-center text-weight text-color-white">
						<div>一站式共享经济服务平台</div>
						<div>助力企业降低用工成本</div>
						<div>助力自由职业者提高收入</div>
						<div>免费发布 合规用工</div>
						<div>双向赋能 高效便捷</div>
						<div class="padding-top-70 padding-bottom-30">微创客，开启未来工作时代～</div>
					</div>
				</div>

				<!-- 注册和登录 -->
				<div class="of-hidden flex-1">
					<transition enter-active-class="animate__animated animate__fadeInLeft time-1" mode="out-in"
						leave-active-class="animate__animated animate__fadeOutLeft time-4">
						<!-- 注册 -->
						<div class="flex1 fill-color-white height530 width530" v-if="statein">
							<div class="paddingtb50 inner-center font-40 text-weight" :style="{color:mainColor}">注册一个新账户
							</div>
							<div class="paddinglr50">
								<div class="inner-left padding20 paddingtb10">
									<!-- <div class="width70 flex-fixed">手机号</div> -->
									<div class="width70 flex-fixed">账户名</div>
									<el-input size="large" v-model="user_name" :prefix-icon="User"></el-input>
								</div>
								<!-- <div class="inner-left padding20 paddingtb10">
									<div class="width70 flex-fixed">验证码</div>
									<div class="flex1">
										<el-input size="large"></el-input>
									</div>
									<el-button size="large" type="primary">发送验证码</el-button>
								</div> -->
								<div class="inner-left padding20 paddingtb10">
									<div class="width70 flex-fixed">密码</div>
									<el-input size="large" v-model="pass_word" type="password" show-password
										:prefix-icon="Lock"></el-input>
								</div>
							</div>
							<div class="inner-center padding-top-20">
								<div class="self-top">
									<el-checkbox v-model="checked">
									</el-checkbox>
								</div>
								<div :style="{color:mainColor}" class="width400 padding-left-10 hover-ol">我已阅读并同意
									《用户协议》、《注册协议》和《法律声明及隐私权政策》</div>
							</div>
							<div class="inner-center padding-top-30">
								<el-button size="large" type="primary" class="width420" @click="register">注册</el-button>
							</div>
							<div class="text-color-black-light padding20 in padding-left-70" :style="{color:mainColor}">
								<span @click="tologin" class="hover-ol">
									已有账户，去登录
								</span>
							</div>
						</div>

						<!-- 登录 -->
						<div class="flex1 fill-color-white height530 width530" v-else>
							<el-tabs v-model="activeName" @tab-click="handleClick">
								<el-tab-pane label="快捷登录" name="快捷登录">
									<div class="paddinglr50">
										<div class="inner-left padding20 paddingtb10">
											<div class="width70 flex-fixed">手机号</div>
											<el-input size="large" placeholder="请输入手机号"></el-input>
										</div>
										<div class="inner-left padding20 paddingtb10">
											<div class="width70 flex-fixed">验证码</div>
											<div class="flex1">
												<el-input size="large" placeholder="请输入验证码"></el-input>
											</div>
											<el-button size="large" type="primary">发送验证码</el-button>
										</div>
									</div>
									<div class="inner-center padding-top-30">
										<el-button size="large" type="primary" class="width420">登录
										</el-button>
									</div>
									<div class="text-color-black-light padding20 padding-left-70"
										:style="{color:mainColor}">
										<span @click="createclick" class="hover-ol">
											注册新账户，开启创客之旅
										</span>
									</div>
								</el-tab-pane>
								<el-tab-pane label="密码登录" name="密码登录">
									<div class="paddinglr50">
										<div class="inner-left padding20 paddingtb10">
											<!-- <div class="width70 flex-fixed">手机号</div> -->
											<div class="width70 flex-fixed">账户名</div>
											<el-input @keyup.enter="login" size="large" placeholder="请输入账户名" v-model="user_name" :prefix-icon="User"></el-input>
										</div>
										<div class="inner-left padding20 paddingtb10">
											<div class="width70 flex-fixed">密码</div>
											<div class="flex1">
												<el-input @keyup.enter="login" size="large" placeholder="请输入密码" v-model="pass_word" type="password" show-password :prefix-icon="Lock">
												</el-input>
											</div>
										</div>
									</div>
									<div class="inner-center padding-top-30">
										<el-button size="large" type="primary" class="width420" @click="login">登录
										</el-button>
									</div>
									<div class="inner-center">
										<div class="inner-justify paddingtb20 width420">
											<div class="text-color-black-light hover-ol" @click="createclick"
												:style="{color:mainColor}">
												注册新账户，开启创客之旅</div>
											<div class="text-color-black-light hover-ol">忘记密码</div>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		store
	} from '../store/index.js'
	import {
		ElMessage
	} from 'element-plus'
	import {
		User,
		Lock
	} from '@element-plus/icons-vue'
	const router = useRouter()

	const activeName = ref('密码登录')
	const handleClick = (tab, event) => {
		console.log(tab, event);
	}

	//切换注册和登录
	const statein = ref(false)
	const createclick = () => {
		statein.value = true
	}
	const tologin = () => {
		statein.value = false
	}

	// 注册
	const checked = ref(false)
	const userRegisterinfo = reactive({
		user_name,
		pass_word
	})
	const {
		user_name,
		pass_word
	} = toRefs(userRegisterinfo)
	const register = () => {
		//表单验证
		if (!user_name.value) return store.$toast('用户名不能为空')
		if (!pass_word.value) return store.$toast('密码不能为空')
		if (!checked.value) return store.$toast('您未勾选同意用户协议')
		//调注册的接口
		let url = store.$url.register_url
		store.$api.post(url, userRegisterinfo).then(res => {
			tologin()
		})
	}

	//密码登录
	const login = () => {
		//表单验证
		if (!user_name.value) return store.$toast('用户名不能为空')
		if (!pass_word.value) return store.$toast('密码不能为空')
		//调取密码登录的接口
		let url = store.$url.login_url
		store.$api.post(url, {
			user_name:user_name.value,
			pass_word:pass_word.value
		}).then(res => {
			console.log(res)
			// 将用户id和认证状态写入vuex
			store.vuex('$maker_id',res.data[0].id)
			store.vuex('$makercertification',res.data[0].certification_type_title)
			// 获取用户昵称
			store.vuex('$nickname',res.data[0].nickname)
			// 存token
			store.vuex('vuex_token',res.token)
			router.replace('/index/home')
		})
	}
</script>

<style scoped>
	>>>.el-tabs__nav-scroll {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px 0;
	}

	>>>.el-tabs__item {
		font-size: 27px;
		margin-bottom: 7px;
	}

	>>>.el-tabs__item.is-active {
		font-size: 30px;
	}

	>>>.el-tabs__nav-wrap::after {
		background-color: unset;
	}

	.fix1 {
		min-height: 100vh;
	}
</style>
