<template>
	<div class="fill-color-page inner-center">
		<div class="margintb40" :style="{width:viewportwidth}">
			<div class="fix">
				<div class="fill-color-white">
					<!-- 基本资料 -->
					<div class="padding-bottom-40 border-bottom-light-1">
						<div class="inner-left gutter10 paddingtb20">
							<div class="separateline-light-4 height30 fill-color-assist"></div>
							<div class="inner-justify width-24">
								<div class="font-20 text-weight">基本资料</div>
							</div>
						</div>
						<div class="inner-column-center paddingtb20 padding-bottom-40" id="enterprise">
							<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
								:show-file-list="false" :on-success="handleAvatarSuccess"
								:before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar" />
								<el-image v-else src="https://s.vzhuo.com/static/images/default-avatar01.png"
									class="circle-box-100"></el-image>
							</el-upload>
							<div class="font-20" v-if="makertype == '个人创客'">{{makerinfo.nickname}}</div>
							<div class="font-20" v-else>{{enterpriseinfo.enterprisename}}</div>
						</div>
						<div class="paddinglr100 line-height-20" v-if="applicationstate == 0">
							<!-- 注册类型 -->
							<div class="inner-left">
								<div :style="{color:warningColor}">*</div>
								<div>注册类型</div>
							</div>
							<div class="Move-to-top-10">
								<el-radio-group v-model="makertype" size="large">
									<el-radio-button label="个人创客" />
									<el-radio-button label="企业创客" />
								</el-radio-group>
							</div>
							<!-- 分割线 -->
							<div class="height40"></div>
							<div v-if="makertype == '个人创客'">
								<div class="inner-left gutter20">
									<div class="flex-column">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>昵称</div>
										</div>
										<el-input size="large" v-model="nickname" placeholder="请输入昵称"></el-input>
									</div>
									<!-- <div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>姓名</div>
										</div>
										<el-input size="large" v-model="name" placeholder="请输入姓名"></el-input>
									</div> -->
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1 of-hidden">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>性别</div>
										</div>
										<div class="inner-left">
											<el-radio v-model="sex" label="男"></el-radio>
											<el-radio v-model="sex" label="女"></el-radio>
										</div>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>出生日期</div>
										</div>
										<div class="inner-left">
											<el-date-picker size="large" class="flex1" v-model="birthday" type="date"
												placeholder="请选择出生日期">
											</el-date-picker>
										</div>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>现居地址</div>
										</div>
										<el-input size="large" v-model="address" placeholder="请输入现居地址"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>邮箱</div>
										</div>
										<el-input size="large" v-model="mail" placeholder="请输入邮箱"></el-input>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>微信</div>
										</div>
										<el-input size="large" v-model="wxcode" placeholder="请输入微信"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>手机号</div>
										</div>
										<el-input size="large" v-model="phonenumber" placeholder="请输入手机号" type="number">
										</el-input>
									</div>
								</div>
								<div class="inner-left">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>自我介绍</div>
										</div>
										<el-input size="large" v-model="content" placeholder="请简单描述一下你自己"
											type="textarea" rows="5">
										</el-input>
									</div>
								</div>
							</div>
							<!-- 企业创客 -->
							<div v-if="makertype == '企业创客'" class="inner-padding-bottom-20">
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>企业/机构名称</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.enterprisename"
											placeholder="请输入企业/机构名称"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>企业规模</div>
										</div>
										<el-select size="large" v-model="enterpriseinfo.extent" placeholder="请选择公司规模">
											<el-option v-for="(item,index) in 7" :key="index" value="10-20人" />
										</el-select>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>联系人</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.contectname"
											placeholder="请输入企业联系人"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>联系电话</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.contectphone"
											placeholder="请输入企业联系电话"></el-input>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>企业注册地址</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.address" placeholder="请输入企业注册地址">
										</el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>公司邮箱</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.mail" placeholder="请输入邮箱">
										</el-input>
									</div>
								</div>
								<div class="inner-left">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>公司介绍</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.content" placeholder="请输入公司介绍"
											type="textarea" rows="5">
										</el-input>
									</div>
								</div>
								<div class="inner-left">
									<div class="inner-left flex-1">
										<div class="flex-column flex1">
											<div class="inner-left">
												<div :style="{color:warningColor}">*</div>
												<div>营业执照扫描件</div>
											</div>
											<el-upload class="upload-demo" drag
												action="https://jsonplaceholder.typicode.com/posts/" multiple>
												<el-icon class="el-icon--upload">
													<upload-filled class="font-70" />
												</el-icon>
												<div class="el-upload__text">
													Drop file here or <em>click to upload</em>
												</div>
												<template #tip>
													<div class="el-upload__tip">
														jpg/png files with a size less than 500kb
													</div>
												</template>
											</el-upload>
										</div>
									</div>
									<div class="inner-left flex-1">
										<div class="flex-column flex1">
											<div class="inner-left">
												<div :style="{color:warningColor}">*</div>
												<div>组织机构代码证扫描件</div>
											</div>
											<el-upload class="upload-demo" drag
												action="https://jsonplaceholder.typicode.com/posts/" multiple>
												<el-icon class="el-icon--upload">
													<upload-filled class="font-70" />
												</el-icon>
												<div class="el-upload__text">
													Drop file here or <em>click to upload</em>
												</div>
												<template #tip>
													<div class="el-upload__tip">
														jpg/png files with a size less than 500kb
													</div>
												</template>
											</el-upload>
										</div>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>营业执照注册号</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.contectname"
											placeholder="请输入营业执照注册号"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>组织机构代码证号</div>
										</div>
										<el-input size="large" v-model="enterpriseinfo.contectphone"
											placeholder="请输入组织机构代码证号"></el-input>
									</div>
								</div>
								<div class="inner-center paddingtb40">
									<el-button type="warning" size="large" class="width400 height50" @click="updateid">
										升级为企业创客</el-button>
								</div>
							</div>
						</div>
						<!-- 企业创客申请中 -->
						<div class="paddinglr100" v-else-if="applicationstate == 1">
							<div class="text-color-black-light">企业创客申请中，通常审核需2个工作日</div>
						</div>
						
						<div class="paddinglr100 line-height-9" v-else-if="applicationstate == 2">
							<div class="inner-left">
								<div class="text-color-black-light">企业/机构名称：</div>
								<div>临汾市人民医院</div>
							</div>
							<div class="inner-left">
								<div class="text-color-black-light">企业注册地址：</div>
								<div>山西省临汾市彩虹桥西</div>
							</div>
							<div class="inner-left">
								<div class="text-color-black-light">营业执照注册号：</div>
								<div>HWE12315646316346</div>
							</div>
							<div class="inner-left">
								<div class="text-color-black-light">组织机构代码证号：</div>
								<div>4854541544</div>
							</div>
							<div class="inner-left">
								<div class="text-color-black-light">联系电话：</div>
								<div>400-251-1478</div>
							</div>
						</div>
						
					</div>

					<div v-if="makertype == '个人创客'">
						<!-- 教育信息 -->
						<div class="padding-bottom-40 border-bottom-light-1">
							<div class="inner-left gutter10 paddingtb20">
								<div class="separateline-light-4 height30 fill-color-assist"></div>
								<div class="font-20 text-weight">教育信息</div>
							</div>
							<div class="paddinglr100 line-height-20">
								<div class="inner-left gutter20">
									<div class="flex-column flex1 of-hidden">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>身份</div>
										</div>
										<div class="inner-left">
											<el-radio v-model="identity" label="在校生"></el-radio>
											<el-radio v-model="identity" label="已毕业"></el-radio>
										</div>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>最高学历</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="education" placeholder="请选择">
											<el-option v-for="(item,index) in 4" :key="index" value="本科">
											</el-option>
										</el-select>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>学校名称</div>
										</div>
										<el-input size="large" v-model="schoolname" placeholder="请输入学校名称"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div class="inner-left">
												<div>所学专业</div>
											</div>
										</div>
										<el-input size="large" v-model="professional" placeholder="请输入所学专业">
										</el-input>
									</div>
								</div>
							</div>
						</div>

						<!-- 职业信息 -->
						<div class="padding-bottom-40 border-bottom-light-1">
							<div class="inner-left gutter10 paddingtb20">
								<div class="separateline-light-4 height30 fill-color-assist"></div>
								<div class="font-20 text-weight">职业信息</div>
							</div>
							<div class="paddinglr100 line-height-20">
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>职业类别</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="jobtype" placeholder="请选择">
											<el-option v-for="(item,index) in 10" :key="index" value="软件开发">
											</el-option>
										</el-select>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>工作年限</div>
											<div class="text-color-black-light font-10 paddinglr10">单位：年</div>
										</div>
										<div class="inner-left">
											<el-input-number size="large" class="flex1" v-model="jobage" :min="1"
												:max="30">
											</el-input-number>
										</div>
									</div>
								</div>
								<div class="inner-left gutter20">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>技能</div>
										</div>
										<el-input size="large" v-model="skill" placeholder="请输入技能" type="textarea"
											rows="5">
										</el-input>
									</div>
								</div>
								<div class="inner-left gutter20" v-if="false">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>目前薪资</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="nowmoney" placeholder="请选择">
											<el-option v-for="(item,index) in 5" :key="item" value="5000~6000元"
												:value="item.value">
											</el-option>
										</el-select>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>期望薪资</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="forwordmoney"
											placeholder="请选择">
											<el-option v-for="(item,index) in 5" :key="item" value="5000~6000元"
												:value="item.value">
											</el-option>
										</el-select>
									</div>
								</div>
							</div>
						</div>

						<!-- 工作经历 -->
						<div class="padding-bottom-40 border-bottom-light-1">
							<div class="inner-justify">
								<div class="inner-left gutter10 paddingtb20">
									<div class="separateline-light-4 height30 fill-color-assist"></div>
									<div class="font-20 text-weight">工作经历</div>
								</div>
								<div class="paddinglr100">
									<el-button type="primary" @click="addworkexperience">添加工作经历</el-button>
								</div>
							</div>
							<div class="line-height-20">
								<div v-for="(item,index) in workexperience" :key="index"
									class="paddinglr100 border-bottom-lighter-1">
									<div class="inner-justify">
										<div class="flex-column gutter10">
											<div><span class="text-color-warning">*</span>时间</div>
											<el-date-picker size="large" v-model="item.time" type="daterange"
												range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" />
										</div>
										<div>
											<el-button type="danger" @click="delworkexperience(index)"
												v-if="workexperience.length !== 1">移除</el-button>
										</div>
									</div>
									<div class="inner-left gutter20 paddingtb20">
										<div class="flex-column flex-1 gutter10">
											<div class="flex-fixed"><span class="text-color-warning">*</span>工作单位</div>
											<el-input size="large" placeholder="请输入工作单位" v-model="item.employer">
											</el-input>
										</div>
										<div class="flex-column flex-1 gutter10">
											<div class="flex-fixed"><span class="text-color-warning">*</span>工作内容</div>
											<el-input size="large" placeholder="请输入工作内容" v-model="item.task"></el-input>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- 个人认证 -->
						<div class="padding-bottom-40 border-bottom-light-1 inner-padding-bottom-40">
							<div class="inner-left gutter10 paddingtb20">
								<div class="separateline-light-4 height30 fill-color-assist"></div>
								<div class="font-20 text-weight">个人认证</div>
								<el-tag type="info" v-if="!iscertification">未认证</el-tag>
								<el-tag type="success" v-else>已认证</el-tag>
							</div>
							<!-- 身份证正面 -->
							<div v-if="!iscertification" class="inner-padding-bottom-20">
								<div class="paddinglr100 line-height-20 inner-left">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>身份证正面</div>
										</div>
										<el-upload class="upload-demo" drag
											action="https://jsonplaceholder.typicode.com/posts/" multiple>
											<el-icon class="el-icon--upload">
												<upload-filled class="font-70" />
											</el-icon>
											<div class="el-upload__text">
												Drop file here or <em>click to upload</em>
											</div>
											<template #tip>
												<div class="el-upload__tip">
													请上传2M以内大小的图片
												</div>
											</template>
										</el-upload>
									</div>
									<div class="flex-column flex1 self-top">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>身份证正面示例</div>
										</div>
										<el-image :src="require('@/assets/identity_front.png')" class="width300">
										</el-image>
									</div>
								</div>
								<!-- 身份证背面 -->
								<div class="paddinglr100 line-height-20 inner-left">
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>身份证背面</div>
										</div>
										<el-upload class="upload-demo" drag
											action="https://jsonplaceholder.typicode.com/posts/" multiple>
											<el-icon class="el-icon--upload">
												<upload-filled class="font-70" />
											</el-icon>
											<div class="el-upload__text">
												Drop file here or <em>click to upload</em>
											</div>
											<template #tip>
												<div class="el-upload__tip">
													请上传2M以内大小的图片
												</div>
											</template>
										</el-upload>
									</div>
									<div class="flex-column flex1 self-top">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>身份证背面示例</div>
										</div>
										<el-image :src="require('@/assets/identity_back.png')" class="width300">
										</el-image>
									</div>
								</div>
								<!-- 姓名和身份证号 -->
								<div class="inner-left gutter20 paddinglr100">
									<div class="flex-column flex1 inner-margin-bottom-10">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>真实姓名</div>
										</div>
										<el-input size="large" v-model="schoolname" placeholder="请输入真实姓名"></el-input>
									</div>
									<div class="flex-column flex1 inner-margin-bottom-10">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div class="inner-left">
												<div>身份证号</div>
											</div>
										</div>
										<el-input size="large" v-model="professional" placeholder="请输入身份证号">
										</el-input>
									</div>
								</div>
								<!-- 合同条款 -->
								<div class="paddinglr100 inner-center gutter10 scale-lg-1">
									<div>
										<el-checkbox v-model="isread" size="large"></el-checkbox>
									</div>
									<div class="inner-left gutter10 line-height-0 of-hidden">
										<div>我已仔细阅读</div>
										<div class="text-color-main hover-ol">《电子合同条款》</div>
									</div>
								</div>
								<div class="inner-center">
									<el-button type="warning" size="large" class="width270" @click="certification">立即认证
									</el-button>
								</div>
							</div>
							<!-- 认证后的信息 -->
							<div v-else class="paddinglr100 line-height-7 text-color-black-light">
								<div class="font-17">刘跃</div>
								<div>142601198807121254</div>
							</div>
						</div>
						<div class="paddingtb40 inner-center">
							<el-button type="primary">保存</el-button>
						</div>
					</div>
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
		ElMessageBox
	} from 'element-plus'
	import {
		Plus,
		UploadFilled
	} from '@element-plus/icons-vue'
	import {
		useRouter,useRoute
	} from 'vue-router'
	const router = useRouter()

	//注册类型
	const makertype = ref('个人创客')

	// 更换头像
	const imageUrl = ref('')
	const handleAvatarSuccess = (response, uploadFile) => (
		imageUrl.value = URL.createObjectURL(uploadFile.raw)
	)
	const beforeAvatarUpload = (rawFile) => {
		if (rawFile.type !== 'image/jpeg') {
			ElMessage.error('Avatar picture must be JPG format!')
			return false
		} else if (rawFile.size / 1024 / 1024 > 2) {
			ElMessage.error('Avatar picture size can not exceed 2MB!')
			return false
		}
		return true
	}

	// 工作经历
	const workexperience = reactive([{
		// 工作时间
		time: '',
		// 工作单位
		employer: '',
		// 工作任务
		task: ''
	}])

	//个人创客的表单收集
	const makerinfo = reactive({
		nickname: '小戒',
		name: '',
		sex: '',
		birthday: '',
		address: '',
		mail: '',
		wxcode: '',
		phonenumber: '',
		content: '',
		identity: '',
		education: '',
		schoolname: '',
		professional: '',
		jobtype: '',
		jobage: 1,
		skill: '',
		workexperience
	})
	const {
		nickname,
		name,
		sex,
		birthday,
		address,
		mail,
		wxcode,
		phonenumber,
		content,
		identity,
		education,
		schoolname,
		professional,
		jobtype,
		jobage,
		skill
	} = toRefs(makerinfo)

	//企业创客的表单收集
	const enterpriseinfo = reactive({
		//公司名称
		enterprisename: '临汾市人民医院',
		//公司规模
		extent: '',
		//公司地址
		address: '',
		//公司邮箱
		mail: '',
		//公司介绍
		content: ''
	})

	// 添加工作经历
	const addworkexperience = () => {
		workexperience.push({
			// 工作时间
			time: '',
			// 工作单位
			employer: '',
			// 工作任务
			task: ''
		})
	}
	// 移除工作经历
	const delworkexperience = (index) => {
		workexperience.splice(index, 1)
	}
	// 阅读条款
	const isread = ref(false)
	//立即认证
	const iscertification = ref(false)
	const certification = () => {
		//调立即认证的接口

		iscertification.value = true
	}

	//升级为企业创客
	const updateid = () => {
		ElMessageBox.confirm('升级成功后，您的个人创客基本信息将被清空，确认申请升级为企业创客吗？','升级为企业创客',{
			type:'warning'
		}).then(res=>{
			if(res){
				//调申请升级为企业创客的接口
				
				applicationstate.value = 1
			}
		})
	}
	//企业创客申请状态
	const applicationstate = ref(0)  //0未申请  1申请中  2申请通过
	
	//从账户设置页直接升级企业创客
	const route = useRoute()
	if(route.query.makertype == '企业创客'){
		makertype.value = route.query.makertype
	}
</script>

<style scoped>
	.line-height-20>div {
		padding-bottom: 10px;
	}
</style>
