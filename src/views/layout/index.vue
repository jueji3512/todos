<template>
  <div class="flex flex-col h-full">
    <Nav />
    <div class="flex flex-col h-full">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Nav from '@/views/layout/nav/index.vue'
</script>

<style scoped lang="scss">

</style>