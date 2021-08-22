<template>
  <div id="app">
    <Navbar />
    <Header />
    <router-view></router-view>
    <Toasts />
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Navbar from './views/Navbar.vue';
import Toasts from './components/common/toast/Toasts.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Toasts,
  },
};
</script>

<style></style>
