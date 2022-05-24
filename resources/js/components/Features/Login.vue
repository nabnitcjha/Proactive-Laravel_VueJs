<template>
  <div class="login-page">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form>
      <div class="signup">signup</div>
      <h3>Login</h3>

      <label for="username">Username</label>
      <input
        type="text"
        class="login-signup"
        placeholder="Email or Phone"
        id="username"
        v-model="login.email"
      />

      <label for="password">Password</label>
      <input
        type="password"
        class="login-signup"
        placeholder="Password"
        id="password"
        v-model="login.password"
      />

      <button class="login-btn" @click="userlogin">Log In</button>

      <div class="forget-password" @click.stop="forgetPassword">
        Forget Password?
      </div>
    </form>
  </div>
</template>

<script>
import "./Login.css";
// import { mapGetters , mapActions } from "vuex";

export default {
  data: function () {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    userlogin(e) {
        axios
          .post("/api/login", this.login)
          .then((response) => {
            localStorage.setItem("token", response.data.access_token);
          })
          .catch(function (error) {
            
          });
    },
  },
};
</script>
