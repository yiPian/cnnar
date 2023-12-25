<template>
    <div class="padding-tb-sm solid-bottom" v-for="(el, i) in list" :key="el.ID">
        <div class="flex">
            <van-image width="70" height="70"></van-image>
            <div class="padding-lr-sm flex flex-direction justify-between flex-sub">
                <div>
                    <div class="text-black text-bold">
                        {{ el.goods_name }}
                        <van-tag plain type="success">{{ el.goods_type_name }}</van-tag>
                    </div>
                    <div class="text-gray text-sm">编号: {{ el.goods_code }}</div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="text-black text-bold">
                        <span class="text-sm">¥</span>
                        <span class="text-lg">{{ el.sale_price01 }}</span>
                    </div>
                    <div class="text-sm text-grey">库存：{{ el.goods_unit }}</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>账面数量</div>
            <div>50</div>
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>账面单价</div>
            <div>510</div>
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>账面金额</div>
            <div>510</div>
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>调后单价</div>
            <van-stepper :value="el.price" :min="-9999" input-width="80" @change="priceChange(i, $event)" />
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>调后金额</div>
            <div>510</div>
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>差异金额</div>
            <div>510</div>
        </div>
            <van-field
                    :value="el.remark"
                    label="备注"
                    type="textarea"
                    placeholder="请输入备注"
                    autosize
                    @change="remarkChange(i, $event)"
                />
        
        <div class="flex justify-between align-center margin-top-sm">
            <van-button plain size="mini" icon="delete-o" type="warning" @click="remove(i)">移除</van-button>
            
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { IProduct } from '@/api/product'  
    interface IProps {
        list: IProduct[]
    }
    defineProps<IProps>()
    interface IEmits {
        (e:'remarkChange', index: number, remark: string ): void
        (e:'priceChange', index: number, price: number ): void
        (e:'remove', index: number): void
        
    }
    const emits = defineEmits<IEmits>()

    const remarkChange = (index: number, e: { detail: string }) => {
        emits('remarkChange', index, e.detail)
    }
    const priceChange = (index: number, e: { detail: number }) => {
        emits('priceChange', index, e.detail)
    }
    const remove = (index: number) => {
        emits('remove', index)
    }
</script>