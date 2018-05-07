<template lang="html">
  <section class="home js-section1" id="home">
    <div class="showcase">
    <div class="showcase-column-1 head">
      <div class="typewriter" v-scroll-reveal.reset="{
        reset:true,
        delay: 200,
        duration: 1500,
        scale: 1,
        origin: 'left',
        distance: '200px',
        mobile: true
      }">
      <h1 class="dev">Developer</h1>
    </div>
    </div>
    <div class="showcase-column-2">
       <silhouette class="logo-silho"/>
    </div>
    <div class="showcase-column-3 head">
    <div class="design" v-scroll-reveal.reset="{
      reset:false,
      delay: 200,
      duration: 1500,
      scale: 1,
      origin: 'right',
      distance: '200px',
      mobile: true,
    }">
      <h1 class="design">Designer</h1>
    </div>
    </div>
  </div>
  <br><br>
  </section>
</template>

<script>
import Silhouette from './Silhouette'

export default {
  name: 'showcase',
  components: { Silhouette }
}
</script>

<style lang="css">
.logo-silho{
  filter:drop-shadow(1px 2px 4px rgba(0,0,0,.6));
  margin:auto;
  display:block;
  padding: 2em 0;
  height:620px;
}

h1 {
  color:#ccc;
}

@media(max-width:768px){
  .showcase {
    margin:auto;
    display:flex;
    width:100%;
  }
  .logo-silho {
    width:60vw;
    margin:auto;
    display:flex;
      padding: 0;
  }

  h1 {
    color:#ccc;
    padding:0;
    margin:0;
  }
}
</style>
