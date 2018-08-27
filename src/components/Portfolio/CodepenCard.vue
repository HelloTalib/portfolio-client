<template lang="html">
  <div v-bind:class="col">
  <div class="card-illustration-2">
  <p data-height="580" data-theme-id="light" v-bind:data-slug-hash="hash" data-default-tab="result" data-user="Jaredbooker" data-embed-version="2" v-bind:data-pen-title="title" class="codepen" >See the Pen <a v-bind:href="link">{{ title }}</a> by Jared Booker (<a href="https://codepen.io/Jaredbooker">@Jaredbooker</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  </div>
</div>
</template>

<script>

export default {
  props: ['title', 'col', 'link', 'hash'],
  name: 'Codepen-Card',
  created() {
    let codepen = document.createElement('script');
    codepen.setAttribute('src',"https://production-assets.codepen.io/assets/embed/ei.js");
    document.head.appendChild(codepen);
  }
}

</script>

<style lang="css">

.loader {
  position:absolute;
  z-index:-1;
  top:40%;
  left:40%;
}

.card-illustration-2 {
  background: #fff;
  /* background-image:url("./../../assets/JB2018.gif"); */
  background-repeat: no-repeat;
  background-size: auto;
  background-position:center;
  background-origin: border-box;
  border-radius:10px;
  /* box-shadow:0px 3px 45px 9px rgba(0,0,0,.08); */
  margin:2em 1vw;
  z-index:2;
  height:575px;
  overflow:hidden;
}


</style>
