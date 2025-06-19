<template>
  <div class="auth-container">
    <form @submit.prevent="login">
      <h2>Iniciar sesión</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
      <p class="link">
        ¿No tienes cuenta?
        <router-link to="/register">Regístrate aquí</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const res = await api.post('/users/login', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        this.$router.push('/')
      } catch (err) {
        alert('Credenciales incorrectas')
      }
    }
  }
}
</script>

<style scoped>
  .auth-container {
    max-width: 400px;
    margin: 3rem auto;
    padding: 2rem;
    border-radius: 8px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 1rem;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #2980b9;
  }
  .link {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
