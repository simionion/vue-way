<script setup>
defineProps({
  team: Object
})
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:bg-gray-600"
        :disabled="team.members.length === team.spots"
      >
        Add Team Member ({{ team.spots - team.members.length }} spot{{
          team.spots - team.members.length === 1 ? '' : 's'
        }}
        left)
      </button>
    </div>

    <div>
      <h3 class="relative inline-flex items-center text-3xl">
        <img :src="team.logo" :alt="'logo for ' + team.name" class="h-12 w-12 rounded-full" />
        {{ team.name }}

        <div
          class="absolute -right-4 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-xs text-white"
        >
          {{ team.spots }}
        </div>
      </h3>
    </div>
  </header>
</template>
