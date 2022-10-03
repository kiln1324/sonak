import { createStore } from "vuex";

export default createStore({
  state: {
    modalState: false,
  },
  getters: {},
  mutations: {
    showModal(state) {
      state.modalState = !state.modalState;
    },
  },
  actions: {},
  modules: {},
});
