<template>
	<div class="page-color flex-column">
		<!-- 头部导航卡 -->
		<maker-header></maker-header>
		<!-- 展示区 -->
		<router-view></router-view>
		<!-- footer区 -->
		<makerFooter></makerFooter>
	</div>
</template>

<script setup>
	// import { useRoute } from 'vue-router'
	import makerHeader from '../components/header.vue'
	import makerFooter from '../components/footer.vue'
	import {
		store
	} from '../store/index.js'
	// const route = useRoute()
	// console.log(route.path)

	//请求数据字典的数据并存至vuex
	// 获取身份
	function getidentity() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "33d2b8c1-5dd4-430d-9bae-b9d899bf44b6"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$identity', res.data)
		})
	}
	getidentity()

	//获取行业类型
	function getindustrydata() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "b64145ea-0acb-44d4-b356-77858bc6af69"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$industrylist', res.data)
		})
	}
	getindustrydata()

	//获取需求类型
	function getneedstypedata() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "4676e977-2948-4ac3-bc2f-4703a662794f"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$needstype', res.data)
		})
	}
	getneedstypedata()

	//获取最高学历
	function getheightestedu() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "0bff1bd1-0e8b-43fe-a9b6-6436e8110dd1"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$heightestedu', res.data)
		})
	}
	getheightestedu()
	
	//获取文件标识
	function getfilenote() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "ab4a56b7-a31f-4843-b1f1-bc193228cbf6"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$filenote', res.data)
		})
	}
	getfilenote()
	
	//获取性别
	function getsex() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "50fc2b54-bd09-40de-862d-02174d6edf77"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$sex', res.data)
		})
	}
	getsex()
	
	//获取认证类型
	function getmakertype() {
		let url = store.$url.dictionary_url
		store.$api.get(url, {
			id: "bc250c57-2e6a-4f22-93d5-a2f3666a6ca4"
		}).then(res => {
			console.log(res)
			// 并存入至vuex
			store.vuex('$certification_type', res.data)
		})
	}
	getmakertype()
</script>

<style scoped>

</style>
