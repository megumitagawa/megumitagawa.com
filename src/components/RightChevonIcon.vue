<template>
  <BaseSvg :size="size" viewBox="0 0 12 12" v-bind="$attrs" v-on="$listeners">
    <path
      d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM6 6L6.70711 6.70711C6.89464 6.51957 7 6.26522 7 6C7 5.73478 6.89464 5.48043 6.70711 5.29289L6 6ZM0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L0.292893 10.2929ZM0.292893 1.70711L5.29289 6.70711L6.70711 5.29289L1.70711 0.292893L0.292893 1.70711ZM5.29289 5.29289L0.292893 10.2929L1.70711 11.7071L6.70711 6.70711L5.29289 5.29289Z"
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
