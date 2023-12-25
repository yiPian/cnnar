<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <van-cell title="单据类型" value="销售开单" />
            <picker-cell v-model="formData.bill_mark" :query-func="useBillmark" title="单据标记" label="param_name"></picker-cell>
            <DatetimeCell title="单据日期" v-model="formData.bill_date"></DatetimeCell>
            <picker-cell v-model="formData.shiptype" :query-func="useShiptypeQuery" title="运输方式" label="ship_name"></picker-cell>
            <picker-cell v-model="formData.store_id" :query-func="useStoreQuery" title="出货仓库" label="store_name"></picker-cell>
        </van-cell-group>
    </div>
    <CustomerPanel v-model="formData.customer" v-if="formData.customer"></CustomerPanel>
    <product-panel v-model="formData.products"></product-panel>
    <div class="padding-sm">
        <van-button type="primary" block @click="submit">提交单据</van-button>
    </div>
    <SuccessPanel info-path="xiaoshou/kaidan-info" :id="orderId" ref="successPanel"/>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useShiptypeQuery, useStoreQuery, useKaidanCreate ,useBillmark} from '@/api/order'
    import { useOrderSubmitVerify } from '@/hooks/userOrder'
    import type { IOrder } from '@/api/order'
    import DatetimeCell from '@/components/datetime-cell/index.vue'
    import PickerCell from '@/components/picker-cell/index.vue'
    import CustomerPanel from '@/components/customer-panel/index.vue'
    import ProductPanel from '@/components/product-panel/index.vue'
    import SuccessPanel from '@/components/success-panel/index.vue'

    
    interface FormData extends IOrder {
        shiptype: string
        store_id: string
    }
    const formData = ref<FormData>({
        bill_date: '',
        store_id: '',
        bill_mark: '',
        shiptype: '',
        customer: null,
        products: [],
        total_amount: 0,
        total_number: 0
    })
    const isLoading = ref(false)
    const orderId = ref<number>()
    const successPanel = ref<typeof SuccessPanel>()

    const submit = () => {
        if (useOrderSubmitVerify(formData.value)) {
            isLoading.value = true
            useKaidanCreate(formData.value).then(res => {
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