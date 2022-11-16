import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Maska from "maska";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(router).use(vuetify).use(Maska).mount("#app");
