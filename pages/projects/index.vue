<template>
  <section class="container">
    <navbar/>
    <projects/>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Projects from "~/components/projects/Projects.vue";

export default {
  components: {
    Navbar,
    Projects
  }
};
</script>
