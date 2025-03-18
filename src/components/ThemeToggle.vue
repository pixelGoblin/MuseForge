<script setup>
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/themeStore'
import { onMounted } from 'vue'

const theme = useTheme();
const themeStore = useThemeStore();

// const root = document.querySelector(':root');
onMounted(() => {
  themeStore.initializeTheme();
  theme.global.name.value = themeStore.isDark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', themeStore.isDark);
  document.documentElement.style.colorScheme = themeStore.isDark ? 'dark' : 'light';
})

function toggleTheme () {
  // theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  // root.classList.toggle('dark');

  themeStore.toggleTheme();
  theme.global.name.value = themeStore.isDark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', themeStore.isDark);
  document.documentElement.style.colorScheme = themeStore.isDark ? 'dark' : 'light';
}
</script>

<template>
  <v-btn
    @click="toggleTheme"
    :icon="themeStore.isDark ? '$nightTime' : '$dayTime'"
    variant="text"
    class="theme-toggle"
  />
</template>

<style scoped>
</style>