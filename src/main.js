import { createApp } from "vue";
import { createPinia } from "pinia";
import VueStarRating from "vue-star-rating";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "@/assets/scss/main.scss";

axios.defaults.baseURL = `${import.meta.env.VITE_BACKEND_HOST}`;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("star-rating", VueStarRating.default);

app.mount("#app");
