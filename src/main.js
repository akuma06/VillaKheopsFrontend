// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import { i18n, loadLanguageAsync } from './i18n/i18n-setup'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEnvelope, faMapMarker, faMobile, faFlag, faMale, faCalendar, faSearch, faLink, faQuoteLeft, faQuoteRight, faHome, faQuestion, faPaperPlane, faArrowAltCircleRight, faTrash, faPlusCircle, faCreditCard, faFileInvoiceDollar, faFileSignature, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VCalendar from 'v-calendar'
import VueTruncate from 'vue-truncate-filter'
import LocaleChanger from './components/LocaleChanger'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faHeart, faFacebook, faGooglePlus, faEnvelope, faMapMarker, faMobile, faFlag, faMale, faCalendar, faSearch, faLink, faQuoteRight, faQuoteLeft, faHome, faQuestion, faPaperPlane, faArrowAltCircleRight, faTrash, faPlusCircle, faCreditCard, faFileInvoiceDollar, faFileSignature, faArrowAltCircleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('locale-changer', LocaleChanger)
// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar)
Vue.use(VueTruncate)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPvdMcIqYMiVDU1Kdx5sYUsJ-5K4SZPdc',
    libraries: 'places'
  }
})
Vue.filter('striphtml', function (value) {
  const div = document.createElement('div')
  div.innerHTML = value
  return div.textContent || div.innerText || ''
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const lang = to.params.lang ? to.params.lang : (localStorage.getItem('locale') || navigator.language.split('-')[0])
  loadLanguageAsync(lang).then(() => next())
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
