<template>
  <div class="pop-off-form">
    <div class="form-content">
      <div class="icon-msg"></div>
      <div class="form-msg">{{ text }} không được để trống</div>
    </div>
    <div class="divide "></div>
    <div class="warning-form-footer">
      <button
        class="m-btn m-btn-default close-btn"
        @click="$emit('return-to-form')"
      >
        Đóng
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
