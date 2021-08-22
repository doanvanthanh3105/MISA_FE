import Vuex from 'vuex';
import Vue from 'vue';

import employees from './modules/employees';
import commonState from './modules/commonState';
import departments from './modules/dropdown/departments';
// import positions from './modules/dropdown/positions';
import toasts from './modules/toasts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employees,
    commonState,
    departments,
    // positions,
    toasts,
  },
});
