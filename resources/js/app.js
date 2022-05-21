require('./bootstrap');

window.Vue = require('vue').default;

import Vue from "vue";
// import App from "./components/RouterComponent.vue";
import AdminIndex from "./components/AdminTemplate/index.vue";
Vue.component('admin-index', require('./components/AdminTemplate/index.vue').default);

import router from './router';
const app = new Vue({
    el: '#app',
    data: function() {
        return {
            burgerMenuShow:false,
        };
    },
    comments:{
        // 'admin-index':AdminIndex
    },
    router,
    methods:{
        toggleClassRemoveOrAdd() {
            this.burgerMenuShow = !this.burgerMenuShow;
            if(this.burgerMenuShow){
                document.getElementById("page-top").classList.add("sidebar-toggled");
                document.getElementById("accordionSidebar").classList.add("toggled");
            }else{
                let sideTogle = document.querySelectorAll(".sidebar-toggled");
                sideTogle.forEach(function (a) {
                a.classList.remove("sidebar-toggled");
                });
                let togle = document.querySelectorAll(".toggled");
                togle.forEach(function (a) {
                a.classList.remove("toggled");
                });
            }
          },
    },
    // render: h => h(App)
});
