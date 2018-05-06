<template lang="html">
  <div id="projects" class="row space">
  <div class="card" v-for="project in projects" >
    <img :src="getImg(project.img)" class="card-img"/>
    <div class="card-body">
      <span class="card-flex">
      <h3>{{ project.title }}</h3><a  href="https://github.com/JBooker10/Fitness-App-2018" target="_blank"><i class="fa fa-github card-link" aria-hidden="true"></i></a>
      </span>
      <span class="card-p">
        {{ project.desc }}
    </span>
    <a v-bind:href="`https://${project.link}`" target="_blank" class="btn-primary">View Project</a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: ['projects'],
  name: 'card',
  methods: {
    getImg(name){
      const image = require(`./../../assets/${name}`)
      return image
    },
    getLink(name){
      const url = require(`${name}`)
      return url
    }
  }

}

</script>

<style lang="css">
h3 {
  flex: 1
}
.card {
  width: 35vw;
  height:auto;
  border-radius:10px;
  margin:2em 2vw;
  padding:0 0 2em 0;
  box-shadow:0px 3px 45px 9px rgba(0,0,0,.15)
}

.card-flex {
  display:flex;
}

@media(max-width:768px){
 .card {
   width: 84vw;
 }
}

@media(max-width:414px){
 .card {
   width: 80vw;
 }
}


</style>
