<template>
  <div class="new_jodel">
    <header class="new_jodel--header">
      <span @click="$router.go(-1)">&#x2B05;</span>
      <span></span>
      <span>Senden</span>
    </header>
    <main :class="color">
      <textarea name="newjodel" rows="8" cols="80" placeholder="Teile hier deine Gedanken und Erlebnisse mit den Studenten in deiner Umgebung!"></textarea>
    </main>

  </div>
</template>

<script>
export default {
  name: 'newjodel',
  data() {
    return {
      color: this.randomColor()
    }
  },
  methods: {

    randomColor: function () {
      const colors = ['orange', 'yellow', 'red', 'blue', 'bluegrey', 'green'];

      return colors[Math.floor(Math.random()*colors.length)];
    }


  }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/_variables.sass'

.new_jodel
  height: 100vh
  overflow-y: hidden

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
    width: 34vw
    display: block
    position: relative
    font-size: 16px
    line-height: 1
    letter-spacing: .02em
    text-align: center
    font-weight: 700
    color: $font-dark
    box-sizing: border-box
    padding-top: 16px
    padding-bottom: 13px
main
  height: 100%
  padding-top: 56px

  textarea
    width: calc(100% - 40px)
    background-color: transparent
    border: none
    padding: 20px
    font-size: 18px
    color: $font-primary
    resize: none
    outline: none
  textarea::placeholder
    opacity: .5
</style>
