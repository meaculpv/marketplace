<template>
    <div class="product">
        <div class="product__header">
            <div class="product__image">
                <img
                    :src="product.image"
                    :alt="product.title"
                    class="product__img"
                />
            </div>
        </div>
        <div class="product__body">
            <h2 class="heading__secondary">{{ product.title }}</h2>
            <p class="product__description">{{ product.description }}</p>
        </div>
        <div class="product__footer">
            <!-- TODO: Добавь кнопки для добавления в избранные и корзину. Используй иконки для этого -->
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
