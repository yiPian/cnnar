<template>
    <van-sticky>
        <div class="flex bg-white align-center shadow-df">
            <div class="flex-sub">
                <van-search :value="value" placeholder="请输入搜索关键词" />
            </div>
        </div>
    </van-sticky>
    <div class="bg-white padding-lr-sm padding-top-sm margin-sm radius" v-for="(el, i) in list" :key="el.id">
        <div class="flex justify-between align-center margin-tb-sm">
            <span>单据编号</span>
            <span class="text-black">{{ el.bill_code }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>单据类型</span>
            <span class="text-black">{{ el.bill_kind_name }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>单据日期</span>
            <span class="text-black">{{ el.bill_date }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>业务对象</span>
            <span class="text-black">{{ el.bill_customer }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>入库仓库</span>
            <span class="text-black">{{ el.store_name }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>开单数量</span>
            <span class="text-black">{{ el.quantity }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>已入库数</span>
            <span class="text-black">{{ el.ref_qty }}</span>
        </div>
        <div class="flex justify-between align-center margin-tb-sm">
            <span>未入库数</span>
            <span class="text-black">{{ el.unref_qty }}</span>
        </div>
        <div class="solid-top padding-tb-sm text-sm text-center text-green" v-if="mark.get(i)">
            已入库
        </div>
        <div class="solid-top padding-tb-sm text-sm text-center text-blue" v-else @click="ruku(i ,el)">
            入库
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { useRuYinYong , userRukuKaidanCreate} from '@/api/store'
    import type { IYinYong } from '@/api/store'

    const list = ref<IYinYong[]>([])
    const mark = ref(new Map())
    const value = ref('')
    onMounted(() => {
        useRuYinYong<IYinYong[]>({}).then(res => {
            list.value = res
        })
    })

    const ruku = (index: number, item: IYinYong) => {
        uni.showModal({
            title: '提示',
            content: '确定要入库吗？',
            success: (res) => {
                if (res.confirm) {
                    let total_number = 0
                    item.products.forEach(product => {
                        total_number += product.unref_qty
                        product.ref_qty = product.unref_qty
                    })
                    userRukuKaidanCreate({ 
                        id: item.id,
                        total_number,
                        products: item.products
                    }).then(() => {
                        mark.value.set(index, true)
                        uni.showToast({
                            title: '提交成功',
                            icon:'success',
                            duration: 1000
                        })
                    }).catch(() => {
                        uni.showModal({
                            title: '提示',
                            content: '提交失败,请重试',
                            showCancel: false
                        })
                    })
                }
            }
        })
    }
</script>