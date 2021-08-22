<template>
  <div class="toast shadow">
    <div class="toast-left">
      <div :class="icon" class="toast-icon"></div>
    </div>
    <div class="toast-msg">{{ toast.msg }}</div>
    <div class="toast-right">
      <div class="x-icon toast-icon" @click="removeThisToast"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    toast: Object,
  },

  data() {
    return {
      icon: '',
    };
  },

  methods: {
    ...mapActions(['removeToast']),

    /* 
      lấy icon thích hợp cho toast hiện lên
       CreatedBy: ĐVThành 18/8/2021
    */
    getIcon() {
      if (this.toast.type == 'success') {
        this.icon = 'success-icon';
      }
      if (this.toast.type == 'fail') {
        this.icon = 'danger-icon';
      }
      if (this.toast.type == 'warn') {
        this.icon = 'warning-icon';
      }
    },

    /* 
      xử lý khi ng dùng bấm xóa toast
      CreatedBy: ĐVThành 18/8/2021
    */
    removeThisToast() {
      console.log(this.toast.id);
      this.removeToast(this.toast.id);
    },
  },

  watch: {
    toast() {
      this.getIcon();
    },
  },

  created() {
    this.getIcon();
  },
};
</script>

<style></style>
