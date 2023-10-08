<template>
  <h4 v-if="authStatus === 'authenticating'">Loading...</h4>
  <router-view  v-else/>
</template>
<script>
import useAuth from './modules/auth/composables/useAuth';
export default {
  setup() {
    const { authStatus, checkAuthentication } = useAuth()

    checkAuthentication()

    return {
      authStatus
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
