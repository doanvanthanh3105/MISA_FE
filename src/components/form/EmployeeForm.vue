<template>
  <div class="modal" v-show="pageState == 'add-form'" @click="closeComboBox">
    <div
      class="add-container"
      :class="
        warningForm || confirmForm || changeConfirmForm
          ? 'pointer-events-none'
          : ''
      "
    >
      <div class="add-header">
        <div class="add-header-left">
          <div class="header-text">Thông tin nhân viên</div>
          <div class="casual-checkbox">
            <span class="casual-checkbox-input"><input type="checkbox"/></span>
            <span class="casual-checkbox-text">Là khách hàng</span>
          </div>
          <div class="casual-checkbox">
            <span class="casual-checkbox-input"><input type="checkbox"/></span>
            <span class="casual-checkbox-text">Là nhà cung cấp</span>
          </div>
        </div>
        <div class="add-header-right">
          <div class="question-mark-icon" style="margin-right: 6px"></div>
          <div class="x-icon" @click="popChangeConfirmForm"></div>
        </div>
      </div>
      <div class="add-content">
        <div class="upper-content">
          <div class="upper-content-left">
            <div class="flex-row-input">
              <Input
                :employee="currentEmployee"
                fieldName="employeeCode"
                text="Mã"
                type="text"
                :required="true"
                ref="EmployeeCode"
                myClass="w2-5"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
              <Input
                :employee="currentEmployee"
                fieldName="employeeName"
                text="Tên"
                type="text"
                :required="true"
                ref="EmployeeName"
                myClass="w3-5 no-margin-right"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
            </div>
            <div class="flex-row-input">
              <div class="casual-input">
                <div class="custom-select-title-text form-input">
                  Đơn Vị <span style="color: red"> *</span>
                </div>
                <ComboBox
                  :employee="currentEmployee"
                  :array="allDepartments"
                  text="department"
                  :form="true"
                  :required="true"
                  displayText="Đơn Vị"
                  ref="Department"
                  @set-current-employee="setCurrentEmployee"
                  @change="formChange"
                />
              </div>
            </div>
            <div class="flex-row-input">
              <Input
                :employee="currentEmployee"
                fieldName="employeePosition"
                text="Chức Danh"
                type="text"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
            </div>
          </div>
          <div class="upper-content-right">
            <div class="flex-row-input">
              <Input
                :employee="currentEmployee"
                fieldName="dateOfBirth"
                text="Ngày Sinh"
                type="date"
                myClass="w2-5"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
              <div class="casual-input w3-5 no-margin-right">
                <div class="casual-input-text" style="margin-left: 10px">
                  Giới tính
                </div>
                <div class="radio-flex-input">
                  <div class="radio-input">
                    <input
                      type="radio"
                      v-model="male"
                      @click="handleRadioClick(1)"
                    />
                    <div class="radio-input-text">Nam</div>
                  </div>
                  <div class="radio-input">
                    <input
                      type="radio"
                      v-model="female"
                      @click="handleRadioClick(0)"
                    />
                    <div class="radio-input-text">Nữ</div>
                  </div>
                  <div class="radio-input">
                    <input
                      type="radio"
                      v-model="diff"
                      @click="handleRadioClick(2)"
                    />
                    <div class="radio-input-text">Khác</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row-input">
              <Input
                :employee="currentEmployee"
                fieldName="identityNumber"
                text="Số CMND"
                type="text"
                myClass="w3-5"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
              <Input
                :employee="currentEmployee"
                fieldName="identityDate"
                text="Ngày Cấp"
                type="date"
                myClass="w2-5 no-margin-right"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
            </div>
            <div class="flex-row-input">
              <Input
                :employee="currentEmployee"
                fieldName="identityPlace"
                text="Nơi Cấp"
                type="text"
                @set-current-employee="setCurrentEmployee"
                @change="formChange"
              />
            </div>
          </div>
        </div>
        <div class="lower-content">
          <div class="flex-row-input">
            <Input
              :employee="currentEmployee"
              fieldName="address"
              text="Địa Chỉ"
              type="text"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
          </div>
          <div class="flex-row-input">
            <Input
              :employee="currentEmployee"
              fieldName="phoneNumber"
              text="ĐT di động"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
            <Input
              :employee="currentEmployee"
              fieldName="telephoneNumber"
              text="ĐT cố định"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
            <Input
              :employee="currentEmployee"
              fieldName="email"
              text="Email"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
          </div>
          <div class="flex-row-input">
            <Input
              :employee="currentEmployee"
              fieldName="bankAccountNumber"
              text="Tài khoản ngân hàng"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
            <Input
              :employee="currentEmployee"
              fieldName="bankName"
              text="Tên ngân hàng"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
            <Input
              :employee="currentEmployee"
              fieldName="bankBranchName"
              text="Chi nhánh"
              type="text"
              myClass="w1-4"
              @set-current-employee="setCurrentEmployee"
              @change="formChange"
            />
          </div>
        </div>
      </div>
      <div class="add-footer">
        <div class="divide"></div>
        <button
          class="save-button m-btn m-btn-default"
          @click="saveEmployeeAndAdd"
        >
          Cất và thêm
        </button>
        <button
          class="save-button m-btn m-btn-default secondary-btn"
          style="margin-right: 0"
          @click="saveEmployee"
        >
          Cất
        </button>
        <button
          class="cancel-button m-btn m-btn-default secondary-btn"
          @click="returnToPage"
        >
          Hủy
        </button>
      </div>
    </div>
    <WarningForm
      v-show="warningForm"
      @return-to-form="returnToForm"
      :text="warningText"
    />
    <ConfirmForm
      :text="currentEmployee.employeeCode"
      v-show="confirmForm"
      @return-to-form="returnToForm"
    />
    <ChangeConfirmForm
      v-show="changeConfirmForm"
      @abort="returnToForm"
      @no-click="returnToPage"
      @yes-click="saveEmployee"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Input from '../common/Input.vue';
