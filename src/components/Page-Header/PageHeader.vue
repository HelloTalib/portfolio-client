<template lang="html">
  <div class="row">
  <div class="page-header" >
    <span class="card-flex">
    <h3>{{ title }}</h3>
    <i v-bind:class="icon" aria-hidden="true"></i>
    </span>
    <hr>
  </div>
</div>
</template>

<script>
export default {
  props: ['title', 'icon'],
  name: 'Page-Header'
}

</script>

<style lang="css">

.card-flex {
  display:flex;
  align-content:space-between;
  margin-bottom:5px;
}

.page-header {
  margin-top: 8em;
  margin-bottom:2em;
}

h3, h4 {
  flex: 1;
  color:black;
  font-weight:bold;

}

h3, hr {
  margin:0;
}

i {
  font-size: 2.2em !important;
  margin:0;
  padding:0;
  display:flex;
  align-self: center;
}

</style>
