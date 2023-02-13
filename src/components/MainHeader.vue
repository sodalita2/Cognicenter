<script setup>
import { BIconList, BIconXLg } from 'bootstrap-icons-vue';
import { ref } from 'vue';
import $ from 'jquery';
import { useRoute } from 'vue-router';
import { MobileMenuPinia } from '../stores/MobileMenu';



const MobileMenu = MobileMenuPinia();


const PagesToShowHeader = [
    '/',
    '/sobre',
    '/contato',
];

</script>

<template>
    
    <!-- Header Home + Nao Autenticado (fora do Dashboard) -->
    <!-- ------------------------------------------------- -->
    <div class="w-full h-[80px] bg-white flex flex-row items-center">
        <!-- Logo + ml-28 -->
        <RouterLink to="/" class="h-[60%] ml-28">
            <img src="../assets/Home/CognicenterLogo.png" class="w-full h-full">
        </RouterLink>
        <!-- Navbar Container + FLEX FILL no meio -->
        <div class="h-full flex flex-row flex-1 justify-center items-center">
            <RouterLink to="/sobre" class="m-4 h-full w-auto flex justify-center items-center text-[19px] font-[600] tracking-tighter bg-white"> Sobre </RouterLink>
            <RouterLink to="/contato" class="m-4 h-full w-auto flex justify-center items-center text-[19px] font-[600] tracking-tighter bg-white"> Contato </RouterLink>
        </div>
        <!-- Dashboard Button Container + mr-28 -->
        <div class="h-full w-[300px] flex justify-end items-center mr-28">
            <RouterLink to="/dashboard" class="h-1/2 w-[220px] bg-[#FF4365] text-[#FFF2F1] flex justify-center items-center">
                <img src="../assets/Header/Dashboard.png" class="h-1/2 w-[59%]">
            </RouterLink>
        </div>
    </div>

    <!-- Refazendo header mobile first -->
    <div v-if="PagesToShowHeader.includes(useRoute().path)" class="w-full h-[80px] bg-white hidden flex-row items-center border-2">
        <!-- Logo + ml-28 -->
        <RouterLink to="/" class="h-[60%] ml-2">
            <img src="../assets/Home/CognicenterLogo.png" class="w-full h-full">
        </RouterLink>
        <font-awesome-icon class="text-4xl ml-auto mr-4" icon="fa-solid fa-bars" @click="MobileMenu.isOpen = true" />
    </div>


</template>
