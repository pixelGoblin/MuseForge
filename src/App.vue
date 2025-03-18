<script setup>
  import KeywordFields from './components/KeywordFields.vue'
  import InspirationCards from './components/InspirationCards.vue'
  import Sidebar from './components/Sidebar.vue'
  import ThemeToggle from '@/components/ThemeToggle.vue'
  import { useTagsStore } from './stores/inspirationTagsStore';
  const tagsStore = useTagsStore();
</script>

<template>
  <header>
    <span class="title">
      MuseForge — Generate project ideas
    </span>
    <ThemeToggle />
  </header>
  <v-divider></v-divider>
  <main :class="{ 'editing': tagsStore.isEditing }">
    <div id="main-content" :class="{ 'editing': tagsStore.isEditing }">
      <KeywordFields />
      <InspirationCards />
    </div>
    <aside v-if="tagsStore.isEditing" id="sidebar">
      <Sidebar/> 
    </aside>
  </main>
</template>

<style scoped>
  header {
    height: 3rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  main.editing {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "main-content sidebar";
    height: calc(100vh - 3rem);
    width: 100%;
    overflow-y: hidden;
  }

  #main-content {
    grid-area: main-content;
    /* overflow-y: scroll; */
  }

  #main-content.editing {
    overflow-y: scroll;
  }

  #sidebar {
    grid-area: sidebar;
  }
</style>
