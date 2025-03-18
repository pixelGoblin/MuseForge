<script setup>
  import { computed } from 'vue';

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
    <div v-if="tagsStore.isEditing" class="editing-container">
      <v-card v-if="editingCard.card.tags" class="ma-2">
        <v-card-text id="editing-card-sentence">
          {{ editingCard.card.sentence }}
        </v-card-text>
      </v-card>
      <div class="tag-buttons">
        <v-btn
          v-for="(tag, idx) in editingCard.card.tags"
          :key="idx"
          class="ma-1 pa-2"
          color="primary"
          prepend-icon="$dice"
          @click="rerollTag(editingCard.card.type, tag)"
        >
        {{ tag.categoryDisplayName }}: {{ tag.tag }}
        </v-btn>
        
      </div>
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

  .editing-container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  #editing-card-sentence {
    font-size: 1.2rem;
  }

  .tag-buttons {
    display: flex;
    flex-direction: column;
  }
</style>