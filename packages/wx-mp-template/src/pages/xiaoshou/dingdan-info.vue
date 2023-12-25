<template>
    <div class="margin-sm bg-white radius padding-tb-sm" v-if="isLoading">
        <template v-for="el in 5" :key="el">
            <van-skeleton title row="3" />
        </template>
    </div>
    <template v-if="info">
        <div class="margin-sm bg-white radius" >
            <van-cell-group>
                <van-cell title="单号" :value="info.bill_code" />
                <van-cell title="单据日期" :value="info.bill_date" />
                <van-cell title="联系人" :value="info.linkman" />
                <van-cell title="联系电话" :value="info.linkman_tel" />
                <van-cell title="客户编码" :value="info.guest_code" />
                <van-cell title="客户名称" :value="info.guest_name" />
                <van-cell title="收货地址" :value="info.rec_address" />
                <van-cell title="制单人" :value="info.opman_name" />
                <van-cell title="合计数量" :value="info.all_quantity" />
                <van-cell title="合计金额" :value="info.all_amount" />
            </van-cell-group>
        </div>
        <div class="bg-white margin-lr-sm margin-tb">
            <div class="padding-lr padding-tb-sm solid-bottom text-bold">货品清单</div>
            <div>  
                <div class="solid-bottom padding-sm flex" v-for="el in info.sale_details" :key="el.id">
                    <van-image width="70" height="70"></van-image>
                    <div class="padding-lr-sm flex flex-direction justify-between flex-sub">
                        <div>
                            <div class="text-black text-bold">
                                {{ el.goods_name }}
                            </div>
                            <div class="text-gray text-sm">编号: {{ el.goods_code }}</div>
                        </div>
                        <div class="flex items-center justify-between margin-top-xs">
                            <div>
                                价格：¥{{ el.price }}
                            </div>
                            <div>数量：{{ el.quantity }}</div>
                        </div>
                        <div class="text-green text-bold text-right margin-top-xs">小计：¥{{ el.amount }}</div>
                    </div>
                </div>
            </div>
        </div>
        <ShenheStatus :status="info.bill_state"/>
    </template>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useDingdanInfo } from '@/api/order'
    import { onLoad } from '@dcloudio/uni-app'
    import type { OrderListItem } from '@/api/order'
    import ShenheStatus from '@/components/shenhe/index.vue'

    const isLoading = ref(true)
    const info = ref<OrderListItem>()
    onLoad((params) => {
        if (params && params.id) {
            useDingdanInfo(params.id).then(res => {
                // @ts-ignore
                info.value = res
            }).finally(() => {
                isLoading.value = false
            })
        }
        console.log('params', params)
    })
 
</script>