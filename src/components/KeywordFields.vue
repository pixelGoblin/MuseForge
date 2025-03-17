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


  const allSelected = computed(() => {
    return selectedCategories.value.length === selectedType.value.length;
  });

  const generateInspiration = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const resultGenerated = {
      sentence: '',
      type: '',
      tags: [],
      isLiked: false
    };
    // const currentType = tagsStore.selectedType;
    // const categories  = tagsStore.orderedCategories[currentType];
    const selectedKeys = selectedCategories.value;
    const orderedKeys = selectedKeys.sort((a, b) => { a.order - b.order });

    const parts = orderedKeys.map(key => {
      const randomTag = key.tags[Math.floor(Math.random() * key.tags.length)]
      const result = key.formula(randomTag);
      resultGenerated.tags.push({
        categoryDisplayName: key.displayName,
        category: key.key,
        tag: randomTag
      });
      return result;
    });
    console.log(parts);

    const sentence = `${vowels.includes(parts[0][0].toLowerCase()) ? 'An' : 'A'} ${parts.join(' ')}.`;
    resultGenerated.type = tagsStore.selectedType;
    resultGenerated.sentence = sentence;

    tagsStore.addInspirationCard(resultGenerated);
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

  <v-container class="ma-0 px-0 pt-6 pb-0">
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

    <!-- Character Categories -->
    <v-container v-if="selectedType === 'character'" class="mx-auto px-0">
      <!-- <v-card-title>Character Tags</v-card-title> -->
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

    <!-- Environment Categories -->
    <v-container v-if="selectedType === 'environment'"  class="mx-auto px-0">
      <!-- <v-card-title >Environment Tags</v-card-title> -->
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

    <!-- Prop Categories -->
    <v-container v-if="selectedType === 'prop'" class="mx-auto px-0">
      <!-- <v-card-title>Prop Tags</v-card-title> -->
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
    class="generate-button rounded-lg px-4 py-2 mb-5 w-100"
    :disabled="selectedCategories.length === 0"
    @click="generateInspiration"
  >
    Generate
    <!-- <v-icon end>mdi-auto-fix</v-icon> -->
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

button.v-btn {
  /* margin: 1rem 2rem; */
  font-size: 1.1em;
  /* padding: 1rem 2rem; */
  /* width: 100%; */
  border-radius: 4px;
  height: 3rem;
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