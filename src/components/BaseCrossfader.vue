<template>
  <Fragment>
    <slot />
  </Fragment>
</template>

<script lang="ts">
import Vue from 'vue'

type UndefinedableEl = Element | undefined

type Data = {
  // timeoutId: ReturnType<typeof setTimeout>
}
type Methods = {
  crossfade(nextIndex: number): void
}
type Computed = {}
type Props = {
  component: string
  initialIndex: number
  duration: number
}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'BaseCrossfader',

  inheritAttrs: false,

  props: {
    component: { type: String, default: 'span' },
    initialIndex: { type: Number, default: 0 },
    duration: {
      validator: (value) => typeof value === 'number' && value > 0,
      default() {
        return this.$config.basePublicBaseCrossfaderDuration
      },
    },
  },

  data() {
    return {
      // timeoutId: 0,
    }
  },

  mounted() {
    this.$slots.default?.forEach((vNode) => {
      if (!vNode.elm) return
      const childEl = vNode.elm as HTMLElement
      childEl.classList.add('transition-opacity', 'ease-in-out', 'opacity-0')
      childEl.style.transitionDuration = `${this.duration}ms`
    })
    this.crossfade(this.initialIndex)
  },

  // beforeDestroy() {},

  methods: {
    crossfade(nextIndex) {
      const childNodeList = this.$slots.default
      if (!childNodeList) return
      const childrenLength = childNodeList.length
      const currentIndex = nextIndex ? nextIndex - 1 : childrenLength - 1
      const currentChildEl = childNodeList[currentIndex].elm as UndefinedableEl
      const nextChildEl = childNodeList[nextIndex].elm as UndefinedableEl
      if (!currentChildEl || !nextChildEl) return
      currentChildEl.classList.add('opacity-0')
      currentChildEl.classList.remove('z-10')
      nextChildEl.classList.add('z-10')
      nextChildEl.classList.remove('opacity-0')
      const indexAfterNext = nextIndex + 1 < childrenLength ? nextIndex + 1 : 0
      setTimeout(this.crossfade.bind(this, indexAfterNext), this.duration)
    },
  },
})
</script>
