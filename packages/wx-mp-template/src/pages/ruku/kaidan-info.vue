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
                <van-cell title="引用类型" :value="info.ref_bill_name" />
                <van-cell title="入库仓库" :value="info.store_name" />
                <van-cell title="备注" :value="info.remark" />
            </van-cell-group>
        </div>
        <div class="bg-white margin-lr-sm margin-tb">
            <div class="padding-lr padding-tb-sm solid-bottom text-bold">货品清单</div>
            <div>  
                <div class="solid-bottom padding-sm flex" v-for="el in info.iostore_details" :key="el.id">
                    <van-image width="70" height="70"></van-image>
                    <div class="padding-lr-sm flex flex-direction justify-between flex-sub">
                        <div>
                            <div class="text-black text-bold">
                                {{ el.goods_name }}
                            </div>
                            <div class="text-gray text-sm">规格型号: {{ el.goods_specs }}</div>
                        </div>
                        <div class="margin-top-sm">入库数量：{{ el.ref_qty }}</div>
                        <div class="margin-top-xs">上游单号：{{ el.detail_sys_id }}</div>
                        <div class="margin-top-xs" v-if="el.remark">备注：{{ el.remark }}</div>
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
    import { useRukuKaidanInfo } from '@/api/store'
    import { onLoad } from '@dcloudio/uni-app'
    import type { OrderListItem } from '@/api/order'
    import ShenheStatus from '@/components/shenhe/index.vue'

    const isLoading = ref(true)
    const info = ref<OrderListItem>()
    onLoad((params) => {
        if (params && params.id) {
            useRukuKaidanInfo(params.id).then(res => {
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