import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css.css";

import "./assets/main.css";
import { registerGlobalComponent } from "./utils/inport";
import "./services/common.js";
import vuetify from "./plugins/vuetify";
const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount("#app");