import ComboBox from '../common/combobox/ComboBox.vue';
import employeeService from '../../services/employeeService';
import validate from '../../mixins/validate';
import utils from '../../mixins/utils';
import ConfirmForm from './pop_off_form/ConfirmForm.vue';
import WarningForm from './pop_off_form/WarningForm.vue';
import ChangeConfirmForm from './pop_off_form/ChangeConfirmForm.vue';
export default {
  name: 'EmployeeForm',
  components: { Input, ComboBox, WarningForm, ConfirmForm, ChangeConfirmForm },
  props: {
    currentEmployee: Object,
  },

  mixins: [validate, utils],

  computed: mapGetters(['pageState', 'allDepartments']),

  methods: {
    ...mapActions(['setPageState', 'fetchEmployees']),

    /* 
      đóng combobox khi click ra ngoài
      CreatedBy: ĐVThành 20/8/2021
    */
    closeComboBox() {
      this.$refs.Department.showOption = false;
    },

    /* 
      xử lý khi các input thay đổi
      CreatedBy: ĐVThành 19/8/2021
    */
    formChange(value, fieldName) {
      if (value == undefined || value == null) return;
      if (this.currentEmployee[fieldName] != value.trim()) this.changed = true;
    },

    /* 
      bật form để hỏi lại ng dùng khi form đã bị thay đổi
      CreatedBy: ĐVThành 19/8/2021
    */
    popChangeConfirmForm() {
      if (this.changed == false) {
        this.returnToPage();
        return;
      }
      this.changeConfirmForm = true;
    },

    /* 
      xử lý khi bấm vào các radio
      CreatedBy: ĐVThành 19/8/2021
    */
    handleRadioClick(id) {
      this.changed = true;
      this.male = false;
      this.female = false;
      this.diff = false;
      let employee = { ...this.currentEmployee };
      employee.gender = id;
      this.setCurrentEmployee(employee);
    },

    /* 
      trở lại trang chính và đóng form
      CreatedBy: ĐVThành 19/8/2021
    */
    returnToPage() {
      this.warningForm = false;
      this.confirmForm = false;
      this.changeConfirmForm = false;
      let employee = {};
      this.setCurrentEmployee(employee);
      this.setPageState('page');
      this.fetchEmployees();
    },

    /* 
      set lại nhân viên hiện tại
      CreatedBy: ĐVThành 19/8/2021
    */
    setCurrentEmployee(employee) {
      this.$emit('set-current-employee', employee);
    },

    /* 
      trở lại trang thái form thông thường
      CreatedBy: ĐVThành 19/8/2021
    */
    returnToForm() {
      this.warningForm = false;
      this.confirmForm = false;
      this.changeConfirmForm = false;
      this.setPageState('add-form');
    },

    /* 
      lưu nhân viên 
      CreatedBy: ĐVThành 19/8/2021
    */
    async saveEmployee() {
      this.changeConfirmForm = false;
      // check validate của form
      let check = this.checkValidate();
      if (check !== false) {
        this.warningText = check;
        this.warningForm = true;
        return;
      }
      // check trùng mã
      let duplicate = await employeeService.checkDuplicateCode(
        this.currentEmployee.employeeCode
      );
      // nếu employeeId không có thì là thêm mới, nếu có thì là update
      if (this.currentEmployee.employeeId == undefined) {
        if (duplicate.data == 1) {
          this.confirmForm = true;
          return;
        }
        try {
          await employeeService.Add(this.currentEmployee);
          utils.methods.createToast('Thêm mới nhân viên thành công', 'success');
        } catch (error) {
          console.log(error);
          utils.methods.createToast(
            'Thêm mới nhân viên không thành công',
            'fail'
          );
        }
      } else {
        let temp = await employeeService.getById(
          this.currentEmployee.employeeId
        );
        let employee = temp.data;
        // kiểm tra khi update nêu mã đã tồn tại và không phải là mã của nhân viên hiện tại thì báo lỗi

        if (
          duplicate.data == 1 &&
          this.currentEmployee.employeeCode != employee.employeeCode
        ) {
          this.confirmForm = true;
          return;
        }

        try {
          await employeeService.Update(this.currentEmployee);
          utils.methods.createToast('Cập nhật nhân viên thành công', 'success');
        } catch (error) {
          console.log(error);
          utils.methods.createToast('Cập nhật nhân viên thành công', 'success');
        }
      }
      this.returnToPage();
      this.$emit('reload');
    },

    /* 
      xử lý nút bấm thêm và cất
      CreatedBy: ĐVThành 19/8/2021
    */
    async saveEmployeeAndAdd() {
      let res = await this.saveEmployee();
      if (res == undefined) this.setPageState('add-form');
    },

    /* 
      lấy mã nhân viên mới
      CreatedBy: ĐVThành 19/8/2021
    */
    async getNewCode() {
      let res = await employeeService.getNewEmployeeCode();
      let code = res.data;
      return code;
    },

    /* 
      check validate của form
      CreatedBy: ĐVThành 19/8/2021
    */
    checkValidate() {
      let refArray = Object.keys(this.$refs);

      // validate các input có trường required

      refArray.forEach((item) => {
        this.$refs[item].validateValue();
      });

      // lọc ra các input bị validate lỗi
      let filter = refArray.filter((item) => {
        return this.$refs[item].myError == true;
      });
      console.log(filter);

      // nếu không có gì bị lỗi thì trả về không có lỗi
      if (filter.length == 0) return false;

      // nếu có lỗi thì focus vào ô bị lỗi đầu tiên
      this.$refs[filter[0]].focus();
      return this.$refs[filter[0]].text;
    },
  },

  watch: {
    /* 
      xử lý thay đổi của radio giới tính khi employee hiện tại thay đổi
      CreatedBy: ĐVThành 19/8/2021
    */
    currentEmployee() {
      this.male = false;
      this.female = false;
      this.diff = false;
      if (this.currentEmployee.gender == 0) {
        this.female = null;
      } else if (this.currentEmployee.gender == 1) {
        this.male = null;
      } else if (this.currentEmployee.gender == 2) {
        this.diff = null;
      }
    },

    /* 
      thêm mã và reset lỗi khi mở lại form mới
      CreatedBy: ĐVThành 19/8/2021
    */
    async pageState() {
      // focus vào ô employeecode khi mới vào form
      if (this.pageState == 'add-form') {
        setTimeout(() => {
          this.$refs.EmployeeCode.focus();
          this.changed = false;
        }, 0);
      }

      // nếu thêm mới thì tự sinh employeecode
      if (this.currentEmployee.employeeId == undefined) {
        let employee = { ...this.currentEmployee };
        employee.employeeCode = await this.getNewCode();
        this.setCurrentEmployee(employee);
      }

      let refArray = Object.keys(this.$refs);
      refArray.forEach((item) => {
        this.$refs[item].myError = false;
      });
    },
  },

  data() {
    return {
      confirmForm: false,
      warningForm: false,
      changeConfirmForm: false,
      warningText: '',
      male: false,
      female: false,
      diff: false,
      changed: false,
    };
  },
};
</script>

<style>
@import url('../../css/form/employee_form.css');
@import url('../../css/common/button.css');
@import url('../../css/common/input.css');
@import url('../../css/common/select.css');
@import url('../../css/common/common.css');
</style>
