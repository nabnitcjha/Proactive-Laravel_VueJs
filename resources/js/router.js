import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Chat from './components/Features/Chat.vue';

const routes = [
    { path: '/chat', component: Chat },
  ]


  const router = new VueRouter({
    routes:routes,
})

//   const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     // history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
//   })


export default router



