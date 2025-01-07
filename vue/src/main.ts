import "./assets/main.css";
import "zone.js";
import "@angular/core";
import "@angular/platform-browser";
import * as angularBtn from "../public/angular-button-lib";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
