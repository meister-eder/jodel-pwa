<template>
  <div>
    <header>
      <span> foo </span>
      <span class="city-title">{{ location }}</span>
      <span class="karma-counter">
        +{{ karma }}<span>MEIN KARMA</span>
      </span>
    </header>
    <main>
      <router-link to="/Detail"> <jodel v-for="jodel in jodels" :jodel="jodel"></jodel></router-link>
    
    </main>

 <router-link to="/New"> <div class="btn--new-jodel"></div></router-link>


</div>

</template>

<script>
import Jodel  from './Jodel.vue'


export default {
  name: 'app',
  data() {
    return {
     jodels: [],
     karma: '100',
     location: 'Leipzig'
    }
  },
  components: {
    Jodel
  },
  mounted:function(){
    this.getJodels(); 
  },
  methods: {
    
    getJodels: function(){
      this.$http.get('https://fehler40.uber.space/vuedel/jodel/').then(response => {

    // get body data
    //fill jodel with data here
    this.jodels = response.body;
    
    }, response => {
    // error callback
          console.log("http error")
       });
    },

    randomColor: function () {
      const colors = ['orange', 'yellow', 'red', 'blue', 'bluegrey', 'green'];

      return colors[Math.floor(Math.random()*colors.length)];
    }


  },
}
</script>

<style lang="sass">

@import '../assets/sass/_variables.sass'

header
  display: flex
  position: fixed
  z-index: 2
  margin: 0
  height: 56px
  background-color: #fff
  color: $font-secondary
  box-shadow: 0px 3px 5px 0px rgba(51,51,51,.50)

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

main
  padding-top: 56px

div.btn--new-jodel
  height: 80px
  width: 80px
  position: fixed
  bottom: 50px
  left: calc(50% - 43px)
  border: 6px solid #fff
  border-radius: 50%
  background-color: rgba(30,30,30,.50)
  &:after
    content: ""
    position: relative
    display: block
    top: 6px
    left: calc(50% - 15px)
    width: 30px
    height: 8px
    border-radius: 15px
    background-color: #fff
  &:before
    content: ""
    position: relative
    display: block
    left: calc(50% - 4px)
    top: calc(50% - 15px)
    width: 8px
    height: 30px
    border-radius: 15px
    background-color: #fff

</style>
