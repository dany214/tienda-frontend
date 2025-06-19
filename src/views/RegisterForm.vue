<template>
  <div class="auth-container">
    <form @submit.prevent="register">
      <h2>Crear cuenta</h2>
      <input v-model="name" type="text" placeholder="Nombre completo" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
      <p class="link">
        ¿Ya tienes cuenta?
        <router-link to="/login">Inicia sesión</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await api.post('/users/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        alert('Cuenta creada correctamente. Ahora puedes iniciar sesión.')
        this.$router.push('/login')
      } catch (err) {
        if (err.response && err.response.status === 422) {
          const errors = err.response.data.errors
          const firstError = Object.values(errors)[0][0]
          alert(`Error: ${firstError}`)
        } else {
          alert('Ocurrió un error al registrar el usuario.')
        }
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
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #219150;
  }
  .link {
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
