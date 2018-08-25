<template>
  <page-template title="booking" :path="path">
    <b-container>
      <b-row>
        <b-col>
          <b-card bg-variant="info" text-variant="light" :title="$t('availabilities')" class="mb-3">
            <book-chooser class="book-chooser" select-class="book-chooser-select" :check-in="form.from_date" :check-out="form.to_date" v-on:submit="bookCheck"></book-chooser>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="mb-2" bg-variant="dark" text-variant="light">
            <p>
              {{ $t('check_in') }} <b>{{ form.from_date }}</b> {{ $t('check_out') }} <b>{{ form.to_date }}</b><br>
              <b>{{ totalNight }}</b> {{ $tc('night', totalNight) }} - <b>{{ totalPersons }}</b> {{ $tc('person', totalPersons) }}
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-card bg-variant="light">
        <b-row v-for="room in rooms" :key="room.slug" class="room mb-3">
          <b-col md="3">
              <img :alt="room.name[$i18n.locale]" :src="room.cover" class="cover" />
          </b-col>
          <b-col lg="4" md="3" sm="4">
            <h3>{{ room.name[$i18n.locale] }}</h3>
            <h4>{{ $t('breakfast_included') }}</h4>
            <p>{{ room.desc[$i18n.locale] | striphtml | truncate(100) }}</p>
            <b-btn :href="'/rooms/'+room.slug" :title="$t('more_details')">{{ $t('more_details') }}</b-btn>
          </b-col>
          <b-col lg="2" md="2" sm="3" class="text-center">
            <div class="price">
              <span itemprop="priceRange">{{ room.price * totalNight }} €</span>
            </div>
            <div class="mb10 text-muted">{{ $t('price') }} / {{ totalNight }} {{ $tc('night', totalNight) }}</div>
            {{ $t('capacity') }} : <font-awesome-icon icon="male"></font-awesome-icon>&nbsp;x3
            <p class="pt-2">
              <b-btn v-if="form.cart.lastIndexOf(room.slug) == -1" name="book" variant="success" size="lg" class="btn-block" @click="addToCart(room)">
                <font-awesome-icon icon="plus-circle"></font-awesome-icon> {{ $t('add_to_cart') }}
              </b-btn>
              <b-btn v-if="form.cart.lastIndexOf(room.slug) > -1" name="book" variant="danger" size="lg" class="btn-block" @click="removeFromCart(room)">
                <font-awesome-icon icon="trash"></font-awesome-icon> {{ $t('remove_from_cart') }}
              </b-btn>
              <a class="btn btn-primary mt10 btn-block" :href="'/rooms/'+room.slug">
                {{ $t('read_more') }}</a>
            </p>
          </b-col>
          <b-col lg="3" md="4" sm="5">
            <v-calendar :attributes="getCalendarAttrs(room)" :theme-styles="calendar_style"></v-calendar>
          </b-col>
        </b-row>
        <div slot="footer" class="text-right">
          <span class="font-weight-bold">{{ $t('total_price') }}: {{ totalPrice }} €</span>&nbsp;
          <b-btn name="book" variant="success" size="lg" :disabled="totalPrice == 0" @click="bookNow">
            {{ $t('book_now') }}&nbsp;<font-awesome-icon icon="arrow-alt-circle-right"></font-awesome-icon>
          </b-btn>
        </div>
      </b-card>
      <b-card v-if="rooms.length == 0" bg-variant="danger" text-variant="light" :title="$t('no_results')" v-html="$t('no_results_tip')">
      </b-card>
    </b-container>
  </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
import BookChooser from './BookChooser'

