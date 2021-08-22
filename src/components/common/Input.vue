<template>
  <div class="casual-input" :class="myClass">
    <div class="casual-input-text">
      <span>{{ text }}</span>
      <span :class="required ? '' : 'display-none'">
        <span style="color: red"> *</span></span
      >
    </div>
    <input
      :title="myError ? text + ' không được để trống' : ''"
      @blur="validateValue"
      :type="type"
      :class="type == 'number' ? 'text-align-right' : ''"
      v-bind:style="
        myError ? 'border: 1px solid red;' : 'border: 1px solid #c7c7c7;'
      "
      ref="myInput"
      v-model="value"
    />
  </div>
</template>

<script>
import utils from '../../mixins/utils';
import { mapGetters, mapActions } from 'vuex';
import validate from '../../mixins/validate';

export default {
  name: 'Input',
  mixins: [utils, validate],
  props: {
    type: String,
    text: String,
    employee: Object,
    fieldName: String,
    required: {
      type: Boolean,
      default: false,
    },
    myClass: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      value: null,
      myError: false,
    };
  },

  methods: {
    ...mapActions(['addToast', 'removeToast']),

    /* 
      xử lý focus vào ô input
      CreatedBy: ĐVThành 18/8/2021
    */
    focus() {
      this.$refs.myInput.focus();
    },

    /* 
      validate ô input không được nhập rỗng
      CreatedBy: ĐVThành 18/8/2021
    */
    validateValue() {
      switch (this.fieldName) {
        case 'employeeCode':
          if (validate.validateNotNull(this.value)) {
            this.myError = true;
          } else {
            this.myError = false;
          }
          break;
        case 'employeeName':
          if (validate.validateNotNull(this.value)) {
            this.myError = true;
          } else {
            this.myError = false;
          }
          break;

        default:
          break;
      }

      /* 
        nếu không có lỗi thì emit thay đổi lên form
      */
      if (this.myError == false) {
        let employee = { ...this.employee };
        if (this.type == 'date') {
          if (this.value == 'NaN-0NaN-0NaN') {
            employee[this.fieldName] = new Date();
          } else {
            employee[this.fieldName] = this.value;
          }
        } else {
          employee[this.fieldName] = this.value;
        }
        this.$emit('set-current-employee', employee);
      }
    },
  },

  watch: {
    /* 
      lấy data để bind dữ liệu lên form
      CreatedBy: ĐVThành 18/8/2021
    */
    employee() {
      if (this.type == 'date') {
        if (this.employee[this.fieldName] == undefined) this.value = null;
        let value = utils.methods.formatDate(this.employee[this.fieldName]);
        this.value = value;
      } else {
        this.value = this.employee[this.fieldName];
      }
    },

    /* 
      emit lên form khi input thay đổi
      CreatedBy: ĐVThành 18/8/2021
    */
    value() {
      this.$emit('change', this.value, this.fieldName);

      let employee = { ...this.employee };

      employee[this.fieldName] = this.value;

      this.$emit('set-current-employee', employee);
    },
  },

  computed: mapGetters(['pageState']),
};
</script>

<style scoped></style>
