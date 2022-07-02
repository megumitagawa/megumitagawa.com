<!--
This component should be rewritten without v-html
just as rich-text-react-renderer does not use dangerouslySetInnerHTML
https://github.com/contentful/rich-text/blob/master/packages/rich-text-react-renderer

If contentful-rich-text-vue-renderer comes to provide types, use it
https://github.com/paramander/contentful-rich-text-vue-renderer
-->
<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <Fragment v-html="htmlString" />
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line import/named
import { Fragment } from 'vue-frag'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import * as CFRichTextTypes from '@contentful/rich-text-types'

type Data = {}
type Methods = {}
type Computed = {
  htmlString: string
}
type Props = {
  document: CFRichTextTypes.Document
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'RichText',

  components: {
    Fragment,
  },

  inheritAttrs: false,

  props: {
    document: { type: Object, required: true },
  },

  computed: {
    htmlString() {
      return documentToHtmlString(this.document)
    },
  },
})
</script>
