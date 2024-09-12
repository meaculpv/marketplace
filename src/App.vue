<script>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Index",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <h1>GITHUB</h1>
  <RouterView />
  <Footer />
</template>

<style scoped></style>
