<template>
  <div class="product-card">
    <h2>Products</h2>
    <div v-for="product in products" :key="product.id" class="card">
      <h3>{{ product.title }}</h3>
      <p class="price">{{ product.currency }}{{ product.price.toFixed(2) }}</p>
      <p v-if="product.inStock > 0" class="in-stock">Only {{ product.inStock }} in stock</p>
      <p v-else class="out-of-stock">Out of stock</p>
    </div>
  </div>
</template>

<script>
import { products } from '../data/mockData.js'

export default {
  name: 'ProductCard',
  data() {
    return { products }
  }
}
</script>

<style scoped>
.product-card { display: flex; flex-wrap: wrap; gap: 1rem; }
.product-card h2 { width: 100%; margin-bottom: 0; }
.card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; width: 220px; }
.price { font-size: 1.3rem; font-weight: bold; color: #2c6b2f; }
.in-stock { color: #2c6b2f; }
</style>
