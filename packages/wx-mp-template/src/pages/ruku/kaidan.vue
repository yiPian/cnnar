<template>
    <template v-if="isShow">
        <ListView :query-func="userRukuKaidanQuery" :params="{ bill_type }" :to-create="'ruku/kaidan-add?type=' + bill_type">
            <template v-slot="{ data }">
                <div class="bg-white padding-sm margin-sm" v-for="el in data" :key="el.id" @click="toInfo(el.id)">
                    <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
                        <span class="text-bold">{{ el.bill_code }}</span>
                        <van-tag type="warning" v-if="el.bill_state == 1">待审核</van-tag>
                        <van-tag type="success" v-else="el.bill_state == 2">已审核</van-tag>
                    </div>
                    <div class="text-gray">
                        <div class="flex justify-between align-center margin-tb-sm">
                            <span>引用类型</span>
                            <span class="text-black">{{ el.ref_bill_name }}</span>
                        </div>
                        <div class="flex justify-between align-center margin-tb-sm">
                            <span>入库仓库</span>
                            <span class="text-black">{{ el.store_name }}</span>
                        </div>
                        <div class="flex justify-between align-center margin-tb-sm">
                            <span>入库数量</span>
                            <span class="text-black">{{ el.qty_sum }}</span>
                        </div>
                        <div class="flex justify-between align-center margin-tb-sm">
                            <span>单据日期</span>
                            <span class="text-black">{{ el.created_at }}</span>
                        </div>
                        <div class="flex justify-between align-center margin-tb-sm">
                            <span>备注</span>
                            <span class="text-black">{{ el.remark }}</span>
                        </div>
                    </div>
                </div> 
            </template>
        </ListView>
    </template>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { userRukuKaidanQuery } from '@/api/store'
    import ListView from '@/components/list-view/index.vue'
    import { onLoad } from '@dcloudio/uni-app'

    const isShow = ref(false)
    const bill_type = ref(1)
    onLoad((params) => {
        if (params && params.type) {
            console.log(params.type)
            if (params.type == 2) {
                bill_type.value = 2
                uni.setNavigationBarTitle({
                    title: '出库开单'
                })
            }
        }
        isShow.value = true
    })
    const toInfo = (id:number) => {
        uni.navigateTo({ url: '/pages/ruku/kaidan-info?id=' + id })
    }
</script>