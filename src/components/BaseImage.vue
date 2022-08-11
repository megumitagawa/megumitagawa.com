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
    :loading="loading"
    :preload="preload"
    :class="[
      'block overflow-hidden',
      {
        'w-full': fullWidth,
        'h-full': objectCover || objectContain || fullHeight,
        rounded: rounded,
      },
    ]"
    :img-attrs="{
      class: [
        'block',
        {
          'w-full': fullWidth,
          'h-full': objectCover || objectContain || fullHeight,
          'object-fill': objectFill,
          'object-cover': objectCover,
          'object-contain': objectContain,
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
import { createMediaQueryList } from '@/models/Window'

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
  loading: 'eager' | 'lazy'
  preload: boolean
  objectFit: 'fill' | 'cover' | 'contain'
  media: string | null
  fullWidth: boolean
  fullHeight: boolean
  rounded: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseImage',

  inheritAttrs: false,

  props: {
    src: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    alt: { type: String, default: '' },
    loading: {
      validator: (value) => ['eager', 'lazy'].includes(value),
      default: 'eager',
    },
    preload: { type: Boolean, default: false },
    objectFit: {
      validator: (value) => ['fill', 'cover', 'contain'].includes(value),
      default: 'fill',
    },
    media: { type: String, default: null },
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
    rounded: { type: Boolean, default: true },
  },

  data() {
    return {
      existing: !this.media,
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
    if (this.media) {
      this.mediaQueryList = createMediaQueryList(window, this.media)
      addChangeEventListener(this.mediaQueryList, this.updateExisting)
      this.existing = this.mediaQueryList.matches
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
