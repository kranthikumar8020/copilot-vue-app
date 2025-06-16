<template>
  <div id="app">
    <ClientsList />
  </div>
</template>

<script>
import ClientsList from './components/ClientsList.vue'; // rename the file or import ClientsList.vue if renamed

export default {
  name: 'App',
  components: {
    ClientsList,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
