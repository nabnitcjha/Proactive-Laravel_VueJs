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
     <!-- <router-link to="/chat">Chat</router-link> -->
      <li class="nav-item hand">
        <a class="nav-link">
          <i class="fab fa-fw fa-wpforms"></i>
          <router-link to="/chat">Chat</router-link>
        </a>
      </li>
      
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        Authentication
      </div>
      <li class="nav-item">
        <a class="nav-link collapsed hand"  data-toggle="collapse" data-target="#collapsePage" aria-expanded="true"
          aria-controls="collapsePage">
          <i class="fas fa-fw fa-columns"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePage" class="collapse" aria-labelledby="headingPage" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Authentication Pages</h6>
            <router-link to="/login" class="collapse-item hand"><a>Login</a></router-link>
            <router-link to="/register" class="collapse-item hand"><a>Register</a></router-link>
            <router-link to="/not-found" class="collapse-item hand"><a>404</a></router-link>
          </div>
        </div>
      </li>
    </ul>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
