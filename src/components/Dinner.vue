<template>
    <page-template title="dinner" path="path">
      <b-container>
        <b-card>
          <b-row>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
            <b-media class="col-lg-4 col-md-6">
              <img slot="aside" height="64px" src="/static/Coupe-de-champagne.png" :alt="$t('champagne')" :title="$t('champagne')" />
              <h3>{{ $t('champagne') }}</h3>
              <p class="text-right">{{ $t('price') }}: 15€</p>
            </b-media>
          </b-row>
        </b-card>
      </b-container>
    </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'

export default {
  name: 'Dinner',
  components: {PageTemplate},
  data () {
    return {
      path: [
        {
          text: this.$i18n.t('home'),
          href: '/'
        },
        {
          text: this.$i18n.t('meals'),
          href: '/restaurant'
        },
        {
          text: this.$i18n.t('dinner'),
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
