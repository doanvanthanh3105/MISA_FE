<template>
  <div class="pop-off-form">
    <div class="form-content">
      <div class="warn-icon"></div>
      <div class="form-msg">
        Bạn có thực sự muốn xóa nhân viên
        <br />
        <span
          ><span>&lt;</span>{{ currentEmployee.employeeCode
          }}<span>&gt;</span> không?</span
        >
      </div>
    </div>
    <div class="divide "></div>
    <div class="warning-form-footer">
      <button
        class="m-btn m-btn-default no-btn secondary-btn"
        @click="$emit('no-click')"
      >
        Không
      </button>
      <button class="m-btn m-btn-default yes-btn" @click="$emit('yes-click')">
        Có
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentEmployee: {
      type: Object,
    },
  },
};
</script>

<style></style>
