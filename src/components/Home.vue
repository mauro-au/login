<template>
  <div>
    <div class="container-fluid menu">
      <div class="container">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
          <a class="navbar-brand" href="/">
            <img src="/img/desafio-latam.png" alt />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item log-out">
                <a class="nav-link" href="#" @click="logout">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="container home_title">
      <h1 class="mt-5">Bienvenido al Sitio</h1>
      <p
        class="mt-4"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur culpa necessitatibus vel odit, voluptatum iure ipsa numquam, cum molestiae cumque esse aliquam quia? Saepe asperiores facere vitae eaque pariatur!</p>
      <p>Inventore doloremque ipsum odio hic optio exercitationem necessitatibus voluptatem iste, maxime ipsam dignissimos consequatur aliquam quae at ad voluptas provident libero eveniet ea adipisci saepe ratione rem labore quod! Non aspernatur eos laborum iste laudantium mollitia debitis quaerat, corporis doloremque quidem blanditiis cumque molestias et, dicta temporibus harum, quia deserunt facere culpa. Est quaerat totam aliquam delectus corrupti quibusdam ab? Placeat temporibus natus ad est necessitatibus ratione, non explicabo minus obcaecati perspiciatis aliquid? Est totam dolor dolore labore impedit ipsa laboriosam, optio sapiente exercitationem vitae, ad nemo.</p>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.push("login");
        });
    }
  }
};
</script>
<style scoped>
.header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.button {
  float: right;
  margin-top: 10px;
}
.navbar-brand {
  background: #fff;
  padding: 13px;
}
.navbar-brand img {
  width: 110px;
}
.aside {
  color: #333;
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
.home_title h1 {
  font-size: 3.5em;
  font-weight: bolder;
  text-align: center;
}
.home_title p {
  text-align: center;
  padding: 20px;
}
</style>
