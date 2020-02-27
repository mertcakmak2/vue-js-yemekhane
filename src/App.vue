<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    'app-navbar': navbar
  }
}
</script>

<style>

</style>
