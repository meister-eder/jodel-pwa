<template>
  <div class="jodel" :class="jodel.color">
    <router-link :to="{ name: 'jodel', params: {id: jodel.id} }">
      <div class="jodel--wrapper_left">
        <div class="jodel--info">
          <span>{{ jodel.location }}</span>
          <span> ∙ Main Feed ∙ </span>
          <span>{{ timeAgo }}</span>
        </div>
        <div class="jodel--body">
          <p>{{ jodel.text }}</p>
        </div>
      </div>
    </router-link>
    <div class="jodel--vote">
      <span>&#x25B2;</span>
      <span>{{ jodel.score }}</span>
      <span>&#x25BC;</span>
    </div>
    <div class="jodel--footer">
      <span>
        <span v-if="jodel.comments.length > 0">&#x2709; {{ jodel.comments.length }}</span>
      </span>
      <span @click="deleteJodel(jodel.id)">...</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jodel',
  props: ['jodel'],
  methods: {

    deleteJodel: function (id) {
      this.$http.get('https://fehler40.uber.space/vuedel/jodel/destroy?id='+id).then(response => {
        console.log('jodel deleted');
        //refreshes the page
        this.$router.go();
      }, response => {
      // error callback
            console.log("http error")
         });
    }
  },
  computed: {
    timeAgo: function () {
      let created = new Date(this.jodel.createdAt);
      let now = new Date();

      let diff = Math.floor((now - created)/1000);

      switch (true) {
        case diff < 60:
          console.log('case seconds');
          return diff + 's'
          break;
        case diff >= 60 && diff < 60*60:
          return Math.floor(diff/60) + 'min'
          break;
        case diff >= 60*60 && diff < 60*60*24:
          return Math.floor(diff/(60*60)) + 'h'
          break;
        case diff >= 60*60*24:
          return Math.floor(diff/(60*60*24)) + ' Tage'
          break;
        default:
          return 'irgendwann'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '../assets/sass/_variables.sass'

  a
    text-decoration: none
    color: $font-primary

  div.jodel
    // background-color: $red
    color: $font-primary
    border-bottom: 3px solid white
    padding: 10px
    position: relative

    div.jodel--wrapper_left
      display: inline-block
      width: 85vw
      .jodel--info
        span:first-child, span:last-child
          font-weight: 400
          font-size: 12px
          opacity: .5
        span
          font-weight: 700
          font-size: 14px

      .jodel--body
        p
          display: inline-block
          font-size: 16px

    div.jodel--vote
      float: right
      display: inline-block
      position: absolute
      top: 50%
      right: 10px
      height: 50px
      margin-top: -50px
      span
        display: flex
        justify-content: center
        flex-direction: column
        text-align: center
        line-height: 1.5
        font-weight: 700

    div.jodel--footer
      display: flex
      span
        flex: 1 1 auto
        justify-content: space-between
        opacity: .5
      span:nth-child(2)
        text-align: center
        font-size: 18px
        font-weight: 700
        opacity: 1

</style>
