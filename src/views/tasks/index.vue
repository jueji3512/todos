<template>
  <div class="w-full flex-1 flex justify-center bg-gray-200">
    <div class="w-full px-8 py-4">
      <main class="h-full rounded-xl">
        <task-table />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskTable from '@/views/tasks/task-table/index.vue'
</script>

<style scoped></style>
