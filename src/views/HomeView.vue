<script setup>
import axios from "axios";
import { LoadingPinia } from "../stores/LoadingPinia";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"




//const Auth = AuthPinia();
const Loading = LoadingPinia();
Loading.isLoading = false;


</script>

<template>
  <!-- Wrapper -->
  <div class="w-full h-auto flex flex-col items-center shadow-headerShadow">
    

    <div class="w-full h-[600px] flex flex-row justify-center items-center">
      <!-- Banner Texto -->
      <div class="w-[55%] h-[70%] flex flex-col items-center mr-6">
        <span class="w-full h-auto flex text-[36px] font-lexend font-[800] purple-linear">
          Estimulação cognitiva para uso profissional
        </span>
        <span class="w-full h-auto mt-10 flex font-[500] text-[19px]">
          A Cognicenter é uma plataforma administrativa
          para profissionais de saúde que trabalham com
          reabilitação cognitiva em seus pacientes.
        </span>
        <RouterLink to="/cadastro" class="w-[400px] h-[65px] flex self-start mt-auto mb-32 justify-center items-center bg-[rgba(255,182,48,0.7)] border-[1px] border-black">
          Começe a usar hoje gratuitamente!
        </RouterLink>
      </div>
      <!-- Banner Image -->
      <div class="w-[25%] h-[70%]">
        <img class="w-full h-full rounded-2xl pointer-events-none" src="/Home/Banner.jpg">
      </div>
    </div>
    
    
  </div>
</template>
