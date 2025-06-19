<template>
  <div class="product-list">
    <ProductCard
      v-for="product in productList"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import api from '../services/api'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductList',
  components: { ProductCard },
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const res = await api.get('/products')
        this.productList = res.data
      } catch (error) {
        console.error('Error al cargar productos', error)
      }
    },
    async addToCart(productId) {
      try {
        await api.post('/cart', { product_id: productId.id, quantity: 1 })
        alert('Producto agregado al carrito')
      } catch (error) {
        alert('No se pudo agregar al carrito')
      }
    }
  }
}
</script>

<style scoped>
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
  .product-card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
  }
</style>
