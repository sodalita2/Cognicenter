<script setup>
import axios from "axios";
import { LoadingPinia } from "../stores/LoadingPinia";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
import { AuthPinia } from "../stores/AuthPinia";



//const Auth = AuthPinia();
const Loading = LoadingPinia();
Loading.isLoading = false;


</script>

<template>
  <!-- Wrapper -->
  <div class="w-full h-auto flex flex-col items-center shadow-headerShadow">
    <!-- Loading Layer -->
    <div v-show="Loading.isLoading" class="absolute h-full w-full bg-[#FF4365] z-10 flex justify-center items-center opacity-40">
      <clip-loader color="#FFB630" size="300px"></clip-loader>
    </div>
    <button class="h-[40px] w-[100px] bg-black text-white"> Clica </button>
  </div>
</template>
