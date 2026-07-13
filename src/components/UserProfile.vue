<template>
  <div class="user-profile">
    <h2>User Profiles</h2>
    <div v-for="user in users" :key="user.id" class="profile-card">
      <h3>{{ user.prefersFormal ? 'Dear' : 'Hi' }} {{ user.name }}</h3>
      <p>Welcome back, {{ user.name }}!</p>
      <p class="messages">{{ user.messages }} unread message{{ user.messages === 1 ? '' : 's' }}</p>
      <p>Member since: {{ user.joinDate.toLocaleDateString() }}</p>
      <p>Joined {{ timeAgo(user.joinDate) }}</p>
      <p>
        <span v-if="user.gender === 'male'">He</span>
        <span v-else-if="user.gender === 'female'">She</span>
        <span v-else>They</span>
        uploaded {{ user.messages || 1 }} photo{{ user.messages === 1 ? '' : 's' }}
      </p>
    </div>
  </div>
</template>

<script>
import { users } from '../data/mockData.js'

export default {
  name: 'UserProfile',
  data() {
    return { users }
  },
  methods: {
    timeAgo(date) {
      const diff = Date.now() - date.getTime()
      const mins = Math.floor(diff / 60000)
      const hrs = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      const months = Math.floor(days / 30)
      const years = Math.floor(days / 365)
      if (mins < 1) return 'just now'
      if (hrs < 1) return mins + ' minutes ago'
      if (days < 1) return hrs + ' hours ago'
      if (months < 1) return days + ' days ago'
      if (years < 1) return months + ' months ago'
      return years + ' years ago'
    }
  }
}
</script>

<style scoped>
.user-profile { display: flex; flex-wrap: wrap; gap: 1rem; }
.user-profile h2 { width: 100%; margin-bottom: 0; }
.profile-card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; width: 280px; }
.messages { color: #2980b9; font-weight: 500; }
</style>