import moment from 'moment'
export default {
  name: 'BookCheck',
  components: {BookChooser, PageTemplate},
  data: function () {
    let sessionCart = (sessionStorage.getItem('details') !== null) ? JSON.parse(sessionStorage.getItem('details')) : { reservation: {} }
    return {
      rooms: {
        'suite-pharaon': {
          name: {en: 'Pharaon Suite', fr: 'Suite du Pharaon'},
          slug: 'suite-pharaon',
          cover: 'http://www.villakheops.fr/medias/room/small/25/14708132-529786437211017-8442907030014531486-n.jpg',
          desc: {en: ``, fr: `<p>De par son nom, cette suite vous offre une imprenable vue mer omniprésente du lit, de la douche et de la balnéo. Vous pourrez aussi vous détendre et prendre un apéritif sur sa superbe terrasse.</p>
<p>Son style et sa décoration vous ramèneront en plein cœur d'un temple égyptien.</p>`},
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
          desc: {en: ``, fr: `<p>Avec sa vue pleine mer et sa terrasse ensoleillée vous serez sous le charme de la méditerranée.</p>
<p>Egalement équipée d'une douche à l'italienne et de WC sur le palier, vous bénéficierez de tout le confort afin de passer un agréable séjour (petit déjeuner en terrasse possible).`},
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
          desc: {en: ``, fr: `<p>Située a l'est, cette chambre vous offrira un aperçu mer ainsi qu'une vue sur la colline de mimosas.</p>
<p>Équipée  d'une douche à l'italienne et de WC sur le palier, vous y trouverez le calme et la sérénité dans une ambiance reflétant les couleurs de l'Asie.</p>`},
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
        active: true
      }],
      form: {
        from_date: this.$route.params.from_date || sessionCart.reservation.from_date || moment().format('DD/MM/YYYY'),
        to_date: this.$route.params.to_date || sessionCart.reservation.to_date || moment().add(1, 'days').format('DD/MM/YYYY'),
        nb_adults: this.$route.params.nb_adults || sessionCart.reservation.nb_adults || 1,
        nb_children: this.$route.params.nb_children || sessionCart.reservation.nb_children || 0,
        cart: this.$route.params.cart || sessionCart.reservation.cart || []
      },
      calendar_style: {
        dayContent: {
          color: '#fff',
          borderRadius: '0px'
        },
        header: {
          paddingTop: '0px'
        },
        wrapper: {
          border: 'none'
        },
        weeks: {
          paddingBottom: '0px'
        }
      }
    }
  },
  methods: {
    bookCheck (form, event) {
      this.form.from_date = form.from_date
      this.form.to_date = form.to_date
      this.form.nb_adults = form.nb_adults
      this.form.nb_children = form.nb_children
      this.form.cart = []
      sessionStorage.setItem('details', JSON.stringify({ reservation: this.form }))
    },
    getClosedDates (room) {
      let dates = []
      room.closed.forEach(v => dates.push(moment(v, 'DD/MM/YYYY').toDate()))
      return dates
    },
    getCalendarAttrs (room) {
      return [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
            borderRadius: '0px'
          },
          // Just use a normal style
          contentStyle: {
            color: '#fafafa'
          },
          dates: this.getClosedDates(room),
          popover: {
            label: this.$i18n.t('closed_date')
          }
        }
      ]
    },
    bookNow () {
      sessionStorage.setItem('details', JSON.stringify({ reservation: this.form }))
      this.$router.push({ name: 'Details', params: { reservation: this.form } })
    },
    addToCart (room) {
      this.form.cart.push(room.slug)
    },
    removeFromCart (room) {
      this.form.cart = this.form.cart.filter(v => v !== room.slug)
    }
  },
  computed: {
    totalNight () {
      let from = moment(this.form.from_date, 'DD/MM/YYYY')
      let to = moment(this.form.to_date, 'DD/MM/YYYY')
      return to.diff(from, 'days')
    },
    totalPersons () {
      return this.form.nb_adults + this.form.nb_children
    },
    totalPrice () {
      let price = 0
      this.form.cart.forEach(v => { price += this.rooms[v].price * this.totalNight })
      return price
    }
  }
}
</script>

<style lang="scss">
  @import "~v-calendar/lib/v-calendar.min.css";
  .book-chooser {
    .book-chooser-select {
      background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23FFFFFF' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
      color: var(--white);
      option {
        color: var(--dark);
      }
    }
  }

  .c-day-layer {
    background-color: var(--green);
  }
  .room {
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .price span {
      color: var(--green);
      font-weight: 600;
      font-size: 26px;
    }
  }
</style>
