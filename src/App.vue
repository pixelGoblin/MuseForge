<script setup>
import KeywordFields from './components/KeywordFields.vue'
import InspirationCards from './components/InspirationCards.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <header>
    <span class="title">
      MuseForge — Generate project ideas
    </span>
    
  </header>

  <main>
    <div class="main-content">
      <KeywordFields />
      <InspirationCards />
    </div>
    <aside>
      <Sidebar /> 
    </aside>
  </main>
</template>

<style scoped>
  header {
    height: 3rem;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
</style>
