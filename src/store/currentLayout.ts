import { mutationTree } from 'typed-vuex'

export const state = () => ({
  pageContentWidth: 0,
})

type ResourceState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  set(state, value: Partial<ResourceState>) {
    const { pageContentWidth } = value
    if (typeof pageContentWidth !== 'undefined')
      state.pageContentWidth = pageContentWidth
  },
})
