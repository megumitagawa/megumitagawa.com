<!--
Inspired by MUI
https://mui.com/material-ui/api/backdrop/

MountingPortal should be replace to teleport in Vue3
-->

<template>
  <client-only>
    <MountingPortal mount-to="body" append>
      <component
        :is="component"
        v-show="open"
        class="absolute inset-0 z-10 flex justify-center items-center overflow-hidden bg-white/75"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <slot />
      </component>
    </MountingPortal>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {
  component: string
  open: boolean
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseBackdrop',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    open: { type: Boolean, default: false },
  },
})
</script>
