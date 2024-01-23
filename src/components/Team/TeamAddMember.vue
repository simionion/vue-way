<script setup lang="ts">
defineProps({
  title: String
})
</script>

<template>
  <h1>{{ title }}</h1>
  <div>
    <form method="dialog" class="flex flex-col items-stretch space-y-2">
      <label class="flex items-center justify-between">
        <span class="text-gray-700">Name</span>
        <input
          type="text"
          class="ml-5 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </label>
      <label class="flex items-center justify-between">
        <span class="text-gray-700">Email</span>
        <input
          type="email"
          class="ml-5 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </label>
      <label class="flex items-center justify-between">
        <span class="text-gray-700">Role</span>
        <select
          name="status"
          class="ml-5 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <label class="flex items-center justify-between">
        <span class="text-gray-700">Avatar</span>
        <input
          type="file"
          class="ml-5 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </label>

      <div>
        <button
          type="submit"
          class="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>
