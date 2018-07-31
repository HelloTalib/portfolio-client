<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Intro from './components/Intro/Intro'

export default {
  name: 'App',
  components: { Navbar, Home, Portfolio, Intro }
  }
</script>

<style>
@import './normalize.css';
@import './skeleton.css';
</style>
