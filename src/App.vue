<template>
  <div id="app">
    <header>
      <h1>Babelize Practice</h1>
      <nav>
        <button           v-for="tab in tabs"
          :key="tab.key"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >{{ tab.label }}</button>
      </nav>
    </header>
    <main>
      <ProductCard v-if="activeTab === 'products'" ></ProductCard>
      <UserProfile v-if="activeTab === 'profile'" ></UserProfile>
      <NotificationFeed v-if="activeTab === 'notifications'" ></NotificationFeed>
      <RichContent v-if="activeTab === 'content'" ></RichContent>
      <SettingsPanel v-if="activeTab === 'settings'" ></SettingsPanel>
    </main>
    <footer>
      <p>Babelize Vue Practice — i18n training project</p>
    </footer>
  </div>
</template>

<script>import { t } from "@/i18n";
import ProductCard from './components/ProductCard.vue';
import UserProfile from './components/UserProfile.vue';
import NotificationFeed from './components/NotificationFeed.vue';
import RichContent from './components/RichContent.vue';
import SettingsPanel from './components/SettingsPanel.vue';

export default {
  name: 'App',
  components: { ProductCard, UserProfile, NotificationFeed, RichContent, SettingsPanel },
  data() {
    return {
      activeTab: t("appvue.products"),
      tabs: [
      { key: 'products', label: t("appvue.products_2") },
      { key: 'profile', label: t("appvue.profile") },
      { key: 'notifications', label: t("appvue.notifications") },
      { key: 'content', label: t("appvue.content") },
      { key: 'settings', label: t("appvue.settings") }]

    };
  }
};</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; background: #fafafa; }
#app { max-width: 900px; margin: 0 auto; padding: 1.5rem; }
header { margin-bottom: 2rem; }
header h1 { font-size: 1.5rem; margin-bottom: 1rem; }
nav { display: flex; gap: 0.5rem; flex-wrap: wrap; }
nav button { padding: 0.5rem 1rem; border: 1px solid #ccc; background: #fff; border-radius: 6px; cursor: pointer; font-size: 0.9rem; }
nav button.active { background: #2980b9; color: #fff; border-color: #2980b9; }
main { min-height: 300px; }
footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #eee; color: #999; font-size: 0.85rem; text-align: center; }
</style>
