<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <list></list>
    <h3>Vuex</h3>
    <div id="parent">
      <parent></parent>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import list from './components/list'
import parent from './components/parent'

export default {
  name: 'App',
  components: {
    HelloWorld,
    list,
    parent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#parent {
  display: flex;
  justify-content: center;
}
</style>
