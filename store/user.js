export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  removeToken(state) {
    state.token = null;
  }
};
