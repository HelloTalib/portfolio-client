<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container">
    <Page-Header title="Contact" icon="fa fa-envelope"/>
    <div class="row">
    <Contact-Form   v-scroll-reveal.reset="{
        delay: 100,
        duration: 1000,
        scale: .8,
        origin: 'bottom',
        distance: '300px',
        mobile: false
      }"/>
    <Google-Map  v-scroll-reveal.reset="{
        delay: 100,
        duration: 1000,
        scale: .8,
        origin: 'bottom',
        distance: '300px',
        mobile: false
      }"/>
  </div>
  </div>
  <Footer-Section/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import PageHeader from '@/components/Page-Header/PageHeader'
import FooterSection from '@/components/Footer/FooterSection'
import ContactForm from './ContactForm'
import GoogleMap from './GoogleMap.vue'
export default {
  // AIzaSyAEr9BOREltppvZH0KnJ6gpUqPOmN08i4E
  components: { PageHeader, Navbar, ContactForm, GoogleMap, FooterSection },
  name: 'Contact',

}
</script>

<style lang="css">

textarea {
  height:20vh;
}

.form-column {
  display:flex;
}

.container {
  width:90%;
}

</style>
