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
    import { ref, onMounted, computed } from 'vue'

    interface IProps {
        queryFunc<T>(params?: any): Promise<T>
        title: string
        label: string // 列表中标题字段
        value?: string // 列表中取值字段
        modelValue: string
        params?: any
    }
   
    const props = defineProps<IProps>()
    const emits = defineEmits(['update:modelValue'])
    const dataList = ref<any[]>([])
    const columns = ref<string[]>([])
    const show = ref(false)
    const changeIndex = ref(0)
    const valueField = computed(() => props.value || 'ID')
    // 计算当前选中项的值
    const cellValue = computed(() => {
        const item = dataList.value.find(item => item[valueField.value] === props.modelValue)
        if (item) {
            return item[props.label]
        }
        return ''
    })

    onMounted(() => {
        props.queryFunc && props.queryFunc<any>({
            ...props.params
        }).then(res => {
            if (res.list) {
                dataList.value = res.list
                init()
            } else if (res && res.length > 0) {
                dataList.value = res
                init()
            }
        })
    })
    const init = () => {
        dataList.value.forEach(item => {
            if (item[props.label]) {
                columns.value.push(item[props.label])
            }
        })
        // 初始化设置默认值
        onConfirm()
    }
    const showPopup = () => {
        show.value = true
    }
    const onCancel = () => {
        show.value = false
    }
    const onConfirm = () => {
        emits('update:modelValue', dataList.value[changeIndex.value][valueField.value])
        onCancel()
    }
    const onChange = (e: { detail: { index: number}}) => {
        changeIndex.value = e.detail.index
    }
</script>