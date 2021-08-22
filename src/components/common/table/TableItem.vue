<template>
  <tr
    :class="[employee.employeeId == currentId ? 'gray-background' : '']"
    @click="choose"
    @dblclick="popAddForm"
  >
    <td class="outer-column" style="left: 0"></td>
    <td
      class="sticky-column"
      :class="[employee.employeeId == currentId ? 'gray-background' : '']"
    >
      <input type="checkbox" />
    </td>
    <td class="sticky-column" style="left: 62px" fieldName="EmployeeCode">
      {{ employee.employeeCode }}
    </td>
    <td fieldName="FullName">
      {{ employee.employeeName }}
    </td>
    <td fieldName="GenderName">{{ getGenderName }}</td>
    <td fieldName="DateOfBirtd" format="Date">
      {{ formatDate(employee.dateOfBirth, true) }}
    </td>
    <td fieldName="PhoneNumber">{{ employee.identityNumber }}</td>
    <td fieldName="Email">{{ employee.employeePosition }}</td>
    <td fieldName="PositionName">{{ employee.departmentName }}</td>
    <td fieldName="DepartmentName">{{ employee.bankAccountNumber }}</td>
    <td fieldName="Salary">
      {{ employee.bankName }}
    </td>
    <td fieldName="WorkStatus">{{ employee.bankBranchName }}</td>
    <td
      class="sticky-column-right"
      :class="[employee.employeeId == currentId ? 'gray-background' : '']"
    >
      <div class="center">
        <span>Sửa</span>
        <div class="blue-dropdown center" :class="getBorder">
          <span class="blue-dropdown-icon" @click="popButton($event)"></span>
        </div>
      </div>
    </td>
    <td class="outer-column" style="right: 30px"></td>
    <td
      class="outer-column special-column"
      style="right: 0; background-color: #f4f5f8 !important"
    ></td>
  </tr>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import utils from '../../../mixins/utils';
import { gender, workStatus } from '../../../resource/enum';

export default {
  name: 'TableItem',

  mixins: [utils],

  data() {
    return {
      gender: gender,
      workStatus: workStatus,
    };
  },

  computed: {
    ...mapGetters(['buttonState']),

    /* 
      lấy giới tính để hiện lên bảng
      CreatedBy: ĐVThành 18/8/2021
    */
    getGenderName() {
      let temp = this.gender.find((g) => g.genderId == this.employee.gender);
      if (temp == undefined) return null;
      return temp.genderName;
    },

    /* 
      xét xem icon ở ô chức năng có border hay ko
      CreatedBy: ĐVThành 18/8/2021
    */
    getBorder() {
      if (
        this.employee.employeeId == this.currentId &&
        this.buttonState == true
      ) {
        return 'border';
      }
      return '';
    },
  },

  methods: {
    ...mapActions(['setButtonState', 'setMouseCoordinates', 'setPageState']),

    /*
      xử lý khi click vào một nhân viên
       CreatedBy: ĐVThành 18/8/2021
    */
    choose() {
      this.$emit('choose', this.employee);
    },

    /* 
     xử lý khi click đúp vào một nhân viên để hiện form sửa thông tin
      CreatedBy: ĐVThành 18/8/2021
    */

    popAddForm() {
      this.choose();
      this.setPageState('add-form');
    },

    /* 
       xử lý khi click chuột phải vào nhân viên để hiện nút bấm
        CreatedBy: ĐVThành 18/8/2021
    */

    popButton(e) {
      e.preventDefault();
      e.stopPropagation();

      this.choose();
      this.setButtonState(true);
      let coordinates = {
        x: e.target.getBoundingClientRect().x,
        y: e.target.getBoundingClientRect().y,
      };
      this.setMouseCoordinates(coordinates);
    },
  },

  props: {
    employee: Object,
    currentEmployee: Object,
    currentId: String,
  },
};
</script>

<style></style>
