<template>
  <BaseBox
    component="footer"
    :class="[
      'text-base',
      'lg:text-base',
      '3xl:text-xl',
      '4xl:text-2xl',
      {
        'w-full': fullWidth,
        'h-full': fullHeight,
      },
    ]"
  >
    <BaseStack
      component="nav"
      :direction="$accessor.currentScreen.overLg ? 'column' : 'row'"
      :align-items="$accessor.currentScreen.overLg ? 'flex-end' : 'center'"
      :spacing="$accessor.currentScreen.overLg ? 'lg' : 'md'"
      :em-sizing="$accessor.currentScreen.overLg"
      full-height
    >
      <BaseStack
        component="div"
        :direction="$accessor.currentScreen.overLg ? 'column' : 'row'"
        :align-items="$accessor.currentScreen.overLg ? 'flex-end' : 'center'"
        spacing="md"
        :em-sizing="$accessor.currentScreen.overLg"
      >
        <BaseButton
          component="NuxtLink"
          to="/#works"
          :full-width="!$accessor.currentScreen.overLg"
          :text="$accessor.currentScreen.overLg"
        >
          {{
            $accessor.resources.shortTextMap.get('site-navigation-works-link')
          }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#profile"
          :full-width="!$accessor.currentScreen.overLg"
          :text="$accessor.currentScreen.overLg"
        >
          {{
            $accessor.resources.shortTextMap.get('site-navigation-profile-link')
          }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#contact"
          :full-width="!$accessor.currentScreen.overLg"
          :text="$accessor.currentScreen.overLg"
        >
          {{
            $accessor.resources.shortTextMap.get('site-navigation-contact-link')
          }}
        </BaseButton>
      </BaseStack>
      <BaseIconButton
        component="a"
        href="https://soundcloud.com/megumi-tagawa"
        target="_blank"
        rel="noopener noreferrer"
        :size="$accessor.currentScreen.over4xl ? '3.5xl' : '2.5xl'"
        color="info"
      >
        <SoundListIcon
          :size="$accessor.currentScreen.over4xl ? '3.5xl' : '2.5xl'"
        />
      </BaseIconButton>
    </BaseStack>
  </BaseBox>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  fullWidth: boolean
  fullHeight: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteNavigation',

  inheritAttrs: false,

  props: {
    fullWidth: { type: Boolean, default: true },
    fullHeight: { type: Boolean, default: false },
  },
})
</script>
