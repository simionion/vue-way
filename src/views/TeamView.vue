<script setup lang="ts">
import TeamHeader from '@/components/Team/TeamHeader.vue'
import TeamMember from '@/components/Team/TeamMember.vue'
import Teams from '@/data/teams.json'
const team = Teams.smiley
</script>
<template>
  <TeamHeader :team="team" />
  <div class="flex flex-col gap-4 font-black">
    <TeamMember
      v-for="member in team.members"
      :key="member.email"
      :name="member.name"
      :email="member.email"
      :status="member.status"
      :avatar="member.avatar"
    />

    <p class="text-right italic text-gray-300" v-show="team.members.length === team.spots">
      There are no remaining spots. Upgrade your plan to add more
    </p>
  </div>
  <footer class="y-4 mt-12 text-center">
    <h5 class="text-lg font-semibold text-white">
      {{ team.name }} - {{ team.spots }} Members Team
    </h5>
  </footer>
</template>
