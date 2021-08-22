/* 
  vuex để kiểm soát các state của web 
  CreatedBy: ĐVThành 19/8/2021
*/

const state = {
  pageState: 'page',
  buttonState: false,
  mouseCoordinates: {
    x: 0,
    y: 0,
  },
};

const getters = {
  pageState: (state) => state.pageState,
  buttonState: (state) => state.buttonState,
  mouseCoordinates: (state) => state.mouseCoordinates,
};

const actions = {
  setPageState({ commit }, pageState) {
    commit('setPageState', pageState);
  },
  setButtonState({ commit }, check) {
    commit('setButtonState', check);
  },

  setMouseCoordinates({ commit }, coordinates) {
    commit('setMouseCoordinates', coordinates);
  },
};

const mutations = {
  setPageState: (state, pageState) => (state.pageState = pageState),
  setButtonState: (state, check) => (state.buttonState = check),
  setMouseCoordinates: (state, coordinates) =>
    (state.mouseCoordinates = coordinates),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
