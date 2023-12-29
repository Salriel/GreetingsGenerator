import './style.css'
import App from './App.vue'
import {createApp} from "vue";
import store from "./store/index.js";

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

let vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(vuetify)
    .use(store)
    .mount('#app')
