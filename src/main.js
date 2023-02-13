import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";

import "./assets/main.css";
import "../src/tailwind.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars ,faPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
library.add(faBars,faPlus);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookies, { expires: '5d' });
app.component('font-awesome-icon', FontAwesomeIcon);


app.mount("#app");
