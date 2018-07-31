<template lang="html">
  <div class="home-background ">
    <Navbar v-bind:navbardark="navbardark"
            v-bind:navlinkdark="navlinkdark"
            v-bind:navbarToggle="navbarToggle"
            v-bind:navbarColor="navbarColor"
     />
    <div class="container home">
      <h1 class="ml4">
      <span class="letters letters-1">Designer</span>
      <span class="letters letters-2">Developer</span>
      <span class="letters letters-3">Marketer</span>
      <svg class="logo2" height="260" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.62 367.57"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >

                  <stop offset="0%" stop-color="#FF001C">
                      <animate attributeName="stop-color" values="#FF001C; #060827; #FF001C" dur="6s" repeatCount="indefinite"></animate>
                  </stop>

                  <stop offset="100%" stop-color="#FF001C">
                      <animate attributeName="stop-color" values="#060827; #FF001C; #060827" dur="4s" repeatCount="indefinite"></animate>
                  </stop>

              </linearGradient>
            </defs><title>JB2018</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><path class="logo-home" d="M476.62,240.47c0,70.08-62.39,127.1-139.1,127.1-38.78,0-75.57-14.95-101.57-40.26-25.69,23-60.41,36.08-96.51,36.18h-.56c-53.76,0-103.13-28.77-125.89-73.41l-.08-.18a135.07,135.07,0,0,1-6.2-14.43l-.08-.22A117.45,117.45,0,0,1,0,236.78l45.82-.19a71.69,71.69,0,0,0,4,23.39,86.89,86.89,0,0,0,4,9.37c15.08,29.49,48.59,48.48,85.42,48.32,26.8-.08,52.27-10.31,69.89-28.06C224,274.72,232.05,255.66,232,236v-4.67h45.82v4.56a118,118,0,0,1-13.39,55c17.53,19.31,44.42,30.89,73.13,30.89,51.44,0,93.28-36.46,93.28-81.28S389,159.19,337.52,159.19c-25.46,0-49.27,8.82-67,24.82l-30.68-34c26.18-23.59,60.88-36.6,97.7-36.6C414.23,113.37,476.62,170.39,476.62,240.47Z"/><path class="logo-home" d="M230.55,113.53c-.12-37.95-.06-76.14.18-113.53l45.82.24c-.24,37.27-.3,75.34-.18,113.17Z"/></g></g></g></g>
          </svg>
      </h1>
    </div>
       <Footer-Section class="footer" v-bind:footerdark="footerdark"
                    v-bind:icondark="icondark"
                    v-bind:marginsdark="marginsdark"/>
  </div>
</template>

<script>
import Navbar from './../Navbar/Navbar';
import FooterSection from './../Footer/FooterSection';
import Silhouette from './Silhouette';
import anime from 'animejs';

export default {
  components: { Navbar, FooterSection, Silhouette },
  data(){
    return {
      navbardark: {
        background:'#111 !important',
        border:'none !important'
      },
      navlinkdark: {
        color: '#aaa !important'
      },
      footerdark: {
        background:'#111 !important',
        border: 'none !important',
        margin: '0 !important'
      },
      icondark: {
        color:'rgba(255,255,255,.5) !important'
      },
      marginsdark: {
        marginTop: '0px !important'
      },
      navbarToggle: {
        background: '#aaa'
      },
      navbarColor: {
        fill:"rgba(255,255,255,.7) !important"
      }
    }
  },
  methods: {

  },
  mounted() {
     var ml4 = {};
      ml4.opacityIn = [0,1];
      ml4.scaleIn = [0.2, 1];
      ml4.scaleOut = 3;
      ml4.durationIn = 600;
      ml4.durationOut = 400;
      ml4.delay = 300;

    anime.timeline({loop: false})
      .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
      }).add({
        targets: '.ml4 .logo-home',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: 1000
      })
      }
}


</script>

<style lang="css">



/* h1 {
  font-size:4em;
font-weight:500;
margin:4em;
color:#fff;
font-family: 'Rajdhani', sans-serif;
  font-family: 'Pontano Sans', sans-serif;
} */


.ml4 {
  font-family: 'Pontano Sans', sans-serif;
  font-weight: 900;
  font-size: 5em;
  text-align:center;
  margin:auto;
  display:flex;
}
.ml4 .letters {
  position: absolute;
  margin:4em auto;
  left: 0;
  top: 0;
  right: 0;
  opacity: 0; 
  color:rgba(255,255,255,.85);
}

.home-background {
   background:#111;
  overflow:hidden;
}

.logo-home{
  stroke:url(#logo-gradient);
  fill:transparent;
  stroke-width:2px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 7s alternate infinite;
}


@keyframes dash {
 to {
   stroke-dashoffset: 0;
 }
}

.home {
  display:flex;
  flex-direction: row;
  align-content: center;
  align-items:center;
  height:calc(100vh - 131px);
}


.logo2 {
  display:block;
  margin:auto;
  flex:1;
  height:320px;
  width:320px;
}

.developer {
  text-align:left;
  display:flex;
  margin:block;
  flex:1;
  width:100%;
}

.designer {
  text-align:right;
}


@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #FF515E}
}

</style>
