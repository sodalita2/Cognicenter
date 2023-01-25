<script setup>
import { AuthPinia } from "../stores/AuthPinia";
import axios from "axios";

const Auth = AuthPinia();




</script>

<template>
  <!-- Wrapper -->
  <div class="w-full h-auto flex flex-col items-center shadow-headerShadow">
    <button class="h-[40px] w-[100px] bg-black text-white"> Clica </button>
  </div>
</template>
