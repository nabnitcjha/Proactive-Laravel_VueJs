<template>
   <div id="wrapper">
    <!-- Sidebar -->
      <side-bar />
    <!-- Sidebar -->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!-- TopBar -->
          <top-bar />
        <!-- Topbar -->

        <!-- Container Fluid-->
        <div class="container-fluid" id="container-wrapper">
          <router-view></router-view>
        </div>
        <!---Container Fluid-->
      </div>
      <!-- Footer -->
     <footer-component />
      <!-- Footer -->
    </div>
  </div>

</template>

<script>
import Footer from './Footer.vue';
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';
    export default {
      components:{
        'footer-component':Footer,
        'side-bar':Sidebar,
        'top-bar':Topbar
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
