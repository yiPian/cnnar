<template>
    <van-popup 
        :show="show" 
        position="bottom"  
        custom-style="width: 100%; height: 95%;" 
        @close="onClose">
        <div class="search-input">
            <van-search v-model="searchValue" placeholder="输入关键字搜索" @search="doSearch"/>
        </div>

        <scroll-view :style="srcollHeight" scroll-y @scrolltolower="scrolltolower">
            <slot></slot>
            <div class="text-center padding-sm" v-if="isLoading">
                <van-loading></van-loading>
            </div>
            <template v-else>
                <van-empty description="暂无数据" v-if="dataList.length < 1" />
                <template v-else>
                    <div class="text-center padding-sm" v-if="page >= total">
                        <van-divider dashed contentPosition="center">到底了</van-divider>
                    </div>
                </template>
            </template>
        </scroll-view>
        <div class="padding-sm flex popup-footer">
            <div class="flex-sub">
                <van-button round block size="small" @click="onClose">取&nbsp;消</van-button>
            </div>
            <div class="flex-twice margin-left-sm">
                <van-button type="primary" round block size="small"  @click="changeDone">确认选择</van-button>
            </div>
        </div>
    </van-popup>
</template>
<script setup lang="ts">
    import { ref, computed, onMounted, getCurrentInstance, nextTick } from 'vue'
    import { useSelect } from '@/hooks/useSelect'
    import type { IListType } from '@/api/http'
    const instance = getCurrentInstance()
    const isLoading = ref(false)
    const show = ref(false)
    const searchValue = ref('')
    const searchInputHeight = ref(54) //计算输入框高度
    const searchFooterHeight = ref(54) // 底部按钮的高度
    let page = 1
    let total = 0

    const dataList = ref<any[]>([])

    type PropsType = {
        queryFunc<T>(params: any): Promise<T>;
        params?: Object;
    }
    const props = defineProps<PropsType>()
    const emits = defineEmits(['queryDone', 'changeDone'])

    const srcollHeight = computed(() => {
        return {
            height: `calc(100% - ${searchInputHeight.value + searchFooterHeight.value}px)`
        }
    })
    const onShow = () => {
        show.value = true

        nextTick(() => {
            setTimeout(() => {
                useSelect('.search-input', instance).then((res) => {
                    if (res.height) {
                        searchInputHeight.value = res.height
                    }
                })
                useSelect('.popup-footer', instance).then((footer: UniApp.NodeInfo ) => {
                    if (footer.height) {
                        searchFooterHeight.value = footer.height
                    }
                })
            }, 500)
        })
    }
    const onClose = () => {
        show.value = false
    }
    const queryData = () => {
        isLoading.value = true
        props.queryFunc<IListType>({
            ...props.params,
            keyword: searchValue.value,
            page
        }).then(res => {
            total = res.total
            dataList.value = dataList.value.concat(res.list)
            emits('queryDone', dataList.value)
        }).finally(() => {
            isLoading.value = false
        })
    }

    onMounted (() => {
        queryData()
    })
     /**
     * 滚动加载
     */
     const scrolltolower = () => {
        if (page < total) {
            page++
            queryData()
        }
    }
    const changeDone = () => {
        emits('changeDone')
        onClose()
    }

    const doSearch = () => {
        page = 1
        dataList.value = []
        emits('queryDone', dataList.value)
        queryData()
    }

    defineExpose({
        show: onShow
    })
</script>