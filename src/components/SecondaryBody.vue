<template>
  <BaseBox
    :component="component"
    class="block w-full text-xs whitespace-pre-line"
  >
    <slot />
  </BaseBox>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'SecondaryBody',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
  },
})
</script>

<style lang="postcss" scoped>
:deep(p:not(:first-child)) {
  @apply mt-em-1.5;
}

:deep(a) {
  @apply text-lime underline brightness-90;
  @apply transition pointer-device:hover:brightness-125;
}

:deep(em) {
  @apply italic;
}

:deep(u) {
  @apply underline -underline-offset-6 decoration-6 decoration-lime/35;
}

:deep(hr) {
  @apply block w-full h-1.5 my-10 border-t-0;
  @apply bg-quintuple-dots-icon bg-no-repeat bg-center;
}
</style>
