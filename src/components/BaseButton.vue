<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    :class="[
      'relative flex justify-center items-center',
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
        'p-2.5': !text && sizeXl,
        rounded: !text,
        'bg-lime': !text && colorInfo,
        'bg-inherit': !text && colorInherit,
        'bg-white/75': !text && colorDefault,
        'backdrop-blur': !text && colorDefault,
        'text-white': colorInfo,
        'text-black': colorDefault || colorInherit,
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
  sizeXl: boolean
  colorInfo: boolean
  colorInherit: boolean
  colorDefault: boolean
}
type Props = {
  component: string
  fullWidth: boolean
  fullHeight: boolean
  disabled: boolean
  size: 'xl'
  color: 'info' | 'inherit' | 'default'
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
      validator: (value) => ['xl'].includes(value),
      default: 'xl',
    },
    color: {
      validator: (value) => ['info', 'inherit', 'default'].includes(value),
      default: 'default',
    },
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
    sizeXl() {
      return this.size === 'xl'
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
