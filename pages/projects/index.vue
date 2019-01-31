<template>
  <section class="container">
    <navbar/>
    <!--
    <project/>
    <projects/>
    -->
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Project from "~/components/projects/Project.vue";
import Projects from "~/components/projects/Projects.vue";

export default {
  components: {
    Navbar,
    Project,
    Projects
  }
};
</script>
