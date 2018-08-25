<template>
    <page-template title="details" :path="path">
      <b-container>
        <b-card v-if="form.reservation !== undefined">
          <div class="wizard">
            <b-nav justified pills>
              <b-nav-item href="/booking"><font-awesome-icon icon="calendar" size="3x"></font-awesome-icon><br>{{ $t('booking') }}</b-nav-item>
              <b-nav-item active href="/booking/details">
                <font-awesome-icon icon="file-signature" size="3x"></font-awesome-icon><br>
                {{ $t('details') }}
              </b-nav-item>
              <b-nav-item disabled href="/booking/summary">
                <font-awesome-icon icon="file-invoice-dollar" size="3x"></font-awesome-icon><br>
                {{ $t('summary') }}
              </b-nav-item>
              <b-nav-item disabled href="/booking/payment">
                <font-awesome-icon icon="credit-card" size="3x"></font-awesome-icon><br>
                {{ $t('payment') }}
              </b-nav-item>
            </b-nav>
            <b-row class="mt-4">
              <b-col md="6">
                <b-form>
                  <fieldset>
                    <legend>{{ $t('contact_details') }}</legend>
                    <b-form-group horizontal label-cols="3" :label="$t('lastname')+' *'" label-for="lastname">
                      <b-form-input name="lastname" id="lastname" needed v-model="form.lastname"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('firstname')+' *'" label-for="firstname">
                      <b-form-input name="firstname" id="firstname" needed v-model="form.firstname"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('email_address')+' *'" label-for="email">
                      <b-form-input name="email" id="email" needed v-model="form.email"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('company')" label-for="company">
                      <b-form-input name="company" id="company" v-model="form.company"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('address')+' *'" label-for="address">
                      <b-form-input name="address" id="address" needed v-model="form.address"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('post_code')+' *'" label-for="postcode">
                      <b-form-input name="postcode" id="postcode" needed v-model="form.postcode"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('city')+' *'" label-for="city">
                      <b-form-input name="city" id="city" needed v-model="form.city"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('country')+' *'" label-for="country">
                        <b-form-select name="country" id="country" needed v-model="form.country">
                          <option slot="first" :value="null">{{ $t('choose') }}...</option>
                          <option value="Afghanistan">Afghanistan</option><option value="Åland">Åland</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire">Bonaire</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curacao">Curacao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands">Falkland Islands</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Ivory Coast">Ivory Coast</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar [Burma]">Myanmar [Burma]</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Réunion">Réunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint Barthélemy">Saint Barthélemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="São Tomé and Príncipe">São Tomé and Príncipe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option><option value="U.S. Virgin Islands">U.S. Virgin Islands</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Vatican City">Vatican City</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('phone_number')+' *'" label-for="phone">
                      <b-form-input name="phone" id="phone" needed v-model="form.phone"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label-cols="3" :label="$t('mobile')" label-for="mobile">
                      <b-form-input name="mobile" id="mobile" v-model="form.mobile"></b-form-input>
                    </b-form-group>
                  </fieldset>
                </b-form>
              </b-col>
              <b-col md="6">
                <fieldset class="mb-2">
                  <legend>{{ $t('booking_details') }}</legend>
                  <b-row v-for="item in form.reservation.cart" :key="item">
                    <b-col md="6">
                      <h5>{{ rooms[item].name[$i18n.locale] }}</h5>
                    </b-col>
                    <b-col md="6">
                      <span class="float-right lead text-center">
                          {{ rooms[item].price * totalNight }} €<br>
                      </span>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <p>
                        {{ $t('check_in') }} <strong>{{ form.reservation.from_date }}</strong><br>
                        {{ $t('check_out') }} <strong>{{ form.reservation.to_date }}</strong><br>
                        <strong>{{ totalNight }}</strong> {{ $tc('night', totalNight) }} - <strong>{{ totalPersons }}</strong> {{ $tc('person', totalPersons) }}
                      </p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <p>
                        <strong>{{ $t('tourist_tax') }}</strong>
                        <span class="float-right">{{ touristTax }} €</span>
                      </p>
                    </b-col>
                  </b-row>
                </fieldset>
                <fieldset class="mb-2">
                  <legend>{{ $t('extra_services') }}</legend>
                </fieldset>
                <hr>
                <b-row>
                  <b-col xs="6">
                    <h5>{{ $t('total_include_vat') }}</h5>
                    {{ $t('vat_amount') }}
                  </b-col>
                  <div class="col-xs-6 lead text-right">
                    <span id="total_booking">
                      {{ totalPrice }} €<br>
                      <small>{{ totalVAT }} €</small>
                    </span>
                  </div>
                </b-row>
                <fieldset>
                  <legend>{{ $t('special_requests') }}</legend>
                  <b-form-group>
                    <b-textarea class="form-control" name="requests" rows="3" v-model="form.requests"></b-textarea>
                  </b-form-group>
                  <p>{{ $t('fields_required_msg') }}</p>
                </fieldset>
              </b-col>
            </b-row>
          </div>
          <div slot="footer">
            <b-row>
              <b-col>
                <b-btn name="book" variant="info" size="lg" @click="previous">
                  <font-awesome-icon icon="arrow-alt-circle-left"></font-awesome-icon>&nbsp;{{ $t('change') }}
                </b-btn>
              </b-col>
              <b-col class="text-right">
                <b-btn name="book" variant="success" size="lg" :disabled="totalPrice == 0" @click="next">
                  {{ $t('next') }}&nbsp;<font-awesome-icon icon="arrow-alt-circle-right"></font-awesome-icon>
                </b-btn>
              </b-col>
            </b-row>
          </div>
        </b-card>
        <b-card bg-variant="danger" text-variant="light" :title="$t('error')" v-if="form.reservation === undefined">
          <p>{{ $t('cart_empty') }}</p>
        </b-card>
      </b-container>
    </page-template>
