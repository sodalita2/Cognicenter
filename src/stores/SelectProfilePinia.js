import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const SelectedProfilePinia = defineStore("SelectedProfilePinia", () => {

    const Profile_ID = ref('');
    
    const Profile_FirstName = ref('');


    return { Profile_ID, Profile_FirstName };
});
