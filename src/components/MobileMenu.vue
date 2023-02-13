<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import { useRoute } from 'vue-router';
import { MobileMenuPinia } from "../stores/MobileMenu";



const MobileMenu = MobileMenuPinia();


const PagesToShowHeader = [
    '/',
    '/sobre',
    '/contato',
];

</script>



<template>
    <!-- Tem dois Menus Mobile, um para aplicacao geral, sem auth, e outro para o dashboard -->

    <!-- No Auth Pages Container -->
    <div>

    </div>
    <!-- Dashboard Pages Container -->
    <div></div>
</template>





