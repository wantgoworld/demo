<template>
  <n-layout>
    <n-layout-header>
      <page-header />
    </n-layout-header>
    <n-layout has-sider :style="{ '--n-color': 'red' }">
      <n-layout-sider content-style="padding: 8px 24px;"> <side-bar /> </n-layout-sider>
      <n-layout-content content-style="padding: 8px 24px;"><home-content /> </n-layout-content>
    </n-layout>
    <n-layout-footer>
      <page-footer />
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.n-layout {
  .n-layout-sider {
    background: #fcfcfc;
  }

  .n-layout-content {
    background: #fcfcfc;
  }

  .n-layout-footer {
    @apply bg-#f2f2f2;
  }
}

// .n-layout-sider {

// }

// .n-layout-content {
//   background: rgb(128 128 128 / 40%);
// }
</style>
