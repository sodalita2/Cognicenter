<script setup>
import { AuthPinia } from "../stores/AuthPinia";
import axios from "axios";

const Auth = AuthPinia();

</script>

<template>

    <!-- Wrapper -->
    <div class="w-[100vw] h-[100vh] bg-[#F3F0F0] flex justify-center items-center shadow-headerShadow overflow-hidden">
        <!-- Form Container -->
        <div class="mb-20 w-[70%] h-[80%] bg-white flex flex-col align-center">
            <!-- Logo Container -->
            <div class="w-full h-[30%] flex justify-center items-center border-2 border-black">
                <img src="../assets/Login/BiggerLogo.png" class="w-auto h-[50%]">
            </div>
            <!-- Login Title -->
            <div class="w-full h-[5%] flex justify-center items-center text-[21px] font-[500] font-sans tracking-tighter"> login </div>
            <!-- Inputs Container -->
            <div class="w-full h-auto border-[1px] border-black flex flex-col justify-center items-center">
                <input id="loginEmail" type="text" placeholder="Digite email" class="w-[60%] h-[60px] p-6 rounded-t-lg rounded-b-none border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input id="loginSenha" type="password" placeholder="Digite senha" class="w-[60%] h-[60px] p-6 rounded-b-lg rounded-t-none border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
            </div>
            <!-- Save Email + Esqueci minha senha Container -->
            <div class="w-full h-[50px] flex flex-row align-center">
                <input type="checkbox" class="ml-4 h-4 w-4 flex self-center rounded-none bg-orange-rgba-verylight border-black outline-none focus:ring-0 focus:ring-black focus:ring-offset-0 focus:bg-orange-rgba-medium checked:bg-orange-rgba-medium"><span class="ml-4 h-full w-auto bg-white text-[18px] font-nunito font-[600] tracking-tighter flex justify-center items-center"> salvar email</span>
            </div>
        </div>
    </div>

</template>