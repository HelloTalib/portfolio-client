<template lang="html">
  <div>
  <div class="custom-color">
  <navbar/>
  <br><br>
  <section id="portfolio" >
    <div class="portfolio-container">
      <h2>Portfolio</h2>
    </div>
    <div class="flex-container" >
      <div class="">
        <card v-bind:projects="projects" v-scroll-reveal.reset="{
          delay: 100,
          duration: 1500,
          scale: 1,
          origin: 'bottom',
          distance: '200px',
          mobile: false
        }"></card>
        </div>
      </div>
      <br>
    <div class="flex-container">
    <div class="row space">
    <div class="card-codepen" v-scroll-reveal.reset="{
      delay: 100,
      duration: 1500,
      scale: 1,
      origin: 'bottom',
      distance: '100px',
      mobile: false
    }">
      <p data-height="600" data-theme-id="dark" data-slug-hash="qVgjdo" data-default-tab="result" data-user="Jaredbooker" data-embed-version="2" data-pen-title="Wonder Woman Polygon" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/Jaredbooker/pen/qVgjdo/">Wonder Woman Polygon</a> by Jared Booker (<a href="https://codepen.io/Jaredbooker">@Jaredbooker</a>) on <a href="https://codepen.io">CodePen</a>.
      </p>
    </div>
    <div class="card-codepen" v-scroll-reveal.reset="{
      delay: 250,
      duration: 1500,
      scale: 1,
      origin: 'bottom',
      distance: '100px',
      mobile: false
    }">
      <p data-height="600" data-theme-id="dark" data-slug-hash="eGjJKY" data-default-tab="result" data-user="Jaredbooker" data-embed-version="2" data-pen-title="Calculator" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/Jaredbooker/pen/eGjJKY/">Calculator</a> by Jared Booker (<a href="https://codepen.io/Jaredbooker">@Jaredbooker</a>) on <a href="https://codepen.io">CodePen</a>.</p>
    </div>
    </div>
  </div>
  </section>
</div>
  <footer-section/>
</div>
</template>

<script>
import Card from './Card'
import FooterSection from '@/components/Footer/FooterSection'
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'portfolio',
  components: { Card, FooterSection, Navbar },
  data () {
    return {
    projects: [
        {
          id: 1,
          title: 'Fitness App',
          img: 'fitnessApp.png',
          github: 'https://github.com/JBooker10/Fitness-App-2018',
          desc: 'A fitness app using React, Firebase, D3 (Data-Driven, Documents) & Bootstrap 4 to help track my fitness progression & to learn which muscle(s) is being targeted for each exercise routine.The Firebase REST API is link to a parent SVG node resembling the human body which encompasses over 320 children elements --each representing a  muscle or muscle group. When a user clicks or response to an exercise each muscle mutates its color to highlight which muscles are being targeted. The application sends data to firebase & displays a bar chart to show workout data.',
          link: 'fitness-app-2018.herokuapp.com/'
        },
        {
          id: 2,
          title: 'Weather App',
          img: 'weatherApp.png',
          github: 'https://github.com/JBooker10/',
          desc: ' A weather app using React & Materialize for the UI. It uses an External API from wunderground to display the current weather and to move the needle on the thermostat which I designed in Illustrator CC.',
          link: 'weather-app-20181a.herokuapp.com/'
        }]
      }
  },
  created() {
    let codepen = document.createElement('script');    codepen.setAttribute('src',"https://production-assets.codepen.io/assets/embed/ei.js");
    document.head.appendChild(codepen);
}

}
</script>

<style lang="css">
#portfolio {
  /* padding-top: 4em; */
}

.vector-art {
  margin:0;
  padding-top: 5em;
  background:#111;
  border-bottom: 1px solid #ccc;
}

.custom-color {
  background:#fff;
}

.portfolio-h2{
  padding: 0 3em;
}

.astro {
  /* filter:drop-shadow(2px 4px 6px rgba(0,0,0,.3)); */
  filter:invert(100%)
}

.flex-container-portfolio {
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-wrap:wrap;
  margin:0;
}


</style>
