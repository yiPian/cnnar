<template>
	<view>
		{{ title }}
		<van-button type="primary">32423</van-button>
		<van-switch></van-switch>
		<van-icon name="chat" info="9" />
	</view>
	<van-tabbar>
		<van-tabbar-item icon="home-o">标签</van-tabbar-item>
		<van-tabbar-item icon="search">标签</van-tabbar-item>
		<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
		<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
	</van-tabbar>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const title = ref('Hello')
</script>