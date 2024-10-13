import axios from "axios";
import { defineStore } from "pinia/dist/pinia";
import { ref, computed } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const sortingMethod = ref("none");

  async function fetchAllProduct() {
    const { data } = await axios("/products");
    products.value = data;
  }

  const sortedProducts = computed(() => {
    if (sortingMethod.value === "clothes") {
      return products.value.filter((product) =>
        product.category.includes("clothing")
      );
    }

    if (sortingMethod.value === "jewelery") {
      return products.value.filter(
        (product) => product.category === "jewelery"
      );
    }

    if (sortingMethod.value === "technic") {
      return products.value.filter(
        (product) => product.category === "electronics"
      );
    }

    return products.value;
  });

  return {
    products,
    sortingMethod,
    sortedProducts,
    fetchAllProduct,
  };
});
