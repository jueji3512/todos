<template>
  <div class="new" @mouseover="handleMouseover" @mouseleave="handleMouseleave">
    <PlusOutlined class="new-btn rounded-full shadow bgc-default-l1" />
    <Transition name="fade">
      <div class="new-options" v-show="isShow">
        <div class="new-options-top">
          <PlusOutlined class="new-options-top-btn rounded-full shadow bgc-default-l1" />
        </div>
        <ul class="new-options-list">
          <li class="new-options-item">TODO</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button as AButton } from "ant-design-vue"
import { PlusOutlined } from "@ant-design/icons-vue"
name: 'new'
const isShow = ref<boolean>(false)

function handleMouseover() {
  isShow.value = true
}
function handleMouseleave() {
  isShow.value = false
}
</script>

<style lang="scss" scoped>
.new {
  position: relative;
  &:hover {
    .new-btn {
      position: relative;
      transform: scale(1.2) translateY(50%);
    }
  }
  .new-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    transition: all var(--duration-2) ease;
  }
  .new-options {
    position: absolute;
    top: 32px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    margin-left: calc(50% - 100px);
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px 2px rgba(0,0,0,.06);

    .new-options-top {
      position: relative;
      padding: 20px 0 10px 0;
      .new-options-top-btn {
        position: absolute;
        top: -20px;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        transform: translateX(-50%) scale(1.2);
      }
    }
    .new-options-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      .new-options-item {
        height: 40px;
        padding: 0 16px;
        text-align: center;
        line-height: 40px;
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        cursor: pointer;
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
}
/* TODO: 这段应该移到一个通用样式处 */
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--duration-2);
}
.fade-enter-from, .fade-leave-to {
    opacity: 0
}
</style>

