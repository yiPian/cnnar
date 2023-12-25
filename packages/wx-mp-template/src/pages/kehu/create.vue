<template>
    <div class="margin-lr radius">
        <van-steps :steps="steps" :active="active" />
    </div>
    <div class="margin hidden bg-white radius">
        <van-cell-group>
            <van-cell title="客户类别"  is-link  value="终端门店" />
            <van-field
            label="客户名称"
                :border="true"
                value="乐山一路顺风汽修店"
            />
            <van-field
            label="客户简称"
                :border="true"
                value=""
            />
            <van-field
            label="客户属性"
                value=""
            />
        </van-cell-group>
    </div>
    <div class="margin hidden bg-white radius">
        <van-cell-group>
            <van-field label="营业执照" >
                <div slot="button" class="radius bg-gray text-center" style="width: 180rpx; height: 100rpx; line-height: 100rpx;">
                    <van-icon name="plus" />
                </div>
            </van-field>
            <van-field
            label="社会信用代码"
                :border="true"
                value=""
            />
            <van-field
            label="银行账号"
                :border="true"
                value=""
            />
            <van-field
            label="联系电话"
                value=""
            />
            <van-field
            label="详细地址"
                value=""
            />
            <van-field
            label="基本描述"
                value=""
            />
        </van-cell-group>
    </div>
    <div class="margin hidden bg-white radius">
        <van-cell-group>
            <van-field label="客户照片" >
                <div slot="button" class="radius bg-gray text-center" style="width: 180rpx; height: 100rpx; line-height: 100rpx;">
                    <van-icon name="plus" />
                </div>
            </van-field>
            </van-cell-group>
    </div>
        <div class="padding">
            <van-button type="primary" block >下一步</van-button>
        </div>
</template>
<script setup lang="ts">
    const active = 0
    const  steps = [
      {
        text: '基础信息'
      },
      {
        text: '职员档案'
      },
      {
        text: '服务信息'
      },
      {
        text: '添加完成'
      }
    ]
</script>