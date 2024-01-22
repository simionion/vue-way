<script setup lang="ts">
import { useCounterStore } from '@/stores/CounterStore'

let counter = useCounterStore()
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>{{ counter.count }} (Remaining: {{ counter.remaining }})</h1>
    <div class="flex flex-col">
      <button
        @click="counter.increment()"
        :disabled="counter.remaining == 0"
        class="color-blue-500 mb-1 mr-1 rounded border border-solid border-blue-500 bg-transparent px-8 py-3 font-bold uppercase outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600 disabled:border-gray-500 disabled:bg-gray-700"
      >
        Increment
      </button>
      <button
        @click="counter.decrement()"
        :disabled="counter.count <= 0"
        class="color-blue-500 mb-1 mr-1 rounded border border-solid border-blue-500 bg-transparent px-8 py-3 font-bold uppercase outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600 disabled:border-gray-500 disabled:bg-gray-700"
      >
        Decrement
      </button>
    </div>
  </div>
</template>
