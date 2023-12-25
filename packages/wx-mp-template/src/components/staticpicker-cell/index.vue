<template>

    <van-cell :title="title" is-link :value="cellValue" @click="showPopup"/>
    <van-popup 
        :show="show" 
        position="bottom"  
        custom-style="width: 100%;" >
        <van-picker :columns="columns" :show-toolbar="true" :default-index="changeIndex"
            @cancel="onCancel"
            @confirm="onConfirm" 
            @change="onChange"
            v-if="columns.length > 0">
        </van-picker>

    </van-popup>
</template>
<script setup lang="ts">
    import { ref , computed} from 'vue'
    interface  IListItem {
        label: string,
        value: string
    }
    interface IProps {
        title: string
        modelValue: string,
        list: IListItem[]
    }
    const props = defineProps<IProps>()
    const changeIndex = ref(0)
    const emits = defineEmits(['update:modelValue'])
    // 计算当前选中项的值
    const cellValue = computed(() => {
        const item = props.list.find(item => item.value=== props.modelValue)
        if (item) {
            return item.label
        }
        return ''
    })
    const columns = computed(() => {
        return props.list.map(item => {
            return  item.label
        })
    })

    const show = ref(false)
    const showPopup = () => {
        show.value = true
    }
    const onCancel = () => {
        show.value = false
    }
    const onConfirm = () => {
        emits('update:modelValue', props.list[changeIndex.value].value)
        onCancel()
    }
    const onChange = (e: { detail: { index: number}}) => {
        changeIndex.value = e.detail.index
    }
</script>