<template>
    <van-cell :title="title" :value="modelValue" is-link @click="showPopup"/>
    <van-popup 
        :show="show" 
        position="bottom"  
        custom-style="width: 100%;" 
        @confirm="onClose" 
        @close="onClose">
        <van-datetime-picker
            :type="type"
            :value="currentDate"
            @confirm="onConfirm"
            @cancel="onClose"
        />
    </van-popup>
    
</template>
<script setup lang="ts">
    /** 单元格中日期的选择 */
    import { ref, onMounted, computed } from 'vue'
    import { useFormatDate } from '@/hooks/useDate'
    
    interface Props {
        type?: string
        title: string
        modelValue: string
    }
    interface Emits {
        (e: 'update:modelValue', value: string): void
    }
    const props = defineProps<Props>()
    const emit = defineEmits<Emits>()
    const show = ref(false)
    const currentDate = ref()
    const type = computed(() => {
        return props.type || 'date'
    })
    onMounted (() => {
        currentDate.value = new Date().getTime()
        emit('update:modelValue', useFormatDate(currentDate.value))
    })
    const showPopup = () => {
        show.value = true
    }
    const onClose = () => {
        show.value = false
    }
    const onConfirm = (event: { detail: number }) => {
        currentDate.value = event.detail
        emit('update:modelValue', useFormatDate(currentDate.value))
        onClose()
    }
</script>