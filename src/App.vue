<template>

  <router-view/>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

@import "~bootstrap/dist/css/bootstrap.min.css";

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
