import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('theme') === 'dark'
  }),
  actions: {
    initializeTheme() {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.isDark = localStorage.getItem('theme') 
        ? localStorage.getItem('theme') === 'dark'
        : systemDark
    },
    toggleTheme() {
      this.isDark = !this.isDark
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    }
  }
})