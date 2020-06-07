<template>
  <div class="container content_login">
    <div v-show="error" class="alert alert-danger mt-5" role="alert">Los datos no son correctos, intentelo nuevamente
      <i><img class="icon_error" src="img/error.svg"></i>
    </div>
    <div class="row login">
      <div class="login__bg"></div>
      <div class="login__form">
        <div class="logo">
          <img src="img/desafio-latam.png" class="mb-5"/>
        </div>
        <form :model="credentials">
          <div class="form-group">
            <label class="text-left">Email</label>

            <div class="input">
              <img class="svg" src="img/mail.svg"/>
              <input type="email" class="form-control" placeholder="Correo electrónico" v-model="credentials.email"/>
            </div>
          </div>

          <div class="form-group">
            <label>Password</label>
            <div class="input">
              <img class="svg" src="img/password.svg"/>
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
      error: false
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
          }, 4000);
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.content_login{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(/img/background.jpg) center;
    background-size: cover;
}
.alert {
    width: 70%;
    text-align: center;
    padding: 15px;
}
.icon_error{
  width: 20px;
  margin-left: 20px;
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
.logo {
  display: flex;
  justify-content: center;
}
.logo img {
  width: 50%;
}
.input {
  margin-bottom: 10px;
  display: flex;
}
.svg {
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
}
</style>
