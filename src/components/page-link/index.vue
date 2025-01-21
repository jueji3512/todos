<template>
  <a class="page-link" @click="handleClick">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import router from '@/routes';

name: 'page-link'

const { path, query } = defineProps<{
  path: string;
  query?: Record<string, any>;
}>();

function handleClick() {
  router.push({ path, query });
}
</script>

<style lang="scss" scoped>
.page-link {
  color: var(--color-link-default);
  &:hover {
    color: var(--color-link-hover);
  }
}
</style>