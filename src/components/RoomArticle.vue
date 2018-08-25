<template>
  <article class="col-sm-4 mb-4" itemscope="" itemtype="http://schema.org/LodgingBusiness">
    <a itemprop="url" v-bind:href="'/rooms/'+room.slug" class="moreLink">
      <figure class="more-link">
        <div class="img-container d-flex justify-content-center" style="overflow: hidden; position: relative;">
          <img alt="" v-bind:src="room.cover">
        </div>
        <div class="more-content" v-if="showContent">
          <h3 itemprop="name">{{ room.name[$i18n.locale] }}</h3>
        </div>
        <div class="more-action">
          <div class="more-icon">
            <font-awesome-icon icon="link"></font-awesome-icon>
          </div>
        </div>
      </figure>
      <slot name="footer"></slot>
    </a>
  </article>
</template>

<script>
export default {
  name: 'RoomArticle',
  props: {
    room: {
      default: {
        name: { en: '', fr: '' },
        slug: '',
        cover: ''
      },
      type: Object
    },
    showContent: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  *:hover, *:hover * {
    transition: all 0.3s;
  }
  a {
    text-decoration: none;
  }
  .more-link {
    position: relative;
    display: block;
    &:hover {
      .more-content h3 {
        font-size: 22px;
        top: 25%;
      }
      .more-action {
        background: rgba(75, 194, 234, 0.5);
        opacity: 1;
        .more-icon {
          bottom: 0;
        }
      }
    }
    .img-container {
      height: 230px;
    }
    .more-content {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 15px;
      background: rgba(50, 50, 50, 0.3);
      color: #fff;
      text-align: center;
      h3 {
        position: relative;
        top: 36%;
        z-index: 1;
        font-weight: 200;
        color: #fff;
        font-size: 20px;
        padding: 10px;
        border: 1px solid #fff;
        display: inline-block;
        text-transform: none;
        border-radius: 3px;
      }
    }
    .more-action {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      overflow: hidden;
      opacity: 0;
      .more-icon {
        position: absolute;
        bottom: -40px;
        text-align: center;
        width: 100%;
        display: block;
        svg {
          color: #1488BA;
          background: #fff;
          width: 60px;
          height: 30px;
          padding: 5px 10px;
          margin: 0 auto;
          display: block;
          border-radius: 40px 40px 0 0;
        }
      }
    }
  }
</style>
