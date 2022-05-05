<template>
  <BaseBackdrop :open="$accessor.backdrop.open">
    <div v-show="$accessor.backdrop.sending">...</div>
    <div v-show="$accessor.backdrop.succeeded">
      {{
        $accessor.resourcesData.longTextMap.get(
          'global-backdrop-submission-success'
        )
      }}
    </div>
    <div v-show="$accessor.backdrop.failed">
      {{
        $accessor.resourcesData.longTextMap.get(
          'global-backdrop-submission-failure'
        )
      }}
    </div>
  </BaseBackdrop>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'GlobalBackdrop',
})
</script>
