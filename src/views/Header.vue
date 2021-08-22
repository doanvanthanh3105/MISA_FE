<template>
  <div class="header" :class="pageState == 'page' ? '' : 'disable-state'">
    <div class="logo-site">
      <div class="logo-box">
        <div class="toggle-icon"></div>
        <div class="amis-logo"></div>
      </div>
    </div>
    <div class="header-toggle-icon"></div>
    <div class="header-restaurant-item">
      <div class="header-restaurant-item-text">
        CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ PHÚC QUY
      </div>
      <div class="icon-dropdown-header"></div>
    </div>
    <div class="header-user-item">
      <div class="header-noti-icon"></div>
      <div class="header-user-item-avatar"></div>
      <div class="header-user-item-name">Doan Van Thanh</div>
      <div class="icon-dropdown-header"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters(['allEmployees', 'pageState']),
};
</script>

<style scoped>
@import url('../css/header/header.css');
@import url('../css/common/select.css');
</style>
