<!--
Inspired by MUI
https://mui.com/material-ui/api/pagination/
-->

<template>
  <component
    :is="component"
    class="flex justify-center items-center w-full"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="previous" :previous-page-number="previousPageNumber" />
    <slot
      name="current"
      :current-page-number="currentPageNumber"
      :total-page-number="totalPageNumber"
    />
    <slot name="next" :next-page-number="nextPageNumber" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  PageNumber,
  isPageNumber,
  createPreviousPageNumber,
  createNextPageNumber,
} from '@/models/PageNumber'

type Data = {}
type Methods = {}
type Computed = {
  previousPageNumber: PageNumber | null
  nextPageNumber: PageNumber | null
}
type Props = {
  component: string
  currentPageNumber: PageNumber
  totalPageNumber: PageNumber
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BasePager',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    currentPageNumber: { validator: isPageNumber, required: true },
    totalPageNumber: { validator: isPageNumber, required: true },
  },

  computed: {
    previousPageNumber() {
      return createPreviousPageNumber(this.currentPageNumber)
    },
    nextPageNumber() {
      return createNextPageNumber(this.currentPageNumber, this.totalPageNumber)
    },
  },
})
</script>
