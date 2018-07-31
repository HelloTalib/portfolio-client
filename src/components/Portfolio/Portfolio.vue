<template lang="html">
  <div class="portfolio-scroll">
  <Navbar/>
  <div class="container">
  <Page-Header title="Portfolio" icon="fa fa-folder-open" />
  <div v-if="repositories.length === 0">
    <img src="./../../assets/JB2018.gif" class="spinner"/>
  </div>
  <div v-else>
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
    <Repository-Card      :repositories="repositories"
                          v-scroll-reveal.reset="{
                           delay: 250,
                           duration: 1000,
                           scale: .8,
                           origin: 'bottom',
                           distance: '100px',
                           mobile: false
                          }"/>
    <div class="row">
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
      <CardFull v-scroll-reveal.reset="{
                                     delay: 250,
                                     duration: 1000,
                                     scale: .8,
                                     origin: 'bottom',
                                     distance: '100px',
                                     mobile: false
                                    }"/>
    </div>
  </div>
  </div>
</div>
  <Footer-Section/>
</div>
</template>

<script>
import axios from 'axios';
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
      repositories: [],
    }
  },
   mounted(){
    axios
      .get('https://api.github.com/users/JBooker10/repos')
      .then(res => this.repositories = res.data)
      .catch(err => console.log(err))
    }
}
</script>

<style lang="css">

.spinner {
  display:block;
  margin:25% auto;

}



</style>
