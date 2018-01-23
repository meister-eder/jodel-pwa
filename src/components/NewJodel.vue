<template>
  <div class="new_jodel">
    <header class="new_jodel--header">
      <span @click="$router.go(-1)"><i class="material-icons">arrow_back</i></span>
      <span></span>
      <span @click="createJodel()">Senden</span>
    </header>
    <main :class="color">
      <textarea v-if="!this.taken" @keyup="setJodeltype" v-model="text" name="newjodel" rows="8" cols="80"  maxlength="240" placeholder="Teile hier deine Gedanken und Erlebnisse mit den Studenten in deiner Umgebung!"></textarea>
      <img v-if="this.taken" v-bind:src="img"/>
      <camera v-if="this.picJodel" v-on:pictureTaken="savePic($event)"></camera>
    </main>
  <footer>
    <div v-if="!this.textJodel" class="takephoto" v-on:click="picJodel=true">
        <i class="material-icons">photo_camera</i>
    </div>
    </footer>
  </div>
</template>

<script>
import Camera from './CameraView.vue'

export default {
  name: 'newjodel',
  data() {
    return {
      color: this.randomColor(),
      text: "",
      picJodel: false,
      img: '',
      taken: false,
      textJodel: false
    }
  },
  mounted(){
    this.textJodel = false
  },
  components: { Camera },
  methods: {

    randomColor: function () {
      const colors = ['orange', 'yellow', 'red', 'blue', 'bluegrey', 'green'];

      return colors[Math.floor(Math.random()*colors.length)];
    },
    setJodeltype(){
        this.textJodel = true
    },
    savePic(pic) {
      console.log('pic: ', pic)
      this.img = pic;

      this.taken = true
    },

    createJodel: function () {
      console.log('create: ', this.img)
      this.$http.post('https://fehler40.uber.space/vuedel/jodel/create', {text: this.text, color: this.color, img: this.img}).then(response => {

      console.log(response);
      let id = response.body.id;
      this.$router.push({ name: 'jodel', params: { id: id }})
      }, response => {
      // error callback
            console.log("http error")
         });
    }


  }
}
</script>

<style scoped lang="sass">
@import '../assets/sass/_variables.sass'

a
  text-decoration: none

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

  img 
    width: 100%

  textarea
    width: calc(100% - 40px)
    background-color: transparent
    border: none
    padding: 20px
    font-size: 18px
    color: $font-primary
    font-family: 'Montserrat', Helvetica, Arial, sans-serif
    resize: none
    outline: none
  textarea::placeholder
    color: $font-primary
    opacity: .5


footer
  display: flex
  position: fixed
  bottom: 0
  width: calc(100vw - 20px)
  height: 30px
  .takephoto
    position: relative
    width: 100%
    bottom: 40px
    i
      float: right
      color: #fff
      background-color: #333
      border-radius: 50%
      padding: 10px


</style>
