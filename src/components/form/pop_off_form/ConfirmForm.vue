<template>
  <div class="pop-off-form">
    <div class="form-content">
      <div class="warn-icon"></div>
      <div class="form-msg">
        Mã nhân viên <span>&lt;</span>{{ text }}<span>&gt;</span> đã tồn tại
        trong hệ thống, vui lòng kiểm tra lại
      </div>
    </div>
    <div class="divide "></div>
    <div class="warning-form-footer">
      <button
        class="m-btn m-btn-default yes-btn"
        @click="$emit('return-to-form')"
      >
        Đồng ý
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style></style>
