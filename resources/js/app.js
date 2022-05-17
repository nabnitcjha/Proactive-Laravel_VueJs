require('./bootstrap');

window.Vue = require('vue').default;

import Vue from "vue";
import App from "./components/RouterComponent.vue";


const app = new Vue({
    el: '#app',
    data: function() {
        return {
            burgerMenuShow:false,
        };
    },
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
    render: h => h(App)
});
