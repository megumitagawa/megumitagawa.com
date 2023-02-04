<template>
  <form
    ref="form"
    :name="name"
    :data-netlify="dataNetlify"
    :data-netlify-honeypot="dataNetlifyHoneypot"
    @input="validate"
    @submit.prevent="emitSubmit"
  >
    <slot :valid="valid" />
  </form>
</template>

<script lang="ts">
type Data = {
  valid: boolean
}

export default defineNuxtComponent({
  name: 'BaseTable',

  inheritAttrs: false,

  props: {
    name: { type: String, required: true },
    dataNetlify: { type: String, default: undefined },
    dataNetlifyHoneypot: { type: String, default: undefined },
  },

  data(): Data {
    return {
      valid: false,
    }
  },

  methods: {
    validate(): void {
      const formRef = this.$refs.form as HTMLFormElement
      this.valid = formRef.checkValidity()
    },

    emitSubmit(event: Event): void {
      this.$emit('submit', event)
    },
  },
})
</script>
