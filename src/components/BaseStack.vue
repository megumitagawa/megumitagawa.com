<!--
Inspired by MUI
https://mui.com/material-ui/api/stack/

Don't use gap for spacing for old iOS
-->

<template>
  <component
    :is="component"
    :class="[
      'flex w-full',
      {
        'flex-row': rowDirection,
        'flex-col': columnDirection,
        [`space-x-${spacing}`]: rowDirection,
        [`space-y-${spacing}`]: columnDirection,
      },
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {
  rowDirection: boolean
  columnDirection: boolean
}
type Props = {
  component: string
  direction: 'column' | 'row'
  spacing: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseStack',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    direction: {
      validator: (value) => ['column', 'row'].includes(value),
      default: 'column',
    },
    spacing: { type: String, default: '0' },
  },

  computed: {
    rowDirection() {
      return this.direction === 'row'
    },
    columnDirection() {
      return this.direction === 'column'
    },
  },
})
</script>
