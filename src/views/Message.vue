<template>
	<div class="fill-color-page">
		<div class="padding-bottom-50">
			<div class="inner-center" v-for="(item,index) in messagelist" :key="index">
				<div class="fill-color-white hover-sm" :style="{width:viewportwidth}" :class="index == 0? 'marginfix1' : 'marginfix'">
					<div class="paddingtb20 border-bottom-lighter-1 paddinglr40">您有一条新消息</div>
					<div class="inner-left padding20">
						<div
							class="marginlr20 circle-box-50 fill-color-matchC inner-center font-35 text-borw" :class="item.icon">
						</div>
						<div class="flex-column line-height-7">
							<div class="inner-left">
								<div>{{item.type}}</div>
								<div class="paddinglr10 font-12 text-color-black-light">{{item.time}}</div>
							</div>
							<div class="font-14 text-color-black-middle">{{item.content}}</div>
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
	const messagelist = ref([{
			id: 1,
			icon: 'custom-icon custom-icon-shop',
			type: '竞标消息',
			time: '2021-12-02',
			content: '您参与竞标的项目：的方式烦烦烦噶时光发反倒是公司，已竞标成功。您可以开始工作了，祝您早日完成任务。'
		},
		{
			id: 2,
			icon: 'custom-icon custom-icon-shop',
			type: '招标消息',
			time: '2021-12-02',
			content: '您发布的项目：发射点发发给大锅饭大锅饭的告诉对方，有人投标啦！'
		},
		{
			id: 3,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '创客：我是谁的猪，已发货。'
		},
		{
			id: 4,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '您已确立和创客:我是谁的猪，合作完成您的项目'
		},
		{
			id: 21,
			icon: 'custom-icon custom-icon-shop',
			type: '招标消息',
			time: '2021-12-02',
			content: '您发布的项目：发射点发发给大锅饭大锅饭的告诉对方，有人投标啦！'
		},
		{
			id: 31,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '创客：我是谁的猪，已发货。'
		},
		{
			id: 41,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '您已确立和创客:我是谁的猪，合作完成您的项目'
		},
		{
			id: 12,
			icon: 'custom-icon custom-icon-shop',
			type: '招标消息',
			time: '2021-12-02',
			content: '您发布的项目：发射点发发给大锅饭大锅饭的告诉对方，有人投标啦！'
		},
		{
			id: 13,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '创客：我是谁的猪，已发货。'
		},
		{
			id: 14,
			icon: 'custom-icon custom-icon-user',
			type: '项目进度消息',
			time: '2021-12-02',
			content: '您已确立和创客:我是谁的猪，合作完成您的项目'
		},
	])
</script>

<style scoped>
	.marginfix1 {
		margin-top: 15px;
		margin-bottom: 5px;
	}

	.marginfix {
		margin: 5px 0;
	}
</style>
