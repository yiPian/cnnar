<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <customer-cell title="选择客户" v-model="formData" type="C"></customer-cell>
            <van-cell title="客户类型" :value="formData.objr_mark" @click=""/>
            <van-field
                label="联系人"
                :border="true"
                placeholder="客户联系人"
                :value="formData.employee_man_name"
                @input="(e: any) => {
                    formData.employee_man_name = e.detail
                }"
            />
            <van-field
                label="联系电话"
                :border="true"
                placeholder="请输入客户联系电话"
                :value="formData.phone"
                @input="(e: any) => {
                    formData.phone = e.detail
                }"
            />
            <van-field
                label="联系地址"
                :border="true"
                placeholder="客户联系地址"
                :value="formData.guest_address"
                @input="(e: any) => {
                    formData.guest_address = e.detail
                }"
            />
        </van-cell-group>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { DefaultCustomer } from '@/api/customer'
    import type { ICustomer } from '@/api/customer'  
    import CustomerCell from '@/components/customer-cell/index.vue'

    interface IProps {
        modelValue: ICustomer|null
    }
    interface Emits {
        (e: 'update:modelValue', value: ICustomer): void
    }

    const props = defineProps<IProps>()
    const emits = defineEmits<Emits>()

    const formData = computed<ICustomer>({
        get: () => props.modelValue ? props.modelValue : {
            ...DefaultCustomer
        },
        set: (value: ICustomer) => emits('update:modelValue', value)
    })
</script>