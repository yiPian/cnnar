<template>
    <div class="margin-lr bg-white radius padding">
        <div class="solid-bottom padding-bottom text-center flex align-center justify-between">
            <div class="text-center">
                <span class="text-gray">查询区间&nbsp;</span>
                <span class="text-black">2023-09-01 至 2023-11-31</span>
            </div>
            <div><van-icon name="arrow" /></div>
        </div>
        <div class="flex text-center margin-top">
            <div class="flex-sub">
                <div class="text-xl text-green">2000</div>
                <div>期初余额</div>
            </div>
            <div class="flex-sub">
                <div class="text-xl text-cyan">4100</div>
                <div>期末余额</div>
            </div>
        </div>
    </div>
    <div class="bg-white margin padding radius" v-for="el in 3" :key="el">
        <div class="flex">
            <div class="flex-sub">
                <div class="text-sm text-gray">销售金额</div>
                <div class="text-black text-lg">1200</div>
            </div>
            <div class="flex-sub">
                <div class="text-sm text-gray">收款金额</div>
                <div class="text-black text-lg">1000</div>
            </div>
            <div class="flex-sub">
                <div class="text-sm text-gray">期末金额</div>
                <div class="text-black text-lg">200</div>
            </div>
        </div>
        <div class="margin-top-sm">
            <div class="text-sm text-gray">业务说明</div>
            <div>应收款发生额 305-SS-2023-09-14</div>
        </div>
        <div class="solid-top padding-top margin-top-sm flex align-center justify-between">
            <div>0916报单，日喀则分仓出货，拉萨不出货</div>
            <div><van-icon name="arrow" /></div>
        </div>
    </div>
    <div class="bg-white margin radius padding flex align-end">
        <div class="flex-sub">合计</div>
        <div class="flex-sub text-center">
            <div class="text-sm text-gray">销售金额</div>
            <div class="text-black text-lg">2400</div>
        </div>
        <div class="flex-sub text-center">
            <div class="text-sm text-gray">收款金额</div>
            <div class="text-black text-lg">2000</div>
        </div>
        <div class="flex-sub text-center">
            <div class="text-sm text-gray">期末金额</div>
            <div class="text-black text-lg">800</div>
        </div>
    </div>
</template>