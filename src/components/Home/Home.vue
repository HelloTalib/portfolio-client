<template>
  <div class="overflow">
  <div class="custom">
    <navbar v-bind:navbarHome="navbarHome"
            v-bind:navbarLogo="navbarLogo"
            v-bind:navbarToggle="navbarToggle"
            v-bind:navbarBackground="navbarBackground"/>
    <showcase/>
  </div>
  <about/>
  <footer-section/>
  </div>
</template>

<script>
import About from './About'
import Showcase from './Showcase'
import FooterSection from '@/components/Footer/FooterSection'
import Navbar from '@/components/Navbar/Navbar'
import TweenLite from 'gsap'
export default {
  name: 'home',
  components: { About, Showcase, FooterSection, Navbar },
  data(){
    return {
      navbarBackground: {backgroundColor: 'transparent'},
      navbarHome: {color: 'white', backgroundColor: 'transparent', fill: 'white'},
      navbarLogo: {fill: '#ffffff'},
      navbarToggle: {backgroundColor: 'rgba(255,255,255,0.7)'}

    }
  }
}
</script>

<style>
.custom {
  background:#111;
  /* background:#181818; */


  background: radial-gradient(circle at top right, #181818 0%, #000000 100%);
/* background: radial-gradient(circle at top center, rgba(0,0,0,1) 0%, rgba(24,24,24,1) 80%); */

}
.home {
  background-color: transparent;
  background-image: linear-gradient(0deg, transparent 24%, rgba(255,255,255,.02) 25%, rgba(255,255,255,.01) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.01) 75%, rgba(255,255,255,.01) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.01) 25%, rgba(255,255,255,.01) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.01) 75%, rgba(255,255,255,.01) 76%, transparent 77%, transparent);
height:100%;
background-size:50px 50px;
}
.showcase {
  padding-top:1em;
  padding-bottom:0em;
  display:flex;
  justify-content: center;
  align-items: center;
}
.showcase-logo{
  filter:drop-shadow(1px 2px 4px rgba(0,0,0,.3));
  margin:auto;
  display:flex;
  padding:3em 0;
}

.overflow {
  overflow-x: hidden !important;
}


</style>
