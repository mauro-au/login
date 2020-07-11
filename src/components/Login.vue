<template>
  <div class="container content__login">
    <transition name='fade'>
      <div v-show="error" class="alert alert-danger mt-5" role="alert">
        <i><img class="alert__error" src="img/error.svg"></i>
        Los datos no son correctos, intentelo nuevamente
      </div>
    </transition>
    <div class="row login">
      <div class="login__bg"></div>
      <div class="login__form">
        <div class="login__logo">
          <img src="/img/logo.svg" class="mb-2"/>
        </div>
        <form :model="credentials">
          <div class="form-group">
            <label class="text-left">Email</label>

            <div class="form__input">
              <img class="form__svg" src="img/mail.svg"/>
              <input type="email" class="form-control" placeholder="Correo electrónico" v-model="credentials.email"/>
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <div class="form__input">
              <img class="form__svg" src="img/password.svg"/>
              <input type="password" class="form-control" placeholder="Contraseña" v-model="credentials.password"/>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" @click="login">Ingresar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      error: false,
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      Firebase.auth()
        .signInWithEmailAndPassword(
          this.credentials.email,
          this.credentials.password
        )
        .then(() => {
          this.$router.push("home");
        })
        .catch((error) => {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 3000);
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.content__login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(/img/background.jpg) center;
    background-size: cover;
}
.alert {
    width: 50%;
    text-align: center;
    padding: 15px;
    position: absolute;
    top: -37px;
}
.alert__error{
  width: 20px;
  margin-right: 12px;
}
.login {
  width: 70%;
  border-radius: 30px;
  background: #fff;
  -webkit-box-shadow: 0px 11px 32px 7px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 11px 32px 7px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 11px 32px 7px rgba(0, 0, 0, 0.25);
}
.login__bg {
  width: 40%;
  border-radius: 30px 0 0 30px;
  background: url(/img/login.jpg) center;
  background-size: cover;
}
.login__bg img {
  width: 100%;
}
.login__form {
  width: 60%;
  padding: 60px 0;
  border-radius: 30px;
}
.login__logo {
  display: flex;
  justify-content: center;
}
.login__logo img {
  width: 22%;
}
.form__input {
  margin-bottom: 10px;
  display: flex;
}
.form__svg {
  width: 24px;
  position: absolute;
  margin: 12px 15px;
  opacity: 0.3;
}
form {
  margin: 0 auto;
  width: 75%;
}
.form-control {
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  padding-left: 55px;
}
button {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 14px;
  border: none;
  background-image: linear-gradient(to right, #00c6ff 0%, #0072ff 61%);
  -webkit-box-shadow: 0px 11px 23px -10px rgba(0, 116, 240, 1);
  -moz-box-shadow: 0px 11px 23px -10px rgba(0, 116, 240, 1);
  box-shadow: 0px 11px 23px -10px rgba(0, 116, 240, 1);
}
.fade-enter-active, .fade-leave-active {
  transition: .2s;
}
.fade-enter-active {
  transition-delay: .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  margin-top:20px;
}
@media(max-width: 767px) {
  .login__bg{
    display: none;
  }
  .login__form{
    width: 100%;
  }
  .login{
    width: 90%;
  }
  .alert{
    width: 90%;
  }
}
</style>
