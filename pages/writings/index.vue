<template>
  <section class="container">
    <div>
      <h1>/writings</h1>
      <nuxt-link to="/">Home page</nuxt-link>
      <nuxt-link to="/projects">Projects page</nuxt-link>
      <nuxt-link to="/writings">Writings page</nuxt-link>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

