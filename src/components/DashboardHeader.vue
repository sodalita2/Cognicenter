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
    <div class="w-full h-[64px] flex flex-row items-center text-white bg-[#EAEAEA]">
        <!-- Small Logo Container -->
        <div class="ml-4 h-full w-[80px] flex justify-center items-center">
            <img src="/Logo.png" class="w-[65px] h-[27px]">
        </div>
        <RouterLink to="/dashboard" class="ml-14 relative group w-[140px] h-full flex justify-center items-center text-[21px]
        text-black font-lexend font-[400] tracking-tight"> 
            Dashboard 
            <div class="absolute bottom-0 w-full h-[3px] bg-[#FF4365] hidden group-hover:flex"></div>
        </RouterLink>
        <RouterLink to="/dashboard/pacientes" class="ml-14 relative group w-[140px] h-full flex justify-center items-center text-[21px]
        text-black font-lexend font-[400] tracking-tight"> 
            Pacientes
            <div class="absolute bottom-0 w-full h-[3px] bg-[#FF4365] hidden group-hover:flex"></div>
        </RouterLink>
        <RouterLink to="/dashboard/calendario" class="ml-14 relative group w-[140px] h-full flex justify-center items-center text-[21px]
        text-black font-lexend font-[400] tracking-tight"> 
            Calendário
            <div class="absolute bottom-0 w-full h-[3px] bg-[#FF4365] hidden group-hover:flex"></div>
        </RouterLink>

        <!-- Name Container -->
        <span class="ml-auto mr-32 relative h-full w-[250px] flex justify-center items-center text-[19px] text-black font-nunito font-[600] cursor-pointer group
        "> 
            Olá, {{ SelectedProfile.Profile_FirstName }} 

            <!-- Profile Dropdown -->
            <div class="hidden flex-col items-center absolute right-0 top-[64px] h-[300px] w-[250px] bg-[#EAEAEA] z-30
            group-hover:flex">

            </div>
        </span>
        
    
    </div>

</template>