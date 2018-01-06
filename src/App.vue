<template>
  <div id="app">
    <router-view></router-view>


  </div>
</template>

<script>
import JodelList  from './components/JodelList.vue'

export default {
  name: 'app',
  components: {
    JodelList
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,400,700')
@import './assets/sass/_variables.sass'

body
  margin: 0

#app
  font-family: 'Montserrat', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

a
  text-decoration: none
</style>
