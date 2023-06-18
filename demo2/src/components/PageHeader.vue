<template>
  <header class="w-full flex items-center justify-between shadow-md mb-2 px-8">
    <h1 class="flex text-3xl m-4"><img src="/logo.jpg" w="h-9" /> 上课网</h1>
    <div class="flex items-center">
      <div class="border border-dark px-2 rounded-sm flex items-center mr-2">
        <n-icon :size="16" class="mr-1">
          <SignalCellularAltFilled />
        </n-icon>
        <span class="text-xs"> ChatGPT</span>
      </div>
      <n-icon :size="24" class="mx-1">
        <add-reaction-twotone />
      </n-icon>
      <div class="text-sm">xxx@ChatGPT</div>
      <n-icon :size="24">
        <keyboard-arrow-down-round />
      </n-icon>
    </div>
  </header>
</template>

<script setup lang="ts">
import { AddReactionTwotone, KeyboardArrowDownRound, SignalCellularAltFilled } from '@vicons/material'
</script>
