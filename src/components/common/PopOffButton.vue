<template>
  <div
    class="dbl-click"
    v-show="buttonState"
    v-bind:style="{
      left: corX + 'px',
      top: corY + 'px',
    }"
  >
    <ul class="dropdown-menu">
      <li>
        <span
          class="dropdown-menu-item-text"
          @click="$emit('duplicate-employee')"
          >Nhân bản</span
        >
      </li>
      <li>
        <span class="dropdown-menu-item-text" @click="$emit('delete-btn-click')"
          >Xóa</span
        >
      </li>
      <li><span class="dropdown-menu-item-text">Ngưng sử dụng</span></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['buttonState', 'mouseCoordinates']),
    corX() {
      return this.mouseCoordinates.x - 80;
    },
    corY() {
      return this.mouseCoordinates.y + 10;
    },
  },

  methods: {
    ...mapActions(['setButtonState', 'setPageState']),

    /* 
      emit sự kiện bấm delete một nhân viên
      CreatedBy: ĐVThành 18/8/2021
    */
    deleteEmployee() {
      console.log('delete');
      this.$emit('delete-btn-click');
    },
  },
};
</script>

<style>
@import url('../../css/common/pop_off_button.css');
@import url('../../css/common/button.css');
</style>
