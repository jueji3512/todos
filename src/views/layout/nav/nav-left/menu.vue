<template>
    <a-drawer
      v-model:open="open"
      :closable="false"
      :width="300"
      :content-wrapper-style="{ borderRadius: '1rem' }"
      :body-style="{ padding: '12px' }"
      :maskStyle="{ backgroundColor: 'var(--color-mask)' }"
      title="Task Handler"
      placement="left"
      class="rounded-e-2xl"
    >
      <a-menu
        id="main-menu"
        mode="inline"
        class="menu w-full"
        :items="items"
        :selected-keys="[selectedKey]"
        @click="handleMenuClick"
      ></a-menu>
      <a-divider />
      <div class="recent-tasks-title pl-4 text-xs">
        {{ t("menu.RECENT_TASKS") }}
      </div>
      <a-menu
        id="recent-tasks"
        mode="inline"
        class="menu w-full"
        :items="recentTasks"
        @click="handleRecentTaskClick"
      ></a-menu>
    </a-drawer>
</template>

<script setup lang="ts">
import { h } from "vue"
import { Drawer as ADrawer, Menu as AMenu, Divider as ADivider } from "ant-design-vue"
import type { ItemType, MenuProps } from "ant-design-vue"
import { OrderedListOutlined, DatabaseOutlined, BarChartOutlined, TeamOutlined, ClockCircleOutlined } from "@ant-design/icons-vue"
import { useI18n } from "vue-i18n"
import { getRecentTasks } from "@/api/modules/layout"
import router from "@/routes"

const { t } = useI18n()

const open = ref(false)
const selectedKey = ref('')
const recentTasks: ItemType[] = ref([])

const items: ItemType[] = [
  {
    label: t("menu.TASKS"),
    icon: h(OrderedListOutlined),
    key: "tasks",
  },
  {
    label: t("menu.PROJECTS"),
    icon: h(DatabaseOutlined),
    key: "projects",
  },
  {
    label: t("menu.STATISTICS"),
    icon: h(BarChartOutlined),
    key: 'statistics'
  },
  {
    label: t("menu.TEAMS"),
    icon: h(TeamOutlined),
    key: "teams",
  }
]

watch(() => open.value, async (newVal) => {
  if (newVal) {
    const { data } = await getRecentTasks()
    recentTasks.value = data.map((task: any) => ({
      label: task.name,
      key: task.id,
    }))
  }
}, { immediate: true })

function handleMenuVisible(value: boolean = true) {
  open.value = value
  selectedKey.value = ''
}
function handleMenuClick(item: MenuProps['onClick']) {
  router.push(`/${item.key}`)
  handleMenuVisible(false)
}

function handleRecentTaskClick(item: MenuProps['onClick']) {
  router.push(`/tasks/${item.key}`)
  handleMenuVisible(false)
}

defineExpose({
  showMenu: () => handleMenuVisible(true)
})
</script>

<style lang="scss" scoped>
.ant-menu.menu {
  border-inline-end: none;
}
.recent-tasks-title {
  color: var(--color-default);
}
</style>