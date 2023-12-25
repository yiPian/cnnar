<template>
    <ListView :query-func="useCgKaidanQuery" to-create="sanbao/dengji-add">
        <template v-slot="{ data }">
            <div class="bg-white padding-sm margin-sm" v-for="el in data" :key="el.id" @click="toInfo(el.id)">
                <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
                    <span class="text-bold">{{ el.bill_code }}</span>
                    <van-tag type="warning" v-if="el.bill_state == 1">待审核</van-tag>
                    <van-tag type="success" v-else="el.bill_state == 2">已审核</van-tag>
                </div>
                <div class="text-gray">
                    <div class="flex justify-between align-center margin-tb-sm">
                        <span>供应商名称</span>
                        <span class="text-black">{{ el.vender_name }}</span>
                    </div>
                    <div class="flex justify-between align-center margin-tb-sm">
                        <span>采购数量</span>
                        <span class="text-black">{{ el.all_quantity }}</span>
                    </div>
                    <div class="flex justify-between align-center margin-tb-sm">
                        <span>采购金额</span>
                        <span class="text-black">{{ el.all_amount }}</span>
                    </div>
                    <!-- <div class="flex justify-between align-center margin-tb-sm">
                        <span>到货仓库</span>
                        <span class="text-black">{{ el.create_na }}</span>
                    </div> -->
                    <div class="flex justify-between align-center margin-tb-sm">
                        <span>单据日期</span>
                        <span class="text-black">{{ el.created_at }}</span>
                    </div>
                </div>
            </div> 
        </template>
    </ListView>
</template>
<script setup lang="ts">
    import { useCgKaidanQuery } from '@/api/order'
    import ListView from '@/components/list-view/index.vue'

    const toInfo = (id:number) => {
        uni.navigateTo({ url: '/pages/caigou/kaidan-info?id=' + id })
    }
</script>