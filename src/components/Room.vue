<template>
  <page-template :title="room.name[$i18n.locale]" :path="path">
    <b-container>
      <b-row>
        <b-col md="12">
          <b-card :title="$t('availabilities')" bg-variant="info" text-variant="white" class="mb-5">
            <book-chooser class="book-chooser" select-class="book-chooser-select"></book-chooser>
          </b-card>
        </b-col>
        <b-col md="8">
          <b-card class="mb-5">
            <b-row class="mb-3">
              <b-col sm="8">
                <h1 class="mb-0">{{ room.name[$i18n.locale] }}</h1>
                <div class="clearfix"></div>
                <h2>{{ $t('breakfast_included') }}</h2>
              </b-col>
              <b-col sm="4" class="text-right">
                <div class="price text-primary">
                  {{ $t('from') }} <span itemprop="priceRange">{{ room.price }} €</span>/{{ $t('per_night') }}
                </div>
                <p>{{ $t('capacity') }}: <font-awesome-icon icon="male"></font-awesome-icon> x{{ room.capacity }}</p>
              </b-col>
            </b-row>
            <b-carousel
              id="carousel1"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="#ababab"
              :interval="4000"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                v-for="(image, i) in room.images"
                :key="room.name+'_img_'+i"
                :img-src="image" class="cover"
              ></b-carousel-slide>
            </b-carousel>
            <div class="mt-3" itemprop="description" v-html="room.desc[$i18n.locale]"></div>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card :title="$t('also_discover')" class="mb-5 aside">
            <b-media v-for="r in rooms" v-if="r.slug !== room.slug" :key="r.slug" class="aside">
              <div slot="aside" style="width: 60px; height: 60px; overflow: hidden;">
                <img :alt="r.name[$i18n.locale]" :src="r.cover" height="60px" />
              </div>
              <div class="col-xs-9">
                <h3 class="mb-0">{{ r.name[$i18n.locale] }}</h3>
                <p class="mb-0">{{ $t('breakfast_included') }}</p>
                <a :href="'/rooms/'+r.slug" title="">{{ $t('more_details') }}</a>
              </div>
            </b-media>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
import BookChooser from './BookChooser'
export default {
  name: 'Room',
  components: {BookChooser, PageTemplate},
  data: function () {
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
          images: ['http://www.villakheops.fr/medias/room/big/16/27347285.jpg', 'http://www.villakheops.fr/medias/room/big/26/14639589-529786383877689-617419931373600980-n.jpg', 'http://www.villakheops.fr/medias/room/big/13/21166590.jpg', 'http://www.villakheops.fr/medias/room/big/14/21167268.jpg', 'http://www.villakheops.fr/medias/room/big/15/27347271.jpg', 'http://www.villakheops.fr/medias/room/big/17/32161808.jpg']
        }
      },
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {
    room () {
      return this.rooms[this.$route.params.room]
    },
    path () {
      return [
        {
          text: this.$i18n.t('home'),
          href: '/'
        },
        {
          text: this.$i18n.t('rooms'),
          href: '/rooms'
        },
        {
          text: this.room.name[this.$i18n.locale],
          active: true
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .bg-info h4 {
    color: var(--white)
  }
  .aside {
    h4 {
      color: var(--blue)
    }
    h3 {
      color: var(--gray-dark)!important;
      font-size: 1.25rem;
    }
  }
  .book-chooser {
    .book-chooser-select {
      background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23FFFFFF' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
      color: var(--white);
      option {
        color: var(--dark);
      }
    }
  }
  .cover img {
    object-fit: cover;
    height: 600px;
  }
  @media screen and (max-width: 425px) {
    .cover img {
      height: 230px;
    }
  }
  @media screen and (max-width: 1000px) {
    .cover img {
      height: 330px;
    }
  }
</style>
