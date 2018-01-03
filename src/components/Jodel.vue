<template>
  <div class="jodel" :class="jodel.color">
    <div class="jodel--wrapper_left">
      <div class="jodel--info">
        <span>{{ jodel.location }}</span>
        <span> ∙ Main Feed ∙ </span>
        <span>{{ jodel.timeAgo }}</span>
      </div>
      <div class="jodel--body">
        <p>{{ jodel.text }}</p>
      </div>
    </div>
    <div class="jodel--vote">
      <span>&#x25B2;</span>
      <span>{{ jodel.score }}</span>
      <span>&#x25BC;</span>
    </div>
    <div class="jodel--footer">
      <span v-if="jodel.comments.length > 0">&#x2709; {{ jodel.comments.length }}</span>
      <span>...</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jodel',
  props: ['jodel']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '../assets/sass/_variables.sass'

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
