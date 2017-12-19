<template>
  <div id="app">
    <header>
      <span> foo </span>
      <span class="city-title">{{ location }}</span>
      <span class="karma-counter">
        +{{ karma }}<span>MEIN KARMA</span>
      </span>
    </header>
    <main>
      <jodel></jodel>
      <!-- <router-view></router-view> -->
    </main>
  </div>
</template>

<script>
import Jodel  from './components/Jodel.vue'

export default {
  name: 'app',
  data() {
    return {
      location: 'Leipzig',
      karma: 1337
    }
  },
  components: {
    Jodel
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


header
  display: flex
  margin: 0
  height: 56px
  background-color: #fff
  color: $font-secondary
  box-shadow: 0px 3px 5px 0px rgba(51,51,51,.75)

  span
    flex: 1 1 auto
    justify-content: space-between
    width: 25vw
    display: block
    position: relative
    font-size: 16px
    line-height: 1
    letter-spacing: .02em
    text-align: center
    font-weight: 700
    color: $font-secondary
    box-sizing: border-box
    padding-top: 16px
    padding-bottom: 13px

  .city-title
    width: 50vw
    font-weight: 700
    font-size: 24px
    color: $accent
    border-bottom: 3px solid $accent

  .karma-counter
    span
      font-size: 8px
      position: relative
      top: -15px

</style>
