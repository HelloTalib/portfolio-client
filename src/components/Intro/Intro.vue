<template lang="html">
  <div class="overflowxy">
  <div class=" ha">
    <span class="countdown" id="countdown">{{loading}}</span>
    <span class="loading-bar"/>
      <span class="loading" id="load"></span>
    </span>
</div>

</div>
</template>

<script>
import TweenLite from 'gsap';

export default {
  name: 'intro',
  data(){
    return {
      loading: 10
    }
  },
  methods: {
    getBrand: function(){
      const parent = document.querySelector('.col-2')
      const logo = document.createElement('img')
      logo.src = require(`./../../assets/JB2019.svg`)
      logo.height = 100
      return parent.insertBefore(logo, null)
    },
    loader: function(){
      return TweenLite.to(load, 3,  { width: '100%' })
    },
    loop: function() { return setInterval(() => {
        if(this.loading !== 0){
          return this.loading--
        } else {
          //return window.location.pathname = '/home'
          //clearInterval(this.getBrand())
        }
      }, 200)},
    countdown: function(){
      const countdown = document.getElementById('countdown')
       let num = countdown.innerHTML
        this.loop()
        this.loader()
  }
},
  mounted(){
    this.countdown()

    TweenLite.to('.img-logo-2', 1, {delay:2, opacity:0 })
    setTimeout(() => this.$router.push({ name: 'home' }), 3000)
  },
}
</script>

<style lang="css" scoped>

.img-head {
position:absolute;
left:39%;
top:10%;
}

.cls-1,.cls-2{
  fill:none;
  stroke-width:61px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 10s linear forwards;}

.cls-1{
  stroke-linecap:square;
  stroke-linejoin:round;
  stroke:url(#linear-gradient);
}
.cls-2{
  stroke-miterlimit:10;
  stroke:url(#linear-gradient-2);
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}



.col-2 p {
text-align:center;

}

.col-2 h1 {
  color:#181818;
  font-weight: bold;
}

.loading-bar {
  width:100%;
  height:5px;
  background:rgba(0,0,0,.1);
  bottom:0;
  position:fixed;
  margin:0;
}

.img-logo-2 {
  margin-top:20vh;
  height:400px;
  display:block;
  margin:auto;
}

.img-logo {
  position:fixed;
  top:35vh;
  left:41.5vw;
  right:41.5vw;
  width:17vw;
  /* filter:drop-shadow(2px 4px 6px rgba(0,0,0,.5)); */
}

.loading {
  width:0%;
  left:0;
  height:3px;
  z-index:2;

  background: linear-gradient(to right, rgba(255,35,35,1) 0%, rgba(255,35,72,1) 63%);
  bottom:0;
  position:fixed;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  margin:0;
}

.col-1 {
  flex:1;
  margin:auto;

}

.col-2 {
  flex:1;
  margin:0 auto;

}

.countdown {
  font-size: 20em;
  font-family: Rajdhani;
  font-weight:600;
  fill:#181818;
  color:rgba(0,0,0,.1);
  display:block;
  margin:auto;
}

.p-intro {
  text-align: center;
  margin:auto;
}

/* .jb-icon{
  filter:drop-shadow(3px 4px 4px rgba(0,0,0,.3));
  display:block;
  margin:auto;
} */


.ha {
  height: 100vh;
  display:flex;
  flex-direction: column;
  align-content: center;
  background:#111;
  /* background: radial-gradient(circle at top right, #111111 0%, #000000 100%); */
  /* background:#111; */
}



.btn-intro {
  padding:.5em 3em;
  font-size: 1.2em;
  border-radius:40px;
  border:none;
  margin:auto;
}

.overflowxy {
    overflow: hidden !important;
  }

</style>
