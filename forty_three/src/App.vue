<template>
  <HomeIntro/>
</template>

<script>
import HomeIntro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    HomeIntro
  }
}
</script>

<style>
body{
  background-color:black;
  overflow-x: hidden;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
