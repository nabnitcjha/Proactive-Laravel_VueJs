import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Chat from './components/Features/Chat/Chat.vue';
import Login from './components/Features/Authentication/Login.vue';
import Register from './components/Features/Authentication/Register.vue';
import NotFound from './components/Features/Authentication/NotFound.vue';

const routes = [
    { path: '/chat', component: Chat },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/not-found', component: NotFound },
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



