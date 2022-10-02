import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const app = createApp(App);
store.dispatch("user/onAuthChange");
app.use(store);
app.use(router);
app.use(Toast);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
