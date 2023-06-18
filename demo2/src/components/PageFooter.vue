<template>
  <footer class="w-full fixed bottom-0 left-0 bg-#f1f1f1 py-4 px-8 text-xs">
    <div class="flex justify-between items-center mb-2">
      <ul class="flex items-center">
        <li class="mr-4">关于我们</li>
        <li class="mr-4">老师入住</li>
        <li>机构合作</li>
      </ul>
      <div>陕ICP备2023</div>
    </div>
    <div class="border-t pt-2">Copyright 2008~2022 ShanKe.chat All Right Reserved.</div>
    <div class="border-t pt-2">time is {{time}}</div>
  </footer>
  <div class="fixed bottom-8 right-8 p-2 shadow-md bg-white rounded text-xs flex-col flex items-center justify-center">
    <n-icon :size="22">
      <headset-mic-outlined />
    </n-icon>
    <span class="mt-1 text-xs">投诉举报</span>
  </div>
</template>
<script setup lang="ts">
import { HeadsetMicOutlined } from '@vicons/material'
import { onMounted, onUnmounted } from 'vue'
import http from '../request/http'
const data = {
  time: '',
}
onMounted(() => {
  http.get('/').then(res => {
    data.time = res.index
  })
})
</script>
