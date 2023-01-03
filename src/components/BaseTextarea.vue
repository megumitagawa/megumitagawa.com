<template>
  <textarea
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :required="required"
    :class="[
      'block w-full min-h-53 border border-black px-5 py-2.25',
      'rounded text-base bg-transparent',
      'text-black placeholder:text-lightgray',
    ]"
    @input="emitInput"
  />
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'BaseTextarea',

  inheritAttrs: false,

  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
  },

  methods: {
    emitInput(formEvent: Event): void {
      this.$emit('input', formEvent)
    },
  },
})
</script>
