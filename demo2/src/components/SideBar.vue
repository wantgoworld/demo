<template>
  <n-card class="shadow-md">
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
  </n-card>
</template>

<script setup lang="ts">
import { MenuOption } from 'naive-ui'

const menuOptions = [
  {
    label: '我的课程',
    key: 'class',
  },
  {
    label: '账户设置',
    key: 'account',
  },
  {
    label: '订单信息',
    key: 'order',
  },
  {
    label: 'Tokens',
    key: 'token',
  },
]
function handleUpdateValue(key: string, item: MenuOption) {
  console.info('[onUpdate:value]: ' + JSON.stringify(key))
  console.info('[onUpdate:value]: ' + JSON.stringify(item))
}
</script>
