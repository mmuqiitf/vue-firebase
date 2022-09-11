import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
