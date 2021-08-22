<template>
  <div class="custom-select-title" :class="form ? 'form-select-title' : ''">
    <input
      ref="myInput"
      class="custom-select-title-text my-select"
      :placeholder="placeHolder"
      v-on:keyup="handleKeyPress"
      v-model="value"
      @blur="$emit('check-validate')"
      :title="title"
      :readonly="readOnly"
    />
    <div class="custom-select-title-icon center" @click="iconClick">
      <div class="dropdown-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },

  methods: {
    /* 
      emit sự kiện bấm lên xuống của combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    handleKeyPress(e) {
      this.$emit('key-press', e.keyCode);
    },

    /* 
      emit sự kiện khi bấm vào icon dropdown
      CreatedBy: ĐVThành 18/8/2021
    */
    iconClick(e) {
      e.stopPropagation();

      this.$refs.myInput.focus();
      this.$emit('toggle-option');
    },
  },

  watch: {
    /* 
      xử lý bind dữ liệu lên form khi form thay đổi
      CreatedBy: ĐVThành 18/8/2021
    */
    item() {
      if (this.item == undefined) return;
      this.value = this.item[this.text + 'Name'];
    },
    employee() {
      if (this.employee[this.text + 'Id'] == undefined) {
        this.value = '';
        return;
      }
      this.value = this.employee[this.text + 'Name'];
    },

    /* 
      xử lý khi input thay đổi 
      CreatedBy: ĐVThành 18/8/2021
    */
    value() {
      this.$emit('change-value', this.value);
    },
  },

  /* 
    Khởi tạo item đầu tiên cho combobox
    CreatedBy: ĐVThành 18/8/2021
  */
  created() {
    if (this.readOnly == true) {
      this.value = this.startingItem[this.text + 'Name'];
    }
  },

  props: {
    item: Object,
    text: String,
    form: Boolean,
    employee: Object,
    placeHolder: String,
    title: {
      type: String,
      default: '',
    },
    readOnly: {
      default: false,
      type: Boolean,
    },
    startingItem: Object,
  },
};
</script>

<style></style>
