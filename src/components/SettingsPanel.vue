<template>
  <div class="settings-panel">
    <h2>Settings</h2>

    <div class="section">
      <h3>Display</h3>
      <div class="row">
        <label>Language</label>
        <select v-model="selectedLocale" @change="changeLocale">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="de">Deutsch</option>
          <option value="ja">日本語</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <div class="row">
        <label>Theme</label>
        <div>
          <button :aria-label="'Switch to dark mode'">Dark</button>
          <button :aria-label="'Switch to light mode'">Light</button>
        </div>
      </div>
      <div class="row">
        <label>Date format</label>
        <select>
          <option value="MDY">Month/Day/Year</option>
          <option value="DMY">Day/Month/Year</option>
          <option value="YMD">Year/Month/Day</option>
        </select>
      </div>
    </div>

    <div class="section">
      <h3>Notifications</h3>
      <div class="row">
        <input type="checkbox" id="emailNotif" />
        <label for="emailNotif">Email notifications</label>
      </div>
      <div class="row">
        <input type="checkbox" id="pushNotif" />
        <label for="pushNotif">Push notifications</label>
      </div>
    </div>

    <div class="section">
      <h3>Search</h3>
      <input type="search" :placeholder="'Search settings...'" class="search-input" />
    </div>

    <div class="section rtl-sample" dir="rtl">
      <h3>RTL Sample</h3>
      <p>This text flows right-to-left for Arabic/Hebrew locales.</p>
    </div>
  </div>
</template>

<script>
import { setLocale } from '@/i18n.js'

export default {
  name: 'SettingsPanel',
  data() {
    return {
      selectedLocale: this.$i18n.locale.value
    }
  },
  methods: {
    changeLocale() {
      setLocale(this.selectedLocale)
    }
  }
}
</script>

<style scoped>
.settings-panel { max-width: 500px; }
.section { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
.section h3 { margin: 0 0 0.75rem 0; font-size: 1rem; color: #555; }
.row { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
.row label { min-width: 100px; }
.search-input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
.rtl-sample { background: #f9f9f9; }
.rtl-sample p { margin: 0; color: #666; }
</style>
