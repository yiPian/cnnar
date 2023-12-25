<template>
    <template v-if="isReady">
        <div class="margin-sm bg-white radius" >
            <picker-cell v-model="formData.bill_kind" :query-func="formData.bill_type == 1 ? useBillKindRu : useBillKindChu"  title="引用单据" label="bill_kind_type"></picker-cell>
            <store-cell v-model="formData.store_id" :title="formData.bill_type == 1 ? '入库仓库' : '出库仓库'"></store-cell>
            <DatetimeCell title="单据日期" v-model="formData.bill_date"></DatetimeCell>
        </div>
        <yinyong-panel v-model="formData.products" :bill_type="formData.bill_type" :bill_kind="formData.bill_kind" :b_date="formData.bill_date" :store_id="formData.store_id" ></yinyong-panel>
    </template>
    <template v-else>
        <van-skeleton title row="3" />
    </template>
    <div class="padding-sm">
        <van-button type="primary" :loading="isLoading" block @click="submit">提交单据</van-button>
    </div>
    <SuccessPanel info-path="ruku/kaidan-info" :id="orderId" ref="successPanel"/>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useBillKindRu, useBillKindChu, userRukuKaidanCreate } from '@/api/store'
    import { useOrderProductVerify } from '@/hooks/userOrder'
    import type { IProduct } from '@/api/store'
    import StoreCell from '@/components/store-cell/index.vue'
    import PickerCell from '@/components/picker-cell/index.vue'
    import DatetimeCell from '@/components/datetime-cell/index.vue'
    import YinyongPanel from '@/components/yinyong-panel/index.vue'
    import SuccessPanel from '@/components/success-panel/index.vue'
    import { onLoad } from '@dcloudio/uni-app'

    interface IFormData {
        bill_type: number
        bill_kind: string
        store_id: string
        bill_date: string
        products: IProduct[]
        total_number: number
    }

    const formData = ref<IFormData>({
        bill_type: 1,
        bill_kind: '',
        store_id: '',
        bill_date: '',
        products: [],
        total_number: 0
    })
    const orderId = ref<number>()
    const isReady = ref(false)
    const isLoading = ref(false)
    const successPanel = ref<typeof SuccessPanel>()
    onLoad((params) => {
        if (params && params.type) {
            if (params.type == 2) { // 出库单
                formData.value.bill_type = 2
                uni.setNavigationBarTitle({
                    title: ' 新增出库开单'
                })
            }
        }
        isReady.value = true
    })
    const submit = () => {
         isLoading.value = true
        if (useOrderProductVerify(formData.value)) {
            // 计算总数量
            formData.value.total_number = formData.value.products.reduce((prev, cur) => {
                return prev + cur.ref_qty
            }, 0)
            userRukuKaidanCreate(formData.value).then(res => {
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
            }).catch(() => {
                uni.showModal({
                    title: '提示',
                    content: '提交失败,请重试',
                    showCancel: false
                })
            }).finally(() => {
                isLoading.value = false
            })
        }
    }
</script>