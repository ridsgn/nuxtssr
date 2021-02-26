export const state = () => ({
  data: ""
})

export const mutations = {
  setRedirect(state, data) {
    state.data = data
  },
}
