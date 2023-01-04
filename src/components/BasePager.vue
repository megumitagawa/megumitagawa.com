<!--
Inspired by MUI
https://mui.com/material-ui/api/pagination/
-->

<template>
  <component
    :is="resolvedComponent"
    class="flex justify-center items-center w-full"
    v-bind="$attrs"
  >
    <slot name="previous" :previous-page-number="previousPageNumber" />
    <slot name="current" />
    <slot name="next" :next-page-number="nextPageNumber" />
  </component>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  PageNumber,
  createPreviousPageNumber,
  createNextPageNumber,
} from '@/models/PageNumber'

type Component = 'BaseStack' | 'span'

export default defineNuxtComponent({
  name: 'BasePager',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
    currentPageNumber: { type: Number as PropType<PageNumber>, required: true },
    totalPageNumber: { type: Number as PropType<PageNumber>, required: true },
  },

  computed: {
    // Include dynamic components to bundle
    // Argument of resolveComponent must not be variable
    // https://nuxt.com/docs/guide/directory-structure/components#dynamic-components
    resolvedComponent() {
      return this.component === 'BaseStack'
        ? resolveComponent('BaseStack')
        : this.component
    },
    previousPageNumber() {
      return createPreviousPageNumber(this.currentPageNumber)
    },
    nextPageNumber() {
      return createNextPageNumber(this.currentPageNumber, this.totalPageNumber)
    },
  },
})
</script>
