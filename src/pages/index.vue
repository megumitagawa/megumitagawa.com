<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'
import { makeErrorCatchable } from '@/lib/AsyncData'

export default Vue.extend({
  name: 'IndexPage',

  asyncData: makeErrorCatchable(async () => {
    await new Promise((resolve) => setTimeout(resolve))
    return {}
  }),
})
</script>
