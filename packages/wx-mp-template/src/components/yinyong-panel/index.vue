<template>
    <div class="bg-white radius margin-sm">
        <van-cell title="引用货品" value="选择引用单据" is-link @click="onOrderShow"/>
        <van-empty description="还选择货品" v-if="productChangeList.length < 1"></van-empty>
        <template v-else>
            <div class=" solid-bottom " v-for="(el, i) in productChangeList" :key="el.id">
                <div class="padding-sm">
                    <div class="text-bold">{{ el.goods_name }}</div>
                    <div><van-tag plain type="primary">{{ el.goods_specs }}</van-tag>&nbsp;<van-tag plain type="success">{{ el.goods_unit }}</van-tag></div>
                    <div class="text-gray margin-top-xs text-sm">
                        开单数量：<span class="text-bold text-black">{{ el.quantity }}</span> &nbsp;
                        待入库数：<span class="text-bold text-black">{{ el.unref_qty }}</span>
                    </div>
                    <div class="text-sm">上游单号：{{ el.detail_sys_id }}</div>
                    <div class="flex justify-between align-center margin-top-sm">
                        <div>入库数量</div>
                        <van-stepper :value="el.ref_qty" integer input-width="80" min="0" :max="el.unref_qty" @change="numberChange(i, $event)" />
                    </div>
                </div>
                <van-field
                    :value="el.remark"
                    label="备注"
                    type="textarea"
                    placeholder="请输入备注"
                    autosize
                    @change="remarkChange(i, $event)"
                />
                <div class="padding-tb-sm text-center text-red" @click="removeProduct(i)">
                    <van-icon name="delete" />移除
                </div>
            </div>
        </template>
    </div>

    <van-popup 
        :show="popupOrderShow" 
        position="bottom"  
        round
        custom-style="width: 100%; height: 95%;">
        <div class="solid-bottom text-grey solid-bottom text-center padding-sm popup-head">
            <span class="padding-sm">选择单据</span>
            <div class="fr padding-lr-xs" @click="closeOrderPopup">
                <van-icon name="cross" />
            </div>
        </div>
        <scroll-view :style="srcollHeight" scroll-y>

            <div class="text-center padding-sm" v-if="isLoading">
                <van-skeleton title row="3" />
            </div>
            <van-checkbox-group 
                :value="checkboxOrderValue" 
                @change="checkboxOrderChange" v-else>
                <div class="padding-sm solid-bottom margin-left-sm" v-for="el in yinYongList" :key="el.id">
                    <van-checkbox :name="el.id">
                        <div class="padding-lr-sm text-black">
                            <div>
                                <span class="text-sm text-gray">单据编号：</span>{{ el.bill_code }}
                            </div>
                            <div><span class="text-sm text-gray">单据日期：</span>{{ el.bill_date }}</div>
                            <div><span class="text-sm text-gray">入库仓库：</span>{{ el.store_name }}</div>
                            <div><span class="text-sm text-gray">开单数量：</span>{{ el.quantity }}</div>
                            <div><span class="text-sm text-gray">待入库数：</span>{{ el.unref_qty }}</div>
                            <div><span class="text-sm text-gray">业务对象：</span>{{ el.bill_customer }}</div>
                        </div>
                    </van-checkbox>
                </div>
            </van-checkbox-group>
        </scroll-view>
        <div class="padding-sm popup-footer">
            <van-button type="primary" round block size="small" :disabled="checkboxOrderValue.length < 1"  @click="popupProductShow = true">查询单据货品</van-button>
        </div>
    </van-popup>
    <van-popup 
        :show="popupProductShow" 
        position="bottom"  
        round
        custom-style="width: 100%; height: 95%;" >
        <div class="solid-bottom text-grey solid-bottom text-center padding-sm">
            <div class="fl padding-lr-xs"  @click="closeProductPopup">
                <van-icon name="arrow-left" />
            </div>
            <span>选择货品</span>
            <div class="fr padding-lr-xs" @click="closeAllPopup">
                <van-icon name="cross" />
            </div>
        </div>
        <scroll-view :style="srcollHeight" scroll-y>
            <van-checkbox-group 
                :value="checkboxProductValue" 
                @change="checkboxProductChange">
                <div class="padding-sm solid-bottom margin-left-sm" v-for="el in productList" :key="el.id">
                    <van-checkbox :name="el.id">
                        <div class="text-bold">{{ el.goods_name }}</div>
                        <div><van-tag plain type="primary">{{ el.goods_specs }}</van-tag>&nbsp;<van-tag plain type="success">{{ el.goods_unit }}</van-tag></div>
                        <div class="text-gray margin-top-xs text-sm">
                            开单数量：<span class="text-bold text-black">{{ el.quantity }}</span> &nbsp;
                            待入库数：<span class="text-bold text-black">{{ el.unref_qty }}</span>
                        </div>
                        <div class="text-sm">上游单号：{{ el.detail_sys_id }}</div>
                    </van-checkbox>
                </div>
            </van-checkbox-group>
        </scroll-view>
        <div class="padding-sm popup-footer">
            <van-button type="primary" round block size="small" :disabled="checkboxProductValue.length < 1"  @click="productChangeDone">确定选择</van-button>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
    import { ref, computed, nextTick, getCurrentInstance } from 'vue'
    import { useSelect } from '@/hooks/useSelect'
    import { useRuYinYong, useChuYinYong } from '@/api/store'
    import type { IYinYong, IProduct } from '@/api/store'

    interface IProps {
        bill_type: number // 单据类型
        bill_kind: string // 引用单据
        store_id: string // 入库仓库
        b_date: string // 单据日期
        modelValue: IProduct[]
    }

    const props = defineProps<IProps>()
    const emits = defineEmits(['update:modelValue'])

    const instance = getCurrentInstance()
    const isLoading = ref(false)
    
    const popupOrderShow = ref(false) // 引用单据的窗
    const popupProductShow = ref(false) // 货品单据的弹窗
    const checkboxOrderValue = ref<string[]|number[]>([])
    const checkboxProductValue = ref<string[]|number[]>([])
    const popupHeadHeight = ref(54) //计算输入框高度
    const popupFooterHeight = ref(54) // 底部按钮的高度
    const yinYongList = ref<IYinYong[]>([])
    const productChangeList = ref<IProduct[]>([])
    const srcollHeight = computed(() => {
        return {
            height: `calc(100% - ${popupHeadHeight.value + popupFooterHeight.value}px)`
        }
    })
    const productList = computed(() => {
        let list:IProduct[] = []
        checkboxOrderValue.value.forEach(el => {
            const item = yinYongList.value.find(yy => yy.id == el)
            if (item) {
                list = list.concat(item.products)
            }
        })
        return list
    })
    const onOrderShow = () => {
        nextTick(() => {
            setTimeout(() => {
                useSelect('.popup-head', instance).then((res) => {
                    if (res.height) {
                        popupHeadHeight.value = res.height
                    }
                })
                useSelect('.popup-footer', instance).then((footer: UniApp.NodeInfo ) => {
                    if (footer.height) {
                        popupFooterHeight.value = footer.height
                    }
                })
            }, 500)
        })
        yinYongList.value.length < 1 && queryYinYoing()
        popupOrderShow.value = true
    }
    const queryYinYoing = () => {
        isLoading.value = true
        if (props.bill_type == 1) {
            useRuYinYong({
                ...props
            }).then(res => {
                // @ts-ignore
                yinYongList.value = res
                console.log(res)
            }).finally(() => {
                isLoading.value = false
            })
        } else {
            useChuYinYong({...props}).then(res => {
                // @ts-ignore
                yinYongList.value = res
                console.log(res)
            }).finally(() => {
                isLoading.value = false
            })
        }
    }
    const checkboxOrderChange = (e: { detail: string[]|number[]}) => {
        checkboxOrderValue.value = e.detail
    }
    const checkboxProductChange = (e: { detail: string[]|number[]}) => {
        checkboxProductValue.value = e.detail
    }
    const closeOrderPopup = () => {
        checkboxOrderValue.value = []
        popupOrderShow.value = false
    }
    const closeProductPopup = () => {
        checkboxProductValue.value = []
        popupProductShow.value = false
    }
    const closeAllPopup = () => {
        closeOrderPopup()
        closeProductPopup()
    }
        /**
     * 货品数量变化
     * @param index 
     * @param e 
     */
     const numberChange = (index: number, e: { detail: number }) => {
        productChangeList.value[index].ref_qty = e.detail
        updateModelValue()
    }
    const remarkChange = (index: number, e: { detail: string }) => {
        productChangeList.value[index].remark = e.detail
        updateModelValue()
    }
    /**
     * 确认货品的选择
     */
    const productChangeDone = () => {
        checkboxProductValue.value.forEach(el => {
            // 去重处理
            const index = productChangeList.value.findIndex(product => product.id == el)
            if (index < 0) {
                const item = productList.value.find(product => product.id === el)
                if (item) {
                    productChangeList.value.push({
                        ...item,
                        ref_qty: item.unref_qty,
                        remark: ''
                    })
                }
            }
        })
        closeAllPopup()
        updateModelValue()
    }
    const removeProduct = (index: number) => {
        productChangeList.value.splice(index, 1)
        updateModelValue()
    }
    const updateModelValue = () => {
        emits('update:modelValue', productChangeList.value)
    }
</script>