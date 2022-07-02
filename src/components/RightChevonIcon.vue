<template>
  <BaseSvg :size="size" viewBox="0 0 12 12" v-bind="$attrs" v-on="$listeners">
    <path
      d="M4.70711 0.292893C4.31658 -0.0976311 3.68342 -0.0976311 3.29289 0.292893C2.90237 0.683418 2.90237 1.31658 3.29289 1.70711L4.70711 0.292893ZM9 6L9.70711 6.70711C9.89464 6.51957 10 6.26522 10 6C10 5.73478 9.89464 5.48043 9.70711 5.29289L9 6ZM3.29289 10.2929C2.90237 10.6834 2.90237 11.3166 3.29289 11.7071C3.68342 12.0976 4.31658 12.0976 4.70711 11.7071L3.29289 10.2929ZM3.29289 1.70711L8.29289 6.70711L9.70711 5.29289L4.70711 0.292893L3.29289 1.70711ZM8.29289 5.29289L3.29289 10.2929L4.70711 11.7071L9.70711 6.70711L8.29289 5.29289Z"
      fill="currentColor"
    />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  size: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'RightChevonIcon',

  inheritAttrs: false,

  props: {
    size: { type: String, default: 'inherit' },
  },
})
</script>
