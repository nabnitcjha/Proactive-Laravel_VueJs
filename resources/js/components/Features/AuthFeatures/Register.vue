<template>
  <!-- Sign up form -->
  <section class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-form">
          <h2 class="form-title">Sign up</h2>
          <form method="POST" class="register-form" id="register-form">
            <div class="form-group">
              <label for="name"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                v-model="register.name"
              />
            </div>
            <div class="form-group">
              <label for="email"><i class="zmdi zmdi-email"></i></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                v-model="register.email"
              />
            </div>
            <div class="form-group">
              <label for="pass"><i class="zmdi zmdi-lock"></i></label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                v-model="register.password"
              />
            </div>
            <div class="form-group">
              <label for="re-pass"
                ><i class="zmdi zmdi-lock-outline"></i
              ></label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
                v-model="register.repeat_password"
              />
            </div>
            <div class="form-group">
              <input
                type="checkbox"
                name="agree-term"
                id="agree-term"
                class="agree-term"
              />
              <label for="agree-term" class="label-agree-term"
                ><span><span></span></span>I agree all statements in
                <a href="#" class="term-service">Terms of service</a></label
              >
            </div>
            <div class="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                class="form-submit"
                value="Register"
                @click.stop="signUp"
              />
            </div>
          </form>
        </div>
        <div class="signup-image">
          <figure>
            <img
              :src="require('../AuthFeatures/images/signup.jpg').default"
              alt="sing up image"
            />
          </figure>
          <a href="#" class="signup-image-link">I am already member</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "./styles.css";
import axios from "axios";
export default {
  data: function () {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        repeat_password: "",
        messageColor: "",
      },
    };
  },
  methods: {
    signUp(e) {
        e.preventDefault();
      if (this.register.password != this.register.repeat_password) {
        return;
      } else {
        let formData = {};
        formData["name"] = this.register.name;
        formData["email"] = this.register.email;
        formData["password"] = this.register.password;
        axios.post("/api/register", formData).then((response) => {
          let makeEmpty = { ...this.register };
          makeEmpty = {};
          this.register = makeEmpty;
        });
      }
    },
  },
};
</script>
