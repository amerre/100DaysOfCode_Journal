<template>
  <section class="container">
    <navbar/>
    <projects/>
    <Footer/>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Projects from "~/components/projects/Projects.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Projects,
    Footer
  }
};
</script>
