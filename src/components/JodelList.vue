<template>
  <div>
    <header>
      <span><i class="material-icons">wifi_tethering</i></span>
      <span class="city-title">{{ location }}</span>
      <span class="karma-counter">
        +{{ karma }}<span>MEIN KARMA</span>
      </span>
    </header>
    <main>
      <jodel v-for="jodel in jodels" :key="jodel.id" :jodel="jodel"></jodel>
    </main>
    <footer>
      <span @click="recentJodels()" :class="[activeTab === 'recent' ? 'footer--active' : '']"><i class="material-icons">access_time</i></span>
      <span @click="mostCommentedJodels()"  class="footer--center" :class="[activeTab === 'comments' ? 'footer--active' : '']"><i class="material-icons">comment</i></span>
      <span @click="topJodels()"  :class="[activeTab === 'top' ? 'footer--active' : '']"><i class="material-icons">keyboard_arrow_up</i></span>
    </footer>
 <router-link to="/new"> <div class="btn--new-jodel"></div></router-link>


</div>

</template>

<script>
import Jodel  from './Jodel.vue'
import lodash from 'lodash'

export default {
  name: 'jodellist',
  data() {
    return {
     jodels: [],
     karma: '100',
     location: 'Leipzig',
     activeTab: 'recent'
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
      if (navigator.onLine) {
        console.log('online');
        this.saveJodelstoCache()
      } else {
        console.log('offline');
        this.jodels = JSON.parse(localStorage.getItem('jodels'))
      }
    },

    saveJodelstoCache: function () {
      this.$http.get('https://fehler40.uber.space/vuedel/jodel/').then(response => {
        this.jodels = response.body;
        this.recentJodels();
        this.jodels = this.countComments(this.jodels);
        localStorage.setItem('jodels', JSON.stringify(this.jodels));
      }, err => {
        // error callback
        console.log(err);
     });
    },


    countComments: function (jodels) {
      let arr = jodels.map(function (jodel) {
        let numberOfComments = jodel.comments.length;
        jodel.numberOfComments = numberOfComments;
        // console.log(jodel);
        return jodel;
      })
      return arr;
    },
    recentJodels: function () {
      this.jodels = _.orderBy(this.jodels, 'createdAt', 'desc');
      this.activeTab = 'recent';
      //http://iamdustan.com/smoothscroll/
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
    topJodels: function () {
      this.jodels = _.orderBy(this.jodels, 'score', 'desc');
      this.activeTab = 'top';
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    },
    mostCommentedJodels: function () {
      this.jodels = _.orderBy(this.jodels, 'numberOfComments', 'desc');
      this.activeTab = 'comments';
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
  },
  computed: {

  }
}
</script>

<style scoped lang="sass">

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
  padding: 56px 0 56px 0

footer
  display: flex
  position: fixed
  bottom: 0
  width: 100vw
  height: 56px
  background-color: #fff
  box-shadow: 3px 0px 5px 0px rgba(51,51,51,.50)
  span
    display: inline-block
    flex: 1 1 auto
    justify-content: space-around
    width: 33%
    text-align: center
    margin: 5px
    i
      font-size: 30px
      color: $font-secondary
      line-height: 50px
  .footer--center
    border-left: 1px solid $font-secondary
    border-right: 1px solid $font-secondary
  .footer--active
     i
      color: $accent

div.btn--new-jodel
  height: 80px
  width: 80px
  position: fixed
  bottom: 70px
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
  &:hover
    background-color: #2196F3

</style>
