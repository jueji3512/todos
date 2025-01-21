<template>
  <div class="home-nav-left pl-4">
    <a-button @click="handleMenuOpen">
      <template #icon>
        <MenuOutlined />
      </template>
    </a-button>
    <Menu ref="menuRef" />
  </div>
</template>

<script setup lang="ts">
import { Button as AButton, Drawer as ADrawer } from "ant-design-vue"
import { MenuOutlined } from "@ant-design/icons-vue"
import Menu from "@/views/layout/nav/nav-left/menu.vue"

const menuRef = ref<typeof Menu>()

function handleMenuOpen() {
  menuRef.value?.showMenu()
}
</script>

<style lang="scss" scoped>
</style>