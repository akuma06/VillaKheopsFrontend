<template>
    <b-container>
      <b-form action="/" method="post" class="booking-search" v-on:submit.prevent="onSubmit">
        <b-row>
          <b-col lg="3">
            <b-form-group>
              <b-input-group>
                <b-input-group-text slot="prepend" id="from_date_label" class="input-transparent">
                  <font-awesome-icon icon="calendar"></font-awesome-icon>&nbsp;{{ $t('check_in') }}
                </b-input-group-text>
                <flat-pickr
                  class="form-control input-transparent"
                  id="from_date"
                  name="from_date"
                  v-model="form.from_date"
                  :config="config_date"
                  @on-change="fromDateChange"
                  aria-labelledby="from_date_label"
                ></flat-pickr>
              </b-input-group>
              <div class="field-notice" rel="from_date"></div>
            </b-form-group>
          </b-col>
          <b-col lg="3">
            <b-form-group>
              <b-input-group>
                <b-input-group-text slot="prepend" id="to_date_label" class="input-transparent">
                  <font-awesome-icon icon="calendar"></font-awesome-icon>&nbsp;{{ $t('check_out') }}
                </b-input-group-text>
                <flat-pickr
                  class="form-control input-transparent"
                  id="to_date"
                  name="to_date"
                  :config="config_date"
                  v-model="form.to_date"
                  @on-change="toDateChange"
                  aria-labelledby="to_date_label"
                ></flat-pickr>
              </b-input-group>
              <div class="field-notice" rel="to_date"></div>
            </b-form-group>
          </b-col>
          <b-col lg="2">
            <b-form-group>
              <b-input-group>
                <b-input-group-text slot="prepend" id="num_adults_label" class="input-transparent">
                  <font-awesome-icon icon="male"></font-awesome-icon>&nbsp;{{ $t('adults') }}
                </b-input-group-text>
                <b-select name="num_adults" :class="selectClass" v-model="form.nb_adults">
                  <option v-for="(i, a) in max_adults" :key="'adults'+a" :value="i" :selected="i == 1">{{ i }}</option>
                </b-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="2">
            <b-form-group>
              <b-input-group>
                <b-input-group-text slot="prepend" id="num_children_label" class="input-transparent">
                  <font-awesome-icon icon="male"></font-awesome-icon>&nbsp;{{ $t('children') }}
                </b-input-group-text>
                <b-select name="num_children" :class="selectClass" v-model="form.nb_children">
                  <option v-for="(i, c) in max_children" :key="'children'+c" :value="i-1">{{ i-1 }}</option>
                </b-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="2">
            <b-form-group>
              <b-btn variant="primary" class="btn-block input-transparent" type="submit" name="check_availabilities">
                <font-awesome-icon icon="search"></font-awesome-icon>&nbsp;{{ $t('check') }}
              </b-btn>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import moment from 'moment'

export default {
    name: 'BookChooser',
    components: {
      flatPickr
    },
    data () {
      return {
        max_adults: 6,
        max_children: 7,
        form: {
          nb_adults: 1,
          nb_children: 0,
          from_date: this.checkIn,
          to_date: this.checkOut
        },
        config_date: {
          minDate: 'today',
          wrap: true, // set wrap to true only when using 'input-group'
          dateFormat: 'd/m/Y',
          locale: this.$i18n.t('flatpickr')
        }
      }
    },
    props: {
      selectClass: {
        default: 'input-transparent',
        type: String
      },
      checkIn: {
        default: moment().format('DD/MM/YYYY'),
        type: String
      },
      checkOut: {
        default: moment().add(1, 'days').format('DD/MM/YYYY'),
        type: String
      }
    },
    methods: {
      fromDateChange (selectedDates, dateStr, instance) {
        let from = moment(dateStr, 'DD/MM/YYYY')
        let to = moment(this.form.to_date, 'DD/MM/YYYY')
        if (!to.isAfter(from)) {
          this.form.to_date = from.add(1, 'days').format('DD/MM/YYYY')
        }
      },
      toDateChange (selectedDates, dateStr, instance) {
        let today = moment()
        let from = moment(this.form.from_date, 'DD/MM/YYYY')
        let to = moment(dateStr, 'DD/MM/YYYY')
        if (!to.isAfter(today)) {
          instance.setDate(from.add(1, 'days').format('DD/MM/YYYY'), false)
          return
        }
        if (!to.isAfter(from)) {
          this.form.from_date = to.subtract(1, 'days').format('DD/MM/YYYY')
        }
      },
      onSubmit (e) {
        this.$emit('submit', this.form, e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-control, .input-transparent {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }
  .btn:hover {
    background: rgba(50, 120, 150, 0.6);
  }
</style>
