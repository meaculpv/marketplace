<template>
  <main>
    <div class="products">
      <div class="product" v-for="product in productsStore.products">
        <h1>{{ product.title }}</h1>
      </div>
    </div>
  </main>
</template>
<script>
import { mapStores } from "pinia";
import { useProductsStore } from "@/stores/products";

export default {
  computed: {
    ...mapStores(useProductsStore),
  },
  methods: {},

  async mounted() {
    await this.productsStore.fetchAllProduct();
    console.log("hh");
  },
};
</script>
