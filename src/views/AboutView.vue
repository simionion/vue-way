<script setup lang="ts">
import flash from '@/utils/flash.js'
import storage from '@/utils/storage.js'

const food = storage({ key: 'food', defaultValue: 'pizza' })
const age = storage({ key: 'age', defaultValue: 18 })
</script>

<template>
  <div class="about flex flex-col">
    <h1>This is an about page</h1>

    <br />
    <div class="mt-6">
      <p>What is your favorite food ?</p>
      <input type="text" class="text-black" v-model="food" />
    </div>

    <div class="mt-6">
      <p>What is your age ?</p>
      <input type="text" class="text-black" v-model="age" />
    </div>

    <div>
      <p class="text-center">
        <button class="btn btn-primary" @click="flash('Hello from Vite + Vue 3!')">
          Flash Message
        </button>
      </p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
