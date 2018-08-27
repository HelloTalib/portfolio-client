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
       <Card title="Financial Markets"
            stack="Express | Vue | RxJS | ChartJS"
            img="mockup.png"
            github="https://github.com/JBooker10/financial-markets"
            link="https://shrouded-atoll-68868.herokuapp.com/#/"
            description="A light-weight reactive stock market web app using ExpressJS, VueJS,
            and RXJS Observables  to stream and analyze real-time stock data on companies from the IEX trading API."
            v-scroll-reveal.reset="{
              delay: 250,
              duration: 500,
              scale: .8,
              origin: 'bottom',
              distance: '100px',
              mobile: false}"/>
   <Card title="Fitness App"
          stack="ReactJS | Bootstrap 4 | D3 | Firebase | Illustrator"
          img="weight.jpg"
          github="https://github.com/JBooker10/Fitness-App-2018"
          link="https://fitness-app-2018.herokuapp.com/"
          description="A fitness app using React, Firebase, D3.js & Bootstrap 4 to help track my fitness progression & to learn which muscle(s) is being targeted for each exercise routine.The Firebase REST API..."
          v-scroll-reveal.reset="{
            delay: 250,
            duration: 500,
            scale: .8,
            origin: 'bottom',
            distance: '100px',
            mobile: false
            }"/>
    </div>

   <div class="row">
       <Card title="Weather App"
            stack="ReactJS | Materialize CSS | Illustrator "
            img="mockup.png"
            github="https://github.com/JBooker10/weather-app"
            link="https://weather-app-20181a.herokuapp.com/"
            description="A weather App and using an external API from Wunderground to display weather"
            v-scroll-reveal.reset="{
              delay: 250,
              duration: 500,
              scale: .8,
              origin: 'bottom',
              distance: '100px',
              mobile: false}"/>
   <Card title="Social Media App (Impression)"
          stack="ReactJS | Redux | Express | JSON Web Token | MongoDB "
          img="weight.jpg"
          github="https://github.com/JBooker10/Impression"
          link="https://secret-gorge-71321.herokuapp.com/"
          description="A full-stack JavaScript App for creative professionals. Using Node, Express, MongoDB, React and Redux -- note: server may not load do to Heroku Dyno Usage"
          v-scroll-reveal.reset="{
            delay: 250,
            duration: 500,
            scale: .8,
            origin: 'bottom',
            distance: '100px',
            mobile: false
            }"/>
    </div>
    <div class="row">
         <Codepen-Card class="filt" title="Wonder Woman Polygons"
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
          <Codepen-Card 
        title="Calculator"
        col="five columns"
        link="https://codepen.io/Jaredbooker/pen/eGjJKY/"
        hash="eGjJKY"
        class="filt"
        v-scroll-reveal.reset="{
          delay: 250,
          duration: 500,
          scale: .8,
          origin: 'bottom',
          distance: '100px',
          mobile: false
        }"/>
  </div>
  <div class="row">
      


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

  // <Repository-Card :repositories="repositories"
  //                         v-scroll-reveal.reset="{
  //                          delay: 250,
  //                          duration: 500,
  //                          scale: .8,
  //                          origin: 'bottom',
  //                          distance: '100px',
  //                          mobile: false
  //                         }"/>




</script>

<style lang="css">

.spinner {
  display:block;
  margin:25% auto;

}

.frame {
  height:600px;
  border:none;
  border-radius:1em;
  overflow: hidden;
}

.filt {
  filter: brightness(120%);
}



</style>
