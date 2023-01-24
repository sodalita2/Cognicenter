import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const AuthPinia = defineStore("AuthPinia", () => {

    const isLogged = ref(false);

    const sessionToken = ref("");

    const userID = ref("");

    const userName = ref("");

    function logIn() {
        isLogged.value = !isLogged.value;   
    }


    return { isLogged, sessionToken, userID, userName, logIn };
});
