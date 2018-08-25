<template>
  <div class="mainbg">
    <section id="page" class="text-left pt130">
      <header class="page-header">
        <b-container>
          <b-row class="align-items-center">
            <div class="col-sm-7">
              <h1 itemprop="name">{{ $t(title) }}</h1>
            </div>
            <div class="col-sm-5 hidden-xs d-flex justify-content-end align-items-center">
              <b-breadcrumb itemprop="breadcrumb" :items="path"/>
            </div>
          </b-row>
        </b-container>
      </header>
      <div id="content" :class="innerClass">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageTemplate',
  props: {
    title: {
      default: 'page',
      type: String
    },
    path: {
      default: [{ text: 'home', href: '/' }],
      type: Array
    },
    innerClass: {
      default: 'pt-5 pb-4',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "common";
</style>
