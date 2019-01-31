<template>
  <section class="container home">
    <Navbar/>
    <AboutMe/>
    <AboutTheChallenge/>
    <Goals/>
    <Footer/>
  </section>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import AboutMe from "~/components/home/AboutMe.vue";
import AboutTheChallenge from "~/components/home/AboutTheChallenge.vue";
import Goals from "~/components/home/Goals.vue";

export default {
  components: {
    Navbar,
    Footer,
    AboutMe,
    AboutTheChallenge,
    Goals
  }
};
</script>
