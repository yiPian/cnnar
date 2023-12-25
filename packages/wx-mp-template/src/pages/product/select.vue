<template>
    <van-search :value="value" placeholder="请输入搜索关键词" />
    <div class="bg-white">  
        <van-card
        thumb="https://img1.baidu.com/it/u=3821386649,833590381&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=585"
        >
            <div slot="title" class="text-bold text-df">
                [1022233] 韩泰215/50R 18H L117A
            </div>
            <div slot="num" class="text-right">
                <van-stepper value="1" />
            </div>
            <div slot="price">
                进货单价 ¥<span class="text-lg text-bold">219.00</span>
            </div>
            <view slot="footer" class="flex justify-between padding-top-xs">
                <div class="text-green">
                    小计：¥<span class="text-lg text-bold">528.00</span>
                </div>
            </view>
        </van-card>
        <div class="solid-bottom"></div>
        <van-card
        thumb="https://img1.baidu.com/it/u=3821386649,833590381&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=585"
        >
            <div slot="title" class="text-bold text-df">
                [1022233] 韩泰215/50R 18H L117A
            </div>
            <div slot="price">
                进货单价 ¥<span class="text-lg text-bold">219.00</span>
            </div>
            <div slot="num" class="text-right">
                <van-stepper value="1" />
            </div>
            <view slot="footer" class="flex justify-between padding-top-xs">
                <div class="text-green">
                    小计：¥<span class="text-lg text-bold">528.00</span>
                </div>
            </view>
        </van-card>
    </div>
    <van-submit-bar
        :price="30500"
        button-text="选好了"
        @submit="onSubmit"
    />
</template>
<script setup lang="ts">
    const value = ''
    const onSubmit = () => {
        // @ts-ignore
        uni.navigateBack(-1)
    }
</script>