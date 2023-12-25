<template>
    <view class="nav padding-tb-xs text-grey">
        <view class="cu-item" :class="0 == tabCur ? 'text-gradual-green text-bold cur' : 'opacity-6 '"  @tap="tabSelect(0)">本月</view>
        <view class="cu-item" :class="1 == tabCur ? 'text-gradual-green text-bold cur' : 'opacity-6 '"  @tap="tabSelect(1)">本周</view>
        <view class="cu-item" :class="2 == tabCur ? 'text-gradual-green text-bold cur' : 'opacity-6 '"  @tap="tabSelect(2)">今天</view>
    </view>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    const tabCur = ref(1)
    const tabSelect = function (index: number) {
		tabCur.value = index
    }
</script>