import { mutationTree } from 'typed-vuex'

export const state = () => ({
  overLg: false,
})

type ResourceState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  set(state, value: Partial<ResourceState>) {
    const { overLg } = value
    if (typeof overLg !== 'undefined') state.overLg = overLg
  },
})
