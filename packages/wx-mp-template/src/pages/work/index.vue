<template>
	<head-bar></head-bar>
    <div class="margin-tb-sm margin-lr text-xl text-black text-bold">
        工作台
    </div>


    <div class="margin bg-white radius" v-for="(el, i) in workMenu" :key="i">
        <div class="padding-sm">
            {{ el.title }}
        </div>
        <van-grid>
            <van-grid-item  
                link-type="navigateTo"
                :url="'/pages/' + child.url"
                use-slot v-for="(child,j) in el.children" :key="j">
                <image
                    style="width: 52rpx; height: 52rpx;"
                    :src="'../../static/img/' + child.img + '.png'"
                />
                <div class="text-sm text-gray margin-top-xs">{{ child.title }}</div>
            </van-grid-item>
        </van-grid>
    </div>

    <div class="padding-tb-sm"></div>
</template>
<script setup lang="ts">
	import HeadBar from '@/components/head-bar/index.vue'

    const workMenu = [{
        title: '销售与采购',
        children: [{
            url: 'xiaoshou/kaidan',
            img: 'xskaidan',
            title: '销售开单'
        },{
            url: 'xiaoshou/dingdan',
            img: 'xsdingdan',
            title: '销售订单'
        },{
            url: 'xiaoshou/dingdan',
            img: 'xstuidan',
            title: '销售退单'
        }, {
            url: 'caigou/kaidan',
            img: 'caigou-kd',
            title: '采购开单'
        }, {
            url: 'caigou/dingdan',
            img: 'caigou-dd',
            title: '采购订单'
        }, {
            url: 'caigou/tuidan',
            img: 'caigou-td',
            title: '采购退单'
        }]
    }, {
        title: "仓储管理",
        children: [{
            url: 'ruku/kaidan?type=1',
            img: 'ruku-kd',
            title: '入库开单'
        }, {
            url: 'ruku/dai',
            img: 'dairuku',
            title: '待入库单'
        }, {
            url: 'ruku/kaidan',
            img: 'rukuhz',
            title: '入库单汇总'
        }, {
            url: 'ruku/kaidan',
            img: 'ruku',
            title: '入库单明细'
        }, {
            url: 'ruku/kaidan?type=2',
            img: 'chuku-add',
            title: '出库开单'
        }, {
            url: 'ruku/kaidan',
            img: 'chuku-dai',
            title: '待出库单'
        }, {
            url: 'ruku/kaidan',
            img: 'chuku-hz',
            title: '出库单汇总'
        }, {
            url: 'ruku/kaidan',
            img: 'chuku-list',
            title: '出库单明细'
        }, {
            url: 'store/zuzhuang',
            img: 'zuzhuang',
            title: '组装开单'
        }, {
            url: 'store/caixie',
            img: 'caixie',
            title: '拆卸开单'
        }, {
            url: 'store/baosun',
            img: 'baosun',
            title: '报损开单'
        }, {
            url: 'store/diaobo',
            img: 'diaobo',
            title: '仓库调拨单'
        }, {
            url: 'store/pandian',
            img: 'pandian',
            title: '数量盘点单'
        }, {
            url: 'store/tiaojia',
            img: 'diaojia',
            title: '存货调价单'
        }, {
            url: 'product/index',
            img: 'hpcx',
            title: '货品查询'
        }]
    }, {
        title: '账面库存',
        children: [{
            url: 'caigou/tuidan',
            img: 'sskc',
            title: '实时库存数'
        },{
            url: 'caigou/tuidan',
            img: 'hzkc',
            title: '库存汇总数'
        },{
            url: 'caigou/tuidan',
            img: 'mxkc',
            title: '库存明细数'
        },{
            url: 'caigou/tuidan',
            img: 'cykc',
            title: '库存差异数'
        }]
    }, {
        title: '合作关系',
        children: [{
            url: 'caigou/tuidan',
            img: 'kehu-list',
            title: '客户管理'
        }, {
            url: 'caigou/tuidan',
            img: 'kehu-bf',
            title: '拜访管理'
        }, {
            url: 'caigou/tuidan',
            img: 'gys',
            title: '供应商管理'
        }, {
            url: 'caigou/tuidan',
            img: 'wulius',
            title: '物流商家'
        }]
    }, {
        title: '三包管理',
        children: [{
            url: 'sanbao/dengji',
            img: 'sbdj',
            title: '三包登记'
        },{
            url: 'sanbao/dengji?type=2',
            img: 'sbdjd',
            title: '三包待鉴定'
        },{
            url: 'sanbao/jiujian',
            img: 'jjdj',
            title: '旧件登记'
        }]
    }]
</script>