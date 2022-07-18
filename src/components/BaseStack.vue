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
        'flex-row': flexRow,
        'flex-col': flexColumn,
        'justify-start': justifyStart,
        'justify-center': justifyCenter,
        'justify-end': justifyEnd,
        'items-start': itemsStart,
        'items-center': itemsCenter,
        'items-end': itemsEnd,
        'space-x-0': flexRow && spacing0,
        'space-y-0': flexColumn && spacing0,
        'space-x-4': flexRow && !emSizing && spacingSm,
        'space-y-4': flexColumn && !emSizing && spacingSm,
        'space-x-5': flexRow && !emSizing && spacingMd,
        'space-y-5': flexColumn && !emSizing && spacingMd,
        'space-x-em-1/5': flexRow && emSizing && spacingSm,
        'space-y-em-1/5': flexColumn && emSizing && spacingSm,
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
  flexRow: boolean
  flexColumn: boolean
  justifyStart: boolean
  justifyCenter: boolean
  justifyEnd: boolean
  itemsStart: boolean
  itemsCenter: boolean
  itemsEnd: boolean
  spacing0: boolean
  spacingSm: boolean
  spacingMd: boolean
}
type Props = {
  component: string
  direction: 'column' | 'row'
  justifyContent: 'flex-start' | 'center' | 'flex-end'
  alignItems: 'flex-start' | 'center' | 'flex-end'
  spacing: 0 | 'sm' | 'md'
  emSizing: boolean
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
    justifyContent: {
      validator: (value) =>
        ['flex-start', 'center', 'flex-end'].includes(value),
      default: 'flex-start',
    },
    alignItems: {
      validator: (value) =>
        ['flex-start', 'center', 'flex-end'].includes(value),
      default: 'flex-start',
    },
    spacing: {
      validator: (value) => [0, 'sm', 'md'].includes(value),
      default: 0,
    },
    emSizing: { type: Boolean, default: false },
  },

  computed: {
    flexRow() {
      return this.direction === 'row'
    },
    flexColumn() {
      return this.direction === 'column'
    },
    justifyStart() {
      return this.justifyContent === 'flex-start'
    },
    justifyCenter() {
      return this.justifyContent === 'center'
    },
    justifyEnd() {
      return this.justifyContent === 'flex-end'
    },
    itemsStart() {
      return this.alignItems === 'flex-start'
    },
    itemsCenter() {
      return this.alignItems === 'center'
    },
    itemsEnd() {
      return this.alignItems === 'flex-end'
    },
    spacing0() {
      return this.spacing === 0
    },
    spacingSm() {
      return this.spacing === 'sm'
    },
    spacingMd() {
      return this.spacing === 'md'
    },
  },
})
</script>
