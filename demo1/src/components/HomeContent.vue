<template>
  <n-card class="shadow-md" :segmented="{ content: 'soft' }">
    <template #header>
      <h2 class="font-bold">Tokens</h2>
    </template>

    <n-alert type="success" title="Plus专业版">
      <div class="text-gray-5 text-xs">Token使用</div>
      <div class="font-semibold text-2xl flex items-center mt-2">
        <n-icon size="24">
          <add-to-drive-outlined />
        </n-icon>
        已使用1,982,041/总额100,000,000
      </div>
      <template #icon>
        <n-icon>
          <cloud-done-twotone />
        </n-icon>
      </template>
    </n-alert>
    <n-table class="mt-2">
      <thead>
        <tr>
          <th>方案</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><n-tag type="success" class="text-sm font-semibold"> Plus 专业版 </n-tag></td>
          <td class="text-sm">仅用于教学用途,不支持大量商用和其他非教学用途</td>
          <td class="text-sm !text-#569DC1 font-semibold">续费100w tokens</td>
        </tr>
      </tbody>
    </n-table>
    <n-alert title="同学你好:" class="mt-2">
      <template #icon>
        <n-icon>
          <cloud-done-twotone />
        </n-icon>
      </template>
      <ol>
        <li class="mt-2 text-sm">1) 消耗tokens数量在1,000,000以内,可以继续使用教学环境;</li>
        <li class="mt-2 text-sm">
          2)
          在2023年5月10日24时之前,如果消耗tokens超过1,000,000,同意按照1,000,000计算,无需补交费用,后续继续使用则需要开始充值;
        </li>
        <li class="mt-2 text-sm">3) 同学优惠充值价格为: 20元/1,000,000 tokens</li>
        <li class="mt-2 text-sm">4) 请注意,已充值费用,不接受退费和转赠,请避免单次大额充值;</li>
        <li class="mt-2 text-sm">5) 充值完成后的10分钟内, 对应的tokens将到帐, 祝你使用愉快!</li>
      </ol>
    </n-alert>
  </n-card>
</template>

<script setup lang="ts">
import { AddToDriveOutlined, CloudDoneTwotone } from '@vicons/material'
</script>
<!-- <style scoped lang="scss">
ol {
  li {
    @apply important:mt-5;
  }
}
</style> -->
