<template lang="html">
  <div class="six columns">
    <a  class="card-full-link" href="http://secret-gorge-71321.herokuapp.com/" target="_blank"><div class="card-illustration-3" :style="{
      backgroundImage: 'url(' + require('@/assets/108.jpeg') + ')',
      backgroundSize:'125%',

      animation: 'backgroundScroll 8s linear infinite'

      }"
      >
      <div class="card-body">
          <img src="./../../assets/color.svg" height="140" class="card-photo"/>
          <h3 class="card-title">Impression</h3>
          <p class="card-p-1">A full-stack JavaScript social networking site for creative professionals using React.js, Redux, MongoDB, Express and Node.js.</p>
          <br/>
          <a href="https://github.com/JBooker10/Impression" target="_blank"><i class="fa fa-github card-link-full" aria-hidden="true"></i></a>
          <br/>
      </div>

    </div></a>
  </div>
</template>

<script>
export default {
  // props: [ "title", "stack", "img", "github", "link", "description"],
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

.card-illustration-3 {
  /* background: url('./../../assets/108.jpeg'); */
  background-size:125%;
  filter:contrast(145%);
  background-origin: border-box;
  border-radius:10px;
  box-shadow:0px 3px 45px 9px rgba(0,0,0,.08);
  margin:2em 1vw;
  z-index:2;
  overflow:hidden;
   -webkit-animation: backgroundScroll 8s linear 1;
    -webkit-animation-fill-mode: forwards;
    animation: backgroundScroll 8s linear infinite;
    animation-fill-mode: forwards;
   z-index:2;
 }


 @-webkit-keyframes backgroundScroll {
     from {background-position: 0 0px;}
     to {background-position: 0px -100px;}
 }

 @keyframes backgroundScroll {
     from {background-position: 0 0px;}
     to {background-position: 0px -100px;}
 }

.card-full-link {
  text-decoration:none;
}
.card-photo {
  display:block;
  margin:3em auto .5em auto;
  opacity:.8;

  /* filter:drop-shadow(1px 2px 3px black); */
}

.card-title {
  color:rgba(255,255,255,.9);
  /* text-shadow: 1px 2px 2px black; */
  /* text-transform: uppercase; */
  font-weight: 600;
  text-align:center;
  margin:0;
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

.card-p-1 {
  color:#fff;
  margin:0;
  line-height: 14px;
  /* text-shadow: 1px 2px 3px black; */
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

.card-link-full {
  margin:.33em 0 !important;
  font-size:1.4em !important;
  color: white !important;
  float:right;
  z-index:4px;
}

.card-header-left {
  flex:1;
}


</style>
