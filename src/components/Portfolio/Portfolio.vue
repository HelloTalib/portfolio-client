<template lang="html">
  <div>
  <Navbar/>
  <div class="container">
  <Page-Header title="Portfolio" icon="fa fa-folder-open" />
  <div class="row">
    <Codepen-Card title="Wonder Woman Polygons"
                  col="seven columns"
                  link="https://codepen.io/Jaredbooker/pen/qVgjdo/"
                  hash="qVgjdo"
                  v-scroll-reveal.reset="{
                   delay: 250,
                   duration: 1000,
                   scale: .8,
                   origin: 'bottom',
                   distance: '100px',
                   mobile: false
                  }"/>
    <Repository-Card  v-scroll-reveal.reset="{
                           delay: 250,
                           duration: 1000,
                           scale: .8,
                           origin: 'bottom',
                           distance: '100px',
                           mobile: false
                          }"/>
    <div class="row">
      <CardFull v-scroll-reveal.reset="{
                             delay: 250,
                             duration: 1000,
                             scale: .8,
                             origin: 'bottom',
                             distance: '100px',
                             mobile: false
                            }"/>
      <Codepen-Card title="Calculator"
                      col="six columns"
                      link="https://codepen.io/Jaredbooker/pen/eGjJKY/"
                      hash="eGjJKY"
                      v-scroll-reveal.reset="{
                      delay: 250,
                      duration: 1000,
                      scale: .8,
                      origin: 'bottom',
                      distance: '100px',
                      mobile: false
                      }"/>
    </div>
    <div class="row">
      <Card title="My Fitness App"
            stack="REACT • D3 • FIREBASE"
            img="fitnessApp5.png"
            github="https://github.com/JBooker10/Fitness-App-2018"
            link="https://fitness-app-2018.herokuapp.com/"
            description="A fitness app using React, Firebase, D3.js & Bootstrap 4 to help track my fitness progression & to learn which muscle(s) is being targeted for each exercise routine.The Firebase REST API..."
            v-scroll-reveal.reset="{
              delay: 250,
              duration: 1000,
              scale: .8,
              origin: 'bottom',
              distance: '100px',
              mobile: false}"/>
              <Card title="Weather App"
                    stack="REACT • Material Design"
                    img="placeholder-image.jpg"
                    github="https://github.com/JBooker10/weather-app"
                    link="https://weather-app-20181a.herokuapp.com"
                    description="A weather App using an external API from Wunderground to display weather"
                    v-scroll-reveal.reset="{
                      delay: 250,
                      duration: 1000,
                      scale: .8,
                      origin: 'bottom',
                      distance: '100px',
                      mobile: false}"/>
    </div>
  </div>
</div>
  <Footer-Section/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import PageHeader from '@/components/Page-Header/PageHeader'
import Card from '@/components/Portfolio/Card'
import CodepenCard from '@/components/Portfolio/CodepenCard'
import FooterSection from '@/components/Footer/FooterSection'
import RepositoryCard from '@/components/Portfolio/RepositoryCard'
import CardFull from '@/components/Portfolio/CardFull'

export default {
  name: 'portfolio',
  components: { Navbar, PageHeader, Card, CodepenCard, FooterSection, RepositoryCard, CardFull },
  data() {
    return {

    }
  },
  created() {
   // let codepen = document.createElement('script')   codepen.setAttribute('src',"https://production-assets.codepen.io/assets/embed/ei.js");
   // document.head.appendChild(codepen);
}

}

</script>

<style lang="css">



</style>
