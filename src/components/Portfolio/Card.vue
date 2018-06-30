<template lang="html">
  <div class="six columns">
    <div class="card">
      <a v-bind:href="link" target="_blank">
      <img :src="getImg(img)" class="card-img"/>
      </a>
      <div class="card-body">
        <span class="card-flex">
          <span class="card-header-left">
            <h4>{{ title }}</h4>
            <small><p class="p-header">{{ stack }}</p></small>
          </span><a  v-bind:href="github" target="_blank"><i class="fa fa-github card-link" aria-hidden="true"></i></a>
          </span>
          <span class="card-p">
            {{ description }}
            </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ "title", "stack", "img", "github", "link", "description"],
  name: 'Card',
  methods: {
    getImg(name){
      const image = require(`./../../assets/${name}`)
        return image;
      },
    getLink(name){
      const url = require(`${name}`)
      return url
    }
  }
}

</script>

<style lang="css">

.card {
  min-width:inherit;
  height:auto;
  border-radius:10px;
  margin:2em 1vw;
  box-shadow:0px 3px 45px 9px rgba(0,0,0,.08);
  background:white;
  overflow:hidden;
}
.card-flex {
  display:flex;
  align-content:space-between;
  margin-bottom:5px;
}

.card-img {
  width:100%;
  cursor:pointer;
  z-index:-2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
}

.p-header {
  padding:0;
  text-align:left;
  margin-top:-27px;
  color: #888;
}

.card-p {
  color:#888;
}

.card-img:hover{
  filter:none;
}
.card-body{
  margin:2em 2em;
}
.card-p {
  color:#888;
}

.card-link {
  margin:.33em 0 !important;
  font-size:1.4em !important;
  color: #181818 !important;
}

.card-header-left {
  flex:1;
}


</style>
