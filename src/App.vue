<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Intro from './components/Intro/Intro'

export default {
  name: 'App',
  components: { Navbar, Home, Portfolio, Intro }
}
</script>

<style>


body {
  margin: 0;
  position:relative;
  font-family: 'Rajdhani', sans-serif;
  color: #8c8c8c;
  display:flex;
  min-height: 100vh;
  flex-direction:column;
  overflow-x: hidden !important;
}

#app {
  overflow-x: hidden !important;
}

h1 {
  font-size:3.5em;
  font-weight:500;
  margin:0 auto;
  color:#181818;
  max-width:300px;
  font-family: 'Rajdhani', sans-serif;
}
h2{
  font-size:3.5em;
  font-weight:100;
  color:#ccc;
  padding:0;
  margin:0;
  font-family: 'Pontano Sans', sans-serif;
}
h3{
  font-size:1.4em;
  font-weight:600;
  color:#181818;
  margin:.33em 0;
}
.navbar {
  top:0;
  width: 100%;
  z-index:10;
  background:#fff;
}

.design h1 {

}





.nav-logo{
  position:absolute;
  padding:1em 3%;
  z-index: 10;
}

a {
  font-family: 'Pontano Sans', sans-serif;
  text-decoration:none;
  color:#181818;
}

.fa {
  color:#181818;

}
.nav-content {
  text-align:right;
  width:94%;

  z-index: 10;
  margin: 0 auto;
  padding: 0;
  /* background:red; */

}
.nav-content, .nav-link {
  list-style: none;
}
 .nav-link, .link {
  padding:20px 6px;
  font-size:15px;
  cursor:pointer;
  color:#181818;
  }
.nav-button {
  padding:10px 15px;
  display:inline-block;
  border: 1px solid #FE3E61;
  border-radius:4px;
  color:#FE3E61 !important;
  }

  .nav-button-link{
    color:#FE3E61
  }


