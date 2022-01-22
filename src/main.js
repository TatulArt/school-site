import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import router from "./router";

createApp(App).use(router).mount("#app");
