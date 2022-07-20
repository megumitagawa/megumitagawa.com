import { mutationTree } from 'typed-vuex'

export const state = () => ({
  overLg: false,
  over4xl: false,
})

type ResourceState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  set(state, value: Partial<ResourceState>) {
    const { overLg, over4xl } = value
    if (typeof overLg !== 'undefined') state.overLg = overLg
    if (typeof over4xl !== 'undefined') state.over4xl = over4xl
  },
})
