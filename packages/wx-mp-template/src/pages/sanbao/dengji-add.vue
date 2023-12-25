<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <DatetimeCell title="单据日期" v-model="formData.bill_date"></DatetimeCell>
            <van-field
                label="印刷号"
                :border="true"
                placeholder="请输入印刷号"
                :value="formData.ysh"
                @input="(e: any) => {
                    formData.ysh = e.detail
                }"
            />
            <van-field
                label="收胎人"
                :border="true"
                placeholder="请输入收胎人"
                :value="formData.str"
                @input="(e: any) => {
                    formData.str = e.detail
                }"
            />
            <customer-cell type="V" v-model="formData.customer" title="客户名称" label="customer_name" v-if="formData.customer"></customer-cell>
            <product-cell></product-cell>
            <van-cell title="自编号" value="ZB-23-12-01" />
            <van-field
                label="胎号/DOT号"
                :border="true"
                placeholder="请输入胎号/DOT号"
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
            <van-field
                label="病象"
                :border="true"
                placeholder="请输入病象"
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
            <van-field
                label="余花"
                :border="true"
                placeholder="请输入余花"
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
            <van-field
                label="收取"
                :border="true"
                placeholder="请输入收取"
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
        </van-cell-group>
    </div>
    <div class="padding-sm">
        <van-button type="primary" block >提交</van-button>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import DatetimeCell from '@/components/datetime-cell/index.vue'
    import CustomerCell from '@/components/customer-cell/index.vue'
    import ProductCell from '@/components/product-cell/index.vue'
    const formData = ref({
        bill_date: '',
        ysh: '',
        str: '',
        customer: {},
        taihao: '',

    })
</script>