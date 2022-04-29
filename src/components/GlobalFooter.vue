<template>
  <div>
    <div>
      <NuxtLink to="/#works">
        {{
          $accessor.resourcesData.shortTextMap.get('global-footer-works-link')
        }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/#profile">
        {{
          $accessor.resourcesData.shortTextMap.get('global-footer-profile-link')
        }}
      </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/#contact">
        {{
          $accessor.resourcesData.shortTextMap.get('global-footer-contact-link')
        }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'GlobalFooter',
})
</script>
