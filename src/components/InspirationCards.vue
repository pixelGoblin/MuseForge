<script setup>
  import { onMounted  } from 'vue';

  import { storeToRefs } from 'pinia';
  import { useTagsStore } from '../stores/inspirationTagsStore';

  const tagsStore = useTagsStore();
  const { inspirationCards } = storeToRefs(tagsStore);

  onMounted(() => {
    tagsStore.loadCardsFromLocalStorage();
  })
</script>

<template>
  <div class="inspiration-cards-wrapper">
    <ul>
      <li
        v-for="(card, id) in inspirationCards"
        :key="id"
      >
        <v-card class="inspiration-card pl-5" >
          <div
            v-if="card.isLiked"
            class="liked-indicator"
          ></div>

          {{ card.sentence }}
          <v-card-actions
            class="position-absolute bottom-0 right-0 my-auto h-100"
          >
            <v-btn
              class="pa-1 ma-1 heart-icon"
              icon="$heart"
              size="x-large"
              :class="{ 'liked': card.isLiked }"
              @click="tagsStore.toggleLike(id);"
            />
            <v-btn
              class="pa-1 ma-1"
              icon="$edit"
              size="x-large"
              @click="tagsStore.editInspirationCard(card, id);"
            />
            <v-btn
              class="pa-1 ma-1"
              icon="$remove"
              size="x-large"
              @click="tagsStore.removeInspirationCard(id);"
            />
          </v-card-actions>
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
    padding: 0.5rem 0;
  }

  .inspiration-card {
    padding: 1rem;
    border-radius: 1rem;
    /* background-color: #2196F3; */
    font-size: 1.2rem;
    /* text-align: center; */
  }

  .v-card-actions {
    opacity: 0;
    transition: opacity  0.3s ease-in, background-color 0.1s ease-in;
  }

  .v-card-actions:hover {
    opacity: 1;
    /* background-color: var(--color-background-mute); */
    background-color: #2196F3;
  }

  .heart-icon.liked {
    color: var(--vt-c-liked-light);
  }

  .liked-indicator {
  position: absolute;
  left: -2px;
  top: 0;
  height: 100%;
  width: 10px;
  background-color: var(--vt-c-liked-dark); 
  /* border-radius: 2px 0 0 2px; */
  transition: transform 0.2s ease;
}
</style>