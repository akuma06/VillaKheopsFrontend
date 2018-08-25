<template>
  <page-template title="rooms" :path="path">
    <b-container>
      <b-row>
        <room-article v-for="room in rooms" :room="room" :key="'art'+room.slug">
          <div class="isotopeContent" slot="footer">
            <h3 itemprop="name">{{ room.name[$i18n.locale] }}</h3>
            <h4>{{ $t('breakfast_included') }}</h4>
            <b-row class="text-left">
              <b-col cols="6">
                <div class="price text-primary">
                  {{ $t('from') }} <span itemprop="priceRange">{{ room.price }} €</span>
                </div>
                <div class="text-muted">{{ $t('price_per_night') }}</div>
              </b-col>
              <b-col cols="6" class="text-right">
                <span class="btn btn-primary mt-2 pull-right">{{ $t('more_details') }}</span>
              </b-col>
            </b-row>
          </div>
        </room-article>
      </b-row>
    </b-container>
  </page-template>
</template>

<script>
import RoomArticle from './RoomArticle'
import PageTemplate from './PageTemplate'

export default {
  name: 'Rooms',
  components: {PageTemplate, RoomArticle},
  data () {
    return {
      rooms: {
        'suite-pharaon': { name: { en: 'Pharaon Suite', fr: 'Suite du Pharaon' }, slug: 'suite-pharaon', cover: 'http://www.villakheops.fr/medias/room/small/25/14708132-529786437211017-8442907030014531486-n.jpg', price: 115 },
        horizon: { name: { en: 'Horizon Room', fr: 'Chambre Horizon' }, slug: 'horizon', cover: 'http://www.villakheops.fr/medias/room/small/18/20991244.jpg', price: 105 },
        zen: { name: { en: 'Zen Room', fr: 'Chambre Zen' }, slug: 'zen', cover: 'http://www.villakheops.fr/medias/room/small/16/27347285.jpg', price: 95 }
      },
      path: [{
        text: this.$i18n.t('home'),
        href: '/'
      }, {
        text: this.$i18n.t('rooms'),
        active: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .price span {
    font-weight: 600;
    font-size: 20px;
  }
</style>
