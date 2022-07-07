<template>
  <BaseBox :id="id" :component="component" class="block w-full">
    <BaseStack direction="row" justify-content="center" align-items="center">
      <LeftTripleDotsIcon />
      <slot />
      <RightTripleDotsIcon />
    </BaseStack>
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  component: string
  id: string | null
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'PrimaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    id: { type: String, default: null },
  },
})
</script>
