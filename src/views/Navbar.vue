<template>
  <div class="navbar" :class="pageState == 'page' ? '' : 'disable-state'">
    <div class="navbar-assets">
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-money"></div>
        <div class="nav-item-text">Tiền mặt</div>
      </div>
      <router-link
        to="/employee"
        class="nav-item"
        :class="$route.name == 'Employee' ? 'border-green' : ''"
      >
        <div class="nav-item-icon icon-bank"></div>
        <div class="nav-item-text">Tiền gửi</div>
      </router-link>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-sell"></div>
        <div class="nav-item-text">Mua hàng</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-cart"></div>
        <div class="nav-item-text">Bán hàng</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-manage"></div>
        <div class="nav-item-text">Quản lý hóa đơn</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-storage"></div>
        <div class="nav-item-text">Kho</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-tool"></div>
        <div class="nav-item-text">Công cụ dụng cụ</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-car"></div>
        <div class="nav-item-text">Tài sản cố định</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-tax"></div>
        <div class="nav-item-text">Thuế</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-price"></div>
        <div class="nav-item-text">Giá thành</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-book"></div>
        <div class="nav-item-text">Tổng hợp</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-budget"></div>
        <div class="nav-item-text">Ngân sách</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </div>
      <div class="nav-item" @click="popWarning">
        <div class="nav-item-icon icon-analyze"></div>
        <div class="nav-item-text">Phân tích tài chính</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import utils from '../mixins/utils';
export default {
  name: 'Navbar',
  props: {},
  computed: mapGetters(['allEmployees', 'pageState']),
  mixins: [utils],
  methods: {
    ...mapActions(['addToast', 'removeToast']),

    /* 
      hiện lên tính năng đang đc phát triển khi bấm vào các navbar chưa đc hoàn thiện
      CreatedBy: ĐVThành 19/8/2021
    */
    popWarning() {
      utils.methods.createToast('Tính năng đang được phát triển', 'warn');
    },
  },
};
</script>

<style scoped>
@import '../css/navbar/navbar.css';
</style>
