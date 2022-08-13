<template>
  <Fragment>
    <BaseBox
      :class="[
        'fixed top-0 left-0 w-full h-screen',
        // To hide image resizing in iOS >= 15.4
        'h-large-screen',
      ]"
    >
      <BaseImage
        src="/img/background-xs.jpg"
        :width="856"
        :height="1618"
        alt=""
        preload
        object-fit="cover"
        :media="$mediaQueries.notLg"
        :rounded="false"
      />
      <BaseImage
        src="/img/background-lg.jpg"
        :width="3840"
        :height="2160"
        alt=""
        preload
        object-fit="cover"
        :media="$mediaQueries.lg"
        :rounded="false"
      />
    </BaseBox>
    <BaseBox
      :class="[
        'fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2',
        'w-[calc((theme(height.screen)_-_theme(spacing.21)*2)*0.9*(550/1635))]',
        // To avoid SiteNavigation overlapping with full body image in iOS >= 15.4
        'w-[calc((theme(height.dynamic-screen)_-_theme(spacing.21)*2)*0.9*(550/1635))]',
        'drop-shadow-2xl transition-sizes-opacity duration-1000',
        'lg:right-[calc((theme(inset.full)_-_theme(screens.xs))/2/2)] lg:w-46',
        '3xl:w-57',
        '4xl:w-68',
        {
          'opacity-0': !fullBodyImageActive,
          'opacity-100': fullBodyImageActive,
        },
      ]"
    >
      <BaseImage
        src="/img/full-body.png"
        :width="550"
        :height="1635"
        alt=""
        preload
        :rounded="false"
      />
    </BaseBox>
    <BaseBox
      component="div"
      :class="[
        'fixed top-10.5 right-1/2 z-10 translate-x-1/2 -translate-y-1/2',
        'w-screens.xs px-5',
        'lg:top-auto lg:bottom-1/2',
        'lg:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(5/8))]',
        'lg:translate-x-3.5 lg:-translate-y-28 lg:w-auto lg:px-0',
        'xl:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(4/6))]',
        'xl:translate-x-5',
      ]"
    >
      <SiteTitle />
    </BaseBox>
    <BaseBox
      component="div"
      :class="['w-screens.xs mx-auto px-5 py-21', 'lg:py-5']"
    >
      <Nuxt />
    </BaseBox>
    <BaseBox
      component="div"
      :class="[
        'fixed bottom-10.5 right-1/2 z-10 translate-x-1/2 translate-y-1/2',
        'w-screens.xs px-5',
        'lg:top-1/2 lg:bottom-auto',
        'lg:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(5/8))]',
        'lg:translate-x-3.5 lg:translate-y-0 lg:w-auto lg:px-0',
        'xl:right-[calc(theme(screens.xs)+(theme(inset.full)_-_theme(screens.xs))*(4/6))]',
        'xl:translate-x-5',
      ]"
    >
      <SiteNavigation />
    </BaseBox>
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'
import { theme } from '@/../tailwind.config'
import { wait } from '@/models/Milliseconds'

type Data = {
  fullBodyImageActive: boolean
}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'DefalutLayout',

  data() {
    return {
      fullBodyImageActive: false,
    }
  },

  created() {
    this.$accessor.currentLayout.set({
      pageContentWidth:
        parseFloat(theme.extend.width['screens.xs']) -
        parseFloat(theme.extend.fontSize['px-base']) *
          parseFloat(theme.extend.spacing[5]) *
          2,
    })
  },

  async mounted() {
    // To hide image resizing when updating viewport
    await wait(this.$config.indexFullBodyImageDelay)
    this.fullBodyImageActive = true
  },
})
</script>
