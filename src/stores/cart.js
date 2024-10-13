import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const showCart = ref(false);

  // Create: Add a product to the cart
  function addToCart(product) {
    const existingProduct = cart.value.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  }

  // Read: Get the current cart
  function getCart() {
    return cart.value;
  }

  // Update: Update the quantity of a product in the cart
  function updateQuantity(productId, newQuantity) {
    const product = cart.value.find((item) => item.id === productId);
    if (product) {
      product.quantity = newQuantity;
      if (product.quantity <= 0) {
        removeFromCart(productId);
      }
    }
  }

  // Delete: Remove a product from the cart
  function removeFromCart(productId) {
    const index = cart.value.findIndex((item) => item.id === productId);
    if (index !== -1) {
      cart.value.splice(index, 1);
    }
  }

  // Calculate the total price of the cart
  function calculateTotal() {
    return cart.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  function toggleCart() {
    showCart.value = !showCart.value;
  }

  function setShowCart(payload) {
    showCart.value = payload;
  }

  return {
    cart,
    showCart,
    addToCart,
    getCart,
    updateQuantity,
    removeFromCart,
    calculateTotal,
    toggleCart,
    setShowCart,
  };
});
