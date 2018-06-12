<template lang="html">
  <div class="five columns">
    <div class="card-illustration-3">
      <div class="list-group">
        <div class="list-group-item ">
          <span class="card-flex">
            <span class="card-header-left">
              <h5>Recent Updates</h5>
              <small><p class="p-header color ">View Recent Projects with Github</p></small>
            </span><i class="fa fa-clock-o" aria-hidden="true"></i>
          </span>
        </div>
        <div class="list-group-item " v-for="repo in repositories">
          <a class="default" v-bind:href="repo.html_url" target="_blank"><span class="card-flex">
            <span class="card-header-left">
              <h6>{{ repo.name }}</h6>
              <small><p class="p-header color-update">{{ repo.language}}</p></small>
            </span><span class="">{{ repo.updated_at | moment }}</span>
          </span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'Repository-Card',
  data() {
    return {
      repositories: null
    }
  },
  mounted(){
    axios
      .get('https://api.github.com/users/JBooker10/repos')
      .then(res => this.repositories = res.data)
      .catch(err => console.log(err))
    },
  methods: {
    moment: function () {
        return moment();
      }
    },
  filters: {
    moment: function (date) {
      return moment(date).startOf('hour').fromNow(); ;
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
  box-shadow:0px 3px 45px 9px rgba(0,0,0,.08);
  margin:2em 1vw;
  z-index:2;
  /* width:935px; */
  overflow:hidden;
}

.color-update {
}

.default, .default:hover {
  text-decoration: none;
  color:inherit;
}





h5 {
  font-weight:600;
  color:white;
}

h6 {
  font-weight: lighter;
}

.clock {
  font-size:1em !important
}

.group-block {
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
  flex:1;
}

.group-date {

}

.color {
  color:rgba(255,255,255,.6) !important;
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
  /* border:none; */
  background: linear-gradient(86deg, rgba(30,12,62,1) 0%, rgba(244,62,88,1) 71%);
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 2rem;
  margin-bottom: -1px;
  background-color: #111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-left:none;
  border-bottom:1px solid rgba(255, 255, 255, 0.1);
  border-right:none;
  color:white !important;
}

.list-group-item:hover{
  background: linear-gradient(86deg, rgba(30,12,62,1) 0%, rgba(244,62,88,1) 71%);
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
