<script setup>
import { AuthPinia } from "../stores/AuthPinia";
import axios from "axios";

const Auth = AuthPinia();

function Login() {

  axios.get('https://api.cognicenter.com.br/Auth.php?email=gabrielwb90@gmail.com', {
    params: {
      senha: "teste1234"
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).then( (response) => {
    console.log(response.data);
  })

}


</script>

<template>
  <!-- Wrapper -->
  <div class="w-full h-auto flex flex-col items-center shadow-headerShadow">
    <button class="h-[40px] w-[100px] bg-black text-white" @click="Login()"> Clica </button>
  </div>
</template>
