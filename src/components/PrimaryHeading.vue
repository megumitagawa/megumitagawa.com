<template>
  <BaseBox
    :component="component"
    :class="[
      'flex justify-center items-center w-full p-2.5 rounded text-base',
      'bg-white/75 backdrop-blur shadow-md',
    ]"
  >
    <BaseStack
      direction="row"
      justify-content="center"
      align-items="center"
      spacing="lg"
    >
      <LeftTripleDotsIcon size="xl" />
      <BaseBox>
        <slot />
      </BaseBox>
      <RightTripleDotsIcon size="xl" />
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
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'PrimaryHeading',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>
