<template>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :class="[
      'block w-full border-black px-5 rounded text-base bg-transparent',
      'text-black placeholder:text-lightgray',
      {
        'h-0': invisible,
        'opacity-0': invisible,
        border: !invisible,
        'py-2.25': !invisible,
      },
    ]"
    @input="emitInput"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { FormEvent } from '@/models/FormEvent'

type Data = {}
type Methods = {
  emitInput(formEvent: FormEvent<HTMLInputElement>): void
}
type Computed = {}
type Props = {
  type: 'text' | 'email' | 'hidden'
  name: string
  value: string
  placeholder: string
  required: boolean
  invisible: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseInput',

  inheritAttrs: false,

  props: {
    type: {
      validator: (value) => ['text', 'email', 'hidden'].includes(value),
      required: true,
    },
    name: { type: String, required: true },
    value: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    invisible: { type: Boolean, default: false },
  },

  methods: {
    emitInput(formEvent) {
      this.$emit('input', formEvent)
    },
  },
})
</script>
