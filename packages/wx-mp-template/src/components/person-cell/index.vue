<template>
    <van-cell :title="title" :value="modelValue" is-link @click="showPopup"/>
    <van-popup 
        :show="show" 
        position="bottom"  
        custom-style="width: 100%;" 
        @confirm="onClose" 
        @close="onClose">
        <van-picker :columns="columns" :show-toolbar="true" 
            @cancel="onClose"
            @confirm="onClose" 
            @change="onChange" />
    </van-popup>
    
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    interface IProps {
        title: string
        modelValue: string
    }
    defineProps<IProps>()
    const show = ref(false)
    const citys = {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    }
    const columns = computed(() =>[
      {
        values: Object.keys(citys),
        className: 'column1',
      },
      {
        values: citys['浙江'],
        className: 'column2',
        defaultIndex: 2,
      },
    ])
    const showPopup = () => {
        show.value = true
    }
    const onClose = () => {
        show.value = false
    }
    const onChange = (val: any) => {
        console.log('change:', val)
    }
</script>