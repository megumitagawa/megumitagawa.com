<!--
NuxtPicture does not have the option to set the media attribute of source elements
So instead provide the option to display only when media query is matched
https://github.com/nuxt/image/issues/309
-->

<template>
  <NuxtPicture
    v-if="existing"
    :src="src"
    :sizes="$defaultImgSizes"
    :width="width"
    :height="height"
    :alt="alt"
    :class="[
      'block w-full',
      {
        'h-full': objectCover || objectContain,
      },
    ]"
    :img-attrs="{
      class: [
        'block w-full',
        {
          'object-fill': objectFill,
          'object-cover': objectCover,
          'object-contain': objectContain,
          'h-full': objectCover || objectContain,
        },
      ],
    }"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import {
  addChangeEventListener,
  removeChangeEventListener,
} from '@/models/MediaQueryList'

type Data = {
  existing: boolean
  mediaQueryList: MediaQueryList | null
}
type Methods = {
  updateExisting(mediaQueryListEvent: MediaQueryListEvent): void
}
type Computed = {
  objectFill: boolean
  objectCover: boolean
  objectContain: boolean
}
type Props = {
  src: string
  width: number
  height: number
  alt: string
  objectFit: 'fill' | 'cover' | 'contain'
  mediaQuery: string | null
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseImage',

  inheritAttrs: false,

  props: {
    src: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    alt: { type: String, default: '' },
    objectFit: {
      validator: (value) => ['fill', 'cover', 'contain'].includes(value),
      default: 'fill',
    },
    mediaQuery: { type: String, default: null },
  },

  data() {
    return {
      existing: false,
      mediaQueryList: null,
    }
  },

  computed: {
    objectFill() {
      return this.objectFit === 'fill'
    },
    objectCover() {
      return this.objectFit === 'cover'
    },
    objectContain() {
      return this.objectFit === 'contain'
    },
  },

  mounted() {
    if (this.mediaQuery) {
      this.mediaQueryList = window.matchMedia(this.mediaQuery)
      addChangeEventListener(this.mediaQueryList, this.updateExisting)
      this.existing = this.mediaQueryList.matches
    } else {
      this.existing = true
    }
  },

  beforeDestroy() {
    if (this.mediaQueryList) {
      removeChangeEventListener(this.mediaQueryList, this.updateExisting)
    }
  },

  methods: {
    updateExisting({ matches }) {
      this.existing = matches
    },
  },
})
</script>
