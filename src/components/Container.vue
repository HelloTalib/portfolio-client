<template lang="html">
  <div>
  <navbar/>
  <router-view>
  </router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import Home from '@/components/Home/Home'
import Portfolio from '@/components/Portfolio/Portfolio'
import Intro from '@/components/Intro/Intro'

export default {
  name: 'container',
  components: { Navbar, Home, Portfolio, Intro }
}
</script>

<style lang="css">
</style>
