<!--
Inspired by MUI
https://mui.com/material-ui/api/select/
-->

<template>
  <component
    :is="component"
    :class="[
      'relative flex justify-center items-center w-full p-2.5 rounded',
      'text-base bg-white/75 backdrop-blur shadow-md',
      'transition',
      'pointer-device:hover:shadow-none pointer-device:hover:translate-y-0.5',
    ]"
    v-bind="$attrs"
  >
    {{ label }}
    <select
      ref="select"
      :name="name"
      :value="value"
      :class="[
        'absolute top-0 left-0 block w-full h-full opacity-0',
        'cursor-pointer',
      ]"
      @input="updateLabelAndEmitInput"
    >
      <slot />
    </select>
  </component>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  getSelectedLabel,
  isHTMLSelectElement,
} from '@/models/HTMLSelectElement'

type Component = 'span'
type Data = {
  label: string
}

export default defineNuxtComponent({
  name: 'BaseSelect',

  inheritAttrs: false,

  props: {
    component: { type: String as PropType<Component>, default: 'span' },
    name: { type: String, required: true },
    value: { type: String, required: true },
  },

  data(): Data {
    return {
      label: '',
    }
  },

  mounted() {
    if (isHTMLSelectElement(this.$refs.select))
      this.label = getSelectedLabel(this.$refs.select)
  },

  methods: {
    updateLabelAndEmitInput(formEvent: Event): void {
      if (isHTMLSelectElement(this.$refs.select))
        this.label = getSelectedLabel(this.$refs.select)
      this.$emit('input', formEvent)
    },
  },
})
</script>
