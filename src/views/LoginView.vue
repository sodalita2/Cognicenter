<script setup>
import { ref, VueElement, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import axios from "axios";
import { LoadingPinia } from "../stores/LoadingPinia";
import ToastMessage from "../components/ToastMessage.vue";
import $ from 'jquery';



const Loading = LoadingPinia();
Loading.isLoading = false;


const loginEmail = ref(null);
const loginSenha = ref(null);

const router = useRouter();

const SalvarEmailCheckbox = ref(null);

// TOAST    #####################
const toast = ref(null);
const ToastOptions = ref({
    title: "",
    message: "",
    type: "",
    stayOnScreen: true,
});
const ToastShow = ref(false);
// ################################

const EsqueciMinhaSenhaOpen = ref(false);

function EsqueciSenhaToggle() {
    console.log(SalvarEmailCheckbox.value.checked);
    EsqueciMinhaSenhaOpen.value = !EsqueciMinhaSenhaOpen.value;
}


function Login() {

    Loading.isLoading = true;

// Implementar filtro de input **

    axios.get(`https://api.cognicenter.com.br/Auth.php?email=${loginEmail.value.value}`, {
    params: {
        senha: loginSenha.value.value
    },                      
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {

        if ( SalvarEmailCheckbox.value.checked && !$cookies.isKey("savedEmail") ) {
            $cookies.set('savedEmail', loginEmail.value.value);
        }

        if ( response.data["code"] == "1" ) {
            $cookies.set('sessionToken', response.data["token"]);
            $cookies.set('userID', response.data["userID"]);
            router.push({path: '/dashboard'});
        } else if ( response.data == "0" ) {
            Loading.isLoading = false;
            ToastOptions.value.title = "Aviso";
            ToastOptions.value.message = "Senha incorreta!";
            ToastOptions.value.type = "alert";
            ToastOptions.value.stayOnScreen = false;
            $(toast.value).css("animation", "ToastFlyIntoScreen 0.4s");
            ToastShow.value = true;
            setTimeout(() => {
                ToastShow.value = false;
            }, 3000);
        } else if ( response.data == "-1" ) {
            Loading.isLoading = false;
            ToastOptions.value.title = "Aviso";
            ToastOptions.value.message = "Email não cadastrado!";
            ToastOptions.value.type = "alert";
            ToastOptions.value.stayOnScreen = false;
            $(toast.value).css("animation", "ToastFlyIntoScreen 0.4s");
            ToastShow.value = true;
            setTimeout(() => {
                ToastShow.value = false;
            }, 3000);
        }

    })

}



//const $cookies = inject('$cookies');
//console.log($cookies.isKey('sessionToken'));

onMounted( () => {

    // CHECAGENS AFTER RENDER
    if ( $cookies.isKey("savedEmail") ) {
        loginEmail.value.value = $cookies.get("savedEmail");
        SalvarEmailCheckbox.value.checked = true;
    }


});




</script>

<template>

    <!-- Wrapper -->
    <div class="w-[100vw] h-full min-h-[600px] bg-[#F3F0F0] flex justify-center items-center shadow-headerShadow overflow-hidden relative">
        <!-- Toast Container -->
        <ToastMessage ref="toast" v-if="ToastShow" :title="ToastOptions.title" :message="ToastOptions.message" :type="ToastOptions.type" :stay-on-screen="ToastOptions.stayOnScreen" />


        
        <!-- Form Container -->
        <div class="mb-20 w-[70%] h-[80%] bg-white flex flex-col align-center relative">
            <!-- Esqueci Senha Popup (click em esqueci minha senha) -->
            <div v-if="EsqueciMinhaSenhaOpen" class="absolute top-0 left-0 z-10 w-full h-full bg-white flex flex-col justify-center items-center">
                <span @click="EsqueciSenhaToggle()" class="absolute top-4 right-4 h-[55px] w-[55px] bg-[#FF4365] rounded-[90%] flex justify-center items-center text-white text-[32px] font-nunito font-[800] cursor-pointer"> X </span>
            </div>
            <!-- Logo Container -->
            <div class="w-full h-[250px] flex justify-center items-center">
                <img src="../assets/Login/BiggerLogo.png" class="w-auto h-[125px]">
            </div>
            <!-- Login Title -->
            <div class="w-full h-[5%] flex justify-center items-center text-[21px] font-[500] font-sans tracking-tighter"> login </div>
            <!-- Inputs Container -->
            <div class="w-full h-auto flex flex-col justify-center items-center">
                <input ref="loginEmail" type="text" placeholder="Digite email" class="w-[60%] h-[60px] mb-2 p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
                <input ref="loginSenha" type="password" placeholder="Digite senha" class="w-[60%] h-[60px] p-6 rounded-sm border-[rgba(0, 0, 0, 0.6)] border-[1px] outline-none text-[20px] font-nunito font-[600] focus:border-orange-rgba-lighter">
            </div>
            <!-- Save Email + Esqueci minha senha Container -->
            <div class="w-full h-[50px] flex flex-row align-center">
                <input ref="SalvarEmailCheckbox" type="checkbox" class="ml-[20%] h-4 w-4 flex self-center rounded-none bg-orange-rgba-verylight border-black outline-none focus:ring-0 focus:ring-black focus:ring-offset-0 focus:bg-orange-rgba-medium checked:bg-orange-rgba-medium"><span class="ml-4 h-full w-auto bg-white text-[18px] font-nunito font-[600] tracking-tighter flex justify-center items-center"> salvar email</span>
                <span @click="EsqueciSenhaToggle()" class="ml-auto mr-[20%] h-full w-auto flex justify-center items-center text-[18px] font-nunito font-[600] tracking-tighter cursor-pointer"> esqueci minha senha </span>
            </div>
            <!-- Entrar Button Container -->
            <button @click="Login()" class="mt-8 w-[60%] h-[80px] flex self-center justify-center items-center bg-[#FF4365] text-white text-[34px] font-[500] font-nunito tracking-tight"> Entrar </button>

            <!-- Criar Conta Button Container -->
            <div class="w-full min-h-[60px] flex flex-1 justify-center items-center">
                <RouterLink to="/cadastro"> Ainda não possui conta? Cadastre-se </RouterLink>
            </div>
        </div>
    </div>

</template>