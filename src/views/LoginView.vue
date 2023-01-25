<script setup>
import { AuthPinia } from "../stores/AuthPinia";
import { ref } from "vue";
import axios from "axios";

const Auth = AuthPinia();

const EsqueciMinhaSenhaOpen = ref(false);

function EsqueciSenhaToggle() {
    EsqueciMinhaSenhaOpen.value = !EsqueciMinhaSenhaOpen.value;
}

const loginEmail = ref(null);
const loginSenha = ref(null);

function Login() {

    // Implementar filtro de input **

    axios.get(`https://api.cognicenter.com.br/Auth.php?email=${loginEmail.value.value}`, {
    params: {
        senha: loginSenha.value.value
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {
        
        console.log(this.$router);

        if ( response.data == "1" ) {
            Auth.logIn();
            console.log(response.data);
            console.log(Auth.isLogged);
        } else if ( response.data == "0" ) {

        } else if ( response.data == "-1" ) {

        }

    })

}

</script>

<template>

    <!-- Wrapper -->
    <div class="w-[100vw] h-[100vh] bg-[#F3F0F0] flex justify-center items-center shadow-headerShadow overflow-hidden">
        <!-- Form Container -->
        <div class="mb-20 w-[70%] h-[80%] bg-white flex flex-col align-center relative">
            <!-- Esqueci Senha Popup (click em esqueci minha senha) -->
            <div v-if="EsqueciMinhaSenhaOpen" class="absolute top-0 left-0 z-10 w-full h-full bg-white flex flex-col justify-center items-center">
                <span @click="EsqueciSenhaToggle()" class="absolute top-4 right-4 h-[55px] w-[55px] bg-[#FF4365] rounded-[90%] flex justify-center items-center text-white text-[32px] font-nunito font-[800] cursor-pointer"> X </span>
            </div>
            <!-- Logo Container -->
            <div class="w-full h-[30%] flex justify-center items-center border-2 border-black">
                <img src="../assets/Login/BiggerLogo.png" class="w-auto h-[50%]">
            </div>
            <!-- Login Title -->
            <div class="w-full h-[5%] flex justify-center items-center text-[21px] font-[500] font-sans tracking-tighter"> login </div>
            <!-- Inputs Container -->
            <div class="w-full h-auto border-[1px] border-black flex flex-col justify-center items-center">
                <input ref="loginEmail" type="text" placeholder="Digite email" class="w-[60%] h-[60px] p-6 rounded-t-lg rounded-b-none border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input ref="loginSenha" type="password" placeholder="Digite senha" class="w-[60%] h-[60px] p-6 rounded-b-lg rounded-t-none border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
            </div>
            <!-- Save Email + Esqueci minha senha Container -->
            <div class="w-full h-[50px] flex flex-row align-center">
                <input ref="SalvarEmailCheckbox" type="checkbox" class="ml-[20%] h-4 w-4 flex self-center rounded-none bg-orange-rgba-verylight border-black outline-none focus:ring-0 focus:ring-black focus:ring-offset-0 focus:bg-orange-rgba-medium checked:bg-orange-rgba-medium"><span class="ml-4 h-full w-auto bg-white text-[18px] font-nunito font-[600] tracking-tighter flex justify-center items-center"> salvar email</span>
                <span @click="EsqueciSenhaToggle()" class="ml-auto mr-[20%] h-full w-auto flex justify-center items-center text-[18px] font-nunito font-[600] tracking-tighter cursor-pointer"> esqueci minha senha </span>
            </div>
            <!-- Entrar Button Container -->
            <button @click="Login()" class="mt-8 w-[60%] h-[80px] flex self-center justify-center items-center bg-[#FF4365] text-white text-[34px] font-[500] font-nunito tracking-tight"> Entrar </button>
        </div>
    </div>

</template>