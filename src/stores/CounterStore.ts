import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0,
      limit: 10
    }
  },

  getters: {
    doubleCount: (state) => state.count * 2,
    remaining: (state) => state.limit - state.count
  },

  actions: {
    increment() {
      if (this.remaining > 0) {
        this.count++
      }
    },
    decrement() {
      if (this.count > 0) {
        this.count--
      }
    }
  }
})
