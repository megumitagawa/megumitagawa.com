<template>
  <BaseBox component="div" class="relative w-full h-full py-21">
    <BaseBox class="absolute top-0 left-0 w-full h-full">
      <BaseImage
        src="/background_xs.jpg"
        :width="856"
        :height="1618"
        alt=""
        object-fit="cover"
        :media-query="$mediaQueries.notMd"
      />
      <BaseImage
        src="/background_md.jpg"
        :width="3840"
        :height="2160"
        alt=""
        object-fit="cover"
        :media-query="$mediaQueries.md"
      />
    </BaseBox>
    <BaseBox
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2/3"
    >
      <BaseImage
        src="/full_body.png"
        :width="550"
        :height="1635"
        alt=""
        :full-width="false"
        full-height
      />
    </BaseBox>
    <BaseBox
      component="div"
      class="absolute top-5 left-1/2 -translate-x-1/2 w-screens.xs h-11 px-5"
    >
      <SiteTitle full-height />
    </BaseBox>
    <BaseBox
      component="div"
      class="relative w-screens.xs h-full mx-auto px-5 overflow-auto"
    >
      <Nuxt />
    </BaseBox>
    <BaseBox
      component="div"
      class="absolute bottom-0 left-1/2 -translate-x-1/2"
    >
      <SiteNavigation />
    </BaseBox>
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'DefalutLayout',
})
</script>
