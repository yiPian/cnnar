<template>
    <van-sticky>
        <div class="flex bg-white align-center shadow-df">
            <div class="flex-sub">
                <van-search :value="value" placeholder="请输入搜索关键词" />
            </div>
            <div class="margin-right-sm" v-if="toCreate">
                <van-button icon="plus" plain size="small" type="primary" round @click="pageToCreate">新增</van-button>
            </div>
        </div>
    </van-sticky>
   
        <template v-if="isLoading">
            <!-- 加载处理 -->
            <template v-if="!isReady">
                <div class="margin-sm bg-white radius padding-tb-sm" v-for="el in 5" :key="el" >
                    <van-skeleton title row="3" />
                </div>
            </template>
            <div class="text-center padding-xs" v-else><van-loading /></div>
        </template>
        <template v-else>
            <van-empty description="暂无数据" v-if="isReady && dataList.length === 0" />
            <template v-else>
                <slot :data="dataList"></slot>
                <div class="padding-xs" v-if="isEnd">
                    <van-divider contentPosition="center" dashed>到底了</van-divider>
                </div>
            </template>
        </template>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { onReachBottom } from '@dcloudio/uni-app'
    import type { IListType } from '@/api/http'

    const value = ref('')
    const isReady = ref(false)
    const isLoading = ref(false)
    const isEnd = ref(false) // 标志，是否没有更多数据了
    const dataList = ref<any[]>([])
    let page = 1
    let total = 0

    type PropsType = {
        queryFunc<T>(params: any): Promise<T>;
        toCreate?: string; // 跳转到创建页面
        params?: Object;
    }
    const props = defineProps<PropsType>()
    const emit = defineEmits(['done'])

    onMounted(() => {
        init()
    })

    const queryData = function () {
        if (isLoading.value) {
            return
        }
        isLoading.value = true
        props.queryFunc && props.queryFunc<IListType>({ ...props.params, page: page }).then(res => {
            total = res.total
            dataList.value = dataList.value.concat(res.list)
            emit('done', res)
        }).finally(() => {
            isReady.value = true
            isLoading.value = false
            isEnd.value = page >= total
        })
    }
    const init = function () {
        isEnd.value = false
        page = 1
        total = 0
        queryData()
    }
    const filter = function () {
        isEnd.value = false
        dataList.value = []
        page = 1
        total = 0
        isReady.value = false
        queryData()
    }
    const loadMore = function () {
        if (isEnd.value) return
        page++
        queryData()
    }
    const removeItem = function (callback: Function) {
        const index = dataList.value.findIndex(item => callback(item))
        if (index >= 0) {
            dataList.value.splice(index, 1)
        }
    }
    /**
     * 更新某项的某个值
     */
    const setItemFieldValue = function ( field:string, value: any, callback: Function) {
        const index = dataList.value.findIndex(item => callback(item))
        if (index >= 0) {
            dataList.value[index][field] = value
        }
    }
    /**
     * 跳转到创建页面
     */
    const pageToCreate = () => {
        uni.navigateTo({
            url: '/pages/' + props.toCreate
        })
    }
    onReachBottom (() => {
        loadMore()
        console.log('揣度逻辑框架')
    })
    defineExpose({
        init,
        filter,
        loadMore,
        removeItem,
        setItemFieldValue
    })
</script>