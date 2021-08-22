<template>
  <div class="header-content">
    <div class="title">Nhân viên</div>
    <div class="content-feature">
      <button @click="onAdd()" class="m-btn m-icon-btn m-btn-default add-btn">
        <div class="btn-text">Thêm mới nhân viên</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(['pageState']),

  methods: {
    ...mapActions(['setPageState']),

    /* 
      hiện form mới khi bấm thêm nhân viên
      CreatedBy: ĐVThành 19/8/2021
    */
    async onAdd() {
      let employee = {};

      this.$emit('set-current-employee', employee);
      this.setPageState('add-form');
    },
  },
};
</script>

<style scoped></style>
