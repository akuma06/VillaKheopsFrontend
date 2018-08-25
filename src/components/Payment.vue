<template>
    <page-template title="payment" :path="path">
      <b-container>
        <b-card v-if="details !== undefined">
          <div class="wizard">
            <b-nav justified pills>
              <b-nav-item href="/booking"><font-awesome-icon icon="calendar" size="3x"></font-awesome-icon><br>{{ $t('booking') }}</b-nav-item>
              <b-nav-item href="/booking/details">
                <font-awesome-icon icon="file-signature" size="3x"></font-awesome-icon><br>
                {{ $t('details') }}
              </b-nav-item>
              <b-nav-item href="/booking/summary">
                <font-awesome-icon icon="file-invoice-dollar" size="3x"></font-awesome-icon><br>
                {{ $t('summary') }}
              </b-nav-item>
              <b-nav-item active href="/booking/payment">
                <font-awesome-icon icon="credit-card" size="3x"></font-awesome-icon><br>
                {{ $t('payment') }}
              </b-nav-item>
            </b-nav>
            <div class="mt-5 text-center">
              <h5>{{ $t('check_out_msg') }}</h5>
              <h6>{{ $t('check_out_warn') }}</h6>
              <div id="dropin-container"></div>
            </div>
          </div>
          <div slot="footer">
            <b-row>
              <b-col>
                <b-btn name="back" variant="info" size="lg" @click="previous">
                  <font-awesome-icon icon="arrow-alt-circle-left"></font-awesome-icon>&nbsp;{{ $t('back') }}
                </b-btn>
              </b-col>
              <b-col class="text-right">
                <b-btn name="pay" ref="paybutton" variant="success" size="lg"><font-awesome-icon icon="credit-card"></font-awesome-icon>&nbsp;{{ $t('confirm_payment') }}</b-btn>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-container>
    </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
import dropIn from 'braintree-web-drop-in'
export default {
  name: 'Payment',
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
      down_payment: 0.20,
      credentials: 'sandbox_h6m8ph3x_zzhqcn5vj8sf4w6d'
    }
  },
  methods: {
    getDownPriceRoom (room) {
      return Number.parseFloat(room.price * (1 + this.vat) * this.down_payment).toFixed(2)
    },
    previous () {
      this.$router.push({ name: 'Summary', params: { details: this.details } })
    }
  },
  computed: {
    getPaypalItems () {
      let items = []
      if (this.details.reservation !== undefined) {
        this.details.reservation.cart.forEach(v => items.push({
          name: this.rooms[v].name[this.$i18n.locale],
          description: this.rooms[v].desc,
          quantity: 1,
          price: this.getDownPriceRoom(this.rooms[v]),
          currency: 'EUR'
        }))
        if (items.length > 0) {
          items.push({
            name: this.$i18n.t('tourist_tax'),
            description: '',
            quantity: 1,
            price: this.touristTax,
            currency: 'EUR'
          })
        }
      }
      return items
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
    }
  },
  created () {
    if (this.details === undefined) {
      let detailStorage = sessionStorage.getItem('details')
      this.details = (detailStorage !== null) ? JSON.parse(detailStorage) : {}
    }
  },
  mounted () {
    dropIn.create({
      authorization: this.credentials,
      container: '#dropin-container',
      locale: this.$i18n.locale,
      paypal: {
        flow: 'vault',
        billingAgreementDescription: this.$i18n.t('villa_kheops_room')
      },
      paypalCredit: {
        flow: 'vault',
        billingAgreementDescription: this.$i18n.t('villa_kheops_room')
      },
      googlePay: {
        merchantId: 'merchant-id-from-google',
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: this.totalPrice,
          currencyCode: 'EUR'
        },
        cardRequirements: {
          // We recommend collecting and passing billing address information with all Google Pay transactions as a best practice.
          billingAddressRequired: true
        }
      }
    }, (createErr, instance) => {
      this.$refs.paybutton.addEventListener('click', () => {
        instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
          if (requestPaymentMethodErr) {
            // No payment method is available.
            // An appropriate error will be shown in the UI.
            console.error(requestPaymentMethodErr)
            return
          }
          console.log(payload.nonce)
        })
      })
    })
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
