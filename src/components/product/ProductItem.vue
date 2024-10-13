<template>
  <div class="product">
    <div class="product__header">
      <div class="product__image">
        <img :src="product?.image" :alt="product?.title" class="product__img" />
      </div>
    </div>
    <div class="product__body">
      <h2 class="heading__secondary">{{ product?.title }}</h2>
      <p class="product__description">{{ product?.description }}</p>
    </div>
    <div class="product__footer">
      <div class="stars"></div>
      <div class="row-in">
        <div class="row-left">
          <p @click="addToCart" class="addcart">
            Add to cart<i class="ri-shopping-cart-2-line"></i>
          </p>
        </div>
        <div class="sale">
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import { mapStores } from "pinia";
import { useCartStore } from "@/stores/cart";

export default {
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  components: {
    StarRating,
  },
  computed: {
    ...mapStores(useCartStore),
  },
  methods: {
    addToCart() {
      this.cartStore.addToCart(this.product);

      this.cartStore.setShowCart(true);
    },
    remove() {
      this.cartStore.removeFromCart(this.product.id);
    },
  },
};
</script>
