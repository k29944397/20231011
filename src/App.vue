<script setup>
import HomeView from './views/HomeView.vue';
import VtextAndVModel from './components/VtextAndVModel.vue';
import Vfor from './views/Vfor.vue';
import Header from "./views/Header.vue"
import {RouterLink,RouterView} from 'vue-router'
</script>

<template>
  <div class="headerShow">
    <Header />
  </div>
  <!-- <HomeView />
  <VtextAndVModel />
  <Vfor /> -->
  <div class="contentShow">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.headerShow{
  width: 100vw;
  height: 15vh;
}
</style>
