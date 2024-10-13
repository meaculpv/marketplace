<template>
  <section class="section-products">
    <ProductItem v-for="product in products" :product="product" />
  </section>
</template>
<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductList",
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
  components: {
    ProductItem,
  },
  data() {
    return {};
  },
  components: { ProductItem },
};
</script>
<style lang="scss" scoped></style>
