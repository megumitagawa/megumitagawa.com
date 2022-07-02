<template>
  <component
    :is="disableableComponent"
    :disabled="nullableDisabled"
    class="relative flex justify-center items-center w-full"
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
}
type Props = {
  component: string
  disabled: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'button' },
    disabled: { type: Boolean, default: false },
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
  },
})
</script>
