<template>
    <div class="bg-white radius margin padding-sm flex">
        <van-image 
            radius="4"
            width="100"
            height="80"
            src="https://img2.baidu.com/it/u=546566168,2604437093&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=357"
            fit="cover" ></van-image>
        <div class="padding-left-sm">
            <div class="text-black text-bold">城东老鲁轮胎店(8909012)</div>
            <div class="margin-top-sm">
                <van-tag type="primary">重要客户</van-tag>&nbsp;
                <van-tag type="success">商机客户</van-tag>&nbsp;
                <van-tag type="warning">已拜访</van-tag>
            </div>
            <div class="text-gray text-sm margin-top-xs">
                跟进状态：已签约
            </div>
        </div>
    </div>
    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>授信管理</div>
            <div><van-icon name="setting" /></div>
        </div>
        <div class="flex text-center padding-tb-sm margin-top-sm">
            <div class="flex-sub">
                <div class="text-xl text-bold text-green">¥10,000</div>
                <div class="text-sm margin-top-xs">授信额度</div>
            </div>
            <div class="flex-sub">
                <div class="text-xl text-bold text-red">¥8,000</div>
                <div class="text-sm margin-top-xs">已使用</div>
            </div>
            <div class="flex-sub">
                <div class="text-xl text-bold text-orange">¥2,000</div>
                <div class="text-sm margin-top-xs">剩余额度</div>
            </div>
        </div>
    </div>
    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>客户联系人</div>
            <div><van-icon name="setting" /></div>
        </div>
        <div class="flex text-center padding-tb-sm margin-top-sm">
            <van-image
					round
					width="50"
					height="50"
					fit="cover" 
					src="https://img1.baidu.com/it/u=1097077603,238359071&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1698858000&t=6a7eff8656d1876243333abc384fcca2"/>
            <div class="margin-left text-left">
                <div>姓名：张小柔</div>
                <div>职位：老板娘</div>
                <div>电话：13900912321</div>
            </div>
        </div>
    </div>
    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>收货信息</div>
            <div><van-icon name="setting" /></div>
        </div>
        <div class=" padding-tb-sm margin-top-sm">
            <div>收货地址：四川省成都市武侯区交子大道109号</div>
            <div>刘依贵&nbsp;13809381923</div>
        </div>
    </div>
    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>开票信息</div>
            <div><van-icon name="setting" /></div>
        </div>
        <div class=" padding-tb-sm margin-top-sm">
            <div class="text-black text-bold">四川路易投资管理有限公司</div>
            <div class="margin-top-xs">税号：9151 0122 5589 7679 0Q</div>
        </div>
    </div>

    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>拜访记录</div>
            <div><van-icon name="arrow" /></div>
        </div>
        <div class="margin-top-sm">
            <div><span class="text-gray">拜访人员：</span>赵得柱(业务员)</div>
            <div>
                <span class="text-gray">拜访时间：</span>2023-11-21
            </div>
            <div>
                <span class="text-gray">拜访记录：</span>商家比较忙，没有空理人
            </div>
        </div>
    </div>
    <div class="bg-white radius margin padding-sm">
        <div class="flex justify-between align-center solid-bottom padding-bottom-sm">
            <div>客户问题</div>
            <div><van-icon name="arrow" /></div>
        </div>
        <div class="margin-top-sm">
            <div><span class="text-gray">问题内容：</span>下单无法进行微信支付</div>
            <div>
                <span class="text-gray">提出时间：</span>2023-11-21 16:55
            </div>
            <div>
                <span class="text-gray">问题状态：</span><van-tag round type="warning">待处理</van-tag>
            </div>
        </div>
    </div>
    <div class="padding-tb-xl"></div>

    <van-tabbar @change="onChange">
        <van-tabbar-item icon="phone">联系客户</van-tabbar-item>
        <van-tabbar-item icon="location">地图导航</van-tabbar-item>
        <van-tabbar-item icon="cash-back-record">销售统计</van-tabbar-item>
        <van-tabbar-item icon="todo-list">客户往来</van-tabbar-item>
    </van-tabbar>
</template>
<script setup lang="ts">
    const onChange = (val: { detail: number }) => {
        console.log('==> ', val)
        if (val.detail == 2) {
            uni.navigateTo({ url: '/pages/kehu/tongji' })
        } else if(val.detail == 3) {
            uni.navigateTo({ url: '/pages/kehu/wanglai' })
        }
    }
</script>