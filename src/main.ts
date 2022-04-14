import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store";
import { globalRegister } from "@/globalUi/index";

import "./assets/css/index.less";
import "normalize.css";

const app = createApp(App);
app.use(store);
// app.use(router);
/** 按需引入ui */
app.use(globalRegister);

app.mount("#app");
