<template lang="html">
  <div>
  <footer class="js-section3" id="footer" v-bind:style="marginsdark">
  <div class="copyright-footer" v-bind:style="footerdark">
      <p class="footer-text" v-bind:style="icondark"> &copy 2018 <a class="link" href="http://jaredbookr.io">Jaredbookr</a> | built and designed by: Jared Booker </p>
      <p>  <a href="https://github.com/JBooker10" target="_blank"><i class="fa fa-github footer-icon" aria-hidden="true" v-bind:style="icondark"></i></a>
       <a href="https://www.linkedin.com/in/jaredbooker1/" target="_blank"><i class="fa fa-linkedin footer-icon" aria-hidden="true" v-bind:style="icondark"></i></a>
       <a href="https://codepen.io/Jaredbooker/" target="_blank"><i class="fa fa-codepen footer-icon" aria-hidden="true" v-bind:style="icondark"></i></a>
       <a href="#" target="_blank"><i class="fa fa-twitter footer-icon" aria-hidden="true" v-bind:style="icondark"></i></a></p>
  </div>
</footer>
</div>
</template>

<script>
export default {
  props: ["footerdark", "icondark", "marginsdark"],
  name: "footer-section"
};
</script>

<style lang="css">
footer {
  margin-top: 4em;
  width: 100%;
  bottom: 0;
}

.footer-icons {
  padding: 4%;
  padding-top: 0px;
}

.link {
  text-decoration: none;
}

.footer-icon {
  color: #000;
  font-size: 1.4em !important;
  padding: 2px;
}
.copyright-footer {
  padding: 10px;
  background: #fcfcfc;
  /* background:url('./assets/okay2.png'); */
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
.copyright-footer,
p {
  text-align: center;
  margin: 0;
  font-size: 0.95em;
  color: #181818;
}
.copyright-footer a {
  color: #ccc;
}
</style>
