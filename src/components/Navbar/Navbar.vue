<template lang="html">
  <div class="navbar" id="navbarBackground" v-bind:style="navbarBackground">
      <div class="head-logo">
        <router-link to="/home" class="nav-logo" >
          <svg xmlns="http://www.w3.org/2000/svg"  class="logo" viewBox="0 0 476.62 367.57"><g id="navbarLogo" data-name="Layer 2"><path class="jb-1" v-bind:style="navbarLogo" d="M476.62,240.47c0,70.08-62.39,127.1-139.1,127.1-38.78,0-75.57-14.95-101.57-40.26-25.69,23-60.41,36.08-96.51,36.18h-.56c-53.76,0-103.13-28.77-125.89-73.41l-.08-.18a135.07,135.07,0,0,1-6.2-14.43l-.08-.22A117.45,117.45,0,0,1,0,236.78l45.82-.19a71.69,71.69,0,0,0,4,23.39,86.89,86.89,0,0,0,4,9.37c15.08,29.49,48.59,48.48,85.42,48.32,26.8-.08,52.27-10.31,69.89-28.06C224,274.72,232.05,255.66,232,236v-4.67h45.82v4.56a118,118,0,0,1-13.39,55c17.53,19.31,44.42,30.89,73.13,30.89,51.44,0,93.28-36.46,93.28-81.28S389,159.19,337.52,159.19c-25.46,0-49.27,8.82-67,24.82l-30.68-34c26.18-23.59,60.88-36.6,97.7-36.6C414.23,113.37,476.62,170.39,476.62,240.47Z"/><path class="jb-1" v-bind:style="navbarLogo" d="M230.55,113.53c-.12-37.95-.06-76.14.18-113.53l45.82.24c-.24,37.27-.3,75.34-.18,113.17Z"/>
          </g>
          </svg>
      </router-link>
      </div>
      <div class="toggle-menu active" id="navbarToggle"  @click="navbarScroll">
        <div id="nav-icon3" v-bind:class="[ isActive ? '' : 'open' ]" @click="">

        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        </div>
      </div>
      <ul class="nav-content" id="navbarHome">
        <li class="nav-link" ><router-link class="link" v-bind:style="navbarHome" to="/home">About</router-link></li>
        <li class="nav-link"><router-link class="link" to="/portfolio" v-bind:style="navbarHome">Portfolio </router-link></li>
        <!-- <li class="nav-link"><router-link class="link" to="/blog">Blog</router-link></li> -->
        <li class="nav-link"><router-link class="link" to="/contact" v-bind:style="navbarHome">Contact</router-link></li>
          <li class="nav-link"><a class="link" href="https://github.com/JBooker10" target="_blank"><i class="fa fa-github" aria-hidden="true" v-bind:style="navbarHome"></i></a></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['navbarHome', 'navbarLogo', 'navbarBackground', 'navbarToggle'],
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    navbarScroll: function () {
      const navContent = document.querySelector('.nav-content')
      const navbar = document.querySelector('.navbar')
      const mq = window.matchMedia('max-width:768px');
      this.isActive = !this.isActive
      if(!mq.matches && navContent.style.display == '' ){
        navContent.style.display = 'flex'
        navContent.style.flexDirection = 'column'
        // navContent.style.borderBottom = '1px solid rgba(255,255,255,.02)'
        navContent.style.animation = 'slide-down 250ms'
        navbar.style.transition = '1000ms'
      } else if(!mq.matches && navContent.style.display == 'flex'){
        navContent.style.display = ''
        navbar.style.transition = '1000ms'
        navContent.style.borderBottom = 'none'
      }
    },
    toggleNavbar: function () {
      this.isActive = !this.isActive
    }
  }
}

</script>

<style lang="css">


@media(max-width:768px){
/* .navbar {
  border-bottom:1px solid #ccc;
} */
  .nav-logo {
    padding:.85em 3%;
  }
}

.jb-1{fill:#181818;}
.logo {
  width:42px;
}

#nav-icon3{
  width: 30px;
  height: 35px;
  position: relative;
  float:right;
  margin: 0em;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

 #nav-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #181818;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 9px;
}

#nav-icon3 span:nth-child(4) {
  top: 18px;
}

#nav-icon3.open span:nth-child(1) {
  top: 20px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}




</style>
