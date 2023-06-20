<template>
  <HomeIntro/>
  <WhereTo/>
  <PreProd/>
</template>

<script>
import HomeIntro  from './components/Intro.vue'
import WhereTo    from './components/Where_to.vue'
import PreProd    from './components/PreProd.vue'

export default {
  name: 'App',
  components: {
    HomeIntro,
    WhereTo,
    PreProd
  }
}
</script>

<style>
body{
  
  overflow-x: hidden;
  
  margin: 0;
  padding: 0;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

/*
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  color: aliceblue;
}
 
::-webkit-scrollbar-thumb {
  background: rgba(36, 36, 36, 0.2); 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(36, 36, 36, 0.5); 
}

::-webkit-scrollbar-thumb:active {
  background: rgba(36, 36, 36, 0.9); 
}
*/


::-webkit-scrollbar {
  scroll-behavior: smooth;
  width: 10px;
  z-index: -500;
  background: transparent;
  background-color: transparent;
}


/* Track */
::-webkit-scrollbar-track {
  background-color: transparent;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(50,50,50); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(75,75,75); ; 
}

/* Handle on pressed */
::-webkit-scrollbar-thumb:active {
  background: red; 
}

</style>
