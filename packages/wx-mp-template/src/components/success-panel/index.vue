<template>
    <van-transition :show="isShow">
        <div class="success-panel">
            <div class="padding-top-lg">
                <div class="text-center padding-top-lg">
                    <van-icon name="success" color="#07c160" size="100" />
                    <div class="text-green margin-top-sm">提交成功</div>
                </div>
                <div class="success-panel__btns">
                    <van-button plain type="primary" size="small" block round @click="goInfo">
                        查看单据详情
                    </van-button>
                    <div  class="margin-top">
                        <van-button plain type="info" size="small" block round @click="goHome">
                            返回
                        </van-button>
                    </div>
                </div>
            </div>
        </div>
    </van-transition>
</template>
<script setup lang="ts">
    import { ref } from 'vue'

    const isShow = ref(false)
    const props = defineProps({
        id: {
            type: Number,
            default: 0
        },
        infoPath: {
            type: String
        }
    })

    const goInfo = () => {
        uni.redirectTo({
            url: '/pages/' + props.infoPath + '?id=' + props.id
        })
    }
    const goHome = () => {
        uni.navigateBack({
            delta: 1
        })
    }   

    defineExpose({
        show: () => {
            isShow.value = true
        }
    })
</script>
<style>
.success-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: #fff;
    z-index: 1000;
}
.success-panel__btns {
    margin-top: 100rpx;
}
</style>