<template>
  <section class="section-products">
    <ProductItem
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
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
  computed: {
    sortedProducts() {
      const categories = {
        jewelry: [],
        clothes: [],
        electronics: [],
      };

      this.products.forEach((product) => {
        switch (product.category) {
          case "jewelery":
            categories.jewelry.push(product);
            break;
          case "men's clothing":
          case "women's clothing":
            categories.clothes.push(product);
            break;
          case "electronics":
            categories.electronics.push(product);
            break;
          // If there are other categories, they will be ignored
        }
      });

      return categories;
    },
  },
  data() {
    return {};
  },
};
</script>
