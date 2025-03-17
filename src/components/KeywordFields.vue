<script setup>
  import { ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useTagsStore } from '../stores/inspirationTagsStore';

  const tagsStore = useTagsStore();
  const selectedCategories = ref([]);

  const currentTypeTitle = computed(() => tagsStore.availableTypes.find(t => t.value === tagsStore.selectedType)?.title || '');
  const availableTypes = computed(() => tagsStore.availableTypes);
  const { selectedType } = storeToRefs(tagsStore);

  const environmentCategories = tagsStore.orderedCategories.environment;
  const characterCategories = tagsStore.orderedCategories.character;
  const propCategories = tagsStore.orderedCategories.prop;

  const loading = ref(false);

  // const formatCategoryName = (category) => {
  //   return category.replace(/(^\w|_\w)/g, (match) => 
  //     match.replace(/_/, ' ').toUpperCase()
  //   );
  // };

  const allSelected = computed(() => {
    return selectedCategories.value.length === 5;
  });

  const generateInspiration = () => {
    if (selectedCategories.value.length === 0) {
      alert('Please select at least one category');
      return;
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const currentType = tagsStore.selectedType;
    // const categories  = tagsStore.orderedCategories[currentType];
    const selectedKeys = selectedCategories.value

    const orderedKeys = selectedKeys.sort((a, b) => { a.order - b.order });

    const parts = orderedKeys.map(key => {
      const randomTag = key.tags[Math.floor(Math.random() * key.tags.length)]
      const result = key.formula(randomTag);
      return result;
    })
    console.log(`${vowels.includes(parts[0][0].toLowerCase()) ? 'An' : 'A'} ${parts.join(' ')}.`);

    // const generated = {};
    // for (const category of selectedCategories.value) {
    //   const availableTags = currentTags[category];
    //   if (availableTags && availableTags.length > 0) {
    //     const randomIndex = Math.floor(Math.random() * availableTags.length);
    //     generated[category] = availableTags[randomIndex];
    //   }
    // }
    // const sentenceParts = selectedCategories.value.map(category => generated[category]);
    // const fullSentence = sentenceParts.join(' ');
    // console.log(fullSentence);

    // tagsStore.addInspirationCard({
    //   sentence: fullSentence,
    //   categories: selectedCategories.value,
    //   tags: generated
    // });
  };
</script>

<template>
  <div class="type-selector">
    <span class="prompt-text">I want to generate ideas for</span>
    <v-menu offset-y>
      <template #activator="{ props }">
        <span 
          class="type-display"
          v-bind="props"
        >
          {{ currentTypeTitle }}
          <span class="underline"></span>
        </span>
      </template>

      <v-list density="compact">
        <v-list-item
          v-for="type in availableTypes"
          :key="type.value"
          @click="selectedType = type.value; selectedCategories = []"
        >
          <v-list-item-title>{{ type.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

  <v-container class="ma-0 px-0 py-6">
    <v-row align="center" justify="start">
      <v-col
        v-for="(selection, i) in selectedCategories"
        :key="selection"
        class="py-1 pe-0"
        cols="auto"
      >
        <v-chip
          :disabled="loading"
          closable
          class="pa-4 rounded-xl"
          @click:close="selectedCategories.splice(i, 1)"
        >
          {{ selection.displayName }}
        </v-chip>
      </v-col>
    </v-row>
    <!-- Environment Categories -->
    <v-container v-if="selectedType === 'environment'"  class="mx-auto px-0">
      <v-card-title>Environment Tags</v-card-title>
      <v-card-text>
        <template v-for="category in environmentCategories">
          <v-chip
            v-if="!selectedCategories.includes(category)"
            :key="category"
            class="ma-1 rounded-xl pa-4"
            :filter="selectedCategories.includes(category)"
            @click="selectedCategories.push(category)"
            label
          >
            {{ category.displayName }}
          </v-chip>
        </template>
      </v-card-text>
    </v-container>

    <!-- Character Categories -->
    <v-container v-if="selectedType === 'character'" class="mx-auto px-0">
      <v-card-title>Character Tags</v-card-title>
      <v-card-text>
        <template v-for="category in characterCategories">
          <v-chip
            v-if="!selectedCategories.includes(category)"
            :key="category"
            class="ma-1 rounded-xl pa-4"
            :filter="selectedCategories.includes(category)"
            @click="selectedCategories.push(category)"
            label
          >
            {{ category.displayName }}
          </v-chip>
        </template>
      </v-card-text>
    </v-container>

    <!-- Prop Categories -->
    <v-container v-if="selectedType === 'prop'" class="mx-auto px-0">
      <v-card-title>Prop Tags</v-card-title>
      <v-card-text>
        <template v-for="category in propCategories">
          <v-chip
            v-if="!selectedCategories.includes(category)"
            :key="category"
            class="ma-1 rounded-xl pa-4"
            :filter="selectedCategories.includes(category)"
            @click="selectedCategories.push(category)"
            label
          >
            {{ category.displayName }}
          </v-chip>
        </template>
        
      </v-card-text>
    </v-container>

    <!-- <v-divider v-if="!allSelected"></v-divider> -->

    
  </v-container>
  <v-btn 
    color="primary"
    :disabled="selectedCategories.length === 0"
    @click="generateInspiration"
  >
    Generate
    <v-icon end>mdi-auto-fix</v-icon>
  </v-btn>
</template>

<style scoped>

/* .v-container {
  padding: 0;
  margin: 0;
} */


.type-selector {
  font-size: 1.8rem;
  /* margin: 1rem 2rem; */
  display: flex;
  align-items: center;
}

/* .prompt-text {

} */

.type-display {
  position: relative;
  cursor: pointer;
  color: #2196F3;
  margin-left: 1rem;
  font-size: 1.1em;
}

.underline {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 2px;
  background: currentColor;
  opacity: 0.6;
}

.type-display:hover .underline {
  opacity: 1;
}

/* Menu styling */
:deep(.v-list) {
  padding: 8px 0;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

:deep(.v-list-item) {
  min-height: 36px;
  padding: 0 16px;
  font-size: 0.9rem;
}
</style>