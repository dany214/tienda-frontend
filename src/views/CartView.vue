<template>
  <div class="cart-container">
    <h2 class="cart-title">🛒 Mi Carrito</h2>

    <div v-if="cart.length === 0" class="empty-cart">
      Tu carrito está vacío 😢
    </div>

    <ul v-else class="cart-list">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.product.image_url" alt="Producto" class="product-image" />
        <div class="product-info">
          <h3>{{ item.product.name }}</h3>
          <p>Cantidad: {{ item.quantity }}</p>
          <p>Precio: ${{ (item.product.price * item.quantity).toFixed(2) }}</p>
        </div>
        <button class="remove-btn" @click="removeItem(item.id)">🗑️</button>
      </li>
    </ul>

    <div v-if="cart.length > 0" class="cart-footer">
      <p class="total">Total: ${{ totalPrice.toFixed(2) }}</p>
      <button class="checkout-btn">Finalizar Compra</button>
    </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'CartView',
  data() {
    return {
      cart: []
    }
  },
  created() {
    this.fetchCart()
  },
  computed: {
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      )
    }
  },
  methods: {
    async fetchCart() {
      try {
        const res = await api.get('/cart')
        this.cart = res.data
      } catch (err) {
        console.error('Error al obtener el carrito', err)
      }
    },
    async removeItem(id) {
      try {
        await api.delete(`/cart/${id}`)
        this.cart = this.cart.filter(item => item.id !== id)
      } catch (err) {
        alert('Error al eliminar el producto')
      }
    }
  }
}
</script>

<style scoped>
  .cart-container {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
  .cart-title {
    font-size: 28px;
    margin-bottom: 1.5rem;
    color: #333;
  }
  .empty-cart {
    text-align: center;
    color: #999;
  }
  .cart-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
  }
  .product-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
  }
  .product-info h3 {
    margin: 0;
    font-size: 18px;
  }
  .product-info p {
    margin: 4px 0;
    color: #666;
  }
  .remove-btn {
    background: none;
    border: none;
    font-size: 20px;
    color: #d9534f;
    cursor: pointer;
  }
  .cart-footer {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total {
    font-size: 20px;
    font-weight: bold;
  }
  .checkout-btn {
    background-color: #42b983;
    border: none;
    color: white;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
  }
  .checkout-btn:hover {
    background-color: #369c6e;
  }
</style>
