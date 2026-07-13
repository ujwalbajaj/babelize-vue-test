export const products = [
  { id: 1, title: 'Organic Green Tea', price: 12.5, currency: '$', inStock: 5, discount: 20, weight: 0.25, unit: 'kg', rating: 4.5, reviews: 128, material: 'green tea leaves' },
  { id: 2, title: 'Speedster Bicycle', price: 899.99, currency: '$', inStock: 2, discount: null, weight: 11.5, unit: 'kg', rating: 4.9, reviews: 42, material: 'aluminum alloy' }
]

export const users = [
  { id: 1, name: 'Alice Johnson', joinDate: new Date('2023-03-15'), gender: 'female', messages: 3, prefersFormal: false },
]

export const notifications = [
  { id: 2, type: 'like', actors: ['Alice', 'Bob', 'Carol'], postTitle: 'Mountain hike views', timestamp: Date.now() - 7200000 },
  { id: 5, type: 'gift', actor: 'Alice', recipient: 'Bob', item: 'handmade scarf', timestamp: Date.now() - 259200000 },
  { id: 6, type: 'contest', place: 2, contestName: 'Photo Contest', timestamp: Date.now() - 604800000 }
]

export const richContents = [
  { id: 1, type: 'announcement', htmlBody: 'We have updated our <b>Privacy Policy</b>. Please <a href="/review">review the changes</a>.' },
  {
    id: 2, type: 'ambiguous', contexts: [
      { sentence: 'The <b>light</b> in this room is very warm.', meaning: 'illumination' },
      { sentence: 'This suitcase is very <b>light</b> and easy to carry.', meaning: 'low weight' }
    ]
  },
  { id: 3, type: 'mention', userName: 'Alice', userRole: 'admin', action: 'sent you a friend request' }
]
