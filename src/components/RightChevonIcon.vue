<template>
  <BaseSvg viewBox="0 0 12 12" v-bind="$attrs" v-on="$listeners">
    <path
      d="M4.70711 0.29287C4.31658 -0.0976299 3.68342 -0.0976299 3.29289 0.29287C2.90237 0.68337 2.90237 1.31657 3.29289 1.70707L4.70711 0.29287ZM9 5.99997L9.70711 6.70708C9.89464 6.51954 10 6.26519 10 5.99997C10 5.73475 9.89464 5.4804 9.70711 5.29286L9 5.99997ZM3.29289 10.2929C2.90237 10.6834 2.90237 11.3166 3.29289 11.7071C3.68342 12.0976 4.31658 12.0976 4.70711 11.7071L3.29289 10.2929ZM3.29289 1.70707L8.29289 6.70708L9.70711 5.29286L4.70711 0.29287L3.29289 1.70707ZM8.29289 5.29286L3.29289 10.2929L4.70711 11.7071L9.70711 6.70708L8.29289 5.29286Z"
      fill="currentColor"
    />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'RightChevonIcon',

  inheritAttrs: false,
})
</script>
