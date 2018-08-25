<template>
    <page-template title="summary" :path="path">
      <b-container>
        <b-card v-if="details !== undefined">
          <div class="wizard">
            <b-nav justified pills>
              <b-nav-item href="/booking"><font-awesome-icon icon="calendar" size="3x"></font-awesome-icon><br>{{ $t('booking') }}</b-nav-item>
              <b-nav-item href="/booking/details">
                <font-awesome-icon icon="file-signature" size="3x"></font-awesome-icon><br>
                {{ $t('details') }}
              </b-nav-item>
              <b-nav-item active href="/booking/summary">
                <font-awesome-icon icon="file-invoice-dollar" size="3x"></font-awesome-icon><br>
                {{ $t('summary') }}
              </b-nav-item>
              <b-nav-item disabled href="/booking/payment">
                <font-awesome-icon icon="credit-card" size="3x"></font-awesome-icon><br>
                {{ $t('payment') }}
              </b-nav-item>
            </b-nav>
            <b-row class="mt-4 mb-3">
              <b-col md="4">
                <p>{{ $tc('room', details.reservation.cart.length) }} :<br>
                  <b-list-group>
                    <b-list-group-item v-for="item in details.reservation.cart" :key="item">{{ rooms[item].name[$i18n.locale] }}</b-list-group-item>
                  </b-list-group><br>
                  {{ $t('check_in') }} <strong>{{ details.reservation.from_date }}</strong><br>
                  {{ $t('check_out') }} <strong>{{ details.reservation.to_date }}</strong><br>
                  <strong>{{ totalNight }}</strong> {{ $tc('night', totalNight) }}<br>
                  <strong>{{ totalPersons }}</strong> {{ $tc('person', totalPersons) }} -
                  {{ $t('adults') }}: <strong>{{ details.reservation.nb_adults }}</strong> /
                  {{ $t('children') }}: <strong>{{ details.reservation.nb_children }}</strong><br>
                  {{ $t('amount') }}: {{ totalPriceBeforeTax }} € {{ $t('include_vat') }}</p>
                <p>{{ $t('tourist_tax') }} : {{ touristTax }} €</p>
                <p><b>{{ $t('special_requests') }}</b><br>{{ details.requests }}</p>
                <p class="lead">{{ $t('total_include_vat') }} : <b>{{ totalPrice }} €</b><br>
                  <small>{{ $t('vat_amount') }} : {{ totalVAT }} €</small></p>
                <p>{{ $t('down_payment') }} : <b>{{ totalDownPayment }} € {{ $t('include_vat') }}</b></p>
              </b-col>
              <b-col md="4">
                <p>
                  <b>{{ $t('billing_address') }}</b><br>
                  {{ details.firstname }} {{ details.lastname }}<br>
                  <span v-if="details.company !== ''">{{ $t('company') }} : {{ details.company }}</span><br>
                  {{ details.address }}<br>
                  {{ details.postcode }} {{ details.city }}, {{ details.country }}<br>
                  {{ $t('phone_number') }}: {{ details.phone }}<br>
                  <span v-if="details.mobile !== ''">{{ $t('mobile') }}: {{ details.mobile }}</span><br>
                  {{ $t('email_address') }}: {{ details.email }}
                </p>
              </b-col>
              <b-col md="4">
              </b-col>
            </b-row>
          </div>
          <div slot="footer">
            <b-row>
              <b-col>
                <b-btn name="book" variant="info" size="lg" @click="previous">
                  <font-awesome-icon icon="arrow-alt-circle-left"></font-awesome-icon>&nbsp;{{ $t('change_details') }}
                </b-btn>
              </b-col>
              <b-col class="text-right">
                <b-btn name="book" variant="success" size="lg" :disabled="totalPrice == 0" @click="next">
                  {{ $t('proceed_payment') }}&nbsp;<font-awesome-icon icon="arrow-alt-circle-right"></font-awesome-icon>
                </b-btn>
              </b-col>
            </b-row>
          </div>
        </b-card>
        <b-card v-if="details === undefined" bg-variant="danger" text-variant="light" :title="$t('error')">
          <p>{{ $t('cart_empty') }}</p>
        </b-card>
      </b-container>
    </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
import moment from 'moment'

