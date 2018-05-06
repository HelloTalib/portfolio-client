<template lang="html">
<div>
<div class="flex-container-space ha">
  <img src="./../../assets/JB2019.svg" height="140" alt="">
  <div class="error-block">
  <!-- <p class="p-error">The page you requested could not be found</p> -->
  <ul class="error-items">
    <li class="error-item"><router-link to="/home" class="router-error">Home</router-link></li>
    <li class="error-item"><router-link to="/portfolio" class="router-error">Portfolio</router-link></li>
    <li class="error-item"><router-link to="/contact" class="router-error">Contact</router-link></li>
  </ul>
  </div>
  <div class="error-nav">

  </div>
</div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'not-found',
  components: { Navbar }
}
</script>

<style lang="css">
.ha {
  height: 100vh;
  background:#111;

}

.error-block {
  padding-left: 1em;
}

.h1-error {
  color:#ccc;
  font-size:7em;
  text-align:center;
  margin:0;
  padding:0;
}

.error-items {
  list-style-type: none;
}

.error-item {
  float:left;
  font-size:1.5em;
  padding: .5em 2em;
  text-align:center;
}

.router-error {
  color:#ccc;
}

.router-error:hover {
  color:rgba(255,35,72,1);
}

.p-error {
margin-top: -2em;
}
</style>