.nav-button:hover {
  background:linear-gradient(to right, rgba(255,35,35,1) 0%, #FE3E61 63%);
  background:#FE3E61;
  color:#fff;
}

.link {
  padding:25px 8px;

}

.toggle-menu {
  width:97%;
  padding:15px 12px 15px 12px;
  box-sizing: border-box;
  text-align:right;
  display:none;
}

 .nav-link:hover {
   background:none;
   animation:fadeIn 1.5s;
}

p{

}
.footer-container {
  max-width:1200px;
  padding-bottom:10px;
  margin:auto;
  display:block;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  margin:50px 0;
}
.flex-container-space {
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}
.flex-full{
  display: flex;
  justify-content:flex-start;
  flex-wrap:wrap;
}
.break{
  flex-wrap:wrap;
  flex:1;
}
.row-1{
  flex-direction: row;
  align-self:flex-start;
  flex-wrap: wrap;
  flex-flow:wrap;
  align-self:flex-end;
}
.flex-container .row{
  max-width:1250px;
  flex-direction: row;
}
.about-column-1{
  flex:1;
  flex-direction: column;
}
.about-column-2{
  flex:1.7;
  flex-direction: column;
}
.column{
  flex:1;
  flex-direction:column;
}
.showcase-column-1{
  flex:1;
    text-align: center;
}
.showcase-column-2{
  flex:1;
  align-self: center;
}
.showcase-column-3{
  flex:1;
  align-self:center;
  text-align: center;
}
.row{
  display:flex;
  flex-direction: row;
  align-content: space-around;
  width:100%;
}
.space {
  align-content:space-around;
  margin:auto;
}
.column-in{
  flex:.5;

}
.col{
  flex:1;
}
.col-2{
  flex:2;
}
.mb-1 {
  margin-top:-20px;
}
.m{
  margin:0 15px;
}
.portfolio-container {
  max-width:1100px;
  display:block;
  text-align: left;
  margin:auto;
  margin-left:10%;
}
.illustration{
  width:550px;
  margin:2%;
}
.info{
  flex:1;
  flex-direction: row;
  min-width:200px;
  flex-wrap:wrap;

}
.profle-img{
  flex:1.7;
  flex-direction:row;
    background:green;
}
.info-img{
  height:400px;
}


.card-link {
  margin:.33em 0 !important;
  font-size:1.4em !important;
  color: #181818 !important;
}

.typewriter h1 {
  margin:auto;
  color: #ccc;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #FE3E61; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .08em; /* Adjust as needed */
  animation:
    typing 2.8s steps(12, end),
    blink-caret .75s step-end infinite;

}




.sc-1{
  padding:0;
  margin-top:-5px;
  line-height:98%;
  font-size:14px;
}

.btn{
  background:none;
  color:#F84B60;
  padding:7px 14px;
  border:1px solid #FE3E61;
  border-radius:4px;
  cursor:pointer;
}

.btn-primary{
  background:none;
  color:#888;
  padding:9px 8px;
  border:1px solid #888;
  font-size:.9em;
  font-weight:bold;
  border-radius:4px;
  text-transform:uppercase;
  cursor:pointer;
  display:block;
  margin-top: 2.5em;
  float:right;
  width:120px;
  text-align: center;
}

.card {
  width: 35vw;
  min-width:400px;
  height: inherit;
  border-radius:10px;
  margin:auto;
  padding:0 0 1.5em 0;
  box-shadow:0px 3px 38px 9px rgba(0,0,0,.12)
}

.card-codepen {
  width: 35vw;
  min-width:400px;
  height: 600px;
  border-radius:10px;
  margin:2em auto;
  padding:none;
  box-shadow:0px 3px 38px 9px rgba(0,0,0,.15)
}

.card-img {
  /* width: inherit; */
  width:100%;
  z-index:-1;
  overflow: hidden;
  filter:brightness(80%);
}

.card-img:hover{
  filter:none;
}


.card-body{
  margin:2em 2em;
}



.card-p {
  color:#181818;
  font-size: 1.1em;
}

.f-left {
  float:left;
}

.f-right {
  float:right;
}

hr {
  border: 1px solid #ccc;
}

.btn-primary:hover{
  background:#888;
  color:#f2f2f2;
}

.btn:hover{
  background: -moz-linear-gradient(-45deg, #ff4057 0%, #ed0e4d 100%);
background: -webkit-linear-gradient(-45deg, #ff4057 0%,#ed0e4d 100%);
background: linear-gradient(135deg, #ff1418 0%,#ed0e4d 100%);
border:1px solid #FE3E61;
color:#f2f2f2;
}

.btn-secondary{
  display:block;
  margin:5px;
  font-size:.8em;
  border: 1px solid rgba(0,0,0,.15);
  padding:10px 20px;
  color:#f2f2f2;
  border:none;
  border-radius:4px;
  cursor:pointer;
}



.error-header{
  /* display:flex; */
  /* height:700px; */
  /* align-content:center; */
  /* background-image:url(/img/moon-landing1.svg);
  background-repeat: no-repeat;
  background-size: 60%;
  background-position:left bottom;
  filter:brightness(70%); */
}

.error-header h2{
  align-self: center;
  font-weight: 500;
  font-size:7em;
  margin:auto;
  display:flex;
}

.error-header p {
  font-size:1.25em;
  color:#F84B60;
  text-align: left;
}

.error-msg{
  align-self: center;
}

.error-img{
  padding-top:15%;
  opacity:.8;
}

.fa-angle-double-down{
  font-size:35px !important;
  padding-bottom:20px !important;
}

.git{
  padding:0!important;
  margin:0!important;
}

.fa-bars{
  cursor:pointer;
  color:#f2f2f2;
  font-size:1.4em !important;
}
.fa-bars:active{
  transform:rotate(90deg);
}

.fa-bars:hover{
  color:#f2f2f2 !important;
}

.fa{
  padding:4px;
  font-size:21px;
}


.fa:hover{
  color:#ff1e29;
}





.toggle-menu {
  width:97%;
  padding:15px 12px 15px 12px;
  box-sizing: border-box;
  text-align:right;
  display:none;
}

 .nav-link:hover {
   background:none;
   animation:fadeIn 1.5s;
}




/* .about {
  background:url('/img/diamonds2.png');
} */

.aboutheader{
  width:70vw !important;
  text-align:left;
  padding:10px 0;
}

.profile-img{
  margin:auto;
  margin-left:-60px;
  filter:grayscale(0%);
  display:flex;
  /* filter:drop-shadow( 3px 38px 9px rgba(0,0,0,.15)); */
}

.portfolio-img{
  border-radius:5px;
}

.resume{
  float:left;
}

.paragraph {
  font-family: 'Montserrat', sans-serif;
  text-align:justify;
  font-size:1.1em;
  padding:5px 3%;
}

.skillbar {
    position:relative;
    display:block;
	margin-left:auto;
	margin-right:auto;
    margin-bottom:15px !important;
    width:93%;
    background:rgba(0,0,0,0.06);
    height:25px;
    border-radius:15px;
    -moz-border-radius:15px;
    -webkit-border-radius:15px;
    -webkit-transition:0.4s linear;
    -moz-transition:0.4s linear;
    -ms-transition:0.4s linear;
    -o-transition:0.4s linear;
    transition:0.4s linear;
    -webkit-transition-property:width, background-color;
    -moz-transition-property:width, background-color;
    -ms-transition-property:width, background-color;
    -o-transition-property:width, background-color;
    transition-property:width, background-color;
}


.skillbar-title {
    position:absolute;
    top:0;
    left:0;
    font-weight:normal;
    font-size:14px;
    color:#f2f2f2;
    -webkit-border-top-left-radius:15px;
    -webkit-border-bottom-left-radius:16px;
    -moz-border-radius-topleft:15px;
    -moz-border-radius-bottomleft:15px;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
}

.skillbar-title span {
    display:block;
    background:none;
    padding:0 15px;
    height:25px;
    line-height:25px;
    -webkit-border-top-left-radius:15px;
    -webkit-border-bottom-left-radius:15px;
    -moz-border-radius-topleft:15px;
    -moz-border-radius-bottomleft:15px;
    border-top-left-radius:15px;
    border-bottom-left-radius:15px;
}


.skillbar-bar {
  height:25px;
	width:0;
  background: rgb(255,35,35);
background: -moz-linear-gradient(left, rgba(255,35,35,1) 0%, rgba(255,35,72,1) 63%);
background: -webkit-linear-gradient(left, rgba(255,35,35,1) 0%,rgba(255,35,72,1) 63%);
background: linear-gradient(to right, rgba(255,35,35,1) 0%,rgba(255,35,72,1) 63%);
  border-radius:15px;
	-moz-border-radius:15px;
	-webkit-border-radius:15px;
	float: left;
}

.containers {
	min-height: 100%;
	height: 100vh;
}

/* .skill-bar-percent {
    position:absolute;
    right:10px;
    top:0;
    font-size:12px;
    height:25px;
    line-height:25px;
    color:#888;
  } */

  .skills-list{
  margin-top:25px;
  margin:auto;
  text-align: center;
  line-height: 30px;
  color:#181818;
  width:100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
   align-items: center;
}
.skill-item{
  font-size:.9em;
  /* border: 1px solid rgba(0,0,0,.15); */
  box-shadow: 2px 2px 5px rgba(0,0,0,.15);
  margin:4px;
  padding:0px 10px;
  border-radius:4px;
  cursor:pointer;
  font-family: 'Rajdhani', sans-serif;
}

.skill-item:hover {
background:#f2f2f2;
}

footer {
  /* filter:brightness(165%); */

  width:100%;
  bottom: 0;
}



.footer-nav li{
  text-decoration: none;
  font-size:1em;
  padding:5px 0px;
  color:#ccc;
  margin:0;
}

.footer-text a {
  color: #181818;
}

.footer-icons {
  padding:4%;
  padding-top:0px;
}

.copyright-footer{
  padding:10px;
  background-color:#fcfcfc;
  /* background:url('./assets/okay2.png'); */
  border-top:1px solid rgba(0,0,0,.15);
}

.copyright-footer, p {
  text-align: center;
  margin:0;
  font-size:1em;
  color: #181818;
}

.copyright-footer a {
  color:#ccc;
}

.contact {
  display:block;
  width:100%;
  margin:auto;
  text-align: center;
}



.form-head{
  text-align: center;
}

#firstname, #lastname, #user-email, #user-phone, #message {
  border:none;
  background:none;
  color:#f2f2f2;
  font-size:15px;
  background:#0e0e0e;
  /* filter:brightness(145%); */
  border-radius:2px;
  font-size:.9em;
}

 #message{
  padding:5px 0px;
  margin:8px;
  width:92%;
  height:18vh;
  font-size:15px;
}

textarea {
    resize: none;
    outline:none;
    font-family:sans-serif;

}


#firstname, #lastname, #user-email, #user-phone{
  padding:5px 0px;
  margin:8px 0px;
  width:45%;
}

#msg{
  text-align:left;
  padding:10px;

}


