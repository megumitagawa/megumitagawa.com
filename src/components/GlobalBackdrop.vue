<template>
  <BaseBackdrop component="div" :open="$accessor.backdrop.open">
    <BaseBox v-show="$accessor.backdrop.sending" component="p">...</BaseBox>
    <BaseBox v-show="$accessor.backdrop.succeeded" component="p">
      {{
        $accessor.resources.longTextMap.get(
          'global-backdrop-submission-success'
        )
      }}
    </BaseBox>
    <BaseBox v-show="$accessor.backdrop.failed" component="p">
      {{
        $accessor.resources.longTextMap.get(
          'global-backdrop-submission-failure'
        )
      }}
    </BaseBox>
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

  inheritAttrs: false,
})
</script>
