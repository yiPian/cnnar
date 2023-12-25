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
            <div>数量</div>
            <van-stepper :value="el.number" integer input-width="80" min="1" :max="el.goods_unit" @change="numberChange(i, $event)" />
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <div>价格</div>
            <van-stepper :value="el.price" :min="-9999" input-width="80" @change="priceChange(i, $event)" />
        </div>
        <div class="flex justify-between align-center margin-top-sm">
            <van-button plain size="mini" icon="delete-o" type="warning" @click="remove(i)">移除</van-button>
            <div >
                金额小计：<span class="text-green">¥
                    {{ el.amount }}
                </span>
            </div>
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
        (e:'numberChange', index: number, number: number): void
        (e:'priceChange', index: number, price: number ): void
        (e:'remove', index: number): void
        
    }
    const emits = defineEmits<IEmits>()

      /**
     * 货品数量变化
     * @param index 
     * @param e 
     */
     const numberChange = (index: number, e: { detail: number }) => {
        emits('numberChange', index, e.detail)
    }
    const priceChange = (index: number, e: { detail: number }) => {
        emits('priceChange', index, e.detail)
    }
    const remove = (index: number) => {
        emits('remove', index)
    }
</script>