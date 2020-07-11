<template>
  <div>
    <nav-bar/>
    <div class="container home_title">
      <h1 class="mt-5">About</h1>
      <p
        class="mt-4"
      >Curabitur ultricies nec tellus quis sodales. Duis ullamcorper sapien nec convallis blandit. Nam rhoncus commodo leo, eget aliquet libero ornare eget. Maecenas urna quam, dapibus eget ex sed, vehicula hendrerit orci. Donec imperdiet ligula felis. Proin in nisl nec ex maximus varius eget vitae diam. Etiam ac commodo lacus.</p>
      <p>Nulla luctus libero id mi auctor, nec dapibus eros commodo. Aliquam bibendum, nulla a varius pretium, sem tortor cursus tellus, ut pretium urna leo a sapien. Praesent velit sapien, dapibus ut consequat sit amet, accumsan gravida orci. Aliquam id laoreet libero, eu tempor massa. Pellentesque varius sollicitudin congue. Etiam dignissim congue pretium. Phasellus felis metus, maximus tristique orci ut, consequat ornare tortor.</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
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
