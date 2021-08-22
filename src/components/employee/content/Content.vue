<template>
  <div class="content">
    <ContentHeader
      @pop-employee-form="$emit('pop-employee-form')"
      @set-current-employee="setCurrentEmployee"
    />
    <div class="main-content">
      <FilterBar @reload="reload" @search-value="searchValue" />

      <Table
        :loader="loader"
        v-bind:employees="paginate.data"
        @set-current-employee="setCurrentEmployee"
        :currentEmployee="currentEmployee"
      />
      <Loader v-if="loader == true" />
      <Footer
        :total="paginate.totalRecord"
        :startPage="startPage"
        :totalPage="totalPage"
        :maxVisibleSize="maxVisibleSize"
        :currentPage="currentPage"
        @change-current-page="changeCurrentPage"
        @single-forward-click="singleForwardClick"
        @single-backward-click="singleBackwardClick"
        @full-backward-click="fullBackwardClick"
        @full-forward-click="fullForwardClick"
        @set-page-size="setPageSize"
      />
    </div>
  </div>
</template>

<script>
import ContentHeader from './ContentHeader.vue';
import FilterBar from './FilterBar.vue';
import Footer from './Footer.vue';
import Table from '../../common/table/Table.vue';
import { mapGetters, mapActions } from 'vuex';
import Loader from '../../common/Loader.vue';
import { LOADING_DURATION } from '../../../resource/const';
export default {
  name: 'Content',
  components: { ContentHeader, FilterBar, Table, Footer, Loader },
  props: {
    employees: Array,
    currentEmployee: Object,
  },
  emits: ['change-current-page'],

  computed: {
    ...mapGetters(['paginate', 'allEmployees']),
  },

  data() {
    return {
      startPage: 1,
      totalPage: 21,
      pageSize: 10,
      maxVisibleSize: 3,
      currentPage: 1,
      currentFilter: '',
      loader: true,
    };
  },

  methods: {
    ...mapActions([
      'fetchPaginate',
      'addToast',
      'removeToast',
      'fetchEmployees',
    ]),

    /* 
      set lại employee hiện được chọn
      CreatedBy: ĐVThành 19/8/2021
    */
    setCurrentEmployee(employee) {
      this.$emit('set-current-employee', employee);
    },

    /* 
      lấy dữ liệu phân trang từ trên server
      CreatedBy: ĐVThành 19/8/2021
    */
    async fetchPaginateData(paginate) {
      this.loader = true;
      const beginFetch = Date.now();
      console.log(paginate);
      await this.fetchPaginate(paginate);

      const endFetch = Date.now();
      console.log(this.paginate);
      let time;
      if (endFetch - beginFetch < LOADING_DURATION) {
        time = LOADING_DURATION - (endFetch - beginFetch);
      } else {
        time = endFetch - beginFetch;
      }
      setTimeout(() => {
        this.loader = false;
      }, time);
    },

    /* '
      xử lý việc bấm vào 1 item phân trang
      CreatedBy: ĐVThành 19/8/2021
    */
    changeCurrentPage(item) {
      this.currentPage = item;
    },

    /* 
      xử lý việc bấm trang trước
      CreatedBy: ĐVThành 19/8/2021
    */
    singleBackwardClick() {
      if (this.currentPage == 1) {
        return;
      }
      if (this.currentPage == this.startPage) {
        this.startPage -= 1;
        this.currentPage = this.startPage;
      } else {
        this.currentPage -= 1;
      }
    },

    /* 
      xử lý việc bấm trang sau
      CreatedBy: ĐVThành 19/8/2021
    */
    singleForwardClick() {
      if (this.currentPage == this.totalPage) {
        return;
      }

      if (this.currentPage == this.startPage + this.maxVisibleSize - 1) {
        this.startPage += 1;
        this.currentPage = this.startPage + this.maxVisibleSize - 1;
      } else {
        this.currentPage += 1;
      }
    },

    /* 
      xử lý việc trở về trang đầu
      CreatedBy: ĐVThành 19/8/2021
    */
    fullForwardClick() {
      this.startPage = Math.max(this.totalPage - this.maxVisibleSize + 1, 1);
      this.currentPage = this.totalPage;
    },

    /* 
      xử lý việc đến trang cuối cùng
      CreatedBy: ĐVThành 19/8/2021
    */
    fullBackwardClick() {
      this.startPage = 1;
      this.currentPage = 1;
    },

    /* 
      xử lý việc tìm kiếm theo tên và mã nv
      CreatedBy: ĐVThành 19/8/2021
    */
    searchValue(value) {
      this.currentFilter = value;
    },

    /* 
      xử lý việc thay đổi kich thước trang
      CreatedBy: ĐVThành 19/8/2021
    */
    setPageSize(value) {
      this.pageSize = value;
    },

    /* 
      gọi dữ liệu trên server và trả về theo các thông tin hiện tại của trang
      CreatedBy: ĐVThành 19/8/2021
    */
    async search() {
      let paginate = {
        pageSize: this.pageSize,
        pageNumber: this.currentPage,
        employeeFilter: this.currentFilter,
      };
      await this.fetchPaginateData(paginate);
      console.log(this.paginate.totalPage);
      this.totalPage = this.paginate.totalPage;
    },

    /* 
      load lại trang
      CreatedBy: ĐVThành 19/8/2021
    */
    reload() {
      this.search();
    },
  },

  watch: {
    paginate: {
      handler() {
        this.totalPage = this.paginate.totalPage;
      },
      deep: true,
    },

    /* 
      gọi dữ liệu trên server và trả về theo các thông tin hiện tại của trang
      CreatedBy: ĐVThành 19/8/2021
    */
    currentPage() {
      this.search();
    },
    currentFilter() {
      this.search();
    },
    pageSize() {
      this.search();
    },
  },

  created() {
    this.search();
  },
};
</script>

<style>
@import url('../../../css/content/content.css');
@import url('../../../css/common/button.css');
@import url('../../../css/common/icon.css');
@import url('../../../css/common/input.css');
@import url('../../../css/common/table.css');
</style>
