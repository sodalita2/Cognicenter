<script setup>
import { ref, VueElement, onMounted, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
import axios from "axios";
import $ from 'jquery';
import { LoadingPinia } from "../stores/LoadingPinia";
import { RouterLink, RouterView } from "vue-router";
import DashboardHeader from "../components/DashboardHeader.vue";
import DashboardNav from "../components/DashboardNav.vue";


function LoadProfiles() {

    axios.get(`https://api.cognicenter.com.br/Auth.php?getprofiles=1&id=${$cookies.get('userID')}`, {          
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then( (response) => {

        if ( Profiles.value.length > 0 ) {

            Profiles.value = [];

        }

        if ( response.data.length > 0 ) {

            response.data.forEach(profile => {
                Profiles.value.push(profile);
            });

        }

        // nao adianta mudar cor dos perfil aqui, pq aqui n foi carregado no DOM ainda

        Loading.isLoading = false;

    })

}

function AddProfile() {

    Loading.isLoading = true;

    axios.put(`https://api.cognicenter.com.br/Auth.php?cadastraprofile=1`, {
    data: {
        PRIMEIRO_NOME: AddProfileInputPrimeiroNome.value.value,
        SOBRENOME: AddProfileInputSobrenome.value.value,
        SENHA_PROFILE: AddProfileInputSenha.value.value,
        COR_PROFILE: AddProfileInputCor.value.value,
        ID_CONTA_CORPORATIVA: $cookies.get('userID'),
    },                      
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'PUT', 'Access-Control-Allow-Origin': '*' }
    }).then( (response) => {

        CloseCadastraProfile();

        LoadProfiles();

        Loading.isLoading = false;
    });

    //texto
}

function OpenCadastraProfile() {
    ProfileStateNow.value = 'CadastraProfiles';
}
function CloseCadastraProfile() {
    ProfileStateNow.value = 'MostraProfiles';
}


// @param => name: String
// @return => String
function GetFirstLetterFromName($name) {

    return ($name.slice(0,1)).toUpperCase();

}



const Loading = LoadingPinia();

//Loading.isLoading = false;

const AddProfileInputPrimeiroNome = ref(null);
const AddProfileInputSobrenome = ref(null);
const AddProfileInputSenha = ref(null);
const AddProfileInputCor = ref(null);



const Profiles = ref([]);

LoadProfiles();

const DashboardStates = ['Perfil','Dashboard'];
const DashboardStateNow = ref('Perfil');

const ProfileStates = ['MostraProfiles','CadastraProfiles'];
const ProfileStateNow = ref('MostraProfiles');

/*onMounted(() => {
    
    var arr = Profiles.value;
    console.log(Object.keys(arr));


});*/

//console.log(Profiles)



</script>

<template>
    <!-- EM ORDEM DE FLUXO PRINCIPAL -->
    <!-- Wrapper de escolher perfil (criar perfil novo e logar automatico) -> Wrapper de Dashboard -->


    <!-- Wrapper DASHBOARD PARA ESCOLHER O PERFIL -->
    <div v-if="DashboardStateNow == 'Perfil'" class="w-full h-full flex flex-col justify-center items-center">
        <!-- Background Overlay -->
        <div class="w-full h-full absolute bg-[#FF4365]"></div>
        <!-- Profiles Container -->
        <div v-if="ProfileStateNow == 'MostraProfiles'" class="w-[90%] h-[400px] flex flex-row justify-center items-start">
            <!-- Perfil Box -->
            <div v-for="profile in Profiles" class="w-[270px] h-[300px] mr-8 flex flex-col rounded-2xl bg-white cursor-pointer">
                <!-- Foto + First name Container -->
                <div class="w-full h-[55%] pt-2 flex flex-col items-center justify-center">
                    <span :id="`Profile${profile.PROFILE_ID}`" v-bind:style="{'background-color': profile.COR_PROFILE}" class="w-[47%] h-[64%] flex justify-center
                    items-center bg-white rounded-[50%] text-white text-[39px] font-nunito font-[800]">
                        {{ GetFirstLetterFromName(profile.PRIMEIRO_NOME) }}
                    </span>
                    <span class="w-full h-[25%] mt-2 flex justify-center items-center text-black text-[23px] font-nunito font-[600]">
                        {{ profile.PRIMEIRO_NOME + " " + profile.SOBRENOME }}
                    </span>
                </div>
            </div>
            <div @click="OpenCadastraProfile()" class="w-[270px] h-[300px] flex flex-col justify-center items-center relative"><!-- border-2 para debuggar outer box -->
                <div class="w-[260px] h-[290px] flex flex-col justify-center items-center rounded-2xl bg-white rounded-2xl
                shadow-black cursor-pointer
                hover:shadow-[0_35px_40px_-15px_rgba(0,0,0,0.9)]
                hover:w-[263px] hover:h-[293px]
                group">
                    <span class="w-[50%] h-[40%] flex justify-center items-center border-black border-2 rounded-[50%]
                    group-hover:h-[42%] group-hover:w-[52%] group-hover:bg-[#FF4365] group-hover:opacity-50">
                    <font-awesome-icon icon="fa-solid fa-plus" class="text-[50px] group-hover:text-white" />
                    </span>
                </div>
            </div>
        </div>

        <!-- Criar Profile Page -->
        <div v-if="ProfileStateNow == 'CadastraProfiles'" class="w-[70%] h-[80%] flex flex-col justify-center items-center bg-white">
            <span @click="CloseCadastraProfile()" class="absolute top-4 right-6 h-[50px] w-[50px] flex justify-center items-center text-black text-[32px] font-nunito font-[800] cursor-pointer"> X </span>
            <span class="w-full h-[70px] flex justify-center items-center font-lexend text-[32px] font-[500] tracking-tight"> Cadastrar Perfil </span>
            <div class="w-[500px] h-[570px] flex  flex-col justify-center items-center rounded-xl border-2 border-grey font-nunito">
                <span class="w-[380px] h-auto text-[19px]"> Primeiro Nome: </span>
                <input ref="AddProfileInputPrimeiroNome" type="text" class="w-[380px] h-[33px] text-[19px] border-[1px] border-black opacity-50 outline-0 pl-[1px] mb-4">
                <span class="w-[380px] h-auto text-[19px]"> Sobrenome: </span>
                <input ref="AddProfileInputSobrenome" type="text" class="w-[380px] h-[33px] text-[19px] border-[1px] border-black opacity-50 outline-0 pl-[1px] mb-4">
                <span class="w-[380px] h-auto text-[19px]"> Senha do perfil: </span>
                <input ref="AddProfileInputSenha" type="password" class="w-[380px] h-[33px] text-[19px] border-[1px] border-black opacity-50 outline-0 pl-[1px] mb-4">
                <span class="w-[380px] h-auto text-[19px]"> Escolha cor do perfil: </span>
                <span class="w-[380px] h-auto flex flex-row">
                    <input ref="AddProfileInputCor" type="color" value="#FFB630" class="h-[50px] w-[70px]">
                </span>
                <div @click="AddProfile()" class="mt-6 w-[380px] h-[50px] flex justify-center items-center bg-[#FF4365] text-white
                text-[26px] font-[700] font-nunito tracking-tight cursor-pointer"> Criar Perfil </div>
            </div>
        </div>


    </div>


    <!-- Wrapper DASHBOARD COM PERFIL ESCOLHIDO -->
    <div v-if="DashboardStateNow == 'Dashboard'" class="w-full h-full flex flex-col">
        <DashboardHeader/>
        <!-- View de Navegacao Container -->
        <div class="w-full flex flex-1 flex-row">
            <DashboardNav/>
            <RouterView/>
        </div>
    </div>

</template>