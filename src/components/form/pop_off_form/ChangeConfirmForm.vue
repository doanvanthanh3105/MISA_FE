<template>
  <div class="pop-off-form">
    <div class="form-content">
      <div class="blue-question-mark-icon"></div>
      <div class="form-msg">
        Dữ liệu đã bị thay đổi. Bạn có muốn cất không?
      </div>
    </div>
    <div class="divide "></div>
    <div class="warning-form-footer">
      <button
        class="m-btn m-btn-default no-btn secondary-btn"
        @click="$emit('abort')"
      >
        Hủy
      </button>
      <button
        class="m-btn m-btn-default yes-btn"
        style="margin-left: 8px"
        @click="$emit('yes-click')"
      >
        Có
      </button>
      <button
        class="m-btn m-btn-default yes-btn secondary-btn"
        style="background-color: #fff; color: #111; border: 1px solid #c7c7c7;"
        @click="$emit('no-click')"
      >
        Không
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