export default {
  name: 'Summary',
  components: {PageTemplate},
  data () {
    return {
      rooms: {
        'suite-pharaon': {
          name: {en: 'Pharaon Suite', fr: 'Suite du Pharaon'},
          slug: 'suite-pharaon',
          cover: 'http://www.villakheops.fr/medias/room/small/25/14708132-529786437211017-8442907030014531486-n.jpg',
          desc: {
            en: ``, fr: `<p>De par son nom, cette suite vous offre une imprenable vue mer omniprésente du lit, de la douche et de la balnéo. Vous pourrez aussi vous détendre et prendre un apéritif sur sa superbe terrasse.</p>
<p>Son style et sa décoration vous ramèneront en plein cœur d'un temple égyptien.</p>`
          },
          capacity: 3,
          price: 115,
          available: true,
          closed: ['23/08/2018'],
          images: ['http://www.villakheops.fr/medias/room/big/25/14708132-529786437211017-8442907030014531486-n.jpg', 'http://www.villakheops.fr/medias/room/big/5/20768798.jpg', 'http://www.villakheops.fr/medias/room/big/4/20768800.jpg', 'http://www.villakheops.fr/medias/room/big/8/21169050.jpg', 'http://www.villakheops.fr/medias/room/big/10/21169046.jpg', 'http://www.villakheops.fr/medias/room/big/6/20768801.jpg', 'http://www.villakheops.fr/medias/room/big/7/20768803.jpg', 'http://www.villakheops.fr/medias/room/big/11/21167405.jpg', 'http://www.villakheops.fr/medias/room/big/12/32451690.jpg']
        },
        horizon: {
          name: {en: 'Horizon Room', fr: 'Chambre Horizon'},
          slug: 'horizon',
          cover: 'http://www.villakheops.fr/medias/room/small/18/20991244.jpg',
          desc: {
            en: ``, fr: `<p>Avec sa vue pleine mer et sa terrasse ensoleillée vous serez sous le charme de la méditerranée.</p>
<p>Egalement équipée d'une douche à l'italienne et de WC sur le palier, vous bénéficierez de tout le confort afin de passer un agréable séjour (petit déjeuner en terrasse possible).`
          },
          capacity: 3,
          price: 105,
          available: true,
          closed: [],
          images: ['http://www.villakheops.fr/medias/room/big/18/20991244.jpg', 'http://www.villakheops.fr/medias/room/big/19/20991249.jpg', 'http://www.villakheops.fr/medias/room/big/20/27347592.jpg', 'http://www.villakheops.fr/medias/room/big/21/27347600.jpg', 'http://www.villakheops.fr/medias/room/big/22/27347604.jpg', 'http://www.villakheops.fr/medias/room/big/23/27347610.jpg', 'http://www.villakheops.fr/medias/room/big/24/ho.jpg']
        },
        zen: {
          name: {en: 'Zen Room', fr: 'Chambre Zen'},
          slug: 'zen',
          cover: 'http://www.villakheops.fr/medias/room/small/16/27347285.jpg',
          desc: {
            en: ``, fr: `<p>Située a l'est, cette chambre vous offrira un aperçu mer ainsi qu'une vue sur la colline de mimosas.</p>
<p>Équipée  d'une douche à l'italienne et de WC sur le palier, vous y trouverez le calme et la sérénité dans une ambiance reflétant les couleurs de l'Asie.</p>`
          },
          capacity: 3,
          price: 95,
          available: false,
          closed: [],
          images: ['http://www.villakheops.fr/medias/room/big/16/27347285.jpg', 'http://www.villakheops.fr/medias/room/big/26/14639589-529786383877689-617419931373600980-n.jpg', 'http://www.villakheops.fr/medias/room/big/13/21166590.jpg', 'http://www.villakheops.fr/medias/room/big/14/21167268.jpg', 'http://www.villakheops.fr/medias/room/big/15/27347271.jpg', 'http://www.villakheops.fr/medias/room/big/17/32161808.jpg']
        }
      },
      path: [{
        text: this.$i18n.t('home'),
        href: '/'
      }, {
        text: this.$i18n.t('booking'),
        href: '/booking'
      }, {
        text: this.$i18n.t('summary'),
        active: true
      }],
      details: this.$route.params.details,
      touristTaxAmount: 10,
      vat: 0.10,
      down_payment: 0.20
    }
  },
  computed: {
    totalNight () {
      let from = moment(this.details.reservation.from_date, 'DD/MM/YYYY')
      let to = moment(this.details.reservation.to_date, 'DD/MM/YYYY')
      return to.diff(from, 'days')
    },
    totalPersons () {
      return this.details.reservation.nb_adults + this.details.reservation.nb_children
    },
    touristTax () {
      return (this.touristTaxAmount * this.details.reservation.nb_adults).toFixed(2)
    },
    totalPriceBeforeTax () {
      let price = 0
      this.details.reservation.cart.forEach(v => { price += this.rooms[v].price * this.totalNight })
      return price.toFixed(2)
    },
    totalPrice () {
      let price = (1 + this.vat) * Number.parseFloat(this.totalPriceBeforeTax) + Number.parseFloat(this.touristTax)
      return price.toFixed(2)
    },
    totalVAT () {
      return Number.parseFloat(this.vat * Number.parseFloat(this.totalPriceBeforeTax)).toFixed(2)
    },
    totalDownPayment () {
      return Number.parseFloat(this.down_payment * Number.parseFloat(this.totalPrice)).toFixed(2)
    }
  },
  methods: {
    next () {
      this.$router.push({ name: 'Payment', params: { details: this.details } })
    },
    previous () {
      this.$router.push({ name: 'Details', params: this.details })
    }
  },
  created () {
    if (this.details === undefined) {
      let detailStorage = sessionStorage.getItem('details')
      this.details = (detailStorage !== null) ? JSON.parse(detailStorage) : undefined
    }
  }
}
</script>

<style lang="scss" scoped>
  .wizard {
    .nav {
      background-color: rgba(200, 200, 200, 0.2);
      font-size: 28px;
      text-transform: uppercase;
      .nav-link:not(.disabled):not(.active) {
        background-color: #64BBDB;
        color: white;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      .active {
        position: relative;
        text-align: center;
        background-color: #00bcd4;
        left: 0px;
        border-radius: 4px;
        color: #FFFFFF;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 16px 26px -10px rgba(0, 188, 212, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);
      }
    }
  }
</style>
