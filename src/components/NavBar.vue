<template>
    <div class="container-fluid menu">
      <div class="container">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
          <router-link  to="/" class="navbar-brand">
            <img src="/img/logo.svg" alt />
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link  to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link  to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item log-out">
                <a class="nav-link" href="#" @click="logout">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      setCurrent: true
    };
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
.button {
  float: right;
  margin-top: 10px;
}
.navbar-brand {
  background: #fff;
  padding: 8px 30px;
}
.navbar-brand img {
  width: 60px;
}
.menu {
  background: #000;
}
.navbar {
  padding: 0;
}
.nav-item {
  margin: 0 15px;
}
.log-out {
  background: #fff;
  border-radius: 20px;
  padding: 0 15px;
}
.log-out a {
  color: #000 !important;
}
</style>