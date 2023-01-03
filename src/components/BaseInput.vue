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
import { PropType } from 'vue'

type Type = 'text' | 'email' | 'hidden'

export default defineNuxtComponent({
  name: 'BaseInput',

  inheritAttrs: false,

  props: {
    type: {
      type: String as PropType<Type>,
      required: true,
    },
    name: { type: String, required: true },
    value: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    invisible: { type: Boolean, default: false },
  },

  methods: {
    emitInput(formEvent: Event): void {
      this.$emit('input', formEvent)
    },
  },
})
</script>
