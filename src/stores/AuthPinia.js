import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const AuthPinia = defineStore("AuthPinia", () => {

    const isLogged = ref(false);

    const sessionToken = ref("");

    const userID = ref("");

    const userEmail = ref("");

    function logIn($userID) {
        isLogged.value = true;
        userID.value = $userID;
    }


    return { isLogged, sessionToken, userID, userEmail, logIn };
});
