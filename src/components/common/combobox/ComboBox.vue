<template>
  <div class="custom-select form-select no-margin-left" :class="borderClass">
    <Title
      @toggle-option="toggleOption"
      @change-value="changeValue"
      @key-press="handleKeyPress"
      :item="currentItem"
      :text="text"
      :form="form"
      :employee="employee"
      :placeHolder="placeHolder"
      @check-validate="validateValue"
      :title="title"
      :readOnly="readOnly"
      ref="Title"
      :startingItem="startingItem"
    />
    <div
      ref="options"
      class="custom-options"
      :class="showOption ? '' : 'display-none'"
      :style="reverse ? 'top: -120px' : ''"
    >
      <Option
        :class="showOption ? '' : 'display-none'"
        v-for="item in items"
        :key="item[text + 'Id']"
        :item="item"
        :text="text"
        :keyId="currentKeyId"
        @click-option="clickOption"
      />
    </div>
  </div>
</template>

<script>
import Option from './Option.vue';
import Title from './Title.vue';
export default {
  components: { Option, Title },
  data() {
    return {
      currentItem: {},
      showOption: false,
      items: [],
      value: '',
      currentKeyId: '',
      title: '',
      myError: false,
    };
  },

  computed: {
    borderClass() {
      if (this.showOption == true) {
        return 'green-border';
      } else if (this.myError == true) {
        return 'red-border';
      } else {
        return '';
      }
    },
  },

  methods: {
    /* 
      Hàm nhận biết khi người dùng nhập input
      CreatedBy: ĐVThành 18/8/2021 
     */
    changeValue(value) {
      this.value = value;
    },

    /* 
      hàm focus vào ô input trong comnbobox
      CreatedBy: ĐVThành 18/8/2021
     */

    focus() {
      this.$refs.Title.$refs.myInput.focus();
    },

    /* 
      hàm validate giá trị của combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    validateValue() {
      if (this.form == false) return;
      if (this.value.trim() == '') {
        this.title = this.displayText + ' không được để trống';
        this.myError = true;
        return;
      }

      let found = this.array.find((item) => {
        return this.value == item[this.text + 'Name'];
      });

      if (found == undefined) {
        this.title = this.displayText + ' không tồn tại trong dữ liệu';
        this.myError = true;
        return;
      } else {
        this.currentItem = found;
      }

      this.myError = false;
      this.title = '';
      return;
    },

    /*
      xử lý sự kiện hiện các lựa chọn cho combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    toggleOption() {
      this.showOption = !this.showOption;
    },

    /* 
      xử lý sự kiện khi click vào option của combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    clickOption(item) {
      this.items = this.array;
      if (item == null) return;
      this.currentItem = {};
      this.currentItem = item;
      console.log(this.currentItem);
      this.value = this.currentItem[this.text + 'Name'];
      console.log(this.value);
      this.setKeyId(item);
      this.toggleOption();
      if (this.text == 'gender' || this.text == 'workStatus') {
        this.$emit('change', this.value, this.text);
      } else {
        this.$emit('change', this.value, this.text + 'Name');
      }
      this.validateValue();
    },

    /* 
      xử lý sự thay đổi của combobox để set nền xanh cho item đc chọn
      CreatedBy: ĐVThành 18/8/2021
    */
    setKeyId(item) {
      if (item == null) {
        this.currentKeyId = null;
        return;
      }
      this.currentKeyId = item[this.text + 'Id'];
    },

    /* 
      xử lý sự kiện bấm nút lên xuống của combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    handleKeyPress(keyCode) {
      if (this.showOption == false) return;
      let found = this.items.find(
        (item) => item[this.text + 'Id'] == this.currentKeyId
      );
      let index;
      if (found == undefined) {
        index = -1;
      } else {
        index = this.items.indexOf(found);
      }
      if (keyCode == 40) {
        if (index == this.items.length - 1) index = -1;
        this.$refs.options.scrollTop = index * 40;
        this.currentKeyId = this.items[index + 1][this.text + 'Id'];
      }
      if (keyCode == 38) {
        if (index == 0) {
          this.$refs.options.scrollTop = (this.items.length - 1) * 40;
          index = this.items.length;
        } else {
          this.$refs.options.scrollTop = (index - 1) * 40;
        }

        this.currentKeyId = this.items[index - 1][this.text + 'Id'];
      }

      if (keyCode == 13) {
        this.clickOption(found);
      }
    },
  },

  watch: {
    /* 
      set lại data của employee khi combobox thay đổi
      CreatedBy: ĐVThành 18/8/2021
    */
    currentItem: {
      handler: function() {
        if (this.currentItem == undefined) {
          return;
        }
        if (this.form == true) {
          let employee = { ...this.employee };
          if (this.text == 'gender' || this.text == 'workStatus') {
            employee[this.text] = parseInt(this.currentItem[this.text + 'Id']);
          } else {
            employee[this.text + 'Id'] = this.currentItem[this.text + 'Id'];
            employee[this.text + 'Name'] = this.currentItem[this.text + 'Name'];
          }
          console.log(employee);
          this.$emit('set-current-employee', employee);
        }

        if (this.search == true) {
          this.$emit('search-combobox', this.currentItem, this.text);
        }
      },
      deep: true,
    },

    /* 
     bind dữ liệu lên combobox trong form
     CreatedBy: ĐVThành 18/8/2021
    */
    employee() {
      if (this.form == false) return;
      if (this.text == 'gender' || this.text == 'workStatus') {
        if (this.employee[this.text] == undefined) return;
        this.currentItem = this.array.find(
          (item) => item[this.text + 'Id'] == this.employee[this.text]
        );
        return;
      }
      if (this.employee[this.text + 'Id'] == undefined) return;
      this.currentItem = this.array.find(
        (item) => item[this.text + 'Id'] == this.employee[this.text + 'Id']
      );
    },

    /* 
      khởi tạo array lúc đầu của combobox
      CreatedBy: ĐVThành 18/8/2021
    */
    array() {
      this.items = this.array;
    },

    /* 
      xử lý gợi ý của combobox khi value thay đổi
      CreatedBy: ĐVThành 18/8/2021
    */
    value() {
      if (this.value == undefined) {
        return;
      }
      this.$emit('change', this.value, this.text + 'Id');
      if (this.value == '') {
        this.currentItem = {};
        this.items = this.array;
        this.showOption = false;
        this.setKeyId(null);
        if (this.search == true) {
          this.$emit('search-combobox', {}, this.text);
        }
      } else {
        this.items = this.array.filter((item) => {
          try {
            return (
              item[this.text + 'Name']
                .toLowerCase()
                .indexOf(this.value.toLowerCase()) > -1
            );
          } catch (error) {
            console.log(error);
          }
        });

        if (this.items.length > 0) this.showOption = true;
      }

      /* 
        nếu có 1 option được chọn thì đóng gợi ý
        CreatedBy: ĐVThành 18/8/2021
      */
      this.array.forEach((item) => {
        if (
          item[this.text + 'Name'].toLowerCase() == this.value.toLowerCase()
        ) {
          this.items = this.array;
          this.showOption = false;
        }
      });
    },
  },

  props: {
    array: Array,
    text: String,
    form: {
      type: Boolean,
      default: false,
    },
    employee: Object,
    search: {
      type: Boolean,
      default: false,
    },
    placeHolder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    displayText: {
      type: String,
      default: '',
    },

    readOnly: {
      type: Boolean,
      default: false,
    },

    reverse: {
      type: Boolean,
      default: false,
    },

    startingItem: {
      type: Object,
    },
  },

  /* 
    lấy giá trị khởi tạo lúc đầu cho combobox
    CreatedBy: ĐVThành 18/8/2021
  */
  created() {
    this.items = this.array;
    if (this.search == true) {
      this.currentItem = this.startingItem;
      this.value = this.startingItem[this.text + 'Name'];
    }
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
</style>
