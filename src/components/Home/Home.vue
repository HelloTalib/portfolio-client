<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container home">
      <svg class="logo" height="220" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.62 367.57"><defs><linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >

                  <stop offset="0%" stop-color="#FF001C">
                      <animate attributeName="stop-color" values="#FF001C; #060827; #FF001C" dur="6s" repeatCount="indefinite"></animate>
                  </stop>

                  <stop offset="100%" stop-color="#FF001C">
                      <animate attributeName="stop-color" values="#060827; #FF001C; #060827" dur="4s" repeatCount="indefinite"></animate>
                  </stop>

              </linearGradient>
            </defs><title>JB2018</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><path class="cls-1" d="M476.62,240.47c0,70.08-62.39,127.1-139.1,127.1-38.78,0-75.57-14.95-101.57-40.26-25.69,23-60.41,36.08-96.51,36.18h-.56c-53.76,0-103.13-28.77-125.89-73.41l-.08-.18a135.07,135.07,0,0,1-6.2-14.43l-.08-.22A117.45,117.45,0,0,1,0,236.78l45.82-.19a71.69,71.69,0,0,0,4,23.39,86.89,86.89,0,0,0,4,9.37c15.08,29.49,48.59,48.48,85.42,48.32,26.8-.08,52.27-10.31,69.89-28.06C224,274.72,232.05,255.66,232,236v-4.67h45.82v4.56a118,118,0,0,1-13.39,55c17.53,19.31,44.42,30.89,73.13,30.89,51.44,0,93.28-36.46,93.28-81.28S389,159.19,337.52,159.19c-25.46,0-49.27,8.82-67,24.82l-30.68-34c26.18-23.59,60.88-36.6,97.7-36.6C414.23,113.37,476.62,170.39,476.62,240.47Z"/><path class="cls-1" d="M230.55,113.53c-.12-37.95-.06-76.14.18-113.53l45.82.24c-.24,37.27-.3,75.34-.18,113.17Z"/></g></g></g></g></svg>

    </div>
    <Footer-Section/>
  </div>
</template>

<script>
import Navbar from './../Navbar/Navbar';
import FooterSection from './../Footer/FooterSection';
import TweenLite from 'gsap';

export default {
  components: { Navbar, FooterSection },
  methods: {
    removeFromDOM: function(){
      const logo = document.querySelector('#logo');
      if(logo) logo.parentNode.removeChild(logo)
    }
  },
  mounted() {

        TweenLite.from('.logo', 1.1,  { width: '0%', rotation:180 })
        TweenLite.to(".cls-1", 1, {drawSVG:"20% 80%"})

        // TweenLite.from('.typewriter', 3, { opacity: 1})

  }
}


</script>

<style lang="css">

h1 {
  font-size:3.5em;
font-weight:500;
color:#181818;
font-family: 'Rajdhani', sans-serif;
}

.cls-1{
  fill:url(#logo-gradient);

}

.home {
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height:100vh;
}


.logo {
  filter:drop-shadow(2px 3px 4px rgba(0,0,0,.15));
  display:flex;
  margin:auto;
  flex:1;
  height:220;

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

.typewriter h1 {
  margin:auto;
  color: #181818;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #FE3E61; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .08em; /* Adjust as needed */
  animation:
    typing 2.8s steps(12, end),
    blink-caret .75s step-end infinite;


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
