<script setup>
  import { ref, computed } from 'vue';

  import { storeToRefs } from 'pinia';
  import { useTagsStore } from '../stores/inspirationTagsStore';

  const tagsStore = useTagsStore();
  const editingCard  = computed({
    get: () => tagsStore.editingCard,
    set: (value) => tagsStore.editingCard = value
  });

  const rerollTag = (type, tag) => {
    tagsStore.rerollTag(type, tag);
  }
</script>

<template>
  <div class="sidebar-wrapper">
    <header>
      <span class="title">Edit Ideas</span>

    </header>
    <div class="editing-container" v-if="tagsStore.isEditing">
      
      
      <!-- {{ tagsStore.editingCard.card }} -->
      <template
        v-for="tag in editingCard.card.tags"
      >
        
        <v-btn
          class="ma-1"
          color="primary"
          @click="rerollTag(editingCard.card.type, tag)"
        >
          {{ tag.tag }}
        </v-btn>
      </template>
      <!-- <v-btn
        @click="console.log(editingCard.card.tags.map(tag => tag.tag));"
      >
        log
      </v-btn> -->
    </div>
  </div>
</template>


<style scoped>
  header {
    height: auto;
    width: 100%;
    text-align: center;
    padding: 0.5rem 2rem;
    background-color: var(--color-background-soft);
    font-size: 1.3rem;
  }
</style>