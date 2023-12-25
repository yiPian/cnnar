<template>
	<head-bar></head-bar>
    <div class="margin-sm text-xl text-black text-bold">
        消息
    </div>
	<div class="margin-sm radius bg-white ">
		<div class=" flex algin-center solid-bottom padding-sm">
			<van-image
				round
				width="2.5rem"
				height="2.5rem"
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
			<div class="margin-left-sm flex-sub">
				<div class="flex justify-between">
					<div class="text-black text-bold">
						审核消息
					</div>
					<div class="text-sm text-gray">2023-12-09</div>
				</div>
				<div class="text-sm text-gray">暂无消息</div>
			</div>
		</div>
		<div class="flex algin-center padding-sm">
			<van-image
				round
				width="2.5rem"
				height="2.5rem"
				src="https://img.yzcdn.cn/vant/cat.jpeg"
			/>
			<div class="margin-left-sm flex-sub">
				<div class="flex justify-between">
					<div class="text-black text-bold">
						系统通知
					</div>
					<div class="text-sm text-gray">星期四</div>
				</div>
				<div class="text-sm text-gray">暂无消息</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
  	import HeadBar from '@/components/head-bar/index.vue'
</script>