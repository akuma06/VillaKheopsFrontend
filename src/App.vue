<template>
  <div id="app">
    <header :class="'fixed-top masthead mb-auto'+((this.scrolling) ? ' fixed' : '')">
      <div class="container inner">
        <main-menu></main-menu>
      </div>
    </header>
    <main role="main" class="inner">
      <router-view></router-view>
    </main>
    <footer>
      <section>
        <div class="container">
          <div class="row mb80">
            <div class="col-md-4">
              <div class="probootstrap-footer-widget">
                <h3>{{ $t('about_us ') }}</h3>
                <p v-html="$t('about_us_desc')"></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="probootstrap-link-wrap probootstrap-footer-widget" itemscope="" itemtype="http://schema.org/Corporation">
                <h3 itemprop="name">Sarah Guigou</h3>
                <address>
                  <p><font-awesome-icon icon="map-marker" /> <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">345 boulevard des cigales</span>
                    <br>06210 Mandelieu-la Napoule</p>
                  <p><font-awesome-icon icon="mobile" /> <span itemprop="telephone" dir="ltr">0673946282</span></p>
                  <p><font-awesome-icon icon="envelope" /> <a itemprop="email" dir="ltr" href="mailto:contact@villakheops.fr">contact@villakheops.fr</a></p>
                </address>
                <p class="text-center"><a href="#" class="btn btn-ghost btn-ghost-white w-100">{{ $t('book') }}</a></p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="social">
                <h3>{{ $t('social_networks') }}</h3>
                <div class="d-flex flex-row">
                  <a href="#" class="d-block mx-1" title="Google Plus" target="_blank"><font-awesome-icon :icon="['fab', 'google-plus']" size="lg"/></a>
                  <a href="#" class="d-block mx-1" title="Facebook" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" size="lg" /></a>
                </div>
                <h3><font-awesome-icon icon="flag" /> {{ $t("change_language") }}</h3>
                <div class="social mt-3">
                  <locale-changer />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <p class="text-center">{{ $t('copyrights') }} {{ $t('dev_with') }} <font-awesome-icon icon="heart" /> {{ $t('by') }} <a href="https://akuma06.ml" target="_blank">Yanice Guigou</a></p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'
export default {
  name: 'app',
  components: {MainMenu},
  data () {
    return {
      scrolling: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolling = window.scrollY > 0
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  :root {
    --blue: #1488BA;
    --darkerblue: #126f9f;
    --lightblack: #161C2E;
  }
  body {
    background: white;
    margin: 0;
  }
  #app > header {
    padding-top: 30px;
    padding-bottom: 30px;
    &.fixed {
       background: rgba(50, 120, 150, 0.8);
       padding: 0;
     }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  h1, h2, h3, h4 {
    font-family: Rubik,sans-serif;
  }
  .btn.btn-ghost.btn-ghost-white:hover {
    background: #fff;
    color: var(--yellow);
  }
  .btn.btn-ghost.btn-ghost-white {
    background: 0 0;
    border: 2px solid #fff;
    color: #fff;
  }
  .btn.btn-ghost:hover {
    background: var(--yellow);
    color: #fff;
    border: 2px solid var(--yellow)
  }
  .btn.btn-ghost {
    background: 0 0;
    border: 2px solid var(--yellow);
    color: var(--yellow);
  }
  /*
  * Footer
  */
  footer > section {
    padding: 5em 0;
    background: var(--yellow);
    text-align: left;
  }
  footer h3 {
    margin: 1.414em 0 .5em;
    font-weight: 400;
    line-height: 1.2;
    color: #000;
  }
  footer p {
    line-height: 1.4;
    color: rgba(0,0,0,.5);
  }

  footer ul {
    list-style: none;
  }
  footer li {
    margin: 0;
    padding: 0;
  }

  .social a {
    color: rgb(0, 0, 0);
    transition: opacity 0.3s;
    opacity: 0.4;
  }
  .social a:hover {
    opacity: 1;
  }
  /*
  * Header
  */

  @media (min-width: 48em) {
    .masthead-brand {
      float: left;
    }
  }
  .navbar-brand img {
    max-height: 105px;
  }
  .fixed .navbar-brand img {
    max-height: 50px;
  }
  header, header * {
    transition: all 0.3s;
  }
  .btn-primary {
    background-color: var(--blue);
    border-color: var(--blue);
  }
  .btn-primary:hover {
    background-color: var(--darkerblue);
    border-color: var(--darkerblue);
  }
</style>
