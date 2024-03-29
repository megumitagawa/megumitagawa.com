<!--
Inspired by MUI
https://mui.com/material-ui/api/icon-button/
-->

<template>
  <component
    :is="disableableComponent"
    :disabled="disabled"
    :class="[
      'flex justify-center items-center grow-0 shrink-0 rounded-full shadow-md',
      'transition',
      // prettier-ignore
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'p-2.5': size2hxlXs, 'lg:p-2.5': size2hxlLg, '3xl:p-2.5': size2hxl3xl, '4xl:p-2.5': size2hxl4xl,
        'p-3.5': size3hxlXs, 'lg:p-3.5': size3hxlLg, '3xl:p-3.5': size3hxl3xl, '4xl:p-3.5': size3hxl4xl,
        'bg-white/75': colorBase,
        'bg-lime': colorInfo && !disabled,
        'bg-lightgray': colorInfo && disabled,
        'backdrop-blur': blurred,
        'text-black': colorBase && !disabled,
        'text-lightgray': colorBase && disabled,
        'text-white': colorInfo,
        'pointer-device:hover:shadow-none': !disabled,
        'pointer-device:hover:translate-y-0.5': !disabled,
      },
    ]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { PropType } from 'vue'

type Component = 'a' | 'button'
type ScreenKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type Size = '2.5xl' | '3.5xl'
type Color = 'base' | 'info'

export default defineNuxtComponent({
  name: 'BaseIconButton',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'button' },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: {
      type: [Object, String] as PropType<{ [key in ScreenKey]?: Size } | Size>,
      default: '2.5xl',
    },
    color: {
      type: String as PropType<Color>,
      default: 'base',
    },
    blurred: { type: Boolean, default: true },
  },

  // prettier-ignore
  computed: {
    // Force button element if disabled
    disableableComponent() {
      return this.disabled ? 'button' : this.component
    },
    size2hxl() { return this.size === '2.5xl' },
    size2hxlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '2.5xl' : this.size2hxl },
    size2hxlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '2.5xl' || (!s.lg && this.size2hxlXs)) : this.size2hxl },
    size2hxl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '2.5xl' || (!s['3xl'] && this.size2hxlLg)) : this.size2hxl },
    size2hxl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '2.5xl' || (!s['4xl'] && this.size2hxl3xl)) : this.size2hxl },
    size3hxl() { return this.size === '3.5xl' },
    size3hxlXs() { const s = this.size; return typeof s === 'object' ? s.xs === '3.5xl' : this.size3hxl },
    size3hxlLg() { const s = this.size; return typeof s === 'object' ? (s.lg === '3.5xl' || (!s.lg && this.size3hxlXs)) : this.size3hxl },
    size3hxl3xl() { const s = this.size; return typeof s === 'object' ? (s['3xl'] === '3.5xl' || (!s['3xl'] && this.size3hxlLg)) : this.size3hxl },
    size3hxl4xl() { const s = this.size; return typeof s === 'object' ? (s['4xl'] === '3.5xl' || (!s['4xl'] && this.size3hxl3xl)) : this.size3hxl },
    colorBase() {
      return this.color === 'base'
    },
    colorInfo() {
      return this.color === 'info'
    },
  },
})
</script>
