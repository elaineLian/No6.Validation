<template>
  <div id="app">
    <div class="content mx-auto">
      <div class="bar mx-auto"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './assets/css/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';

#app {
  font-family: $Title-font, $font-family-base;
  width: 100%;
  min-height: 100vh;
  background: $white;
  .content {
    max-width: 1024px;
    .bar {
      max-width: 460px;
      height: 6px;
      background: $blue;
      margin-bottom: 50px;
    }
  }
}
</style>
