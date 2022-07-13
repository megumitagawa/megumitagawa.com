<template>
  <BaseSvg viewBox="0 0 12 12" v-bind="$attrs" v-on="$listeners">
    <path
      d="M7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071C9.09763 11.3166 9.09763 10.6834 8.70711 10.2929L7.29289 11.7071ZM3 6L2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6C2 6.26522 2.10536 6.51957 2.29289 6.70711L3 6ZM8.70711 1.70711C9.09763 1.31658 9.09763 0.683417 8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.097631 7.29289 0.292893L8.70711 1.70711ZM8.70711 10.2929L3.70711 5.29289L2.29289 6.70711L7.29289 11.7071L8.70711 10.2929ZM3.70711 6.70711L8.70711 1.70711L7.29289 0.292893L2.29289 5.29289L3.70711 6.70711Z"
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
  name: 'LeftChevonIcon',

  inheritAttrs: false,
})
</script>
