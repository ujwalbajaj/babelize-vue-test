<template>
  <div class="notifications">
    <h2>Notifications</h2>
    <div v-for="n in notifications" :key="n.id" class="notif-item">
      <template v-if="n.type === 'like' && n.actors.length === 1">
        <p>{{ n.actors[0] }} liked your post</p>
      </template>
      <template v-else-if="n.type === 'like' && n.actors.length > 1">
        <p>{{ n.actors.slice(0, -1).join(', ') }} and {{ n.actors[n.actors.length - 1] }} liked your post</p>
      </template>
      <template v-else-if="n.type === 'follow'">
        <p>{{ n.actor }} started following you</p>
      </template>
      <template v-else-if="n.type === 'multi'">
        <p>{{ n.peopleCount }} people liked {{ n.photosCount }} of your photos</p>
      </template>
      <template v-else-if="n.type === 'gift'">
        <p>{{ n.actor }} sent {{ n.recipient }} a {{ n.item }}</p>
      </template>
      <template v-else-if="n.type === 'contest'">
        <p>You placed {{ n.place }}{{ ordinalSuffix(n.place) }} in {{ n.contestName }}</p>
      </template>
      <span class="time">{{ timeAgo(n.timestamp) }}</span>
    </div>
  </div>
</template>

<script>
import { notifications } from '../data/mockData.js'

export default {
  name: 'NotificationFeed',
  data() {
    return { notifications }
  },
  methods: {
    timeAgo(ts) {
      const diff = Date.now() - ts
      const mins = Math.floor(diff / 60000)
      const hrs = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      if (mins < 1) return 'just now'
      if (hrs < 1) return mins + 'm ago'
      if (days < 1) return hrs + 'h ago'
      return days + 'd ago'
    },
    ordinalSuffix(n) {
      if (n > 3 && n < 21) return 'th'
      const r = n % 10
      if (r === 1) return 'st'
      if (r === 2) return 'nd'
      if (r === 3) return 'rd'
      return 'th'
    }
  }
}
</script>

<style scoped>
.notifications { max-width: 500px; }
.notif-item { border-bottom: 1px solid #eee; padding: 0.75rem 0; display: flex; justify-content: space-between; align-items: flex-start; }
.notif-item p { margin: 0; }
.time { color: #999; font-size: 0.85rem; white-space: nowrap; margin-left: 1rem; }
</style>
