<template>
  <router-view/>
</template>

<style lang="scss">
	*{
		font-size: 10px;
	}
	// 引入字体图标库,必须是没有/开头的相对路径
	@import 'libs/iconfont.css';
	// 引入类库
	@import '@/libs/common-pc.scss';
	.el-card{
		border: none!important;
	}
	
	// 媒体查询
	@media screen and (min-width:2000px) {
		body{
			zoom:1.5
		}
	}
</style>