<template>
    <div class="cn-bg-filter">
        <div class="cn-bg-filter--item"></div>
        <div class="cn-bg-filter--item"></div>
    </div>
</template>
<script setup lang="ts">
    /**
     * 页面底色的样式，采用高斯模糊
     */
</script>
<style scoped>    
    .cn-bg-filter {
        position: fixed;
        width: 100%;
        height: 400rpx;
        border-radius: 50%;
        z-index: -100px;
        /* overflow-x: hidden; */
    }
    .cn-bg-filter--item {
        position: absolute;
        width: 50%;
        height: 100%;
        background-color: #01D88B;
        /* 微信真机 blur>= 100px就不显示了 */
        filter: blur(140rpx);
    }
    .cn-bg-filter .cn-bg-filter--item:first-child {
        top: -10rpx;
        left: -10%;
    }
    .cn-bg-filter .cn-bg-filter--item:last-child {
        top: -30%;
        right: -25%;
    }
</style>