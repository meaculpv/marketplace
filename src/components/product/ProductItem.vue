<template>
  <div class="product">
    <div class="product__header">
      <div class="product__image">
        <img :src="product.image" :alt="product.title" class="product__img" />
      </div>
    </div>
    <div class="product__body">
      <h2 class="heading__secondary">{{ product.title }}</h2>
      <p class="product__description">{{ product.description }}</p>
    </div>
    <div class="product__footer">
      <div class="stars">
        <a href="#"><i data-v-38237799="" class="ri-star-fill"></i></a>
        <a href="#"><i data-v-38237799="" class="ri-star-fill"></i></a>
        <a href="#"><i data-v-38237799="" class="ri-star-fill"></i></a>
        <a href="#"><i data-v-38237799="" class="ri-star-fill"></i></a>
        <a href="#"><i data-v-38237799="" class="ri-star-fill"></i></a>
        <a href="#">4.5/5</a>
      </div>
      <div class="row-in">
        <div class="row-left">
          <a href="#"
            >Add to cart<i
              data-v-38237799=""
              class="ri-shopping-cart-2-line"
            ></i
          ></a>
        </div>
        <div class="sale">
          <p>$150.00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
