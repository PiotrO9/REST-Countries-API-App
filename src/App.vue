<template>
  <AppNav />
  <router-view></router-view>
</template>

<script setup lang="ts">
import AppNav from './components/AppNav.vue';
</script>

<style scoped lang="css">
[data-theme='dark'] {
  background-color: #333;
  color: #fff;
}
</style>