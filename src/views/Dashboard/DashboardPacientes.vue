<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, VueElement, onMounted, toRaw } from "vue";
import { LoadingPinia } from '../../stores/LoadingPinia';


const Loading = LoadingPinia();

Loading.isLoading = false;
</script>

<template>



    <div class="flex flex-1 bg-[yellow]">
        
    </div>
    
</template>