<template>
<ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon">
          <img  :src="require('../../../../public/adminTemplate/img/logo/logo_pink_small.jpg').default">
        </div>
        <div class="sidebar-brand-text mx-3">Nabnit</div>
      </a>
      <hr class="sidebar-divider my-0">
      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        Features
      </div>
     <router-link to="/chat">Chat</router-link>
      <!-- <li class="nav-item">
        <a class="nav-link">
          <i class="fab fa-fw fa-wpforms"></i>
          <router-link to="/chat">Chat</router-link>
        </a>
      </li> -->
      
    </ul>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
