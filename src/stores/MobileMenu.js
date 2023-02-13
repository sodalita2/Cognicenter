import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const MobileMenuPinia = defineStore("MobileMenu", () => {

    const isOpen = ref(false);


    return { isOpen };
});
