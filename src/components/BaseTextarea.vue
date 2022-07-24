<template>
  <textarea
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :class="[
      'block w-full min-h-11 border border-black px-5 py-2.25',
      'rounded text-base bg-transparent',
      'text-black placeholder:text-lightgray',
    ]"
    @input="emitInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { FormEvent } from '@/models/FormEvent'

type Data = {}
type Methods = {
  emitInput(formEvent: FormEvent<HTMLTextAreaElement>): void
}
type Computed = {}
type Props = {
  name: string
  value: string
  placeholder: string
  required: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseTextarea',

  inheritAttrs: false,

  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
  },

  methods: {
    emitInput(formEvent) {
      this.$emit('input', formEvent)
    },
  },
})
</script>
