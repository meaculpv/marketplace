<template>
  <header class="header">
    <a href="#" class="logo">Shop.co</a>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <RouterLink to="/" class="nav__link">Clothes</RouterLink>
          <RouterLink to="/" class="nav__link">Jewelry</RouterLink>
          <RouterLink to="/" class="nav__link">Technic</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="nav__right">
      <a href="#"><i data-v-38237799="" class="ri-shopping-cart-2-line"></i></a>
      <a href="#"><i data-v-38237799="" class="ri-heart-3-line"></i></a>
      <a href="#"><i data-v-38237799="" class="ri-user-3-line"></i></a>
    </div>
    <div class="cart">
      <h2 class="cart-title">Your cart</h2>
      <div class="cart-content">
        <div class="cart-box">
          <div class="detail-box">
            <div class="cart-product-title">
              <div class="cart-price">
                <input type="number" value="1" class="cart-quantity" />
              </div>
              <i data-v-38237799="" class="ri-delete-bin-7-fill"></i>
            </div>
          </div>
        </div>
        <div class="total">
          <div class="total-title">Total</div>
          <div class="total-price">$0</div>
        </div>
        <button type="button" class="btn-buy">Buy Now</button>
        <i data-v-38237799="" class="ri-close-large-fill"></i>
      </div>
    </div>
  </header>
</template>
<script></script>
<style lang="scss" scoped></style>
<i data-v-38237799="" class="ri-shopping-bag-line"></i>
