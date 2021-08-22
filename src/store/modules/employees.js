import employeeService from '../../services/employeeService';
const state = {
  employees: [],

  paginate: {},
};

const getters = {
  allEmployees: (state) => state.employees,
  newEmployeeCode: (state) => state.newEmployeeCode,
  paginate: (state) => state.paginate,
};

const actions = {
  async fetchEmployees({ commit }) {
    const res = await employeeService.getAll();

    commit('setEmployees', res.data);
  },

  async fetchPaginate({ commit }, paginate) {
    const res = await employeeService.getPagingAndFilter(paginate);

    commit('setPaginate', res.data);
  },
};

const mutations = {
  setEmployees: (state, employees) => (state.employees = employees),

  setPaginate: (state, paginate) => (state.paginate = paginate),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
