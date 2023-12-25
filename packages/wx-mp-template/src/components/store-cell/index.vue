<template>
    <van-cell :title="title" is-link :value="cellValue.store_name" @click="showPopup"/>
    <popup-list :query-func="useStoreQuery" @queryDone="queryDone" @changeDone="changeDone" ref="popupList">
        <van-radio-group :value="radioValue" @change="radioChange">
            <div class="padding-sm solid-bottom margin-lr-sm" v-for="el in storeList" :key="el.ID">
                <van-radio :name="el.ID">
                    <div class="text-black text-bold"> {{ el.store_name }} </div>
                    <div class="text-grey margin-top-xs">
                        <van-icon name="location" />{{ el.store_address }}
                    </div>
                </van-radio>
            </div>
        </van-radio-group>
    </popup-list>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { useStoreQuery } from '@/api/order'
    import type { IStore } from '@/api/order'  
    import PopupList from '@/components/popup-list/index.vue'

    interface IProps {
        title: string
        modelValue: string
    }
   
    const props =defineProps<IProps>()
    const emits = defineEmits(['update:modelValue'])

    const popupList = ref<typeof PopupList>()
    const storeList = ref<IStore[]>([])
    const radioValue = ref<string|number>('')
    // 计算当前选中项的值
    const cellValue = computed(() => {
        const item = storeList.value.find(item => item.ID === props.modelValue)
        if (item) {
            return item
        }
        return { ID: 0, store_name: ''}
    })

    const radioChange = (e: { detail: string|number}) => {
        radioValue.value = e.detail
    }

    const showPopup = () => {
        popupList.value?.show()
    }
    const queryDone = (list: IStore[]) => {
        storeList.value = list
        radioValue.value = list[0].ID
        changeDone()
    }
    /**
     * 点击确定
     */
    const changeDone = () => {
        emits('update:modelValue', radioValue.value)
    }
</script>