<script setup lang="ts">
defineProps({
  modelValue: String,
  rows: {
    type: String,
    default: '10'
  },
  cols: {
    type: String,
    default: '10'
  }
})

let emit = defineEmits(['update:modelValue'])

function onTabPress(e: KeyboardEvent) {
  let textareaEl = e.target as HTMLTextAreaElement
  let start = textareaEl.selectionStart
  let end = textareaEl.selectionEnd
  textareaEl.value = textareaEl.value.substring(0, start) + '\t' + textareaEl.value.substring(end)
  textareaEl.selectionStart = textareaEl.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    @keyup="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    @keydown.tab.prevent="onTabPress"
    class="w-full text-black"
    :rows="rows"
    :cols="cols"
    v-text="modelValue"
  />
</template>
