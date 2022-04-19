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
									<div class="width70 flex-fixed">手机号</div>
									<el-input size="large"></el-input>
								</div>
								<div class="inner-left padding20 paddingtb10">
									<div class="width70 flex-fixed">验证码</div>
									<div class="flex1">
										<el-input size="large"></el-input>
									</div>
									<el-button size="large" type="primary">发送验证码</el-button>
								</div>
								<div class="inner-left padding20 paddingtb10">
									<div class="width70 flex-fixed">密码</div>
									<el-input size="large"></el-input>
								</div>
							</div>
							<div class="inner-center padding-top-20">
								<div class="self-top">
									<el-checkbox v-model="checked">
									</el-checkbox>
								</div>
								<div :style="{color:mainColor}" class="width400 padding-left-10">我已阅读并同意
									《用户协议》、《注册协议》和《法律声明及隐私权政策》</div>
							</div>
							<div class="inner-center padding-top-30">
								<el-button size="large" type="primary" class="width420">注册</el-button>
							</div>
							<div @click="tologin" class="text-color-black-light padding20 in padding-left-70"
								:style="{color:mainColor}">
								已有账户，去登录
							</div>
						</div>

						<!-- 登录 -->
						<div class="flex1 fill-color-white height530 width530" v-else>
							<el-tabs v-model="activeName" @tab-click="handleClick">
								<el-tab-pane label="快捷登录" name="first">
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
									<div class="text-color-black-light padding20 in padding-left-70"
										@click="createclick" :style="{color:mainColor}">
										注册新账户，开启创客之旅</div>
								</el-tab-pane>
								<el-tab-pane label="密码登录" name="second">
									<div class="paddinglr50">
										<div class="inner-left padding20 paddingtb10">
											<div class="width70 flex-fixed">手机号</div>
											<el-input size="large" placeholder="请输入手机号"></el-input>
										</div>
										<div class="inner-left padding20 paddingtb10">
											<div class="width70 flex-fixed">密码</div>
											<div class="flex1">
												<el-input size="large" placeholder="请输入密码"></el-input>
											</div>
										</div>
									</div>
									<div class="inner-center padding-top-30">
										<el-button size="large" type="primary" class="width420" @click="login">登录</el-button>
									</div>
									<div class="inner-center">
										<div class="inner-justify paddingtb20 width420">
											<div class="text-color-black-light in" @click="createclick"
												:style="{color:mainColor}">
												注册新账户，开启创客之旅</div>
											<div class="text-color-black-light">忘记密码</div>
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
		ref
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	const router = useRouter()

	const checked = ref(true)

	const activeName = ref('first')
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

	//登录
	const login = () => {
		router.replace('/index/home')
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

	.in:hover {
		cursor: pointer;
	}
</style>
