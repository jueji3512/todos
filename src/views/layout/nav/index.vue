<template>
  <nav class="home-nav">
    <nav-left />
    <div class="home-nav-mid">
      <New />
    </div>
    <div class="home-nav-right">
      <a-input
        :placeholder="$t('placeholder.SEARCH_PLACEHOLDER')"
        class="mr-4"
      >
        <template #suffix>
          <SearchOutlined />
        </template>
      </a-input>
      <a-badge :count="9999" :offset="[-1, 3]" :numberStyle="{ fontSize: '.75rem', lineHeight: '1rem', height: '1rem', padding: '0 4px' }">
        <a-button shape="circle">
          <template #icon>
            <BellOutlined />
          </template>
        </a-button>
      </a-badge>
      <a-avatar size="default" class="flex-shrink-0 cursor-pointer">
        M
      </a-avatar>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import New from '@/components/new/index.vue'
import NavLeft from "@/views/layout/nav/nav-left/index.vue"
import { Button as AButton, Badge as ABadge, Avatar as AAvatar, Input as AInput } from 'ant-design-vue';
import { BellOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons-vue"
</script>

<style scoped>
.home-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  .home-nav-mid {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .home-nav-right {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;
  }
}
</style>

