import axios from "axios";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";



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

export default Login;