import axios from "axios";
import { defineStore } from "pinia/dist/pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);

  async function fetchAllProduct() {
    const { data } = await axios("/products");
    products.value = await data;
  }

  return {
    products,
    fetchAllProduct,
  };
});
