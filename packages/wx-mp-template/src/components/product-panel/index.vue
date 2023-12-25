<template>
    <div class="bg-white radius margin-sm padding-sm">
        <div class="flex justify-between align-center padding-bottom-sm solid-bottom">
            <div>货品清单</div>
            <van-button icon="plus" size="mini" type="primary" square @click="showPopup">添加货品&nbsp;</van-button>
        </div>
        <div class="van-empty--small">
            <van-empty description="还未添加货品" v-if="changeProductList.length < 1"></van-empty>
            <template v-else>
                <template v-if="type == 'baosun'">
                    <baosun-product :list="changeProductList"  @number-change="numberChange"  @remove="remove" @baosun-change="baosunChange"></baosun-product>
                </template>
                <template v-else-if="type == 'diaobo'">
                    <diaobo-product :list="changeProductList"  @number-change="numberChange"  @remove="remove" @remark-change="remarkChange"></diaobo-product>
                </template>
                <template v-else-if="type == 'pandian'">
                    <pandian-product :list="changeProductList"  @number-change="numberChange"  @remove="remove" @price-change="priceChange" @remark-change="remarkChange"></pandian-product>
                </template>
                <template v-else-if="type == 'tiaojia'">
                    <tiaojia-product :list="changeProductList"  @remove="remove" @price-change="priceChange" @remark-change="remarkChange"></tiaojia-product>
                </template>
                <template v-else>
                    <!-- 单据选中的货品 start -->
                    <order-product :list="changeProductList" @number-change="numberChange" @price-change="priceChange" @remove="remove"></order-product>
                    <!-- 单据选中的货品  end -->
                </template>
            </template>
        </div>
    </div>
    <popup-list 
        :query-func="useProductQuery" 
        @queryDone="queryDone" 
        @changeDone="changeDone" 
        ref="popupList">
        <van-checkbox-group 
            :value="checkboxValue" 
            @change="checkboxChange">
            <div class="padding-sm solid-bottom margin-left-sm" v-for="el in productList" :key="el.ID">
                <van-checkbox :name="el.ID">
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
                </van-checkbox>
            </div>
        </van-checkbox-group>
    </popup-list>
</template>
<script setup lang="ts">
    import { ref } from 'vue'   
    import { useProductQuery } from '@/api/product'  
    import type { IProduct } from '@/api/product'  
    import PopupList from '@/components/popup-list/index.vue'
    import OrderProduct from './order.vue'
    import DiaoboProduct from './diaobo.vue'
    import BaosunProduct from './baosun.vue'
    import PandianProduct from './pandian.vue'
    import TiaojiaProduct from './tiaojia.vue'

    type IProps = {
        type?: string // 单据类型
        modelValue: IProduct[]
    }
    defineProps<IProps>()
    const emits = defineEmits(['update:modelValue'])

    const popupList = ref<typeof PopupList>()
    const checkboxValue = ref<string|number[]>([])
    const productList = ref<IProduct[]>([])
    const changeProductList =  ref<IProduct[]>([]) // 选择好的货品列表
    
    const showPopup = () => {
        popupList.value?.show()
    }
    const queryDone = (list: IProduct[]) => {
        productList.value = list
    }
    const changeDone = () => {
        // 将选着的货品列表赋值给changeChangeList
        changeProductList.value = []
        for (const productId of checkboxValue.value) {
            const product = productList.value.find(el => el.ID === productId)
            product && changeProductList.value.push({
                ...product,
                number: 1,
                price: parseFloat(product.sale_price01.toString()),
                amount: product.sale_price01 * 1 // 货品总金额
            })
        }
        updateModelValue()
    }
    const checkboxChange = (e: { detail: string|number[]}) => {
        checkboxValue.value = e.detail
    }
    // /**
    //  * 货品数量变化
    //  * @param index 
    //  * @param e 
    //  */
    const numberChange = (index: number, number: number) => {
        changeProductList.value[index].number = number
        setAmount(index)
    }
    /**
     * 货品金额变化
     * @param index 
     * @param e 
     */
    const priceChange = (index: number, price: number) => {
        changeProductList.value[index].price = price
        setAmount(index)
    }
    /**
     * 报损选择
     */
    const baosunChange = (index: number, type: number) => {
        changeProductList.value[index].price = type
    }
    /**
     * 备注的填入
     */
    const remarkChange = (index: number, remark: string) => {
        changeProductList.value[index].remark = remark
    }
    /**
     * 设置货品总金额
     * @param index  
     */
    const setAmount = (index: number) => {
        const product = changeProductList.value[index]
        changeProductList.value[index].amount = parseFloat((product.number * product.price).toFixed(2))
        updateModelValue()
    }
    const remove = (index: number) => {
        changeProductList.value.splice(index, 1)
    }
    const updateModelValue = () => {
        emits('update:modelValue', changeProductList.value)
    }
</script>