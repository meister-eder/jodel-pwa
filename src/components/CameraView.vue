
<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <span @click="capture" >
              
            </span>
        </div>
        <div @click="back">back</div>
    </div>
</template>

<script>

import  {storage}  from '../service/firebase'
export default {
  name: 'camera',

  
  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: { exact: "environment" } } })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      })
      .catch(error => console.error("getUserMedia() error:", error));
  },
  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
    console.log('camera destroyed')
  },
  
  methods: {
    back() {
      this.$parent.$data.picJodel = false;
    },
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      imageCapture.takePhoto().then(blob => {
          storage.ref().child(`images/picture-${new Date().getTime()}`).put(blob).then(res => {
          console.log(res)
          let downloadURL = res.downloadURL;
          this.$emit('pictureTaken', downloadURL)
          // window.localStorage.setItem("downloadUrl", downloadURL);
          this.back();
        })
    
     })
    }
}}
</script>

<style scoped lang="sass">
@import '../assets/sass/_variables.sass'
.camera-modal 
  width: 100%
  height: 100%
  top: 0
  left: 0
  position: absolute
  background-color: white
  z-index: 10
    
  .camera-stream 
    width: 100%
    max-height: 100%

  .camera-modal-container
    position: absolute
    bottom: 0
    width: 100%
    text-align: center
    margin-bottom: 24px

    
  span
    margin: 0 auto
    width: 80px
    height: 80px
    position: fixed
    bottom: 70px
    left: calc(50% - 43px)
    border: 6px solid #fff
    border-radius: 50%
    background-color: rgba(30,30,30,.20)
    text-align: center
    &:after
      content: ""
      position: relative
      display: block
      top: 15px
      margin: auto
      width: 50px
      height: 50px
      border-radius: 280px
      background-color: darkred
   
  </style>