<template>
	<div class="page-color">
		<!-- 头部导航卡 -->
		<maker-header></maker-header>
		<!-- 展示区 -->
		<router-view></router-view>
		<!-- footer区 -->
		<makerFooter></makerFooter>
	</div>
</template>

<script setup>
	import makerHeader from '../components/header.vue'
	import makerFooter from '../components/footer.vue'
</script>

<style scoped>

</style>
