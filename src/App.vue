<template>
  <div id="app">
    <NavBar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/Global/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
@import './sass/global/fonts';
@import './sass/global/variables';
@import './sass/global/global';
@import './sass/global/scrollbar';
@import './sass/global/global_classes';
@import './sass/global/bootstrap_mod';
@import './sass/global/animation';

body {
    background-color: $light-color;
}

a {
  transition: $main-transition;
  text-decoration: none;
  color: $main-color;

  &:hover {
    color: $first-main-color;
  }

  &.router-link-exact-active {
    color: $first-main-color;
    font-weight: 800 !important;
  }
}

</style>
