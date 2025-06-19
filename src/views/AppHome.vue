<template>
  <div>
    <h1>Bienvenido a la Tienda</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from './ProductList.vue'

export default {
  name: 'AppHome',
  components: {
    ProductList
  }
}
</script>
