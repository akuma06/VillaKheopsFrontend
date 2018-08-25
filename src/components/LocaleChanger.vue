<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="onChange" class="form-control">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.short">{{ lang.long }}</option>
    </select>
  </div>
</template>

<script>
    export default {
      name: 'LocaleChanger',
      data () {
        return {
          langs: [
            { short: 'fr', long: 'Français' },
            { short: 'en', long: 'English' }
          ]
        }
      },
      methods: {
        onChange (e) {
          localStorage.setItem('locale', e.target.value)
        }
      }
    }
</script>

<style scoped>
  select {
    background: 0 0;
    border: 2px solid #fff;
    color: #fff;
  }
  select:focus {
    background: #fff;
    color: var(--yellow);
  }
</style>
