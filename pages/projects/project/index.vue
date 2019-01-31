<template>
  <section class="container">
    <navbar/>
    <project/>
    <Footer/>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Project from "~/components/projects/Project.vue";

export default {
  components: {
    Navbar,
    Footer,
    Project
  }
};
</script>
