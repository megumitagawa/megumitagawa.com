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
import Vue from 'vue'
import { FormEvent } from '@/models/FormEvent'

type Data = {
  valid: boolean
}
type Methods = {
  validate(): void
  emitSubmit(formEvent: FormEvent<HTMLFormElement>): void
}
type Computed = {}
type Props = {
  name: string
  dataNetlify: string | null
  dataNetlifyHoneypot: string | null
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseTable',

  inheritAttrs: false,

  props: {
    name: { type: String, required: true },
    dataNetlify: { type: String, default: null },
    dataNetlifyHoneypot: { type: String, default: null },
  },

  data() {
    return {
      valid: false,
    }
  },

  methods: {
    validate() {
      const formRef = this.$refs.form as HTMLFormElement
      this.valid = formRef.checkValidity()
    },

    emitSubmit(formEvent) {
      this.$emit('submit', formEvent)
    },
  },
})
</script>
