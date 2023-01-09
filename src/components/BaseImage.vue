<!--
Workaround until NuxtPicture is fixed

Because NuxtPicture does not provide the following features
- Media attribute of source elements
- Conversion to WebP format

Use with the following scripts
- bin/create-local-images.mjs
- bin/create-webp-images.mjs
-->

<template>
  <picture
    :class="[
      'block overflow-hidden',
      {
        'w-full': fullWidth,
        'h-full': objectCover || objectContain || fullHeight,
        rounded,
      },
    ]"
  >
    <source
      v-for="source of slicedSourceList"
      :key="source.key"
      :srcset="source.srcset"
      :media="source.media"
      :width="source.width"
      :height="source.height"
    />
    <img
      :src="xsSource.srcset"
      :width="xsSource.width"
      :height="xsSource.height"
      :alt="alt"
      :loading="loading"
      :class="[
        'block',
        {
          'w-full': fullWidth,
          'h-full': objectCover || objectContain || fullHeight,
          'object-fill': objectFill,
          'object-cover': objectCover,
          'object-contain': objectContain,
        },
      ]"
    />
  </picture>
</template>

<script lang="ts">
import { PropType } from 'vue'

type ObjectFit = 'fill' | 'cover' | 'contain'
type ScreenKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

export default defineNuxtComponent({
  name: 'BaseImage',

  inheritAttrs: false,

  props: {
    src: {
      type: [Object, String] as PropType<
        { [key in ScreenKey]?: string } | string
      >,
      required: true,
    },
    width: {
      type: [Object, Number] as PropType<
        { [key in ScreenKey]?: number } | number
      >,
      required: true,
    },
    height: {
      type: [Object, Number] as PropType<
        { [key in ScreenKey]?: number } | number
      >,
      required: true,
    },
    alt: { type: String, default: '' },
    loading: {
      type: String as PropType<HTMLImageElement['loading']>,
      default: 'eager',
    },
    objectFit: {
      type: String as PropType<ObjectFit>,
      default: 'fill',
    },
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
    rounded: { type: Boolean, default: true },
  },

  computed: {
    srcObject() {
      return typeof this.src === 'object' ? this.src : { xs: this.src }
    },
    widthObject() {
      return typeof this.width === 'object' ? this.width : { xs: this.width }
    },
    heightObject() {
      return typeof this.height === 'object' ? this.height : { xs: this.height }
    },
    sourceList() {
      const productionFlag = this.$config.public.nodeEnv === 'production'
      const mediaQueries = this.$computedTailwindTheme.mediaQueries
      return this.$computedTailwindTheme.screenKeyList
        .map((screenKey) => {
          if (!(screenKey in this.srcObject)) return []
          const srcset = productionFlag
            ? this.srcObject[screenKey]?.replace(/^https:\//, '')
            : this.srcObject[screenKey]
          const partialSource = {
            media: screenKey === 'xs' ? undefined : mediaQueries[screenKey],
            width: this.widthObject[screenKey],
            height: this.heightObject[screenKey],
          }
          const source = { key: screenKey, srcset, ...partialSource }
          if (!productionFlag || !/.(gif|jpg|jpeg|png)$/i.test(srcset ?? ''))
            return [source]
          const webpSource = {
            key: `${screenKey}Webp`,
            srcset: srcset?.replace(/.(gif|jpg|jpeg|png)$/i, '.webp'),
            ...partialSource,
          }
          return [webpSource, source]
        })
        .flat()
    },
    slicedSourceList() {
      return this.sourceList.slice(0, -1)
    },
    xsSource() {
      return this.sourceList[this.sourceList.length - 1]
    },
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
})
</script>
