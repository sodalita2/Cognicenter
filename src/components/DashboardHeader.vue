<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, VueElement, onMounted, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import $ from 'jquery';
import { SelectedProfilePinia } from "../stores/SelectProfilePinia";



const SelectedProfile = SelectedProfilePinia();

</script>

<template>

    <!-- Wrapper -->
    <div class="w-full h-[60px] flex flex-row items-center text-white bg-[#EAEAEA]">
        <!-- Small Logo Container -->
        <div class="h-full w-[60px] flex justify-center items-center">
            <img src="/Logo.png" class="w-[76%] h-[40%]">
        </div>
        <RouterLink to="" class="ml-14 relative group w-[140px] h-full flex justify-center items-center text-[21px] text-black font-lexend font-[600]"> 
            Dashboard 
            <div class="absolute bottom-0 w-full h-[2px] bg-black hidden group-hover:flex"></div>
        </RouterLink>

        <!-- Name + Options Container -->
        <div class="ml-auto mr-2 h-full w-[200px] flex items-center">
            <span class="h-full w-auto flex items-center text-[19px] text-black font-nunito font-[600] cursor-pointer"> Olá, {{ SelectedProfile.Profile_FirstName }} </span>
            <span class="ml-8 h-full w-auto flex items-center text-[20px] text-black font-nunito font-[800] cursor-pointer"> Sair </span>
        </div>
    </div>

</template>