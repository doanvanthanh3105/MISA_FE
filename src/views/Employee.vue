<template>
  <div class="main-container" @click="pageClick">
    <Content
      :class="pageState == 'page' ? '' : 'disable-state'"
      @set-current-employee="setCurrentEmployee"
      ref="Content"
      :currentEmployee="currentEmployee"
      :employees="allEmployees"
    />
    <PopOffButton
      @delete-btn-click="popDeleteForm"
      @duplicate-employee="duplicateEmployee"
    />
    <DeleteForm
      :currentEmployee="currentEmployee"
      :class="pageState == 'delete-form' ? '' : 'display-none'"
      @yes-click="yesClickHandle"
      @no-click="cancelDeleteForm"
    />
    <EmployeeForm
      :currentEmployee="currentEmployee"
      @set-current-employee="setCurrentEmployee"
      @reload="reload"
    />
  </div>
</template>

<script>
import Content from '../components/employee/content/Content.vue';
import { mapGetters, mapActions } from 'vuex';
import PopOffButton from '../components/common/PopOffButton.vue';
import DeleteForm from '../components/form/pop_off_form/DeleteForm.vue';
import EmployeeForm from '../components/form/EmployeeForm.vue';
import employeeService from '../services/employeeService';
import utils from '../mixins/utils';
export default {
  components: { PopOffButton, Content, DeleteForm, EmployeeForm },
  name: 'Employee',

  computed: mapGetters(['allEmployees', 'pageState', 'paginate']),

  mixins: [utils],

  methods: {
    ...mapActions([
      'fetchEmployees',
      'setButtonState',
      'setPageState',
      'deleteEmployee',
      'fetchPaginate',
      'addToast',
      'removeToast',
      'fetchDepartments',
    ]),

    /* 
      xử lý việc reload
      CreatedBy: ĐVThành 19/8/2021
    */
    reload() {
      if (this.pageState == 'page') {
        this.$refs.Content.reload();
      }
    },

    /* 
      set lại employee hiện tại
      CreatedBy: ĐVThành 19/8/2021
    */
    setCurrentEmployee(employee) {
      this.currentEmployee = employee;
    },

    /* 
      xử lý khi click vào trang thi hủy dropdown-menu
      CreatedBy: ĐVThành 19/8/2021
    */

    pageClick() {
      this.setButtonState(false);
    },

    /* 
      hiện form xóa
      CreatedBy: ĐVThành 19/8/2021
    */
    popDeleteForm() {
      this.setPageState('delete-form');
    },

    /* 
      xóa nhân viên
      CreatedBy: ĐVThành 19/8/2021
    */
    async yesClickHandle() {
      // goi api xoa nhan vien dc luu trong currentEmployee

      try {
        await employeeService.Delete(this.currentEmployee.employeeId);
        utils.methods.createToast('Xóa nhân viên thành công', 'success');
      } catch {
        utils.methods.createToast('Xóa nhân viên không thành công', 'fail');
      }

      this.setPageState('page');
      let employee = {};
      this.setCurrentEmployee(employee);

      this.reload();
    },

    /*
      Không xóa nhân viên và đóng form
      CreatedBy: ĐVThành 19/8/2021s 
     */
    cancelDeleteForm() {
      this.setPageState('page');
      let employee = {};
      this.setCurrentEmployee(employee);
    },

    /* 
      hàm xử lý việc nhân bản nhân viên
      CreatedBy: ĐVThành 19/8/2021
    */
    async duplicateEmployee() {
      let employee = { ...this.currentEmployee };
      let res = await employeeService.getNewEmployeeCode();
      let code = res.data;
      employee.employeeCode = code;
      employee.employeeId = undefined;
      this.setCurrentEmployee(employee);
      this.setPageState('add-form');
    },
  },

  data() {
    return {
      currentEmployee: {},
    };
  },

  props: {
    disabled: Boolean,
  },
  emits: ['pop-employee-form', 'reload'],

  created() {
    this.fetchEmployees();
    this.fetchDepartments();
  },
};
</script>

<style>
@import '../css/common/main.css';
@import '../css/common/common.css';
@import '../css/form/pop_off_form.css';
</style>
