<!--
NuxtPicture does not have the option to set the media attribute of source elements
So instead provide the option to display only when media query is matched
https://github.com/nuxt/image/issues/309
-->

<template>
  <NuxtPicture
    v-if="existing"
    :src="src"
    :sizes="$computedTailwindTheme.defaultImgSizes"
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
import { PropType } from 'vue'
import {
  addChangeEventListener,
  removeChangeEventListener,
} from '@/models/MediaQueryList'

type ObjectFit = 'fill' | 'cover' | 'contain'
type Data = {
  existing: boolean
  mediaQueryList?: MediaQueryList
}

export default defineNuxtComponent({
  name: 'BaseImage',

  inheritAttrs: false,

  props: {
    src: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    alt: { type: String, default: '' },
    loading: {
      type: String as PropType<HTMLImageElement['loading']>,
      default: 'eager',
    },
    preload: { type: Boolean, default: false },
    objectFit: {
      type: String as PropType<ObjectFit>,
      default: 'fill',
    },
    media: { type: String, default: undefined },
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
    rounded: { type: Boolean, default: true },
  },

  data(): Data {
    return {
      existing: !this.media,
      mediaQueryList: undefined,
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
      this.mediaQueryList = window.matchMedia(this.media)
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
    updateExisting({ matches }: MediaQueryListEvent): void {
      this.existing = matches
    },
  },
})
</script>
