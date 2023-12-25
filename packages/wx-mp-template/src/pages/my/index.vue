<template>
	<head-bar></head-bar>
    <div class="margin-tb-sm margin-lr text-xl text-black text-bold">
        我的
    </div>
    <div class="padding margin bg-white radius">
        <div class="flex align-center">
            <div slot="left">
				<van-image
					round
					width="40"
					height="40"
					fit="cover" 
					src="https://img1.baidu.com/it/u=1097077603,238359071&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1698858000&t=6a7eff8656d1876243333abc384fcca2"/>
			</div>
            <div>
                <div slot="top" class="text-black text-bold margin-left-sm">Hello, 王也</div>
                <div slot="bottom" class="text-sm text-gray margin-left-sm">ID:23400129</div>
            </div>
        </div>
    </div>
    <div class="margin-top">
        <van-cell-group inset>
            <van-cell title="企业通讯录" value="路易投资" icon="column" />
            <van-cell title="所属部门" value="信息化小组" icon="medal" />
            <van-cell title="负责客户" icon="friends"/>
            <van-cell title="账号设置"  icon="setting"/>
        </van-cell-group>
    </div>

	<!-- <van-tabbar :active="active" @change="onChange">
		<van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
		<van-tabbar-item name="msg" icon="chat-o">消息</van-tabbar-item>
		<van-tabbar-item name="work" icon="cluster-o">工作台</van-tabbar-item>
		<van-tabbar-item name="my" icon="manager-o">我的</van-tabbar-item>
	</van-tabbar> -->
</template>
<script setup lang="ts">
    import { ref } from 'vue';  
	import HeadBar from '@/components/head-bar/index.vue'
    // const active = ref('my')
	// const onChange = (e: { detail: String}) =>{
    //     // @ts-ignore
	// 	uni.navigateTo({ url: '/pages/' + e.detail + '/index'})
	// }
</script>