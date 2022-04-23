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
							<el-upload class="avatar-uploader" :action="`${base_URL}/api/upload/images/`" :headers="{
								token:vuex_token
							}" :show-file-list="false" :on-success="handleAvatarSuccess">
								<el-image v-if="imageUrl" :src="imageUrl" class="avatar circle-box-100" fit="cover" />
								<el-image v-else src="https://s.vzhuo.com/static/images/default-avatar01.png"
									class="circle-box-100"></el-image>
							</el-upload>
							<div class="font-20" v-if="makertype == '个人创客'">{{$nickname}}</div>
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
									<el-radio-button :label="item.title" :value="item.id" v-for="(item,index) in $certification_type" :key="index"/>
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
										<el-input size="large" v-model="store.state.$nickname" placeholder="请输入昵称">
										</el-input>
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
											<el-radio v-model="gender" :label="item.id" v-for="(item,index) in $sex" :key="index">{{item.title}}</el-radio>
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
										<el-input size="large" v-model="wechat_account" placeholder="请输入微信"></el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>手机号</div>
										</div>
										<el-input size="large" v-model="phone" placeholder="请输入手机号" type="number">
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
												action="https://jsonplaceholder.typicode.com/posts/">
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
												action="https://jsonplaceholder.typicode.com/posts/">
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
											<el-radio v-model="identity" :label="item.id"
												v-for="(item,index) in $identity" :key="index">{{item.title}}</el-radio>
										</div>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>最高学历</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="education" placeholder="请选择">
											<el-option v-for="(item,index) in $heightestedu" :key="index"
												:value="item.id" :label="item.title">
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
										<el-input size="large" v-model="graduation_from" placeholder="请输入学校名称">
										</el-input>
									</div>
									<div class="flex-column flex1">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div class="inner-left">
												<div>所学专业</div>
											</div>
										</div>
										<el-input size="large" v-model="major" placeholder="请输入所学专业">
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
											<div>行业类别</div>
										</div>
										<el-select size="large" class="of-hidden" v-model="industry_classification"
											placeholder="请选择">
											<el-option v-for="(item,index) in $industrylist" :key="index" :label="item.title" :value="item.id">
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
											<el-input-number size="large" class="flex1" v-model="working_years" :min="1"
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
									<el-button type="primary" @click="addwork_experence_list">添加工作经历</el-button>
								</div>
							</div>
							<div class="line-height-20">
								<div v-for="(item,index) in work_experence_list" :key="index"
									class="paddinglr100 border-bottom-lighter-1">
									<div class="inner-justify">
										<div class="flex-column gutter10">
											<div><span class="text-color-warning">*</span>时间</div>
											<el-date-picker size="large" v-model="item.time" type="daterange"
												range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" />
										</div>
										<div>
											<el-button type="danger" @click="delwork_experence_list(index)"
												v-if="work_experence_list.length !== 1">移除</el-button>
										</div>
									</div>
									<div class="inner-left gutter20 paddingtb20">
										<div class="flex-column flex-1 gutter10">
											<div class="flex-fixed"><span class="text-color-warning">*</span>工作单位</div>
											<el-input size="large" placeholder="请输入工作单位" v-model="item.working_company">
											</el-input>
										</div>
										<div class="flex-column flex-1 gutter10">
											<div class="flex-fixed"><span class="text-color-warning">*</span>工作内容</div>
											<el-input size="large" placeholder="请输入工作内容" v-model="item.duty"></el-input>
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
								<el-tag type="info" v-if="$makercertification == '未认证'">未认证</el-tag>
								<el-tag type="success" v-else>已认证</el-tag>
							</div>
							<div v-if="$makercertification == '未认证'" class="inner-padding-bottom-20">
								<template v-for="(item,index) in $filenote" :key="index">
									<!-- 身份证正面 -->
									<div class="paddinglr100 line-height-20 inner-left" v-if="item.id == '41865891-c965-4819-946b-6d4e49559a7e'">
										<div class="flex-column flex1">
											<div class="inner-left">
												<div :style="{color:warningColor}">*</div>
												<div>{{item.title}}</div>
											</div>
											<el-upload class="avatar-uploader" :action="`${base_URL}/api/upload/images/`"
												:headers="{
												token:vuex_token
											}" :show-file-list="false" :on-success="uphandleAvatarSuccess">
												<el-image v-if="upimageUrl" :src="upimageUrl" class="width300 height190" fit="cover" />
												<div v-else class="border-around-lighter-1 width300 height190 inner-center">
													<div class="custom-icon custom-icon-plus text-color-main"></div>
												</div>
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
									<div class="paddinglr100 line-height-20 inner-left" v-if="item.id == '2c9d4387-e833-47cc-a1eb-2de1fcc09e1f'">
										<div class="flex-column flex1">
											<div class="inner-left">
												<div :style="{color:warningColor}">*</div>
												<div>{{item.title}}</div>
											</div>
											<el-upload class="avatar-uploader" :action="`${base_URL}/api/upload/images/`"
												:headers="{
												token:vuex_token
											}" :show-file-list="false" :on-success="downhandleAvatarSuccess">
												<el-image v-if="downimageUrl" :src="downimageUrl" class="width300 height190"
													fit="cover" />
												<div v-else class="border-around-lighter-1 width300 height190 inner-center">
													<div class="custom-icon custom-icon-plus text-color-main"></div>
												</div>
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
								</template>
								
								<!-- 姓名和身份证号 -->
								<div class="inner-left gutter20 paddinglr100">
									<div class="flex-column flex1 inner-margin-bottom-10">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div>真实姓名</div>
										</div>
										<el-input size="large" v-model="real_name" placeholder="请输入真实姓名">
										</el-input>
									</div>
									<div class="flex-column flex1 inner-margin-bottom-10">
										<div class="inner-left">
											<div :style="{color:warningColor}">*</div>
											<div class="inner-left">
												<div>身份证号</div>
											</div>
										</div>
										<el-input size="large" v-model="id_card" placeholder="请输入身份证号">
										</el-input>
									</div>
								</div>
								<!-- 合同条款 -->
								<div class="paddinglr100 inner-center gutter10 scale-lg-1 padding-top-50">
									<div>
										<el-checkbox v-model="isread" size="large"></el-checkbox>
									</div>
									<div class="inner-left gutter10 line-height-0 of-hidden">
										<div>我已仔细阅读</div>
										<div class="text-color-main hover-ol">《电子合同条款》</div>
									</div>
								</div>
								<div class="inner-center">
									<el-button type="warning" size="large" class="width270" @click="certification">
										完善信息并认证
									</el-button>
								</div>
							</div>
							<!-- 认证后的信息 -->
							<div v-else class="paddinglr100 line-height-7 text-color-black-light">
								<div class="font-17">刘跃</div>
								<div>142601198807121254</div>
								<div class="padding-top-100 inner-center">
									<el-button type="primary" size="large" class="width270" @click="certification">保存并修改
									</el-button>
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
		ref,
		reactive,
		toRefs
	} from 'vue'
	import {
		ElMessageBox
	} from 'element-plus'
	import {
		store
	} from '@/store'
	import {
		Plus,
		UploadFilled
	} from '@element-plus/icons-vue'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	const router = useRouter()

	// 获取表单信息
	function getuserinfo() {
		let url = store.$url.userinfo_url
		store.$api.get(url, {
			id: store.state.$maker_id
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			// store.vuex('$industrylist',res.data)
		})
	}
	getuserinfo()

	//注册类型
	const makertype = ref('个人创客')

	// 更换头像
	const imageUrl = ref('')
	const handleAvatarSuccess = (
		response,
		uploadFile
	) => {
		console.log(response, uploadFile)
		imageUrl.value = URL.createObjectURL(uploadFile.raw)
		console.log(imageUrl.value)
	}


	// 工作经历
	const work_experence_list = reactive([{
		// 工作时间
		time: '',
		// 工作单位
		working_company: '',
		// 工作任务
		duty: ''
	}])

	//个人创客的表单收集
	const makerinfo = reactive({
		certification_type:'',
		id:store.state.$maker_id,
		nickname: store.state.$nickname,
		name: '',
		gender: '',
		birthday: '',
		address: '',
		mail: '',
		wechat_account: '',
		phone: '',
		content: '',
		identity: '',
		education: '',
		graduation_from: '',
		major: '',
		industry_classification: '',
		working_years: 1,
		skill: '',
		work_experence_list,
		images:[],
		real_name:'',
		id_card:''
	})
	const {
		nickname,
		name,
		gender,
		birthday,
		address,
		mail,
		wechat_account,
		phone,
		content,
		identity,
		education,
		graduation_from,
		major,
		industry_classification,
		working_years,
		skill,
		real_name,
		id_card
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
	const addwork_experence_list = () => {
		work_experence_list.push({
			// 工作时间
			time: '',
			// 工作单位
			working_company: '',
			// 工作任务
			duty: ''
		})
	}
	// 移除工作经历
	const delwork_experence_list = (index) => {
		work_experence_list.splice(index, 1)
	}
	// 创客 上传身份证正面
	const upimageUrl = ref('')
	const uphandleAvatarSuccess = (
		response,
		uploadFile,
	) => {
		console.log(response, uploadFile)
		upimageUrl.value = URL.createObjectURL(uploadFile.raw)
		console.log(upimageUrl.value)
		makerinfo.images.push({
			file:response.data,
			file_key:'41865891-c965-4819-946b-6d4e49559a7e'
		})
	}
	// 创客 上传身份证背面
	const downimageUrl = ref('')
	const downhandleAvatarSuccess = (
		response,
		uploadFile
	) => {
		console.log(response, uploadFile)
		downimageUrl.value = URL.createObjectURL(uploadFile.raw)
		console.log(downimageUrl.value)
		makerinfo.images.push({
			file:response.data,
			file_key:'2c9d4387-e833-47cc-a1eb-2de1fcc09e1f'
		})
	}

	// 阅读条款
	const isread = ref(false)
	//完善信息并认证
	const certification = () => {
		// 表单验证
		if (!nickname.value) return store.$toast('请输入昵称')
		if (!gender.value) return store.$toast('请输入性别')
		if (!birthday.value) return store.$toast('请输入出生日期')
		if (!address.value) return store.$toast('请输入现居地址')
		if (!mail.value) return store.$toast('请输入邮箱')
		if (!wechat_account.value) return store.$toast('请输入微信')
		if (!phone.value) return store.$toast('请输入手机号')
		if (!content.value) return store.$toast('请输入自我介绍')
		if (!identity.value) return store.$toast('请选择身份')
		if (!education.value) return store.$toast('请选择最高学历')
		if (!graduation_from.value) return store.$toast('请输入毕业院校')
		if (!major.value) return store.$toast('请输入所学专业')
		if (!industry_classification.value) return store.$toast('请选择行业类型')
		if (!working_years.value) return store.$toast('请输入工作年限')
		if (!skill.value) return store.$toast('请输入技能')
		for (let item of work_experence_list) {
			if (!item.time) return store.$toast('请输入时间')
			if (!item.working_company) return store.$toast('请输入工作单位')
			if (!item.duty) return store.$toast('请输入工作内容')
		}
		if(makerinfo.images.length != 2) return store.$toast('身份证上传不完整')
		if (!real_name.value) return store.$toast('请输入真实姓名')
		if (!id_card.value) return store.$toast('请输入身份证号')
		if (!isread.value) return store.$toast('请阅读电子合同条款')
		//调完善信息并认证的接口
		function edituserinfo() {
			let url = store.$url.userinfopatch_url
			store.$api.post(url,makerinfo).then(res => {
				console.log(res)
			})
		}
		edituserinfo()
	}

	//升级为企业创客
	const updateid = () => {
		ElMessageBox.confirm('升级成功后，您的个人创客基本信息将被清空，确认申请升级为企业创客吗？', '升级为企业创客', {
			type: 'warning'
		}).then(res => {
			if (res) {
				//调申请升级为企业创客的接口

				applicationstate.value = 1
			}
		})
	}
	//企业创客申请状态
	const applicationstate = ref(0) //0未申请  1申请中  2申请通过

	//从账户设置页直接升级企业创客
	const route = useRoute()
	if (route.query.makertype == '企业创客') {
		makertype.value = route.query.makertype
	}
</script>

<style scoped>
	.line-height-20>div {
		padding-bottom: 10px;
	}
</style>
