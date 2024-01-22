import { ref, watch } from 'vue'

export default function storage(
  { key, defaultValue, watchDeep } = { defaultValue: null, watchDeep: false }
) {
  const val = ref(read() || defaultValue)

  watch(val, write, { deep: watchDeep })

  function read() {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      return null
    }
  }

  function write(newVal) {
    if (newVal === null || newVal?.trim() === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newVal))
    }
  }

  return val
}
