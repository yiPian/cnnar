<template>
    <van-cell :title="title" is-link :value="modelValue.name" @click="showPopup"/>
    <popup-list :params="{ c_type: type }" :query-func="useCustomerQuery" @queryDone="queryDone" @changeDone="changeDone" ref="popupList">
        <van-radio-group :value="radioValue" @change="radioChange">
            <div class="padding-sm solid-bottom margin-lr-sm" v-for="el in customerList" :key="el.ID">
                <van-radio :name="el.ID">
                    <div class="text-black text-bold"> {{ el.name }} </div>
                    <div>
                        <van-tag plain type="primary">{{ el.code }}</van-tag>  
                        <van-tag class="margin-left-sm" plain type="success">{{ el.objr_mark }}</van-tag>
                    </div>
                    <div class="text-grey margin-top-xs">
                        <van-icon name="manager" /> {{ el.employee_man_name }}
                    </div>
                    <div class="text-grey margin-top-xs">
                        <van-icon name="location" />{{ el.guest_address }}
                    </div>
                </van-radio>
            </div>
        </van-radio-group>
    </popup-list>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import { useCustomerQuery } from '@/api/customer'  
    import type { ICustomer } from '@/api/customer'  
    import PopupList from '@/components/popup-list/index.vue'

    interface IProps {
        title: string
        modelValue: ICustomer
        type?: any // 查询参数用于区别客户类型， 5、V 供应商、C 客户、L物流商、O其他、E 员工
    }
   
    defineProps<IProps>()
    const emits = defineEmits(['update:modelValue'])

    const popupList = ref<typeof PopupList>()
    const customerList = ref<ICustomer[]>([])
    const radioValue = ref<string|number>('')

    const radioChange = (e: { detail: string|number}) => {
        radioValue.value = e.detail
    }

    const showPopup = () => {
        popupList.value?.show()
    }
    const queryDone = (list: ICustomer[]) => {
        customerList.value = list
    }
    /**
     * 点击确定
     */
    const changeDone = () => {
        const customer = customerList.value.find(item => item.ID === radioValue.value)
        emits('update:modelValue', customer)
    }
</script>