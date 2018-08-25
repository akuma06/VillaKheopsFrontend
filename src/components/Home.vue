<template>
  <div class="home">
    <section id="mainslider">
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
        <div class="book-chooser">
          <book-chooser class="book-chooser-content" select-class="book-chooser-select"></book-chooser>
        </div>
        <b-carousel-slide
          v-for="(image, i) in images"
          :key="'mainslide'+i"
          v-bind:caption="image.caption"
          v-bind:text="image.text"
          v-bind:img-src="image.src"
          class="cover"
        ></b-carousel-slide>
      </b-carousel>
    </section>
    <section id="content" class="pt-4 pb-5">
      <b-container>
        <b-row>
          <b-col cols="12" class="text-center mb30">
            <h1 itemprop="name">{{ title }}</h1>
            <h2>{{ $t('b2b') }}</h2>
            <blockquote class="text-center">
              <p><font-awesome-icon icon="quote-left"></font-awesome-icon>{{ $t('amoore_quote') }}<font-awesome-icon icon="quote-right"></font-awesome-icon></p>
            </blockquote>

            <p class="text-muted" style="text-align: center;">- George A. Moore -</p>
          </b-col>
        </b-row>
        <b-row>
          <room-article v-for="room in rooms" :room="room" :key="'art'+room.slug"></room-article>
        </b-row>
        <b-row>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import BookChooser from './BookChooser'
import RoomArticle from './RoomArticle'
export default {
  name: 'home',
  components: {RoomArticle, BookChooser},
  data () {
    return {
      title: 'Villa Khéops',
      images: [
        { caption: 'Welcome to Villa Khéops', text: 'The best B&B in Cannes', src: 'http://www.villakheops.fr/medias/slide/big/8/villa.png' },
        { caption: 'A dream stay at the best price', text: 'Best price guarantee', src: 'http://www.villakheops.fr/medias/slide/big/4/dsc01021.jpg' },
        { caption: 'Breathtaking Lunch', text: 'Breakfast included with the room and gourmet meals on request', src: 'http://www.villakheops.fr/medias/slide/big/5/11134019-945239205510537-679000845458070255-n-960x660.jpg' }
      ],
      rooms: {
        'suite-pharaon': { name: { en: 'Pharaon Suite', fr: 'Suite du Pharaon' }, slug: 'suite-pharaon', cover: 'http://www.villakheops.fr/medias/room/small/25/14708132-529786437211017-8442907030014531486-n.jpg', price: 115 },
        horizon: { name: { en: 'Horizon Room', fr: 'Chambre Horizon' }, slug: 'horizon', cover: 'http://www.villakheops.fr/medias/room/small/18/20991244.jpg', price: 105 },
        zen: { name: { en: 'Zen Room', fr: 'Chambre Zen' }, slug: 'zen', cover: 'http://www.villakheops.fr/medias/room/small/16/27347285.jpg', price: 95 }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  body {
    padding: 0;
  }
h1, h2 {
  font-family: "Open Sans";
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .book-chooser {
    position: absolute;
    z-index: 100;
    top: 60%;
    width: 100%;
    .book-chooser-content {
      background: rgba(20, 136, 186, 0.3);
      padding: 20px 30px 5px;
      text-align: center;
      form {
        padding: 0 8px;
        .book-chooser-select {
          background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23FFFFFF' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>");
          option {
            color: var(--dark);
          }
        }
      }
    }
  }
  #content {
    h1 {
      font-size: 28px;
      color: rgb(20, 136, 186);
      text-transform: uppercase;
      font-weight: 600;
    }

    blockquote {
      border: none;
      font-size: 20px;
      font-weight: 300;
      line-height: 30px;
      margin-bottom: 15px;
      padding: 0;
      svg {
        margin: 0 0.5em;
      }
    }
  }
  .cover {
    img {
      object-fit: cover;
      height: 900px;
    }
  }

  .carousel-caption {
    top: 30%;
  }
</style>
