<script setup>
import { BIconEnvelope } from 'bootstrap-icons-vue';

</script>

<template>
    <!-- Wrapper -->
    <div class="w-full h-full flex flex-col items-center">
        <div class="w-[80%] h-[200px] flex justify-center items-center text-[35px] font-[500] tracking-tighter mt-20">
            Se você tiver ideias de jogos ou simplesmente recomendações para a plataforma, sinta-se a vontade para entrar em contato comigo por email.
            Caso você seja um profissional de saúde e tenha interesse em usar a plataforma comercialmente, solicito que peça permissão via email.
        </div>
        <div class="w-[80%] h-[100px] flex flex-row mt-12">
            <span class="h-full w-[28%] flex justify-center items-center text-[4vw]"><BIconEnvelope/></span>
            <a href="mailto:gabriel.bitten59@gmail.com" class="h-full flex flex-1 justify-start items-center text-[3vw]">gabriel.bitten59@gmail.com</a>
        </div>
    </div>
</template>