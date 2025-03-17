<script setup>
  import { ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTagsStore } from '../stores/inspirationTagsStore';

  const tagsStore = useTagsStore();
  const { inspirationCards } = storeToRefs(tagsStore);
</script>

<template>
  <div class="inspiration-cards-wrapper">
    <ul>
      <li
        v-for="(card, id) in inspirationCards"
        :key="id"
      >
        <v-card class="inspiration-card" >
          {{ card.sentence }}
        </v-card>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 1rem 0;
  }

  .inspiration-card {
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: #2196F3; */
    font-size: 1.2rem;
    /* text-align: center; */
  }
</style>