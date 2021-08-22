<template>
  <div class="grid grid-employee" :class="loader ? 'disable-state' : ''">
    <table class="my-table" cellspacing="0">
      <thead>
        <tr>
          <th class="outer-column" style="left: 0"></th>
          <th class="sticky-column sticky-column-th width-40">
            <input type="checkbox" />
          </th>
          <th
            class="sticky-column sticky-column-th width-143"
            style="left: 62px"
            fieldName="EmployeeCode"
          >
            MÃ NHÂN VIÊN
          </th>
          <th class="width-250" fieldName="EmployeeName">
            TÊN NHÂN VIÊN
          </th>
          <th class="width-105" fieldName="Gender">GIỚI TÍNH</th>
          <th class="width-150" fieldName="DateOfBirth" format="Date">
            NGÀY SINH
          </th>
          <th class="width-200" fieldName="IdentityNumber">SỐ CMND</th>
          <th class="width-250" fieldName="EmployeePosition">CHỨC DANH</th>
          <th class="width-250" fieldName="DepartmentName">TÊN ĐƠN VỊ</th>
          <th class="width-150" fieldName="BankAccountNumber">SỐ TÀI KHOẢN</th>
          <th class="width-250" fieldName="BankName">TÊN NGÂN HÀNG</th>
          <th class="width-250" fieldName="BankBranchName">
            CHI NHÁNH TÀI KHOẢN NGÂN HÀNG
          </th>
          <th
            class="sticky-column-right"
            style="z-index:1000; right: 46px; color: #000000"
          >
            CHỨC NĂNG
          </th>
          <th class="outer-column" style="right: 30px"></th>
          <th
            class="outer-column special-column"
            style="right: 0; background-color: #f4f5f8 !important"
          ></th>
        </tr>
      </thead>

      <tbody v-if="loader == false">
        <TableItem
          v-for="employee in employees"
          :key="employee.employeeId"
          :employee="employee"
          :currentEmployee="currentEmployee"
          :currentId="currentItemId"
          @choose="choose"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableItem from './TableItem.vue';

export default {
  name: 'Table',
  components: { TableItem },

  data() {
    return {
      currentItemId: '',
    };
  },

  methods: {
    /* 
      xử lý sự kiện click vào 1 nhân viên
      CreatedBy: ĐVThành 18/8/2021
    */
    choose(employee) {
      this.currentItemId = employee.employeeId;
      this.$emit('set-current-employee', employee);
    },
  },
  props: {
    employees: Array,
    loader: Boolean,
    currentEmployee: Object,
  },
};
</script>

<style scoped>
::-webkit-scrollbar-track {
  margin-top: 38px;
}
</style>
