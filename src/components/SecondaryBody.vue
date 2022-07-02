<template>
  <BaseBox :component="component" class="block w-full">
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
