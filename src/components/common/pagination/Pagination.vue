<template>
  <div class="paging-option center">
    <ComboBox
      style="margin-right: 12px"
      :readOnly="true"
      :array="list"
      text="pageItem"
      :reverse="true"
      :startingItem="currentItem"
      :search="true"
      @search-combobox="setPageSize"
    />
    <div class="backward-text" @click="$emit('single-backward-click')">
      Trước
    </div>
    <div class="backward-buttons">
      <div
        class="paging-item"
        v-show="startPage > 1"
        @click="$emit('full-backward-click')"
      >
        1
      </div>
      <div class="paging-divide-left" v-show="startPage >= 3">...</div>
    </div>
    <div class="paging-list">
      <PageItem
        v-for="item in currentArray"
        :key="item"
        :item="item"
        :currentPage="currentPage"
        @item-click="itemClick"
      />
    </div>
    <div class="forward-buttons">
      <div
        class="paging-divide-right"
        v-show="startPage <= totalPage - maxVisibleSize - 1"
      >
        ...
      </div>
      <div
        class="paging-item"
        v-show="startPage <= totalPage - maxVisibleSize"
        @click="$emit('full-forward-click')"
      >
        {{ totalPage }}
      </div>
    </div>
    <div class="forward-text" @click="$emit('single-forward-click')">Sau</div>
  </div>
</template>

<script>
import ComboBox from '../combobox/ComboBox.vue';
import PageItem from './PageItem.vue';
import { pageItem } from '../../../resource/enum';
export default {
  components: { PageItem, ComboBox },

  data() {
    return {
      currentArray: [],
      list: pageItem,
      currentItem: pageItem[0],
    };
  },

  methods: {
    /* 
      xử lý sự kiện click vào item phân trang để đổi trang
      CreatedBy: ĐVThành 18/8/2021
    */
    itemClick(item) {
      this.$emit('change-current-page', item);
    },

    /* 
      reset lại các item phân trang
      CreatedBy: ĐVThành 18/8/2021
    */
    reset() {
      if (this.totalPage < this.maxVisibleSize) {
        this.currentArray = [];
        for (let i = 0; i < this.totalPage; i++) {
          this.currentArray.push(this.startPage + i);
        }
      } else {
        this.currentArray = [1, 2, 3];
        for (let i = 0; i < this.maxVisibleSize; i++) {
          this.currentArray[i] = this.startPage + i;
        }
      }
    },

    /* 
      xử lý khi thay đổi số nhân viên trên  1 trang
      CreatedBy: ĐVThành 18/8/2021
    */
    setPageSize(item, text) {
      let value = item[text + 'Value'];
      this.$emit('set-page-size', value);
    },
  },

  watch: {
    /* 
      xử lý thay đổi khi tổng số trang thay đổi thi reset lại các item phân trang
      CreatedBy: ĐVThành 18/8/2021
    */
    totalPage() {
      this.reset();
    },

    /* 
      xử lý thay đổi khi trang bắt đầu thay đổi thi reset lại các item phân trang
      CreatedBy: ĐVThành 18/8/2021
    */
    startPage() {
      this.reset();
    },
  },

  /* 
    Khởi tạo các item khi bắt đầu
    CreatedBy: ĐVThành 18/8/2021
  */
  created() {
    this.reset();
  },

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
  },

  emits: ['change-current-page'],
};
</script>

<style></style>
