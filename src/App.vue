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
  <RouterView />
  <Footer />
</template>

<style scoped></style>
