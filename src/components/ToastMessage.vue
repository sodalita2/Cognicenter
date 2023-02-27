<script setup>
import { ref } from 'vue';
import $ from 'jquery'

const props = defineProps({ title: String, message: String, type: String, stayOnScreen: Boolean });

const toast = ref(null);

const backgroundColors = {
    "alert": "#A94442",
};




</script>

<template>

    <!-- Toast Container -->
    <div v-bind:style="{backgroundColor: backgroundColors[type]}" class="absolute top-[40px] left-[40px] h-[70px] w-[210px] flex flex-col text-[whitesmoke] z-30 rounded-[4px]">
        <!-- Title -->
        <div class="h-[30px] w-full flex items-center pl-1 text-[18px] font-[200] tracking-tight"> {{ props.title }} </div>
        <!-- Message -->
        <div class="w-full flex flex-1 items-center pl-1 text-[19px] font-[400] tracking-tighter"> {{ props.message }} </div>
    </div>

</template>