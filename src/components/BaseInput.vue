<template>
  <input
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    class="block w-full"
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
  },

  methods: {
    emitInput(formEvent) {
      this.$emit('input', formEvent)
    },
  },
})
</script>
