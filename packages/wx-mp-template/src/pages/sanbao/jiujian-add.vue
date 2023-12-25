<template>
    <div class="margin-sm bg-white radius">
        <van-cell-group>
            <DatetimeCell title="业务日期" v-model="formData.bill_date"></DatetimeCell>
            <StaticpickerCell title="收旧方式" :list="[{
                label: '按重量',
                value: 1
            }, {
                label: '按安时数',
                value: 2
            }, {
                label: '按数量',
                value: 3
            }]" v-model="formData.fangs" />
            <customer-cell type="V" v-model="formData.customer" title="客户名称" label="customer_name" v-if="formData.customer"></customer-cell>
            <van-field
                label="旧件名称"
                :border="true"
                placeholder="请输入旧件名称"
                :value="formData.ysh"
                @input="(e: any) => {
                    formData.ysh = e.detail
                }"
            />
            <van-field
                label="旧件数量"
                :border="true"
                placeholder="请输入旧件数量"
                :value="formData.str"
                @input="(e: any) => {
                    formData.str = e.detail
                }"
            />
            <van-cell title="自编号" value="ZB-23-12-01" />
            <van-field
                label="旧件总重量"
                :border="true"
                placeholder="请输入旧件总重量"
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
            <van-field
                label="单价"
                :border="true"
                placeholder="请输入单价 "
                :value="formData.taihao"
                @input="(e: any) => {
                    formData.taihao = e.detail
                }"
            />
            <van-cell title="金额" value="0.00" />
            <van-field
                label="备注"
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
    import StaticpickerCell from '@/components/staticpicker-cell/index.vue'

    const formData = ref({
        bill_date: '',
        ysh: '',
        str: '',
        customer: {},
        taihao: '',
        fangs: '1'

    })
</script>