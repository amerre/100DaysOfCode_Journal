<template>
  <section class="container">
    <Navbar/>
    <AboutMe/>
    <AboutTheChallenge/>
    <Goals/>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import AboutMe from "~/components/home/AboutMe.vue";
import AboutTheChallenge from "~/components/home/AboutTheChallenge.vue";
import Goals from "~/components/home/Goals.vue";

export default {
  components: {
    Navbar,
    AboutMe,
    AboutTheChallenge,
    Goals
  }
};
</script>
