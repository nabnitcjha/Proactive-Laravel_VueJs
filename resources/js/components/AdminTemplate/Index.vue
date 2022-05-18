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
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Blank Page</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Pages</li>
              <li class="breadcrumb-item active" aria-current="page">Blank Page</li>
            </ol>
          </div>

          <div class="text-center">
            <img src="img/think.svg" style="max-height: 90px">
            <h4 class="pt-3">save your <b>imagination</b> here!</h4>
          </div>


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
