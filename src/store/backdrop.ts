import { getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({
  open: false,
  status: 'sending',
})

type BackdropState = ReturnType<typeof state>

export const getters = getterTree(state, {
  sending(state) {
    return state.status === 'sending'
  },

  succeeded(state) {
    return state.status === 'succeeded'
  },

  failed(state) {
    return state.status === 'failed'
  },
})

export const mutations = mutationTree(state, {
  set(state, value: Partial<BackdropState>) {
    const { open, status } = value
    if (typeof open !== 'undefined') state.open = open
    if (typeof status !== 'undefined') state.status = status
  },
})
