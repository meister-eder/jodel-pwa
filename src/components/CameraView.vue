
<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
          <div class="camera-torch">
             <i class="material-icons">flash_on</i>
          </div>
          <div class="camera-switch" @click="switchCam">
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

  
  mounted() {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: [ 'environment'] } })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
        const usermedia = mediaStream.getUserMedia;
      const track = mediaStream.getVideoTracks()[0];

      //Create image capture object and get camera capabilities
      const imageCapture = new ImageCapture(track)
      const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

        //todo: check if camera has a torch

        //let there be light!
        const btn = document.querySelector('.camera-torch');
        btn.addEventListener('click', function(){
          track.applyConstraints({
            advanced: [{torch: true}]
          });
          const bswitchbtn = document.querySelector('.camera-switch');
        bswitchbtn.addEventListener('click', function(){
          track.applyConstraints({
            video: [{facingMode: 'user'}]
          });
        });
      })
      })
      })
      .catch(error => console.error("getUserMedia() error:", error));
  },
  destroyed() {
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
    console.log('camera destroyed')
  },
  
  methods: {
    switchCam(){

    },
    enableTorch(){

    },
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