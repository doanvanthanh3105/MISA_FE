<template>
  <div class="filter-bar">
    <div class="filter-left"></div>
    <div class="filter-right">
      <input
        class="icon-search"
        type="text"
        placeholder="Tim kiem theo ma, Ten nhan vien"
        style="height: 30px; padding-left: 10px; width: 240px; margin-right: 12px"
        v-model="value"
      />
      <div class="icon-refresh" @click="$emit('reload')"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['allDepartments']),
  methods: {
    ...mapActions(['fetchEmployees', 'fetchDepartments']),
  },

  data() {
    return {
      value: '',
    };
  },

  watch: {
    /* 
      xử lý khi ô search thay đổi thì emit sự kiện search
      CreatedBy: ĐVThành 19/8/2021
    */
    value() {
      this.$emit('search-value', this.value);
    },
  },

  created() {},
};
</script>

<style></style>
