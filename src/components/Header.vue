<template>
  <header class="header">
    <a href="#" class="logo">Shop.co</a>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <p class="nav__link" @click="setSortingMethod('clothes')">Clothes</p>
          <p class="nav__link" @click="setSortingMethod('jewelery')">Jewelry</p>
          <p class="nav__link" @click="setSortingMethod('technic')">Technic</p>
        </li>
      </ul>
    </nav>
    <div class="nav__right">
      <a href="#" @click="cartStore.toggleCart"
        ><i class="ri-shopping-cart-2-line"></i
      ></a>
      <a href="#"><i class="ri-user-3-line"></i></a>
    </div>
    <div class="cart" v-if="cartStore.showCart">
      <h2 class="cart-title">Your cart</h2>
      <div class="cart-content">
        <div class="cart-box" v-for="item in cartStore.cart">
          <div class="detail-box">
            <img :src="item.image" alt="cart" class="cart__image" />
            <div class="cart-product-title">
              {{ item.title }}
              <div class="cart-price">
                <input
                  type="number"
                  :value="item.quantity"
                  class="cart-quantity"
                  @change="updateQuantity(item.id, $event)"
                />
              </div>
              <i
                class="ri-delete-bin-7-fill"
                @click="cartStore.removeFromCart(item.id)"
              ></i>
            </div>
          </div>
        </div>
        <div class="total">
          <div class="total-title">Total</div>
          <div class="total-price">{{ cartStore.calculateTotal() }}</div>
        </div>
        <button type="button" class="btn-buy" @click="buyNow">Buy Now</button>
        <i
          data-v-38237799=""
          class="ri-close-large-fill"
          @click="cartStore.toggleCart"
        ></i>
      </div>
    </div>
  </header>
</template>
<script>
import { mapStores } from "pinia";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";

export default {
  name: "Header",
  computed: {
    ...mapStores(useProductsStore, useCartStore),
  },
  data() {
    return {
      sortingMethod: "none",
    };
  },
  methods: {
    buyNow() {
      window.alert("Переведите деньги на каспи 87085150552");
    },
    setSortingMethod(payload) {
      this.productsStore.sortingMethod = payload;
    },
    updateQuantity(productId, event) {
      const newQuantity = parseInt(event.target.value);
      if (newQuantity > 0) {
        this.cartStore.updateQuantity(productId, newQuantity);
      } else {
        // If the quantity is 0 or negative, remove the item from the cart
        this.cartStore.removeFromCart(productId);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
