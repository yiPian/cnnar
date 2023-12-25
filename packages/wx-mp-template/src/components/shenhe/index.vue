<template>
    <div class="shenhe-status">
        <image
            style="width: 100%; height: 100%;"
            mode="aspectFit"
            :src="'../../static/img/dsh.png'"
            v-if="status == 1"
        />
        <image
            style="width: 100%; height: 100%;"
            mode="aspectFit"
            :src="'../../static/img/ysh.png'"
            v-if="status == 2"
        />
    </div>
</template>
<script setup lang="ts">
    defineProps({
        status: {
            type: Number,
            default: 1
        }
    })
</script>
<style>
    .shenhe-status {
        position: absolute;
        top: 0;
        right: 0;
        width: 140rpx;
        height: 140rpx;
        z-index: 1000;
        opacity: 0.4;
    }
</style>