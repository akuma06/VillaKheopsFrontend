<template>
  <page-template title="meals" :path="path" inner-class="">
    <b-container fluid>
      <b-row>
        <div class="col-lg-6 col-md-12 image-wrap">
          <img src="http://www.villakheops.fr/medias/article/medium/20/27348107.jpg">
        </div>
        <div class="col-lg-6 col-md-12 text">
          <p class="mb10 subtitle">{{ $t('meal_included_in_price') }}</p>
          <h3 class="mt0 mb40">{{ $t('breakfast') }}</h3>
          <p>{{ $t('breakfast_desc1') }}</p>
          <p class="mb50">{{ $t('breakfast_desc2') }}</p>
          <p><a href="#" class="btn btn-primary btn-lg mb10">{{ $t('book_now') }}</a></p>
        </div>
      </b-row>
      <b-row>
        <div class="col-lg-6 col-md-12 image-wrap order-lg-last">
          <img src="http://www.villakheops.fr/medias/article/medium/6/20792-945240898843701-2316849049741278872-n.jpg">
        </div>
        <div class="col-lg-6 col-md-12 text">
          <p class="mb10 subtitle">{{ $t('gourmet_meals') }}</p>
          <h3 class="mt0 mb40">{{ $t('dinner') }}</h3>
          <p>{{ $t('gourmet_meals_desc1') }}</p>
          <p class="mb50">{{ $t('gourmet_meals_desc2') }}</p>
          <p><a href="/restaurant/dinner" class="btn btn-ghost btn-ghost-white mb10">{{ $t('see_more') }}</a>&nbsp;<a href="#" class="btn btn-primary btn-lg mb10">{{ $t('book_now') }}</a></p>
        </div>
      </b-row>
    </b-container>
  </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
export default {
  name: 'Restauration',
  components: {PageTemplate},
  data () {
    return {
      path: [{
        text: 'Home',
        href: '/'
      }, {
        text: this.$i18n.t('meals'),
        active: true
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.image-wrap {
  overflow: hidden;
  padding: 0;
  img {
    display: block;
    width: 100%;
    height: 100%;
    transition: .8s all ease-in-out;
    background-color: var(--yellow);
  }
  &:hover img {
    transform: scale(1.2);
  }
}
.text {
  padding: 100px;
  background: var(--lightblack);
  color: rgba(255,255,255,.5);
  .subtitle {
    color: rgba(255,255,255,.2);
  }
  h3 {
    color: var(--white)
  }
  .btn {
    border-radius: 100px;
    font-size: 18px;
    padding: 15px 40px;
  }
  .btn-ghost-white:hover {
    background: 0 0!important;
    border-color: var(--yellow);
  }
}
@media screen and (max-width: 1000px) {
  .text {
    padding: 30px 30px;
  }
}
</style>
