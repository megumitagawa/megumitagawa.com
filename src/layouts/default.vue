<template>
  <BaseBox
    component="div"
    :class="['relative w-full h-full py-21 overflow-hidden', 'lg:py-5']"
  >
    <BaseBox class="absolute top-0 left-0 w-full h-full">
      <BaseImage
        src="/background-xs.jpg"
        :width="856"
        :height="1618"
        alt=""
        object-fit="cover"
        :media-query="$mediaQueries.notLg"
        :rounded="false"
      />
      <BaseImage
        src="/background-lg.jpg"
        :width="3840"
        :height="2160"
        alt=""
        object-fit="cover"
        :media-query="$mediaQueries.lg"
        :rounded="false"
      />
    </BaseBox>
    <BaseBox
      :class="[
        'absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2',
        'w-[calc((var(--vh,100vh)*100_-_theme(spacing.21)*2)*0.9*(550/1635))]',
        'drop-shadow-2xl',
        'lg:right-[calc((100%_-_theme(screens.xs))/2/2)] lg:w-46',
        '3xl:w-57',
        '4xl:w-68',
      ]"
    >
      <BaseImage
        src="/full-body.png"
        :width="550"
        :height="1635"
        alt=""
        :rounded="false"
      />
    </BaseBox>
    <BaseBox
      component="div"
      :class="[
        'absolute top-10.5 right-1/2 translate-x-1/2 -translate-y-1/2',
        'w-screens.xs px-5',
        'lg:top-auto lg:bottom-1/2',
        'lg:right-[calc(theme(screens.xs)+(100%_-_theme(screens.xs))*(5/8))]',
        'lg:translate-x-3.5 lg:-translate-y-28 lg:w-auto lg:px-0',
        'xl:right-[calc(theme(screens.xs)+(100%_-_theme(screens.xs))*(4/6))]',
        'xl:translate-x-5',
      ]"
    >
      <SiteTitle />
    </BaseBox>
    <BaseBox
      component="div"
      class="relative w-screens.xs h-full mx-auto px-5 overflow-auto"
    >
      <Nuxt />
    </BaseBox>
    <BaseBox
      component="div"
      :class="[
        'absolute bottom-10.5 right-1/2 translate-x-1/2 translate-y-1/2',
        'w-screens.xs px-5',
        'lg:top-1/2 lg:bottom-auto',
        'lg:right-[calc(theme(screens.xs)+(100%_-_theme(screens.xs))*(5/8))]',
        'lg:translate-x-3.5 lg:translate-y-0 lg:w-auto lg:px-0',
        'xl:right-[calc(theme(screens.xs)+(100%_-_theme(screens.xs))*(4/6))]',
        'xl:translate-x-5',
      ]"
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
