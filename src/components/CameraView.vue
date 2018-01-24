
<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
          <div class="camera-torch" @click="enableTorch">
             <i class="material-icons">flash_on</i>
          </div>
          <div class="camera-switch" >
             <i class="material-icons">switch_camera</i>
          </div>
            <span @click="capture" >
              
            </span>
             <div class="camera-quit" @click="back">Abbrechen</div>
        </div>
       
    </div>
</template>

<script>

import  {storage}  from '../service/firebase'
export default {
  name: 'camera',
  data(){
    return{
    mediaStream: null,
    track: null, 
    torchOn: false
    }
  },  
  mounted() {
    this.openCam();
    },
  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
    console.log('camera destroyed')
  },
  
  methods: {
    openCam(){
      let that = this
      navigator.mediaDevices
      .getUserMedia({ video: { facingMode: [ 'environment'] } })
      .then(mediaStream => {
        that.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
        that.track = that.mediaStream.getVideoTracks()[0];      
      })
      .catch(error => console.error("getUserMedia() error:", error));
  
    },
    enableTorch(){
      this.torchOn = !this.torchOn
      console.log('licht an? ',this.torchOn)
       //let there be light!
            this.track.applyConstraints({
            advanced: [{torch: this.torchOn}]
          });
    },
    back() {
      this.$parent.$data.picJodel = false;
    },
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      imageCapture.takePhoto().then(blob => {
          
     this.$emit('pictureTaken', blob)  
     this.back();
     })
     
    }
}}
</script>

<style scoped lang="sass">
@import '../assets/sass/_variables.sass'
.camera-modal 
  width: 100%
  height: 100vh
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
    margin-bottom: 24px

    .camera-quit 
      margin: 0 auto
      position: fixed
      bottom: 100px
      left: 20px
      color: white
      font-weight: bold
    .camera-torch
      margin: 0 auto
      position: fixed
      top: 30px
      left: 20px
      color: white
    .camera-switch
      margin: 0 auto
      position: fixed
      top: 30px
      right: 20px
      color: white
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