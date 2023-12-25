<template>
    <div class="margin-sm bg-white radius">
       <van-cell-group>
            <van-cell title="单据类型" value="拆卸开单" />
            <DatetimeCell title="单据日期" v-model="formData.bill_date"></DatetimeCell>
            <store-cell v-model="formData.store_id" title="仓库名称"></store-cell>
       </van-cell-group>
    </div>
    <zuzhuang-panel v-model="formData.products"></zuzhuang-panel>
    <div class="padding-sm">
        <van-button type="primary" :loading="isLoading" block @click="submit">提交单据</van-button>
    </div>
    <SuccessPanel info-path="store/caixie-info" :id="orderId" ref="successPanel"/>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import type { IProduct } from '@/api/store'
    import DatetimeCell from '@/components/datetime-cell/index.vue'
    import StoreCell from '@/components/store-cell/index.vue'
    import zuzhuangPanel from '@/components/zuzhuang-panel/index.vue'
    import SuccessPanel from '@/components/success-panel/index.vue'

    interface IFormData {
        store_id: string
        bill_date: string
        products: IProduct[]
        total_amount: number
    }
    const formData = ref<IFormData>({
        bill_date: '',
        store_id: '',
        products: [],
        total_amount: 0
    })

    const orderId = ref<number>()
    const isLoading = ref(false)
    const successPanel = ref<typeof SuccessPanel>()

    const submit = () => {
        
    }
</script>