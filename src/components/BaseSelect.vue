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
import Vue from 'vue'
import { FormEvent } from '@/models/FormEvent'
import { getSelectedLabel } from '@/models/HTMLSelectElement'

type Data = {
  label: string
}
type Methods = {
  updateLabelAndEmitInput(formEvent: FormEvent<HTMLSelectElement>): void
}
type Computed = {}
type Props = {
  component: string
  name: string
  value: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseSelect',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    name: { type: String, required: true },
    value: { type: String, required: true },
  },

  data() {
    return {
      label: '',
    }
  },

  mounted() {
    this.label = getSelectedLabel(this.$refs.select as HTMLSelectElement)
  },

  methods: {
    updateLabelAndEmitInput(formEvent) {
      this.label = getSelectedLabel(this.$refs.select as HTMLSelectElement)
      this.$emit('input', formEvent)
    },
  },
})
</script>
