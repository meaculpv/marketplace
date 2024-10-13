<template>
  <main>
    <div class="products">
      <ProductList :products="productsStore?.sortedProducts" />
    </div>
  </main>
</template>
<script>
import { mapStores } from "pinia";
import { useProductsStore } from "@/stores/products";
import ProductList from "@/components/product/ProductList.vue";

export default {
  name: "HomePage",
  components: {
    ProductList,
  },
  computed: {
    ...mapStores(useProductsStore),
  },
  methods: {},
  async mounted() {
    await this.productsStore.fetchAllProduct();
  },
};
</script>
