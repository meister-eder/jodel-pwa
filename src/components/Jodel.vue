<template>
  <div class="jodel"  :class="jodel.color" >
    <router-link :to="{ name: 'jodel', params: {id: jodel.id} }">
      <div class="jodel--wrapper_left">
        <div class="jodel--info">
          <span>{{ jodel.location }}</span>
          <span> ∙ Main Feed ∙ </span>
          <span>{{ timeAgo }}</span>
        </div>
        <div class="jodel--body"  @touchstart.prevent>
          <p>{{ jodel.text }}</p>
        <div class="jodel--backpic" v-if="!this.pressed"></div>
            <div  class="jodel--pic" v-if="jodel.img && !this.pressed"  @touchstart.prevent="startPress" @touchend.prevent="stopPress" @touchcancel.prevent="stopPress">Gedrückt halten</div>

          <div class="jodel--bigpic" v-if="this.pressed"><img v-bind:src="this.jodel.img" /></div>
        </div>
      </div>
    </router-link>
    <div class="jodel--vote">
      <span :class="{ disabled: votedOn }" @click="vote(1)"><i class="material-icons">keyboard_arrow_up</i></span>
      <span>{{ jodel.score }}</span>
      <span :class="{ disabled: votedOn }" @click="vote(-1)"><i class="material-icons">keyboard_arrow_down</i></span>
    </div>
    <div class="jodel--footer">
      <span>
        <span v-if="jodel.comments.length > 0"><i class="material-icons">comment</i> {{ jodel.comments.length }}</span>
      </span>
      <span>...</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "jodel",
  props: ["jodel"],
  data() {
    return {
      votedOn: false,
      pressed: false
    };
  },
  methods: {
    vote: function(vote) {
      if (!this.votedOn) {
        this.$http
          .get(
            "https://fehler40.uber.space/vuedel/vote/jodel?id=" +
              this.jodel.id +
              "&vote=" +
              vote
          )
          .then(response => {
            this.jodel.score += vote;
            this.votedOn = true;
          });
      }
    },
    startPress() {
      this.pressed = true;
    },
    stopPress() {
      this.pressed = false;
    }
  },
  computed: {
    timeAgo: function() {
      let created = new Date(this.jodel.createdAt);
      let now = new Date();

      let diff = Math.floor((now - created) / 1000);

      switch (true) {
        case diff < 60:
          console.log("case seconds");
          return diff + "s";
          break;
        case diff >= 60 && diff < 60 * 60:
          return Math.floor(diff / 60) + "min";
          break;
        case diff >= 60 * 60 && diff < 60 * 60 * 24:
          return Math.floor(diff / (60 * 60)) + "h";
          break;
        case diff >= 60 * 60 * 24:
          return Math.floor(diff / (60 * 60 * 24)) + " Tage";
          break;
        default:
          return "irgendwann";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '../assets/sass/_variables.sass'

  a
    text-decoration: none
    color: $font-primary

  div.jodel
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
        font-size: 8px
        opacity: .5
      span
        font-weight: 700
        font-size: 10px

    .jodel--body
      p
        display: inline-block
        font-size: 16px
        word-break: break-word
        max-width: 60%
      .jodel--pic
        text-align: center
        height: 60px
        width: 100%
        z-index: 2
        position: relative
      .jodel--bigpic
        position: fixed
        height: 100vh
        width: 100vw
        top: 0
        left: 0
        z-index: 10
        background-color: #000
        img
          width: 100%
          height: 100%
          object-fit: contain
      .jodel--backpic
        position: relative
        overflow: hidden

      .jodel--backpic:after
        position: absolute
        z-index: 1
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-image: url(../assets/city.jpg)
        background-size: cover
        background-repeat: no-repeat
        -webkit-filter: blur(5px)
        -moz-filter: blur(5px)
        -o-filter: blur(5px)
        -ms-filter: blur(5px)
        filter: blur(5px)
        width: 100%
        -webkit-transform: scale(1.1)
        transform: scale(1.1)

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
      .disabled
        color: transparentize($font-primary, .7)
      span:nth-child(2)
        color: $font-primary

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
