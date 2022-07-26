<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    :class="[
      'relative flex justify-center items-center',
      {
        'w-full': fullWidth,
        'w-auto': !fullWidth && sizeAuto,
        'w-25': !fullWidth && sizeXs,
        'h-full': fullHeight,
        'p-2.5': !text,
        'grow-0': !fullWidth,
        'shrink-0': !fullWidth,
        rounded: !text,
        'bg-inherit': !text && colorInherit,
        'bg-lime': !text && colorInfo && !disabled,
        'bg-lightgray': !text && colorInfo && disabled,
        'bg-white/75': !text && colorDefault,
        'backdrop-blur': !text && blurred,
        'text-inherit': colorInherit,
        'text-white': colorInfo,
        'text-black': colorDefault && !disabled,
        'text-lightgray': colorDefault && disabled,
        'shadow-md': !text,
        'drop-shadow-md': text,
      },
    ]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="absolute top-1/2 left-0 -translate-y-1/2">
      <slot name="startIcon" />
    </span>
    <slot />
    <span class="absolute top-1/2 right-0 -translate-y-1/2">
      <slot name="endIcon" />
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {
  disableableComponent: string
  nullableDisabled: boolean | null
  sizeAuto: boolean
  sizeXs: boolean
  colorInfo: boolean
  colorInherit: boolean
  colorDefault: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: 'auto' | 'xs'
  color: 'info' | 'inherit' | 'default'
  blurred: boolean
  text: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'button' },
    fullWidth: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: {
      validator: (value) => ['auto', 'xs'].includes(value),
      default: 'auto',
    },
    color: {
      validator: (value) => ['info', 'inherit', 'default'].includes(value),
      default: 'default',
    },
    blurred: { type: Boolean, default: true },
    text: { type: Boolean, default: false },
  },

  computed: {
    // Force button element if disabled
    disableableComponent() {
      return this.disabled ? 'button' : this.component
    },
    // Don't set disabled if not disabled
    nullableDisabled() {
      return this.disabled || null
    },
    sizeAuto() {
      return this.size === 'auto'
    },
    sizeXs() {
      return this.size === 'xs'
    },
    colorInfo() {
      return this.color === 'info'
    },
    colorInherit() {
      return this.color === 'inherit'
    },
    colorDefault() {
      return this.color === 'default'
    },
  },
})
</script>
