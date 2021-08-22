<template>
  <div class="allToasts">
    <Toast v-for="toast in allToasts" :key="toast.id" :toast="toast" />
  </div>
</template>

<script>
import Toast from './Toast.vue';
import { mapGetters } from 'vuex';
export default {
  components: { Toast },

  computed: mapGetters(['allToasts']),
};
</script>

<style>
@import '../../../css/common/toast.css';
@import '../../../css/common/common.css';
</style>
