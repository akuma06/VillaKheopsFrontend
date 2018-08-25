<template>
  <b-navbar toggleable="md" type="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">
      <img src="/static/logo.svg">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="link in links" :key="link.name" :href="link.url" :active="link.route==$route.name">{{ $t(link.name) }} </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
    export default {
      name: 'MainMenu',
      data () {
        return {
          links: [
            {name: 'home', url: '/', route: 'Home'},
            {name: 'rooms', url: '/rooms', route: 'Rooms'},
            {name: 'booking', url: '/booking', route: 'Booking'},
            {name: 'meals', url: '/restaurant', route: 'Restauration'},
            {name: 'contact_us', url: '/contact', route: 'Contact'}
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .navbar {

    .nav-link {
      font-weight: 700;
      color: rgba(255, 255, 255, .5);
      background-color: transparent;
      border-bottom: .25rem solid transparent;
    }

    .nav-link:hover,
    .nav-link:focus {
      border-bottom-color: rgba(255, 255, 255, .25);
    }

    .nav-link + .nav-link {
      margin-left: 1rem;
    }

    .active {
      color: #fff;
      border-bottom-color: #fff;
    }
  }
</style>
