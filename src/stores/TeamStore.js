import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state() {
    return {
      name: '',
      spots: 0,
      logo: '',
      members: []
    }
  },
  actions: {
    async fillInitialState() {
      const response = await import('@/data/teams.json')
      const team = response.default.smiley
      this.name = team.name
      this.spots = team.spots
      this.logo = team.logo
      this.members = team.members
    }
  },
  getters: {
    spotsAvailable() {
      return this.spots - this.members.length
    }
  }
})
