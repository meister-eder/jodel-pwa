<template>
  <div class="jodel__detail" :class="jodel.color">
    <header class="new_jodel--header">
      <span @click="$router.push('/')"><i class="material-icons">arrow_back</i></span>
      <span></span>
      <span><i class="material-icons">share</i></span>
    </header>
    <main>
      <jodel :jodel="jodel"></jodel>
      <comment v-for="comment in jodel.comments" :key="comment.id" :comment="comment"></comment>
    </main>
    <footer>
      <div class="newcomment">
        <input v-model="newComment" type="text" name="" placeholder="#GoodVibesOnly" maxlength="240">
        <span class="comment__send" v-if="newComment !== ''" @click="submitComment()"><i class="material-icons">send</i></span>
        <span class="comment__pic" v-if="newComment ===''"><i class="material-icons">photo_camera</i></span>
      </div>
    </footer>
  </div>
</template>

<script>
import Jodel  from './Jodel.vue'
import Comment from './Comment.vue'

export default {
  name: 'detail',
  components: {
    'jodel': Jodel,
    'comment': Comment
  },
  data() {
    return {
      id: this.$route.params.id,
      jodel: {},
      newComment: ''
    }
  },
  mounted:function(){
    this.getJodel();
  
  },
  methods: {

    getJodel: function(){
      if (navigator.onLine) {
        this.$http.get('https://fehler40.uber.space/vuedel/jodel/'+this.id).then(response => {
          this.jodel = response.body;
          console.log(this.jodel);
        }, response => {
          // error callback
          console.log("http error")
        });
      } else {
        let jodels = JSON.parse(localStorage.getItem('jodels'));
        this.jodel = _.find(jodels, {'id': this.id});
      }

      },
    submitComment: function() {
      this.$http.post('https://fehler40.uber.space/vuedel/comment/create', {parent: this.id, text: this.newComment}).then(response => {

      console.log(response);
      this.$router.go()
      }, response => {
      // error callback
            console.log("http error")
         });
    }
  },
}
</script>

<style scoped lang="sass">
@import '../assets/sass/_variables.sass'

.jodel__detail
  min-height: 95vh


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
  // height: 100%
  padding-top: 56px

  ul
    li
      display: inline-block
      word-break: break-word
      list-style: none
      color: $font-primary
      margin-bottom: 30px

footer
  display: flex
  position: fixed
  bottom: 0
  width: calc(100vw - 20px)

  height: 30px
  background-color: #fff
  box-shadow: 3px 0px 5px 0px rgba(51,51,51,.50)
  padding: 10px
  .newcomment
    position: relative
    width: 100%
    input
      width: 80%
      border: none
      border-bottom: 2px solid grey
    span
      float: right
      color: $font-secondary
</style>
