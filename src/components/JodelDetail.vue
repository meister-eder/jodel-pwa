<template>
  <div>
    <jodel :jodel="jodel"></jodel>
  </div>
</template>

<script>
import Jodel  from './Jodel.vue'

export default {
  name: 'detail',
  components: {
    Jodel
  },
  data() {
    return {
      id: this.$route.params.id,
      jodel: {}
    }
  },
  mounted:function(){
    this.getJodel();
  },
  methods: {

    getJodel: function(){
      this.$http.get('https://fehler40.uber.space/vuedel/jodel/'+this.id).then(response => {
      this.jodel = response.body;
      console.log(this.jodel);
      }, response => {
      // error callback
            console.log("http error")
         });
      }
  },
}
</script>

<style scoped lang="sass">

</style>
