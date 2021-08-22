import { dropdownService } from '../../../services/dropdownService';

/* 
  vuex cho department
  CreatedBy: ĐVThành 19/8/2021
*/

const state = {
  departments: [],
};

const getters = {
  allDepartments: (state) => state.departments,
};

const actions = {
  async fetchDepartments({ commit }) {
    const res = await dropdownService.departmentService.getAll();

    commit('setDepartments', res.data);
  },
};

const mutations = {
  setDepartments: (state, departments) => (state.departments = departments),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
