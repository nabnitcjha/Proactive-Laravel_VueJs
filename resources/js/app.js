require('./bootstrap');

window.Vue = require('vue').default;

import Vue from "vue";
import App from "./components/RouterComponent.vue";


const app = new Vue({
    el: '#app',
    render: h => h(App)
});
