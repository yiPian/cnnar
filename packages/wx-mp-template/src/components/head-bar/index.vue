<template>
	<div :style="barStyle"></div>
</template>
<script setup lang="ts">
    import { useSystemInfo } from "@/hooks/system"
    const systemInfo = useSystemInfo()
    console.log('systemInfo', systemInfo)
    const barStyle = {
        height: (systemInfo?.customTop + 'px')
    }
</script>