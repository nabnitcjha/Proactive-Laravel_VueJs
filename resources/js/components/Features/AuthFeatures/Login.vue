<template>
   <!-- Sing in  Form -->
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img s :src="require('../AuthFeatures/images/signin.jpg').default" alt="sing up image"></figure>
                        <a  class="signup-image-link">Create an account</a>
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="login-form">
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name" v-model="login.email"/>
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" v-model="login.password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" @click.stop="userlogin"/>
                            </div>
                        </form>
                        <div class="social-login">
                            <span class="social-label">Or login with</span>
                            <ul class="socials">
                                <li><a > <img s :src="require('../AuthFeatures/images/facebook.svg').default" alt="sing up image"></a></li>
                                <li><a ><img s :src="require('../AuthFeatures/images/twitter.svg').default" alt="sing up image"></a></li>
                                <li><a ><img s :src="require('../AuthFeatures/images/google-plus.svg').default" alt="sing up image"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import axios from "axios";
import "./styles.css";
// import { mapGetters , mapActions } from "vuex";

export default {
  data: function () {
    return {
      login: {
        email: "",
        password: "",
      },
      token:''
    };
  },

  methods: {
    userlogin(e) {
      e.preventDefault();
      
        axios
          .post("/api/login", this.login)
          .then((response) => {
            alert(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);
          })
          .catch(function (error) {
            
          });
    },
  },
};
</script>