input:focus {
  outline:none;
  border:none;
}

input:required{
  outline:none;
  box-shadow:none;
}

:not(output):-moz-ui-invalid {
    box-shadow: none;
}

.button {
  padding:10px 35px;
  font-weight: 600;
  border-radius:3px;
  text-transform:uppercase;
  border:none;
  color:#f2f2f2;
  background: none;
  border: 1px solid #f2f2f2;
  cursor:pointer;
  margin:0 4%;
  float:left;
  filter:brightness(90%);
  box-shadow: 2px 2px 4px rgba(0,0,0,.5);
}

.button:hover{
  background: #f2f2f2;
  color: black;
  filter:brightness(110%);


}


.showcase {
  padding-top:70px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.showcase-logo{
  filter:drop-shadow(1px 2px 4px rgba(0,0,0,.3));
  margin:auto;
  display:block;
  padding:20px 0;

}

.lines {
  margin:auto;
  display:block;
  padding:0;
}



/* .cls-2{
  fill:none;
  stroke:#e0dede;
} */

svg{
  width:65%;
}

.fadeIn {
  animation-name: fadeIn;
}

.animated {
  animation-duration: 3s;
  animation-fill-mode: both;
}

.animated2 {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes slide-down {
      0% { opacity: 0; -webkit-transform: translateY(-100%); }
    100% { opacity: 1; -webkit-transform: translateY(0); }
}
@-moz-keyframes slide-down {
      0% { opacity: 0; -moz-transform: translateY(-100%); }
    100% { opacity: 1; -moz-transform: translateY(0); }
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% { opacity: 0; transform: scale3d(0, .3, .3);}
  20% { transform: scale3d(1.1, 1.1, 1.1);}
  40% {transform: scale3d(.9, .9, .9);}
  60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03);}
  80% { transform: scale3d(.97, .97, .97);}
  to { opacity: 1;transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}

@keyframes fadeIn {
  from { opacity: 0;}
  to { opacity: 1; }
}

@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #FF515E}
}

