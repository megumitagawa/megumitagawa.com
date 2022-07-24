<template>
  <BaseBox
    :component="component"
    class="block w-full text-xs whitespace-pre-wrap"
  >
    <RichText :document="document" />
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'
import * as CFRichTextTypes from '@contentful/rich-text-types'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  component: string
  document: CFRichTextTypes.Document
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SecondaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    document: { type: Object, required: true },
  },
})
</script>

<style lang="postcss" scoped>
::v-deep a {
  @apply text-lime underline;
}

::v-deep i {
  @apply italic;
}

::v-deep u {
  @apply underline -underline-offset-6 decoration-6 decoration-lime/35;
}

::v-deep hr {
  @apply block w-full h-1.5 my-10 border-t-0;
  @apply bg-quintuple-dots-icon bg-no-repeat bg-center;
}
</style>
