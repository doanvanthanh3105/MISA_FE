<template>
  <div class="paging-bar">
    <div class="paging-bar-left">
      Tổng số: <span style="font-family: Notosans-bold">{{ total }}</span> bản
      ghi
    </div>
    <Pagination
      :startPage="startPage"
      :totalPage="totalPage"
      :maxVisibleSize="maxVisibleSize"
      :currentPage="currentPage"
      @change-current-page="changeCurrentPage"
      @single-forward-click="$emit('single-forward-click')"
      @single-backward-click="$emit('single-backward-click')"
      @full-backward-click="$emit('full-backward-click')"
      @full-forward-click="$emit('full-forward-click')"
      @set-page-size="setPageSize"
    />
    <td class="outer-column" style="right: 30px; height: 56px"></td>
    <td
      class="outer-column special-column"
      style="right: 0; height: 56px; background-color: #f4f5f8 !important"
    ></td>
  </div>
</template>

<script>
import Pagination from '../../common/pagination/Pagination.vue';
export default {
  components: { Pagination },

  props: {
    startPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 21,
    },
    maxVisibleSize: {
      type: Number,
      default: 4,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    /* 
      xử lý sự kiện đổi trang
      CreatedBy: ĐVThành 19/8/2021
    */
    changeCurrentPage(item) {
      this.$emit('change-current-page', item);
    },

    /* 
      xử lý sự kiện đổi kich thước trang
      CreatedBy: ĐVThành 19/8/2021
    */
    setPageSize(value) {
      this.$emit('set-page-size', value);
    },
  },
  emits: [
    'change-current-page',
    'single-forward-click',
    'single-backward-click',
  ],
};
</script>

<style></style>
