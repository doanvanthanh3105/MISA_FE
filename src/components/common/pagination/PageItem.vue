<template>
  <div
    class="paging-item"
    @click="handleClick"
    :class="currentPage == item ? 'border-gray' : ''"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Number,
    },
    currentPage: {
      type: Number,
    },
  },

  methods: {
    /* 
      xử lý sự kiện click vào item phân trang
      CreatedBy: ĐVThành 18/8/2021
    */
    handleClick() {
      this.$emit('item-click', this.item);
    },
  },

  emits: ['item-click'],
};
</script>

<style></style>
