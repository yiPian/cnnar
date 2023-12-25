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
                <van-cell title="单据日期" :value="info.created_at" />
                <van-cell title="供应商名称" :value="info.vender_name" />
                <van-cell title="供应商编码" :value="info.vender_code" />
                <van-cell title="制单人" :value="info.opman_name" />
                <van-cell title="采购数量" :value="info.all_quantity" />
                <van-cell title="采购金额" :value="info.all_amount" />
                <van-cell title="备注说明" :value="info.bill_remark" />
            </van-cell-group>
        </div>
        <div class="bg-white margin-lr-sm margin-tb">
            <div class="padding-lr padding-tb-sm solid-bottom text-bold">货品清单</div>
            <div>  
                <div class="solid-bottom padding-sm flex" v-for="el in info.purchase_details" :key="el.id">
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
        <!-- <div class="margin-sm bg-white">
            <van-steps
                :steps="steps"
                :active="0"
                direction="vertical"
                active-color="#25C05A"
            />
        </div> -->
        <ShenheStatus :status="info.bill_state"/>
    </template>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useCgKaidanInfo } from '@/api/order'
    import { onLoad } from '@dcloudio/uni-app'
    import type { OrderListItem } from '@/api/order'
    import ShenheStatus from '@/components/shenhe/index.vue'

    const isLoading = ref(true)
    const info = ref<OrderListItem>()
    onLoad((params) => {
        if (params && params.id) {
            useCgKaidanInfo(params.id).then(res => {
                // @ts-ignore
                info.value = res
            }).finally(() => {
                isLoading.value = false
            })
        }
        console.log('params', params)
    })
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