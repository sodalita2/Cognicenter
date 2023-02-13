<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import MobileMenuComponent from "./components/MobileMenu.vue";
import { ref } from "vue";
import { useRoute } from 'vue-router';
import { MobileMenuPinia } from "./stores/MobileMenu";
import { LoadingPinia } from "./stores/LoadingPinia";
import LoadingLayer from "./components/LoadingLayer.vue";



//const Auth = AuthPinia();
const Loading = LoadingPinia();
Loading.isLoading = false;


const MobileMenu = MobileMenuPinia();


const PagesToShowHeader = [
    '/',
    '/sobre',
    '/contato',
];

</script>



<template>
  <!-- Loading Layer -->
  <LoadingLayer v-show="Loading.isLoading" />
  <MainHeader v-if="PagesToShowHeader.includes(useRoute().path)" />
  <MobileMenuComponent v-if="MobileMenu.isOpen" />
  <RouterView/>
</template>





