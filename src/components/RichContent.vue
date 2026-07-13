<template>
  <div class="rich-content">
    <h2>Rich Content</h2>
    <div v-for="item in contents" :key="item.id" class="content-card">
      <template v-if="item.type === 'announcement'">
        <p v-html="item.htmlBody"></p>
      </template>
      <template v-else-if="item.type === 'ambiguous'">
        <p class="label">Context-dependent: same word, different meaning</p>
        <div v-for="(ctx, i) in item.contexts" :key="i" class="context-row">
          <span class="tag">{{ ctx.meaning }}</span>
          <span v-html="ctx.sentence"></span>
        </div>
      </template>
      <template v-else-if="item.type === 'mention'">
        <p>
          <span class="badge" :class="item.userRole">{{ item.userName }}</span>
          {{ item.action }}
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { richContents } from '../data/mockData.js'

export default {
  name: 'RichContent',
  data() {
    return { contents: richContents }
  }
}
</script>

<style scoped>
.rich-content { max-width: 550px; }
.content-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
.label { font-size: 0.85rem; color: #666; margin-bottom: 0.5rem; }
.context-row { display: flex; gap: 0.5rem; align-items: baseline; margin: 0.25rem 0; }
.tag { font-size: 0.75rem; background: #eee; padding: 1px 6px; border-radius: 4px; white-space: nowrap; color: #555; }
.badge { font-weight: bold; padding: 1px 8px; border-radius: 4px; }
.badge.admin { background: #e8f4fd; color: #2980b9; }
</style>
