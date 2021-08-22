/* 
  vuex cho việc kiểm soát code
  CreatedBy: ĐVThành 19/8/2021
*/
const state = {
  toasts: [],
};

const getters = {
  allToasts: (state) => state.toasts,
};

const actions = {
  addToast({ commit }, toast) {
    commit('addToast', toast);
  },
  removeToast({ commit }, id) {
    commit('removeToast', id);
  },
};

const mutations = {
  addToast: (state, toast) => state.toasts.push(toast),
  removeToast: (state, id) => {
    state.toasts = state.toasts.filter((toast) => toast.id != id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
