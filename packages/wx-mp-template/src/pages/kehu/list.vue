<template>
    <div class="margin-lr">
        <van-search :value="value" placeholder="请输入搜索关键词" />
    </div>    
    <div class="bg-white radius margin padding-sm flex" v-for="el in 8" :key="el"  @click="toInfo">
        <van-image 
            radius="4"
            width="100"
            height="80"
            src="https://img2.baidu.com/it/u=546566168,2604437093&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=357"
            fit="cover" ></van-image>
        <div class="padding-left-sm">
            <div class="text-black text-bold">城东老鲁轮胎店</div>
            <div class="text-gray text-sm margin-top-sm">
                <div><van-icon name="manager" />鲁智深</div>
                <div><van-icon name="phone" />18619988781</div>
                <div><van-icon name="location" />拉萨市林州县甘泉路医院斜对面7号</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const value = ''
    const toInfo = () => {
        uni.navigateTo({ url: '/pages/kehu/info' })
    }
</script>