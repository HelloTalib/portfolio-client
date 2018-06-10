<template lang="html">
<div>
  <div class="navbar-spacer"></div>
  <nav class="navbar" v-bind:style="navbardark">
    <div class="container">
      <div class="responsive-nav">
        <div class="navbar-brand">
          <router-link class="navbar-link nav-home" v-bind:style="navlinkdark" to="/home">Jaredbookr</router-link>
        </div>
        <div class="toggle-menu active" id="navbarToggle"  @click="navbarScroll">
        <div id="nav-icon3" v-bind:class="[ isActive ? '' : 'open' ]" @click="">

        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        <span v-bind:style="navbarToggle"></span>
        </div>
      </div>
    </div>
        <ul class="navbar-list">
          <li class="navbar-item"><router-link class="navbar-link" v-bind:style="navlinkdark" to="/home">Home</router-link></li>
          <li class="navbar-item"><router-link class="navbar-link" v-bind:style="navlinkdark" to="/portfolio">Portfolio</router-link></li>
          <li class="navbar-item">
            <router-link class="navbar-link" v-bind:style="navlinkdark" to="/contact">Contact</router-link>
          </li>
        </ul>
       <div>
      </div>
    </div>
</nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['navbardark', 'navlinkdark', 'navbarToggle'],
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    navbarScroll: function () {
      const navContent = document.querySelector('.navbar-list')
      const navbar = document.querySelector('.navbar')
      const mq = window.matchMedia('max-width:749px');
      this.isActive = !this.isActive
      if(!mq.matches && navContent.style.display == '' ){
        navContent.style.display = 'block'
        navContent.style.flexDirection = 'column'
        // navContent.style.borderBottom = '1px solid rgba(255,255,255,.02)'
        navContent.style.animation = 'slide-down 250ms'
        navbar.style.transition = '1000ms'
      } else if(!mq.matches && navContent.style.display == 'block'){
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

.responsive-nav {
  display:flex;
  align-content: space-between;
}

.navbar {
    position:fixed;
    top:0;
    margin-bottom:1em;
}


@media(max-width:750) {
  .toggle-menu {
    display:none;
  }
}
@media (min-width: 750px) {
  .container {
    width: 97%;
  }



  .navbar + .docs-section {
    border-top-width: 0; }

  .navbar,
  .navbar-spacer {
    display: block;
    width: 100%;
    height: 6.5rem;
    background: #fff;
    z-index: 99;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  .navbar-spacer {
    display: none;
   }

  .navbar > .container {
    width: 100%;
  }

  .navbar-list {
    list-style: none;
    margin-bottom: 0;
    float:right;
  }

  .navbar-brand {
    position:absolute;
    height:6.5rem;
    display:flex;
    align-items: center;
  }

  .navbar-item {
    position: relative;
    float: left;
    margin-bottom: 0;
  }

  .navbar-link {
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .2rem;
    margin-right: 35px;
    text-decoration: none;
    line-height: 6.5rem;
    color: #222; }

  .navbar-link.active {
    color: rgba(255,76,76,1);
  }


}
@media(max-width:749px){

  .container {
    width: 100%;
  }

  .toggle-menu {
    display:inline-block;
    float:right;
  }



.navbar {
  display: block;

  width: 100%;
  height: inherit;
  background: #fff;
  z-index: 99;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.navbar-list {
  list-style: none;
  margin-bottom: 0;
  text-align:center;
display:none;
}

.navbar-brand {
  margin:1em;
  flex:1;
}

.navbar-item {
  padding: 1.2em;
  margin:0;
}

.navbar-link {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .2rem;
  text-decoration: none;
  color: #222; }

#nav-icon3{
  width: 30px;
  height: 35px;
  position: relative;
  float:right;
  margin-top: 1em;
  margin-right:1em;
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
  height: 2px;
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
  transition: .25s ease-in-out;}
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
}



</style>
