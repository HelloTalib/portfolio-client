<template lang="html">
  <section class="about js-section2" id="about">
  <div class="flex-container">
    <div class="row-1">
      <h2 class="aboutheader" v-scroll-reveal.reset="{
        delay: 300,
        duration: 1500,
        scale: 1,
        origin: 'right',
        distance: '200px',
        mobile: true
      }">About Me</h2>
    </div>
      <div class='row'>
        <div class="about-column-1" v-scroll-reveal.reset="{
          delay: 100,
          duration: 1500,
          scale: 1,
          origin: 'left',
          distance: '200px',
          mobile: true
        }">
           <img class="profile-img" src="./../../assets/46-7.png" height="500">
        </div>
        <div class="about-column-2">
            <div class="column">
              <div class="row">
              <div class="column-in" v-scroll-reveal.reset="{
                delay: 100,
                duration: 1500,
                scale: 1,
                origin: 'right',
                distance: '200px',
                mobile: true
              }">
                <p class="paragraph">My name is Jared and I'm a developer from Chicago, IL. My background in building things started around the age of five with a box of legos. Later, shifting to sketching and drawing illustrations to which followed video editing and graphic design thereafter. I always had a fixation on creating and building projects. Whether it's an illustration, an ad campaign, or a web application, building a project from inception to completion has always given me a rush.</p>
              </div>
              <div class="column-in" v-scroll-reveal.reset="{
                delay: 200,
                duration: 1500,
                scale: 1,
                origin: 'right',
                distance: '200px',
                mobile: true
              }">
                <p class="paragraph">After graduating, I took a job as an analyst from an investment firm in Chicago while learning about sell-side M&A and capital raising for small and medium-sized businesses. The experience of working along-side small business owners to achieve their financial goals compelled me to pursue a career as a freelance developer. Feel free to contact me at jaredbooker10@gmail.com and check out my most recent projects below.</p>
              </div>
            </div>
            </div>
            <br>
            <div class="column" v-scroll-reveal.reset="{
              delay: 200,
              duration: 1500,
              scale: 1,
              origin: 'right',
              distance: '100px',
              mobile: true
            }">
              <div class="skill_list" id="skills"  v-for="skillbar of skillbars">
                <div class="skillbar clearfix" :data-percent="skillbar.percentage">
                    <div class="skillbar-title" ><span>{{ skillbar.language }}</span></div>
                    <transition name="progression">
                    <div class="skillbar-bar" :value="skillbar.percentage"></div>
                  </transition>
                    <div class="skill-bar-percent">{{ skillbar.percentage }}</div>

                </div>
              </div>
            </div>
            <br>
            <div class="column about-column">
              <div class="skills-list">
            <span class="skill-item" v-for="skill of skills">{{ skill }}</span>
          </div>
            </div>
        </div>
      </div>
  </div>
</section>
</template>

<script>
import TweenLite from 'gsap'
export default {
  name: 'about',
  data() {
    return {
      skills:['Vue', 'React', 'Angular^2', 'Express', 'Bootstrap', 'Materialize', 'Webpack',
      'Babel', 'SCSS/SASS', 'SVG', 'JSX', 'Git Version Control', 'Pug/Jade', 'Handlebars',
      'JSON', 'ES5', 'ES6', 'Adobe CC', 'Photoshop', 'Illustrator', 'After Effects', 'MongoDB' ],
       skillbars:[
        { language: 'HTML', percentage: '80%' },
        { language: 'CSS', percentage: '75%' },
        { language: 'JavaScript', percentage: '65%' },
        { language: 'Node.js', percentage: '55%' }
      ],
      skillbar_start:[
       { language: 'HTML', percentage: '0%' },
       { language: 'CSS', percentage: '0%' },
       { language: 'JavaScript', percentage: '0%' },
       { language: 'Node.js', percentage: '0%' }
     ]
    }
  },
  methods: {

  },
  mounted(){
        const bars = document.querySelectorAll('.skillbar-bar')
        const percentage = document.querySelectorAll('.skill-bar-percent')
        window.addEventListener('scroll', function(){
        if(window.pageYOffset >= 700){
        bars.forEach((bar) => {
          const progress = bar.attributes.value.value.toString()
          return TweenLite.to(bar, 4, { width: progress, delay: 1.5 })
        })
}
})
}
}
</script>

<style lang="css">

  /* #about {
    background:#242424;
  } */

  .progression {
    transition: 9s;
  }

  .skill-bar-percent {
      position:absolute;
      right:10px;
      top:0;
      font-size:12px;
      height:25px;
      line-height:25px;
      color:#888;
    }

    .skillbar-bar {
      height:25px;
    	width:0;
      /* background: rgb(255,35,35); */
      background: -moz-linear-gradient(left, rgba(255,35,35,1) 0%, rgba(255,35,72,1) 63%);
      background: -webkit-linear-gradient(left, rgba(255,35,35,1) 0%,rgba(255,35,72,1) 63%);
      background: linear-gradient(to right, #ff3131 10%, #17042A 94%);
      border-radius:15px;
    	-moz-border-radius:15px;
    	-webkit-border-radius:15px;
    	float: left;
    }

    .about-column {
      padding-bottom:2em;
    }

</style>
