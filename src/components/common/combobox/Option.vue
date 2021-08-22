<template>
  <div
    class="custom-option"
    @click="clickOption"
    :class="item[text + 'Id'] == keyId ? 'green-background' : ''"
  >
    <div class="custom-option-text">{{ item[text + 'Name'] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    text: String,
    keyId: String,
  },

  methods: {
    /* 
      emit sự kiện khi click vào 1 option
      CreatedBy: ĐVThành 18/8/2021
    */
    clickOption() {
      this.$emit('click-option', this.item);
    },
  },
};
</script>

<style></style>
