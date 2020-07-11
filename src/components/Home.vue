<template>
  <div>
    <nav-bar/>
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
import NavBar from '@/components/NavBar.vue'
export default {
  data() {
    return {
      menu:true
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>

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
