<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <van-cell title="单据类型" value="采购订单" />
            <picker-cell v-model="formData.bill_mark" :query-func="useBillmark" title="单据标记" label="param_name"></picker-cell>
            <DatetimeCell title="单据日期" v-model="formData.bill_date"></DatetimeCell>
            <DatetimeCell title="预计到货" v-model="formData.arrival_date"></DatetimeCell>
            <store-cell v-model="formData.store_id" title="收货仓库"></store-cell>
            <customer-cell type="V" v-model="formData.customer" title="选择供应商" label="customer_name" v-if="formData.customer"></customer-cell>
        </van-cell-group>
    </div>
    <product-panel v-model="formData.products"></product-panel>
    <div class="padding-sm">
        <van-button type="primary" block @click="submit">提交单据</van-button>
    </div>
    <SuccessPanel info-path="caigou/dingdan-info" :id="orderId" ref="successPanel"/>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useBillmark, useCgDingdanCreate } from '@/api/order'
    import { useOrderSubmitVerify } from '@/hooks/userOrder'
    import { DefaultCustomer } from '@/api/customer'
    import type { IOrder } from '@/api/order'
    import DatetimeCell from '@/components/datetime-cell/index.vue'
    import PickerCell from '@/components/picker-cell/index.vue'
    import StoreCell from '@/components/store-cell/index.vue'
    import CustomerCell from '@/components/customer-cell/index.vue'
    import ProductPanel from '@/components/product-panel/index.vue'
    import SuccessPanel from '@/components/success-panel/index.vue'

    
    interface FormData extends IOrder {
        shiptype: string
        store_id: string
        bill_mark: string
        bill_type: number
        arrival_date: string
    }
    const formData = ref<FormData>({
        bill_type: 1,
        bill_date: '',
        arrival_date: '',
        store_id: '',
        bill_mark: '',
        customer: { ...DefaultCustomer },
        shiptype: '',
        products: [],
        total_amount: 0,
        total_number: 0
    })
    const isLoading = ref(false)
    const orderId = ref<number>()
    const successPanel = ref<typeof SuccessPanel>()

    const submit = () => {
        if (useOrderSubmitVerify(formData.value, false)) {
            isLoading.value = true
            formData.value.bill_mark += '' 
            useCgDingdanCreate(formData.value).then(res => {
                 // @ts-ignore
                 if (res?.ID) {
                    // @ts-ignore
                    orderId.value = res.ID
                    successPanel.value?.show()
                } else {
                    uni.showModal({
                        title: '提示',
                        content: '提交失败,请重试',
                        showCancel: false
                    })
                }
            }).finally(() => {
                isLoading.value = false
            })
        }
    }
</script>