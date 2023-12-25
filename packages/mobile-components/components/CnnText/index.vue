<template>
    <component :is="tag" :style="styleProps" class="cnn-text-component">
        {{ text }}
    </component>
</template>
<script setup lang="ts">
    import useComponentCommon from '../../hooks/useComponentCommon'
    import { transformTextdefaultProps, textStylePropNames } from '../defaultProps'
    import type { TextComponentProps } from '../defaultProps'
    console.log('transformTextdefaultProps:', transformTextdefaultProps)
    interface propsType extends Partial<TextComponentProps> {
        tag?: string
    }
    //  withDefaults 编译器宏给 props 提供默认值的方式
    const props = withDefaults(defineProps<propsType>(), {
        tag: 'div',
    })
    // const props = defaultProps()
    const {styleProps} = useComponentCommon(props, textStylePropNames)
</script>
<style scoped> 
    .cnn-text-component {
        position: relative!important;
    }
</style>