<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <van-cell title="单号" value="PK-2023-11-13-0001" />
            <van-cell title="供应商编码" value="01" />
            <van-cell title="供应商名称" value="上海韩泰轮胎有限公司" />
            <van-cell title="制单人" value="商务部-拉萨财务" />
            <van-cell title="货品数量" value="10" />
            <van-cell title="金额合计" value="¥5478.00" />
            <van-cell class="no-border" title="已入仓库" value="七一路仓库" />
        </van-cell-group>
    </div>
    <div class="bg-white margin-lr-sm margin-tb">
        <div class="padding-lr padding-tb-sm solid-bottom text-bold">货品清单</div>
        <div>  
            <van-card
            num="2"
            thumb="https://img1.baidu.com/it/u=3821386649,833590381&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=585"
            >
                <div slot="title" class="text-bold text-df">
                    [1022233] 韩泰215/50R 18H L117A
                </div>
                <div slot="price">
                    进货单价 ¥<span class="text-lg text-bold">219.00</span>
                </div>
                <view slot="footer" class="text-right padding-top-xs  flex justify-between align-center">
                    <div class="text-green">
                        小计：¥<span class="text-lg text-bold">528.00</span>
                    </div>
                </view>
            </van-card>
            <div class="solid-bottom"></div>
            <van-card
            num="2"
            thumb="https://img1.baidu.com/it/u=3821386649,833590381&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=585"
            >
                <div slot="title" class="text-bold text-df">
                    [1022233] 韩泰215/50R 18H L117A
                </div>
                <div slot="price">
                    进货单价 ¥<span class="text-lg text-bold">219.00</span>
                </div>
                <view slot="footer" class="text-right padding-top-xs flex justify-between align-center">
                    <div class="text-green">
                        小计：¥<span class="text-lg text-bold">528.00</span>
                    </div>
                </view>
            </van-card>
        </div>
    </div>\
</template>
<script setup lang="ts">
    import { ref } from 'vue'

    const show = ref(false)
    const isLoading = ref(false)
    const rukuDone = () => {
        isLoading.value = true
        setTimeout(() => {
            show.value = false
            uni.showToast({
                title: '入库成功',
                icon: 'success',
                duration: 1000
            })

        }, 800)
    }
    const steps = [
      {
        text: '订单审核',
        desc: '2023-11-13 刘玉 审核通过',
        activeIcon: 'success',
      },
      {
        text: '物理状态',
        desc: '未通知物理',
        activeIcon: 'plus',
      },
      {
        text: '订单完成',
        desc: '等待确认收货',
        activeIcon: 'cross',
      }]
</script>