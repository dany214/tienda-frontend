<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">🛍️ MiTienda</router-link>
    </div>
    <nav class="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/cart">Carrito</router-link>
      <!-- <span v-if="userName">Hola, {{ userName }}</span> -->
      <button v-if="isLoggedIn" @click="logout">Cerrar sesión</button>
      <router-link v-else to="/login">Iniciar sesión</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      userName: null
    }
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token')
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user') || 'null')
    this.userName = user ? JSON.parse(user).name : null
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header {
  background: #333;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}
.logo a {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}
button {
  margin-left: 1rem;
  padding: 0.3rem 0.6rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
