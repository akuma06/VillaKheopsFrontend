<template>
  <page-template title="contact_us" inner-class="pb-4" :path="path">
    <GmapMap
      ref="gmap"
      :center="position"
      :zoom="18"
      style="width: 100%; height: 300px"
    >
      <gmap-info-window :opened="showMapWindow" @closeclick="showMapWindow=false" :options="infoMapWindowOptions" :position="position">

        <h6>Villa Khéops</h6>
        <p>345 Boulevard des Cigales<br>
        06210 Mandelieu-la-Napoule<br>
        France</p>
      </gmap-info-window>
      <GmapMarker
        :position="position"
        :clickable="true"
        @click="markerClick"
      />
    </GmapMap>
    <b-container class="pt-5">
      <b-row>
        <b-col>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="fullname_label" class="w42">
                <font-awesome-icon icon="male"></font-awesome-icon>
              </b-input-group-text>
              <b-input
                type="text"
                class="form-control"
                id="fullname"
                name="fullname"
                v-model="form.fullname"
                :placeholder="'* '+$t('fullname')"
                aria-labelledby="fullname_label"r
                required
              ></b-input>
            </b-input-group>
            <div class="field-notice" rel="fullname"></div>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="email_label" class="w42">
                <font-awesome-icon icon="envelope"></font-awesome-icon>
              </b-input-group-text>
              <b-input
                type="text"
                class="form-control"
                id="email"
                name="email"
                v-model="form.email"
                :placeholder="'* '+$t('email_address')"
                aria-labelledby="email_label"
                required
              ></b-input>
            </b-input-group>
            <div class="field-notice" rel="email"></div>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="address_label" class="w42">
                <font-awesome-icon icon="home"></font-awesome-icon>
              </b-input-group-text>
              <b-textarea
                type="text"
                class="form-control"
                id="address"
                name="address"
                v-model="form.address"
                :placeholder="$t('address')"
                aria-labelledby="address_label"
                rows="2"
              ></b-textarea>
            </b-input-group>
            <div class="field-notice" rel="address"></div>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="phone_label" class="w42">
                <font-awesome-icon icon="mobile"></font-awesome-icon>
              </b-input-group-text>
              <b-input
                type="text"
                class="form-control"
                id="phone"
                name="phone"
                v-model="form.phone"
                :placeholder="$t('phone_number')"
                aria-labelledby="phone_label"
              ></b-input>
            </b-input-group>
            <div class="field-notice" rel="phone"></div>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="subject_label" class="w42">
                <font-awesome-icon icon="question"></font-awesome-icon>
              </b-input-group-text>
              <b-input
                type="text"
                class="form-control"
                id="subject"
                name="subject"
                v-model="form.subject"
                :placeholder="'* '+$t('subject')"
                aria-labelledby="subject_label"
                required
              ></b-input>
            </b-input-group>
            <div class="field-notice" rel="subject"></div>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-text slot="prepend" id="message_label" class="w42">
                <font-awesome-icon icon="quote-left"></font-awesome-icon>
              </b-input-group-text>
              <b-textarea
                type="text"
                class="form-control"
                id="message"
                name="message"
                v-model="form.message"
                :placeholder="'* '+$t('message')"
                aria-labelledby="message_label"
                rows="4"
                required
              ></b-textarea>
            </b-input-group>
            <div class="field-notice" rel="message"></div>
          </b-form-group>
          <p>
            {{ $t('fields_required_msg') }}
          </p>
          <b-btn variant="primary"><font-awesome-icon icon="paper-plane"></font-awesome-icon>&nbsp;{{ $t('send') }}</b-btn>
        </b-col>
        <b-col>
          <div class="card text-white bg-primary" itemscope="" itemtype="http://schema.org/Corporation">
            <div class="card-body">
              <h2 itemprop="name" class="card-title">Sarah Guigou</h2>
              <address>
                <p class="card-text">
                  <font-awesome-icon icon="map-marker"></font-awesome-icon>&nbsp;<span itemprop="address" itemtype="http://schema.org/PostalAddress">345 boulevard des cigales</span><br>
                  <font-awesome-icon icon="envelope"></font-awesome-icon>&nbsp;<a itemprop="email" dir="ltr" href="mailto:contact@villakheops.fr">contact@villakheops.fr</a>                            </p>
              </address>
            </div>
          </div>
        </b-col>
      </b-row>
      <vue-recaptcha ref="recaptcha" size="invisible" @verify="onVerify" @expired="onExpired" sitekey="6LdO12oUAAAAABPSlCRuTvblhloyN2GdwtE82VQI"></vue-recaptcha>
    </b-container>
  </page-template>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha'
  import PageTemplate from './PageTemplate'
export default {
    name: 'ContactUs',
    components: {PageTemplate, VueRecaptcha},
    data () {
      return {
        path: [{
          text: this.$i18n.t('home'),
          href: '/'
        }, {
          text: this.$i18n.t('contact_us'),
          active: true
        }],
        infoMapWindowOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        showMapWindow: true,
        position: {lat: 43.5641234, lng: 6.9334459},
        form: {
          fullname: '',
          email: '',
          address: '',
          phone: '',
          subject: '',
          message: ''
        }
      }
    },
    methods: {
      onSubmit: function () {
        this.$refs.recaptcha.execute()
      },
      onVerify: function (response) {
        console.log('Verify: ' + response)
      },
      onExpired: function () {
        console.log('Expired')
      },
      markerClick () {
        console.log('click')
        this.showMapWindow = true
        this.$refs.gmap.center = this.position
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "common";
  .w42 svg {
    width: 20px;
  }
  .card.text-white {
    a {
      color: #fff;
    }
  }
</style>
