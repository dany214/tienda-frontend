<template>
  <div class="product-card">
    <img :src="product.image_url" alt="Producto" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p class="price">${{ Number(product.price).toFixed(2) }}</p>
    <button @click="$emit('add-to-cart', product)">Agregar al carrito</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
    .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
        width: 220px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        transition: transform 0.2s ease;
    }
    .product-card:hover {
        transform: scale(1.02);
    }
    .product-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
    }
    .price {
        color: #2ecc71;
        font-weight: bold;
        margin: 0.5rem 0;
    }
    button {
        background-color: #3498db;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #2980b9;
    }
</style>
