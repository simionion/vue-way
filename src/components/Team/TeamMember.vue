<script setup lang="ts">
defineProps({
  email: String,
  name: String,
  status: String,
  avatar: String
})
</script>

<template>
  <div class="grid grid-cols-3 gap-4 px-12">
    <div class="flex items-center gap-x-4 bg-gray-700 px-6 py-4 text-xl font-medium">
      <img :src="avatar" :alt="'avatar for' + name" class="h-12 w-12 rounded-full" />
      {{ name }}
    </div>
    <div class="flex items-center gap-x-4 bg-gray-700 px-6 py-4 text-xl font-medium">
      {{ email }}
    </div>

    <div class="flex items-center gap-x-4 bg-gray-700 px-6 py-4 text-xl font-medium">
      <button
        :disabled="status === 'inactive'"
        class="color-blue-500 mb-1 mr-1 rounded border border-solid border-blue-500 bg-transparent px-8 py-3 font-bold uppercase outline-none transition-all duration-150 ease-linear hover:bg-blue-500 hover:text-white focus:outline-none active:bg-blue-600 disabled:border-gray-500 disabled:bg-gray-700"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>
