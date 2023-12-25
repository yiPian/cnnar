<template>
    <swiper indicator-color="#ffffff" interval="3000"  autoplay indicator-dots style="min-height: calc(60vh)" v-if="list.length > 0"> 
        <swiper-item v-for="(el, i) in list" :key="i">
            <view class="flex justify-center align-center" style="width: 100%; height: 100%" @tap="previewImage(el)">
                <image :src="el" lazy-load mode="aspectFill" style="width: 100%; height: 100%"></image>
            </view>
        </swiper-item>
    </swiper> 
    <div class="bg-white padding">
        <div class="flex justify-between align-center">
            <div class="text-red">
                <span>¥</span>
                <span class="text-xxl text-bold">713.00</span>
            </div>
            <div class="text-sm text-black solid-left padding-left text-center">
                已售<br/>
                323
            </div>
        </div>
        <div class="margin-top-sm text-black text-bold">
            米其林【包安装】轮胎Michelin 浩悦Primacy 3ST 汽车轮胎 205/55R16 91W 防爆*适配宝马奔驰
        </div>
    </div>
    <div class="margin-top bg-white">
        <div class="padding solid-bottom text-gray">
            参数规格
        </div>
        <van-cell-group>
            <van-cell title="品牌" value="米其林" />
            <van-cell title="规格" value="205/55R16" />
            <van-cell title="花纹" value="HD517" />
            <van-cell title="尺寸" value="16" />
        </van-cell-group>
    </div>
    <van-goods-action>
        <van-goods-action-icon icon="cart-o" text="购物车"/>
        <div class="padding-lr margin-right-lg"></div>
        <van-goods-action-button
            text="加入购物车"
            type="warning"
        />
        <van-goods-action-button text="立即开单"  />
    </van-goods-action>
</template>
<script setup lang="ts">
    const list = [
        'https://img.alicdn.com/imgextra/i2/2454195860/O1CN01nrbxiz1t9vdTXT1gx_!!0-item_pic.jpg_640x640q80_.webp',
        "https://img.alicdn.com/imgextra/i4/2454195860/O1CN014huluF1t9vdQy29CD_!!2454195860.jpg_640x640q80_.webp",
        'https://img.alicdn.com/imgextra/i1/2454195860/O1CN018PnarZ1t9vdPIyNFW_!!2454195860.jpg_640x640q80_.webp',
        'https://img.alicdn.com/imgextra/i2/2454195860/O1CN01uM091T1t9vdNaVa8a_!!2454195860.jpg_640x640q80_.webp'
    ]
    const previewImage = (path:string) =>{
        uni.previewImage({
            urls: list,
            current: path
        })
    }
</script>