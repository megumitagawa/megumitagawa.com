<template>
  <BaseBox
    component="footer"
    :class="['w-full text-base', 'lg:text-gray', '3xl:text-xl', '4xl:text-2xl']"
  >
    <BaseStack
      component="nav"
      :direction="{ xs: 'row', lg: 'column' }"
      :align-items="{ xs: 'center', lg: 'flex-end' }"
      :spacing="{ xs: 'md', lg: 'sm', '3xl': 'md', '4xl': 'lg' }"
    >
      <BaseStack
        component="div"
        :direction="{ xs: 'row', lg: 'column' }"
        :align-items="{ xs: 'center', lg: 'flex-end' }"
        :spacing="{ xs: 'md', lg: '3xs', '3xl': '2xs', '4xl': 'xs' }"
      >
        <BaseButton
          component="NuxtLink"
          to="/#works"
          color="inherit"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          inherited-font-size
        >
          {{
            $accessor.resources.shortTextMap.get('site-navigation-works-link')
          }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#profile"
          color="inherit"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          inherited-font-size
        >
          {{
            $accessor.resources.shortTextMap.get('site-navigation-profile-link')
          }}
        </BaseButton>
        <BaseButton
          component="NuxtLink"
          to="/#contact"
          color="inherit"
          :full-width="{ xs: true, lg: false }"
          :text="{ xs: false, lg: true }"
          inherited-font-size
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
        :size="{ xs: '2.5xl', '4xl': '3.5xl' }"
        color="info"
        :blurred="false"
      >
        <SoundListIcon
          :size="{ xs: '2.5xl', '4xl': '3.5xl' }"
          color="inherit"
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
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'SiteNavigation',

  inheritAttrs: false,
})
</script>
