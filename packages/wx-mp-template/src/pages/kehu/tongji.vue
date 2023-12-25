<template>
    <div class="margin padding bg-white radius text-center">
        <div class="flex">
            <div class="flex-sub  solid-right">
                <div>销售开单总额</div>
                <div class="text-xl text-green padding-tb-xs">¥5000</div>
            </div>
            <div class="flex-sub">
                <div>销售退单总额</div>
                <div class="text-xl text-cyan padding-tb-xs">¥1140</div>
            </div>
        </div>
        <div class="flex solid-top ">
            <div class="flex-sub  solid-right padding-top-sm">
                <div>信用额度</div>
                <div class="text-xl text-green padding-tb-xs ">¥98200</div>
            </div>
            <div class="flex-sub padding-top-sm">
                <div>可用额度</div>
                <div class="text-xl text-cyan padding-tb-xs">¥1140</div>
            </div>
        </div>
        <div class="flex solid-top ">
            <div class="flex-sub  solid-right padding-top-sm">
                <div>指定日期回款金额</div>
                <div class="text-xl text-green padding-top-xs ">¥98200</div>
            </div>
            <div class="flex-sub padding-top-sm">
                <div>待回款金额</div>
                <div class="text-xl text-cyan padding-top-xs">¥1140</div>
            </div>
        </div>
    </div>  
    
    <div class="bg-white radius margin">
        <div style="width: 100%; height: 600rpx;">
            <ff-canvas :on-init="onInitChart" />
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
const onInitChart = function (F2, config) {
    const chart = new F2.Chart(config);
    const data = [
        { value: 263, city: '进货统计', date: '2011-10-01' },
        { value: 62, city: '进货统计', date: '2011-10-02' },
        { value: 372, city: '进货统计', date: '2011-10-03' },
        { value: 458, city: '进货统计', date: '2011-10-04' },
        { value: 259, city: '进货统计', date: '2011-10-05' },
        { value: 167, city: '进货统计', date: '2011-10-06' },
        { value: 553, city: '进货统计', date: '2011-10-07' },
        { value: 251, city: '进货统计', date: '2011-10-08' },
        { value: 169, city: '进货统计', date: '2011-10-09' },
    ];
    chart.source(data, {
        date: {
        range: [0, 1],
        type: 'timeCat',
        mask: 'MM-DD'
        },
        value: {
        max: 300,
        tickCount: 4
        }
    });
    chart.area().position('date*value').color('city').adjust('stack');
    chart.line().position('date*value').color('city').adjust('stack');
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
}
</script>