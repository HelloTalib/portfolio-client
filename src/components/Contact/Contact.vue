<template lang="html">
  <div class="">
    <navbar v-bind="styling"/>
    <br><br><br>
    <div class="portfolio-container">
      <h2>Contact</h2>
    </div>
    <div class="flex-container-space">
    <contact-form v-scroll-reveal.reset="{
      delay: 100,
      duration: 1500,
      scale: 1,
      origin: 'left',
      distance: '200px',
      mobile: false
    }"/>
    <google-map v-scroll-reveal.reset="{
      delay: 150,
      duration: 1500,
      scale: 1,
      origin: 'bottom',
      distance: '200px',
      mobile: false
    }"/>
    </div>
    <br><br><br><br>
    <footer-section/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import FooterSection from '@/components/Footer/FooterSection'
import ContactForm from '@/components/Contact/ContactForm'
import GoogleMap from'@/components/Contact/GoogleMap'
export default {
  name: 'contact',
  components: { Navbar, FooterSection, ContactForm, GoogleMap  },
  data(){
    return {
      styling: {backgroundColor: 'transparent', color:'#181818'}
    }
  }
}

</script>

<style lang="css" scoped>


</style>
