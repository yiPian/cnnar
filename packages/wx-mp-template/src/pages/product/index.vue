<template>
    <van-sticky>
    <div>
        <van-search :value="value" placeholder="请输入搜索关键词" />
    </div>   
   
    <van-tabs active="1" color="#25C05A">
        <van-tab title="标签 1">
        </van-tab>
        <van-tab title="标签 2"></van-tab>
        <van-tab title="标签 3"></van-tab>
        <van-tab title="标签 4"></van-tab>
        <van-tab title="标签 5"></van-tab>
        <van-tab title="标签 6"></van-tab>
    </van-tabs>
    </van-sticky>

    <div class="flex">
        <van-sidebar :active-key="activeKey" color="#25C05A">
            <van-sidebar-item title="米其林" />
            <van-sidebar-item title="邓禄普" />
            <van-sidebar-item title="普利司通" />
        </van-sidebar>
        <div class="bg-white">
            <div v-for="el in 8" :key="el" @click="toInfo">
                <van-card
                    thumb="https://img1.baidu.com/it/u=3821386649,833590381&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=585"
                    
                >
                    <div slot="title" class="text-bold text-df">
                        [1022233] 韩泰215/50R 18H L117A
                    </div>
                    <div slot="price">
                        ¥<span class="text-lg text-bold">219.00</span>
                    </div>
                    <div slot="num" class="text-right">
                        <van-stepper value="1" />
                    </div>
                </van-card>
                <div class="solid-bottom"></div>
            </div>
        </div>
    </div> 
    <!-- <van-goods-action>
        <div class="flex justify-between align-center w100 flex-sub">
            <van-goods-action-icon icon="cart-o" text="购物车"  />
            <van-button type="info">开单</van-button>
        </div>
    </van-goods-action> -->
</template>
<script setup lang="ts">
    const value = ''
    const activeKey = 0
    const toInfo = () => {
        uni.navigateTo({
            url: '/pages/product/info'
        })
    }
</script>