@-webkit-keyframes Gradient {
	0% {background-position: 0% 50%}
	50% { background-position: 100% 50%}
	100% { background-position: 0% 50%}
}

@-moz-keyframes Gradient {
	0% { background-position: 0% 50%}
	50% {background-position: 100% 50%}
	100% {background-position: 0% 50%}
}

@keyframes Gradient {
	0% {background-position: 0% 50%}
	50% {background-position: 100% 50%}
	100% {background-position: 0% 50%}
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@media(max-width:1280px){
  .profile-img{ margin-left:0px; height:515px;}
  .flex-container{margin:4% 4%};

}

@media(min-width:769px){
    .nav-link{
      display:inline-block;
    }
}




@media(max-width:768px){
  @keyframes typing {
    from { width: 0 }
    to { width: 90% }
  }
  .card-codepen { width: 84vw; }
.nav-link{ text-align: center;}
.navbar { height: 3.5em; position: fixed; }
.nav-button{
  border:none;
  padding:none;
   margin:auto;
   display:block;
   width:100%;
   border-radius:0;
 }
.nav-button:hover { background:none; color:#181818; }
.nav-content{ display:none; z-index: 10;  background:inherit; width:100%; }
  .flex-container{margin:4% 0%};
.link { font-size:17px; padding:25px 43vw;}
.contact { width:100%;}
.footer-page{ flex-direction: column;}
.footer-para{display:none;}
.showcase { flex-direction:column;}
.showcase-logo{ height:60vw; }
h1{ font-size:2.8em; width:260px; margin:0 0 0 0; display:block;}
.showcase-column-1 {
  padding-top:3em;
}

.toggle-menu { display:block;}
.profile-img{ height:60vw; margin-left:0;margin:auto; border-radius:300px; border:1px solid #ccc;margin-bottom: 1em; }
.flex-container .row { flex-direction: column;}
.paragraph{margin:0 30px; font-size:18px; text-align:justify;}
.illustration{flex-direction: column; width:92vw;}
.portfolio-img{width:95vw; margin:auto; display:block;padding:15px 0px;}
.skillbar{ width:85%;}
.skills-list{ width:90%; }
#firstname, #lastname, #user-email, #user-phone, #message {  border-bottom:none; }
}


@media(max-width:414px){
.nav-link{ padding:0;}
.nav-button{
  border:none;
 }
.nav-button:hover { background:none; color:#181818; }
.nav-content{ display:none;}
.link { font-size:15px; padding:25px 43vw; margin:0; display:flex;}
.contact { width:100%;}
.footer-page{ flex-direction: column;}
.showcase { flex-direction:column;}
.showcase-logo{ width:70vw}
/* .typewriter {display:none} */
/* .design{display:none;} */
h1{ font-size:3.3em; text-align:left; display:none;}
h2{font-size:3.5em;}
.sc-1{display:none;}
.toggle-menu { display:block;}
.profile-img{ height:80vw; }
.aboutheader{ width: 100vw;}
.flex-container .row{ flex-direction: column;}
.paragraph{margin:15px 15px; font-size:1.1em; text-align:justify;}
#firstname, #lastname, #user-email, #user-phone, #message { border-bottom:none;}
.fa{font-size:24px;}
.nav-logo{ position:absolute; padding:14px 3%; }
.button { padding:8px 28px; font-size:15px;}
.skillbar{ width:90%; font-size:13px;}
.skills-list{ width:95%; }

}

</style>
