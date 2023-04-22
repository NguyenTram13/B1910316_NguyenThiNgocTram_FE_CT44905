<template>
  <div class="flex items-center justify-center h-[100vh]">
    <div class="container w-[800px] o right-panel-active">
      <div class="text-green-500">{{ messageSuccess }}</div>

      <!-- Sign Up -->
      <div class="container__form container--signup">
        <Form
          action="#"
          class="w-full form"
          id="form1"
          @submit="signupAccount"
          :validation-schema="dataRegister"
        >
          <h2 class="form__title">Sign Up</h2>
          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataRegister.firstName"
              type="text"
              name="firstName"
              autocomplete="off"
              placeholder="First Name *"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
            />
            <ErrorMessage name="firstName" class="text-red-500" />
          </div>
          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataRegister.lastName"
              type="text"
              name="lastName"
              autocomplete="off"
              placeholder="Last Name *"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
            />
            <ErrorMessage name="lastName" class="text-red-500" />
          </div>

          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataRegister.email"
              name="email"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
              placeholder="Email *"
              type="email"
              autocomplete="off"
            />
            <ErrorMessage name="email" class="text-red-500" />
          </div>
          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataRegister.password"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
              name="password"
              type="password"
              placeholder="Password *"
              autocomplete="off"
            />
            <ErrorMessage name="password" class="text-red-500" />
          </div>
          <div v-if="loading" class="button button-block bg-[#1ab188]">
            <Loading />
          </div>
          <button class="btn">Sign Up</button>
        </Form>
        <div class="text-red-500">{{ errMessage }}</div>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <Form action="#" class="form ư-full" id="form2" @submit="signinAccount">
          <h2 class="form__title">Sign In</h2>
          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataLogin.email"
              name="email"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
              placeholder="Email *"
              type="email"
              autocomplete="off"
            />
            <ErrorMessage name="email" class="text-red-500" />
          </div>
          <div class="w-full px-5 py-2 field-wrap">
            <Field
              v-model="dataLogin.password"
              class="w-full px-3 py-2 text-gray-400 bg-white outline-none"
              name="password"
              type="password"
              placeholder="Password *"
              autocomplete="off"
            />
            <ErrorMessage name="password" class="text-red-500" />
          </div>
          <div v-if="loading" class="button button-block bg-[#1ab188]">
            <Loading />
          </div>
          <router-link
            :to="{
              name: 'login',
            }"
            class="flex justify-end my-4 text-white forgot text-end"
            ><a href="#">Forgot Password?</a></router-link
          >
          <button class="btn">Sign In</button>
          <!-- <button></button> -->
        </Form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn">Sign In</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/auth.service";
import Loading from "@/components/Loading.vue";
import jwt_decode from "jwt-decode";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Loading: Loading,
  },

  data() {
    const dataRegister = yup.object().shape({
      firstName: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      lastName: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      email: yup
        .string()
        .required("Email bắt buộc phải nhập")
        .email("Email không hợp lệ"),
      password: yup
        .string()
        .required("Mật khẩu bắt buộc phải nhập")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Mật khẩu phải 8 chữ số và ít nhất có 1 chữ hoa, 1 chữ thường, 1 kí tự đặt biệt,1 số"
        ),
    });
    return {
      loading: false,
      // isShowRegister: true,
      messageSuccess: "",
      errMessage: "",
      dataRegister,
      dataLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // showTabFormLogin() {
    //   this.isShowRegister = false;
    // },
    // showTabFormRegister() {
    //   this.isShowRegister = true;
    // },
    async signupAccount() {
      const data = {
        firstName: this.dataRegister.firstName,
        lastName: this.dataRegister.lastName,
        email: this.dataRegister.email,
        password: this.dataRegister.password,
      };
      try {
        this.loading = true;
        const response = await AuthService.register(data);
        if (response.status === 200) {
          console.log(response);
          this.messageSuccess = "Đăng kí thành công!";
          this.loading = false;
        }
      } catch (e) {
        this.loading = false;
        this.messageSuccess = "Đăng kí thất bại!";

        console.log(e);
      }
    },
    async signinAccount() {
      try {
        const data = {
          email: this.dataLogin.email,
          password: this.dataLogin.password,
        };
        console.log(data);
        this.loading = true;
        const response = await AuthService.login(data);
        if (response.status === 200) {
          console.log(response);
          this.errMessage = "";

          this.loading = false;
          const accessToken = response.data.accessToken;
          console.log(accessToken);
          localStorage.setItem("access_token", accessToken);
          // //decode lay thong tin payload
          var decodedPayload = jwt_decode(accessToken);
          console.log(decodedPayload);
          this.$store.dispatch("auth/handleSetUser", decodedPayload);
          if (decodedPayload.role === "admin") {
            window.location.href = "/admin/dashboard";
            // this.$router.push({ name: "/admin/dashboard" });
          } else {
            // this.$router.push({ name: "home" });
            window.location.href = "/home";
          }
        }
      } catch (e) {
        console.log(e);
        this.loading = false;

        if (e.response.status === 400) {
          this.errMessage = e.response.data;
        }
      }
    },
  },
  mounted() {
    const signInBtn = document.getElementById("signIn");

    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");
    console.log(signInBtn);
    signInBtn?.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
    signUpBtn?.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    fistForm?.addEventListener("submit", (e) => e.preventDefault());
    secondForm?.addEventListener("submit", (e) => e.preventDefault());
  },
};
</script>
<style>
:root {
  /* COLORS */
  --white: #e9e9e9;
  --gray: #333;
  --blue: #0367a6;
  --lightblue: #008997;

  /* RADII */
  --button-radius: 0.7rem;

  /* SIZES */
  --max-width: 758px;
  --max-height: 500px;

  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* body {
  align-items: center;
  background-color: var(--white);
  background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}  */

.form__title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.link {
  color: var(--gray);
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container {
  background-color: var(--white);
  border-radius: var(--button-radius);
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: var(--max-height);
  max-width: var(--max-width);
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__form {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: var(--lightblue);
  background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: var(--blue);
  background-image: linear-gradient(
    90deg,
    var(--blue) 0%,
    var(--lightblue) 74%
  );
  border-radius: 20px;
  border: 1px solid var(--blue);
  color: var(--white);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

.form {
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 0 3rem; */
  height: 100%;
  text-align: center;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
