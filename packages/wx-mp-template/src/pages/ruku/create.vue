<template>
    
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <van-cell title="单据类型" value="入库单" />
            <van-cell title="引用单据类型" is-link value="销售开单" @click=""/>
            <van-cell title="出库仓库"  is-link value="直发仓" @click=""/>
            <van-cell title="选择引用单据"  is-link value="" @click=""/>
        </van-cell-group>
    </div>
    <div class="bg-white margin-lr-sm margin-tb">
            <div class="padding-lr padding-tb-sm solid-bottom text-bold flex justify-between align-center">
                <span>货品清单</span>
                <van-button icon="add" type="primary" size="mini" @click="toProduct" plain hairline />
            </div>
            <div>  
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
                        <van-button icon="delete" round size="small">移除</van-button>
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
                        <van-button icon="delete" round size="small">移除</van-button>
                        <div class="text-green">
                            小计：¥<span class="text-lg text-bold">528.00</span>
                        </div>
                    </view>
                </van-card>
            </div>
        </div>
        <div class="padding-sm">
            <van-button type="primary" block @click="toInfo">提交单据</van-button>
        </div>
</template>
<script setup lang="ts">
    const toInfo = () => {
        uni.navigateTo({ url: '/pages/ruku/info' })
    }
    const toProduct = () => {
        uni.navigateTo({ url: '/pages/product/select'})
    }
</script>