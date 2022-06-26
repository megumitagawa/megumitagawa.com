<template>
  <NuxtPicture
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    fit="fill"
    class="block w-full"
    :img-attrs="{ class: 'block w-full' }"
  />
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  src: string
  width: number
  height: number
  alt: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseImage',

  inheritAttrs: false,

  props: {
    src: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    alt: { type: String, default: '' },
  },
})
</script>
