<template>
  <a-table :data-source="data" :columns="columns" :pagination="false" :scroll="{ x: '100%' }" rowClassName="task-table-row text-xs">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'priority' && record.priority">
        <a-tag v-if="record.priority === TaskPriority.UI" color="var(--color-danger)">UI</a-tag>
        <a-tag v-if="record.priority === TaskPriority.U" color="var(--color-warning)">U</a-tag>
        <a-tag v-if="record.priority === TaskPriority.I" color="var(--color-primary)">I</a-tag>
        <a-tag v-if="record.priority === TaskPriority.N" color="var(--color-default)">N</a-tag>
      </template>
      <template v-if="column.key === 'status' && record.status">
        <span :class="[
          'text-base',
          {
            'color-success': record.status === TaskStatus.COMPLETED,
            'color-warning': record.status === TaskStatus.DELAYED,
            'color-danger': record.status === TaskStatus.WRONG,
            'color-primary': record.status === TaskStatus.PROCESSING,
            'color-default': record.status === TaskStatus.WAITING || record.status === TaskStatus.CANCELED || record.status === TaskStatus.PENDING,
          }]"
        >
          <ClockCircleOutlined v-if="record.status === TaskStatus.WAITING" />
          <SyncOutlined v-else-if="record.status === TaskStatus.PROCESSING" />
          <MinusCircleOutlined v-else-if="record.status === TaskStatus.PENDING" />
          <CheckCircleOutlined v-else-if="record.status === TaskStatus.COMPLETED" />
          <CloseCircleOutlined v-else-if="record.status === TaskStatus.CANCELED" />
          <ExclamationCircleOutlined v-else-if="record.status === TaskStatus.DELAYED" />
          <QuestionCircleOutlined v-else-if="record.status === TaskStatus.WRONG" />
        </span>
      </template>
      <template v-if="column.key === 'deadline' && record.deadline">
        {{timeUtils.format.dateTime(record.deadline)}}
      </template>
      <template v-if="column.key === 'belongs' && record.belongs">
        <PageLink path="/task/detail" :query="{ taskId: record.belongs.taskId }">{{ record.belongs.name }}</PageLink>
      </template>
      <template v-if="column.key === 'from' && record.from">
        <a-avatar
          class="cursor-pointer"
          :title="record.from"
          size="small"
          @click="handleAvatarClick(record.from)"
        >{{ record.from[0] }}</a-avatar>
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { Table as ATable, Avatar as AAvatar, Tag as ATag, message } from "ant-design-vue"
import {
  ClockCircleOutlined,
  SyncOutlined,
  MinusCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons-vue"
import PageLink from "@/components/page-link/index.vue"
import { getTasksList } from "@/api/modules/tasks"
import type { ColumnsType } from "ant-design-vue/es/table";
import { timeUtils } from "@/utils";
import { useI18n } from 'vue-i18n'
const { t: $t } = useI18n()


interface TaskItem {
  taskId: number;
  name: string;
  from: string;
}
enum TaskPriority {
  UI = 1,
  U = 2,
  I = 3,
  N = 4
}
enum TaskStatus {
  WAITING = 1,
  PROCESSING = 2,
  PENDING = 3,
  COMPLETED = 4,
  CANCELED = 5,
  DELAYED = 6,
  WRONG = 7
}

const columns = ref<ColumnsType>([
  {
    title: $t('task.TASK_ID'),
    dataIndex: "taskId",
    key: "taskId",
    width: 80,
    align: "center",
  },
  {
    title: $t('task.PRIORITY'),
    dataIndex: "priority",
    key: "priority",
    width: 80,
    align: "center",
  },
  {
    title: $t('task.NAME'),
    dataIndex: "name",
    key: "name",
    minWidth: 100,
  },
  {
    title: $t('task.STATUS'),
    dataIndex: "status",
    key: "status",
    width: 80,
    align: "center",
  },
  {
    title: $t('task.DEADLINE'),
    dataIndex: "deadline",
    key: "deadline",
    width: 100,
    align: "center",
  },
  {
    title: $t('task.BELONGS'),
    dataIndex: "belongs",
    key: "belongs",
    minWidth: 100,
  },
  {
    title: $t('task.FROM'),
    dataIndex: "from",
    key: "from",
    width: 80,
    align: "center"
  }
])
const data = ref<TaskItem[]>([])
onMounted(async () => {
  const res = await getTasksList()
  data.value = res.data
})

function handleAvatarClick(from: string) {
  // TODO: 这里后面要加逻辑跳转到指定人的页面
  message.info(`待完善：跳转到 ${from} 的个人主页`)
}
</script>

<style lang="scss" scoped>
:deep(.ant-table-tbody) {
  .task-table-row > td {
    padding: 6px 12px;
  }
}
</style>