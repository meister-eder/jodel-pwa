<template>
  <div class="new_jodel">
    <header class="new_jodel--header">
     <button @click="$router.go(-1)">close</button>
     <span>Senden</span>
    </header>
    <main>
    </main>

</div>

</template>
<script>
export default {
   name: 'newjodel'
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
    </style>