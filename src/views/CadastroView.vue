<script setup>
import { ref, VueElement } from "vue";
import { useRouter, useRoute } from "vue-router";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
import axios from "axios";
import { LoadingPinia } from "../stores/LoadingPinia";





const Loading = LoadingPinia();
Loading.isLoading = false;




const loginEmail = ref(null);
const loginSenha = ref(null);

const router = useRouter();




function Login() {

    // Implementar filtro de input **

    axios.get(`https://api.cognicenter.com.br/Auth.php?email=${loginEmail.value.value}`, {
    params: {
        senha: loginSenha.value.value
    },                      
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {

        if ( SalvarEmailCheckbox.checked && !$cookies.isKey("savedEmail") ) {
            $cookies.set('savedEmail', loginEmail.value.value);
        }

        if ( response.data["code"] == "1" ) {
            $cookies.set('sessionToken', response.data["token"]);
            $cookies.set('userID', response.data["userID"]);
            Loading.isLoading = true;
            router.push({path: '/dashboard'});
        } else if ( response.data == "0" ) {

        } else if ( response.data == "-1" ) {

        }

    })

}



</script>

<template>

    <!-- Wrapper -->
    <div class="w-[100vw] h-full min-h-[600px] bg-[#F3F0F0] flex justify-center items-center shadow-headerShadow overflow-hidden">
        <!-- Loading Layer -->
         

        
        <!-- Form Container -->
        <div class="mb-20 w-[70%] h-[80%] bg-white flex flex-col align-center relative">

            <!-- Logo Container -->
            <div class="w-full h-[250px] flex justify-center items-center">
                <img src="../assets/Login/BiggerLogo.png" class="w-auto h-[125px]">
            </div>
            <!-- Cadastro Title -->
            <div class="w-full h-[5%] flex justify-center items-center text-[21px] font-[500] font-sans tracking-tighter"> cadastro </div>
            <!-- Inputs Container -->
            <div class="w-full h-auto flex flex-col justify-center items-center">
                <input ref="loginEmail" type="text" placeholder="Email" class="w-[60%] h-[60px] mb-2 p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input ref="cadastroSenha" type="password" placeholder="Crie uma senha" class="w-[60%] h-[60px] mb-2 p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input ref="confirmaSenha" type="password" placeholder="Confirme a senha" class="w-[60%] h-[60px] mb-10 p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input ref="cadastroNome" type="text" placeholder="Nome da conta" class="w-[60%] h-[60px] mb-2 p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <span class="w-[60%] h-[80px] flex flex-wrap text-[14px] font-[500] text-[#db2344] font-lexend tracking-tighter">
                    * Nome da empresa / corporação, caso seja uma conta pessoal, seu nome, ou se preferir, deixe em branco.
                </span>
            </div>
            <!-- Cadastrar Button Container -->
            <button @click="Login()" class="w-[60%] h-[80px] flex self-center justify-center items-center bg-[#FF4365]
            text-white text-[35px] font-[700] font-nunito tracking-tight"> Criar conta </button>

            <!-- Criar Conta Button Container -->
            <div class="w-full min-h-[60px] flex flex-1 justify-center items-center">
                <RouterLink to="/login" class="text-[21px] font-[400]"> Já possui uma conta? Entre aqui </RouterLink>
            </div>
        </div>
    </div>

</template>