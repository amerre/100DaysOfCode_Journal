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
import AboutMe from "~/components/home/AboutMe.vue";
import AboutTheChallenge from "~/components/home/AboutTheChallenge.vue";
import Goals from "~/components/home/Goals.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    AboutMe,
    AboutTheChallenge,
    Goals,
    Footer
  }
};
</script>
