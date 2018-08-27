<template lang="html">
  <div class="five columns github-card">
    <div class="card-illustration-3">
      <div class="list-group">
        <div class="list-group-item ">
          <span class="card-flex">
            <span class="card-header-left">
              <h5>Recent Updates</h5>
              <small><p class="p-header color ">View Recent Projects on Github</p></small>
            </span><i class="fa fa-clock-o" aria-hidden="true"></i>
          </span>
        </div>
        <div class="list-group-item " v-for="(repo, i) in repositories.slice().sort(( a, b) => {
            return new Date(a.updated_at) - new Date(b.updated_at);
        }).reverse()" :key="repo.id"
        v-if="repositories && repositories.length > 0 && i <= limit">
          <a class="default" v-bind:href="repo.html_url" target="_blank"><span class="card-flex">
            <span class="card-header-left">
              <h6>{{ repo.name }}</h6>
              <small><p class="p-header color-update">{{ repo.language}}</p></small>
            </span><span class="small">{{ repo.updated_at | moment }}</span>
          </span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  props: ['repositories'],
  name: 'Repository-Card',
  data() {
    return {
      limit: 6
    }
  },
  methods: {
    moment: function () {
        return moment();
      }
    },
  filters: {
    moment: function (date) {
      return moment(date).startOf('hour').fromNow(); ;
    },
  computed: {
    sortedItems: function() {
        this.repositories.sort(( a, b) => {
            return new Date(a.updated_at) - new Date(b.updated_at);
        });
        return this.repositories;
    }
}
  }
}
</script>

<style lang="css">
.card-illustration-3 {
  background: #fff;
  background-size: cover;
  background-origin: border-box;
  border-radius:10px;
  box-shadow:none !important;
  /* border:1px solid rgba(194, 194, 194, 0.3); */
  /* box-shadow:0px 3px 45px 9px rgba(59, 59, 59, 0.05); */
  margin:2em 1vw;
  min-width:320px;
  z-index:2;
  /* width:935px; */
  overflow:hidden;
}

.default, .default:hover {
  text-decoration: none;
  color:inherit;
}

.small {
  font-size:11px;
  color:#888;
}

h5 {
  font-weight:100;
  font-size:1.25em;
  color:#ccc;
  /* color:white; */
}

h6 {
  font-weight: lighter;
}

.fa-clock-o {
  font-size:1.25em !important;
  padding-right:1.25em;
}

.group-block {
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
  flex:1;
}

.github-card {
  display:flex;
  align-content:center;
  justify-content: center;
}

.color {
  color:#888 !important;
}

.time {
  background: linear-gradient(45deg, rgba(30,12,62,1) 0%, rgba(255,76,76,1) 73%)
}

repo-p {
  text-align:left;
  margin:0;
  padding:0;
}

.repo {
  margin:0;
  padding:0;
  background:blue;
}

.group-head {
  margin:0;
}

.group-text {
  text-align:left;
  margin:0;
  padding:0;
}

small {
  color:#888;
}


.repo-head {
  padding:.25em .5em;
  margin:0;
}

.list-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
}

.list-group-item:first-child {
  /* filter:invert(10%); */
  padding:.75em 1em;
  /* border:none; */
  border:none;
  /* background:#cccccc; */
  /* background: linear-gradient(86deg, rgba(30,12,62,1) 0%, rgba(244,62,88,1) 71%); */
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.35rem 2rem;
  margin-bottom: -1px;
  background-color: rgb(57,57,57);
  border: 1px solid rgba(114, 114, 114, 0.2);
  border-left:none;
  border-right:none;
  color:rgb(235, 235, 235) !important;
   
}

.list-group-item:hover{
 filter:invert(100%);
  /* background: linear-gradient(86deg, rgba(30,12,62,1) 0%, rgba(244,62,88,1) 71%); */
  color:#fff;
}



.justify-content-between {
  -webkit-box-pack: justify !important;
      -ms-flex-pack: justify !important;
          justify-content: space-between !important;
}

.justify-content-around {
  -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
}


</style>
