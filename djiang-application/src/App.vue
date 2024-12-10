<template>
  <div id="app">
    <!-- Header -->
    <DjHeader />
    <!-- Main Content -->
    <main>
      <router-view />
    </main>
    <!-- Footer -->
    <DjFooter />
  </div>
</template>

<script>
import DjHeader from './components/DjHeader.vue';
import DjFooter from './components/DjFooter.vue';
export default {
  components: {
    DjHeader,
    DjFooter,
  },
};
</script>

<style>
/* 引入全局样式 */
@import './assets/css/reset.css';
@import './assets/css/common.css';
@import './assets/css/jquery.bxslider.css';
@import './assets/css/notosansjapanese.css';
@import './assets/css/bootstrap.css';
@import './assets/css/animate.css';
@import './assets/css/style.css';
</style>
