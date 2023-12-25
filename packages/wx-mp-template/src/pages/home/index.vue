<template>
	<head-bar></head-bar>
	<cn-bg-filter></cn-bg-filter>
	<div class="padding-lr-sm pr padding-bottom">
		<cn-layout>
			<div slot="left">
				<van-image
					round
					width="40"
					height="40"
					fit="cover" 
					src="https://img1.baidu.com/it/u=1097077603,238359071&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1698858000&t=6a7eff8656d1876243333abc384fcca2"/>
			</div>
			<div slot="top" class="text-black text-bold margin-left-sm">Hello, 王也</div>
			<div slot="bottom" class="text-sm text-grey margin-left-sm">欢迎使用路易通ERP管理系统</div>
		</cn-layout>
		<div class="margin-top-sm padding-tb-sm bg-filter-white text-gray text-center radius">
			<van-icon name="search" /><text>货品名称、货品编号、订单号</text>
		</div>
		<div class="flex justify-between align-center">
			<simple-bar></simple-bar>
			<van-icon name="apps-o" color="#666666" size="20" />
		</div>
		<div class="flex">
			<div slot="left" class="bg-filter-white radius flex-sub flex flex-direction justify-between">
				<div class=" flex align-center justify-center flex-sub">
					<cn-layout>
						<div  slot="left">
							<image src="@/static/img/dingdan.png" class="block" style="width: 110rpx;height:110rpx;"/>
						</div>
						<div slot="top" class="padding-left-xs">
							<div class="text-sm text-gray">本周累计销售额</div>
						</div>
						<div slot="bottom" class="padding-left-xs">
							<div class="text-black text-bold"><text class="text-sm">¥</text><text class="text-xxl">12,310</text></div>
						</div>
					</cn-layout>
				</div>
				<div class="flex bg-filter-white padding-sm align-center radius">
					<div class="text-sm padding-left-sm">较上周</div>
					<div class="text-red text-lg text-bld flex-sub text-center">+11.5%</div>
				</div>
			</div>
			<div class="flex-sub">
				<div slot="top" class="bg-filter-white radius padding-sm margin-left-sm">
					<cn-layout>
						<div  slot="left">
							<image src="@/static/img/chengjiao.png" class="block" style="width: 80rpx;height:80rpx;"/>
						</div>
						<div slot="top" class="padding-left-xs">
							<div class="text-black text-bold"><text class="text-lg">27</text><text class="text-sm">单</text></div>
						</div>
						<div slot="bottom" class="padding-left-xs">
							<div class="text-sm text-gray">本周开单数量</div>
						</div>
					</cn-layout>
				</div>
				<div slot="bottom" class="bg-filter-white radius padding-sm margin-top-sm margin-left-sm">
					<cn-layout>
						<div  slot="left">
							<image src="@/static/img/luntai.png" class="block" style="width: 80rpx;height:80rpx;"/>
						</div>
						<div slot="top" class="padding-left-xs">
							<div class="text-black text-bold"><text class="text-lg">113</text><text class="text-sm">条</text></div>
						</div>
						<div slot="bottom" class="padding-left-xs">
							<div class="text-sm text-gray">本周轮胎销量</div>
						</div>
					</cn-layout>
				</div>
			</div>
		</div>
		<div class=" margin-top">
			<div class="bg-filter-white radius">
				<van-grid>
					<van-grid-item  use-slot 
						link-type="navigateTo"
   					 	url="/pages/caigou/create">
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/caigou-kd.png"
						/>
						<div class="text-sm text-gray margin-top-xs">采购开单</div>
					</van-grid-item>
					<van-grid-item  use-slot 
						link-type="navigateTo"
   					 	url="/pages/caigou/list">
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/caigou-dd.png"
						/>
						<div class="text-sm text-gray margin-top-xs">采购订单</div>
					</van-grid-item>
					<van-grid-item  
						link-type="navigateTo"
						url="/pages/xiaoshou/create"
						use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/xskaidan.png"
						/>
						<div class="text-sm text-gray margin-top-xs">销售开单</div>
					</van-grid-item>
					<van-grid-item  
						link-type="navigateTo"
						url="/pages/xiaoshou/list" use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/xskaidan.png"
						/>
						<div class="text-sm text-gray margin-top-xs">销售订单</div>
					</van-grid-item>
					<van-grid-item  use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/xiaoshou-bb.png"
						/>
						<div class="text-sm text-gray margin-top-xs">销售报表</div>
					</van-grid-item>
					<van-grid-item  use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/kehu-bf.png"
						/>
						<div class="text-sm text-gray margin-top-xs">客户拜访</div>
					</van-grid-item>
					<van-grid-item 
						link-type="navigateTo"
   					 	url="/pages/chuku/create"
					 	use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/chuku.png"
						/>
						<div class="text-sm text-gray margin-top-xs">出库开单</div>
					</van-grid-item>
					<van-grid-item 
						link-type="navigateTo"
   					 	url="/pages/pandian/list"
						 use-slot>
						<image
							style="width: 52rpx; height: 52rpx;"
							src="@/static/img/pandian.png"
						/>
						<div class="text-sm text-gray margin-top-xs">盘点单</div>
					</van-grid-item>
				</van-grid>
			</div>
		</div>
		<div class="bg-filter-white radius margin-top">
			<div class="f2-chart ">
				<ff-canvas :on-init="onInitChart" />
			</div>
		</div>
		<div class="bg-white radius margin-top">
			<div class="padding-sm text-bold text-sm">产品销售排行榜</div>
			<van-collapse accordion :value="collapseVal" @change="collapseChange">
				<van-collapse-item name="1">
					<view slot="title" class="flex align-center">
						<span class="sort-icon one"></span>
						米其林轮胎 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="2">
					<view slot="title" class="flex align-center">
						<span class="sort-icon two"></span>
						佳通轮胎 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="3">
					<view slot="title" class="flex align-center">
						<span class="sort-icon three"></span>
						朝阳轮胎 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="4">
					<view slot="title">
						<span class="sort-icon other flex align-center">4</span>
						普利司通轮胎 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="5">
					<view slot="title">
						<span class="sort-icon other flex align-center">5</span>
						固特异轮胎 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
			</van-collapse>
		</div>
		<div class="bg-white radius margin-top">
			<div class="padding-sm text-bold text-sm">销售人员排行榜</div>
			<van-collapse accordion :value="collapseVal" @change="collapseChange">
				<van-collapse-item name="6">
					<view slot="title" class="flex align-center">
						<span class="sort-icon one"></span>
						王加以 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.米其林（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.佳通（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.朝阳（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.马牌（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.普利司通（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.京东轮胎（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.固特异（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.普利司（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.马牌（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="7">
					<view slot="title" class="flex align-center">
						<span class="sort-icon two"></span>
						李二娃 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="8">
					<view slot="title" class="flex align-center">
						<span class="sort-icon three"></span>
						张三妹 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="9">
					<view slot="title">
						<span class="sort-icon other flex align-center">4</span>
						刘四强 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
				<van-collapse-item name="10">
					<view slot="title">
						<span class="sort-icon other flex align-center">5</span>
						王武 <span class="text-sm">（销售<span class="text-red">237</span>条）</span>
					</view>
					<div class="bg-gray text-sm padding-xs radius">
						<van-row>
							<van-col span="12">1.王加一（<span class="text-red">237</span>条）</van-col>
							<van-col span="12">2.李奇霖（<span class="text-red">201</span>条）</van-col>
							<van-col span="12">3.李嘉琦（<span class="text-red">117</span>条）</van-col>
							<van-col span="12">4.张衣粉（<span class="text-red">107</span>条）</van-col>
							<van-col span="12">5.固特异轮（<span class="text-red">97</span>条）</van-col>
							<van-col span="12">6.薛之谦（<span class="text-red">77</span>条）</van-col>
							<van-col span="12">7.张琦（<span class="text-red">53</span>条）</van-col>
							<van-col span="12">8.罗三票（<span class="text-red">52</span>条）</van-col>
							<van-col span="12">9.王二（<span class="text-red">49</span>条）</van-col>
							<van-col span="12">10.罗琦（<span class="text-red">31</span>条）</van-col>
						</van-row>
					</div>
				</van-collapse-item>
			</van-collapse>
		</div>
	</div>
	<!-- <van-tabbar :active="active" @change="onChange">
		<van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
		<van-tabbar-item name="msg" icon="chat-o">消息</van-tabbar-item>
		<van-tabbar-item name="work" icon="cluster-o">工作台</van-tabbar-item>
		<van-tabbar-item name="my" icon="manager-o">我的</van-tabbar-item>
	</van-tabbar> -->
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import CnBgFilter from '@cnnar/mp-components/src/bg-filter/index.vue'
	import CnLayout from '@cnnar/mp-components/src/layout/index.vue'
	import SimpleBar from '@cnnar/mp-components/src/simple-bar/index.vue'
	import HeadBar from '@/components/head-bar/index.vue'
	// const active = ref('home')
	// const onChange = (e: { detail: String}) =>{
	// 	uni.redirectTo({ url: '/pages/' + e.detail + '/index'})
	// }
	// @ts-ignore
	const onInitChart = function (F2, config) {
		const chart = new F2.Chart(config);
		const data = [
			{ value: 263, city: '销售趋势', date: '2011-10-01' },
			{ value: 62, city: '销售趋势', date: '2011-10-02' },
			{ value: 372, city: '销售趋势', date: '2011-10-03' },
			{ value: 458, city: '销售趋势', date: '2011-10-04' },
			{ value: 259, city: '销售趋势', date: '2011-10-05' },
			{ value: 167, city: '销售趋势', date: '2011-10-06' },
			{ value: 553, city: '销售趋势', date: '2011-10-07' },
			{ value: 251, city: '销售趋势', date: '2011-10-08' },
			{ value: 169, city: '销售趋势', date: '2011-10-09' },
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
	const collapseVal = ref()
	const collapseChange = (val: { detail: string }) => {
		console.log('val', val)
		collapseVal.value = val.detail
	}
</script>
<style>
.f2-chart  {
	width: 100%;
	height: 500rpx;
}
</style>