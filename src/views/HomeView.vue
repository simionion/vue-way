<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import TextareaTabbable from '../components/TextareaTabbable.vue'
import { ref, watch } from 'vue'

let comment = ref('tester value')

watch(comment, (newVal, oldVal) => {
  console.log('newVal', newVal)
  console.log('oldVal', oldVal)
})
</script>

<template>
  <main>
    <form>
      <TextareaTabbable v-model="comment" rows="25" cols="15" />
    </form>
    <TheWelcome />
  </main>
</template>
