<template>
  <HomeIntro/>
  <WhereTo/>
</template>

<script>
import HomeIntro  from './components/Intro.vue'
import WhereTo    from './components/Where_to.vue'

export default {
  name: 'App',
  components: {
    HomeIntro,
    WhereTo
  }
}
</script>

<style>
body{
  background-color:rgba(0, 0, 0, 0);
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

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  color: slategray;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(36, 36, 36, 0.2); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(36, 36, 36, 0.5); 
}

/* Handle on pressed */
::-webkit-scrollbar-thumb:active {
  background: rgba(36, 36, 36, 0.9); 
}
</style>