</template>

<script>
import PageTemplate from './PageTemplate'
import moment from 'moment'
export default {
  name: 'Details',
  components: {PageTemplate},
  data () {
    let sessionCart = (sessionStorage.getItem('details') !== null) ? JSON.parse(sessionStorage.getItem('details')) : {}
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
        href: '/booking'
      }, {
        text: this.$i18n.t('details'),
        active: true
      }],
      form: {
        lastname: this.$route.params.lastname || sessionCart.lastname || '',
        firstname: this.$route.params.firstname || sessionCart.firstname || '',
        email: this.$route.params.email || sessionCart.email || '',
        company: this.$route.params.company || sessionCart.company || '',
        address: this.$route.params.address || sessionCart.address || '',
        postcode: this.$route.params.postcode || sessionCart.postcode || '',
        city: this.$route.params.city || sessionCart.city || '',
        country: this.$route.params.country || sessionCart.country || null,
        phone: this.$route.params.phone || sessionCart.phone || '',
        mobile: this.$route.params.mobile || sessionCart.mobile || '',
        requests: this.$route.params.requests || sessionCart.requests || '',
        reservation: this.$route.params.reservation || sessionCart.reservation
      },
      touristTaxAmount: 10,
      vat: 0.10
    }
  },
  computed: {
    totalNight () {
      let from = moment(this.form.reservation.from_date, 'DD/MM/YYYY')
      let to = moment(this.form.reservation.to_date, 'DD/MM/YYYY')
      return to.diff(from, 'days')
    },
    totalPersons () {
      return this.form.reservation.nb_adults + this.form.reservation.nb_children
    },
    touristTax () {
      return Number.parseFloat(this.touristTaxAmount * this.form.reservation.nb_adults).toFixed(2)
    },
    totalPriceBeforeTax () {
      let price = 0
      this.form.reservation.cart.forEach(v => { price += this.rooms[v].price * this.totalNight })
      return Number.parseFloat(price).toFixed(2)
    },
    totalPrice () {
      let price = (1 + this.vat) * Number.parseFloat(this.totalPriceBeforeTax) + Number.parseFloat(this.touristTax)
      return Number.parseFloat(price).toFixed(2)
    },
    totalVAT () {
      return Number.parseFloat(this.vat * Number.parseFloat(this.totalPriceBeforeTax)).toFixed(2)
    }
  },
  methods: {
    next () {
      sessionStorage.setItem('details', JSON.stringify(this.form))
      this.$router.push({ name: 'Summary', params: { details: this.form } })
    },
    previous () {
      this.$router.push({ name: 'Booking', params: this.form.reservation })
    }
  }
}
</script>

<style lang="scss" scoped>
.wizard {
  .nav {
    background-color: rgba(200, 200, 200, 0.2);
    font-size: 28px;
    text-transform: uppercase;
    .nav-link:not(.disabled):not(.active) {
      background-color: #64BBDB;
      color: white;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .active {
      position: relative;
      text-align: center;
      background-color: #00bcd4;
      left: 0px;
      border-radius: 4px;
      color: #FFFFFF;
      cursor: pointer;
      font-weight: 500;
      box-shadow: 0 16px 26px -10px rgba(0, 188, 212, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2);
    }
  }
}
h5 {
  font-family: "Open Sans",sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  color: #1488BA;
}
</style>
