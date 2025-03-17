import { defineStore } from 'pinia'

// Helper function for category definitions
const defineCategory = (displayName, order, tags, formula) => ({
  displayName,
  order,
  tags,
  formula
})

export const useTagsStore = defineStore('tags', {
  state: () => ({
    availableTypes: [
      { title: 'Characters', value: 'character' },
      { title: 'Environments', value: 'environment' },
      { title: 'Props', value: 'prop' }
    ],
    selectedType: 'character',
    inspirationCards: [],
    favoritedInspirationCards: [],

    environmentTags: {
      location: defineCategory(
        'Location', 
        2, 
        [
          'Jungle', 'Island', 'City', 'Desert', 'Arctic', 'Ocean', 'Forest', 'Mountain', 'Cave', 'Swamp',
          'Village', 'Metropolis', 'Ruins', 'Space Station', 'Underwater City', 'Farmland', 'Canyon', 'Volcano', 'Graveyard', 'Castle',
          'Jungle', 'Space Station', 'Desert Oasis', 'Underground Bunker', 'Floating Market',
          'Abandoned Factory', 'Mountain Peak', 'Cyberpunk Alley', 'Medieval Village', 'Tropical Beach',
          'Haunted Mansion', 'Futuristic Farm', 'Ancient Library', 'Crystal Cave', 'War Zone',
          'Frozen Lake', 'Nomad Camp', 'Vertical Slums', 'Radioactive Crater', 'Sky Port'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      emotion: defineCategory(
        'Emotion',
        1,
        [
          'Terrifying ', 'Sad', 'Joyful', 'Peaceful', 'Tense', 'Melancholic',
          'Nostalgic', 'Romantic', 'Lonely', 'Serene', 'Surreal', 'Whimsical', 'Dark', 'Vibrant',
          'Isolated', 'Hopeful', 'Foreboding', 'Mysterious',
          'Tranquil', 'Chaotic', 'Oppressive', 'Inviting', 'Unnerving',
          'Majestic', 'Claustrophobic', 'Eerie', 'Lively', 'Desolate',
          'Sacred', 'Sinister', 'Bleak', 'Uplifting'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      ambience: defineCategory(
        'Ambience', 
        3, 
        [
          'Dreary', 'Uninhabitable', 'Golden Hour', 'Foggy', 'Rainy', 'Sunny', 'Stormy', 'Twilight', 'Moonlit', 'Haunted',
          'Lively', 'Quiet', 'Busy', 'Mystical', 'Ethereal', 'Claustrophobic', 'Expansive', 'Cozy', 'Alien', 'Dreamlike',
        ], 
        function (randomTag) { return `with ${randomTag.toLowerCase()} atmosphere`}
      ),
      scale: defineCategory(
        'Scale', 
        6, 
        [
          'Human', 'Planet', 'Galactic', 'Microscopic', 'Room-Sized', 'City-Sized', 'Continent-Sized', 'Solar System', 'Universe', 'Pocket Dimension',
          'Infinite', 'Tiny', 'Massive', 'Intimate', 'Monumental', 'Vast', 'Compact', 'Overwhelming', 'Minimal', 'Grand',
        ], 
        function (randomTag) { return `on a ${randomTag.toLowerCase()} scale`}
      ),
      timePeriod: defineCategory(
        'Time Period', 
        4, 
        [
          'Dying Earth', 'Stone Age', 'Space Age', 'Medieval', 'Renaissance', 'Industrial Revolution', 'Victorian Era', 'Ancient Times', 'Future', 'Prehistoric',
          'Modern Day', 'Post-Apocalyptic', 'Golden Age', 'Bronze Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes',
        ], 
        function (randomTag) { return `in the ${randomTag} period`}
      ),
      timeOfDay: defineCategory(
        'Time Of Day', 
        5, 
        [
          'Morning', 'Noon', 'Dusk', 'Night', 'Twilight', 'Dawn', 'Midnight'
        ], function (randomTag) { return `${randomTag === 'Morning' ? 'in the': 'at'} ${randomTag.toLowerCase()}`}
      ),
      climate: defineCategory(
        'Climate', 
        9, 
        [
          'Hot', 'Cold', 'Temperate', 'Humid', 'Arid', 'Windy', 'Stormy', 'Tropical', 'Frigid', 'Warm'
        ], 
        function (randomTag) { return `under ${randomTag} conditions`}
      ),
      season: defineCategory(
        'Season', 
        10, 
        [
          'Winter', 'Spring', 'Summer', 'Fall', 'Rainy', 'Dry', 'Stormy', 'Drought', 'Snowy'
        ], 
        function (randomTag) { return `during ${randomTag}`}
      ),
      architecture: defineCategory(
        'Architecture Style',
        92, 
        [
          'Nordic', 'Postmodern', 'Art Deco', 'Gothic', 'Brutalist', 'Futuristic', 'Victorian', 'Baroque', 'Minimalist', 'Classical',
          'Industrial', 'Rustic', 'Organic', 'Ancient', 'Medieval', 'Colonial', 'Islamic', 'Japanese', 'Byzantine', 'Neoclassical',
          'Brutalist', 'Art Nouveau', 'Steampunk', 'Bamboo', 'Underground',
          'Floating', 'Cantilevered', 'Ruined', 'Prefab', 'Minimalist', 'Abstract',
          'Modular', 'Retrofuturistic', 'Geodesic', 'Arcology', 'Cave-carved',
          'Crystal', 'Nomadic', 'Bio-dome', 'Hive-like', 'Converted', 'Militaristic',
        ], 
        function (randomTag) { return `with ${randomTag} architecture`}
      ),
      culture: defineCategory(
        'Culture', 
        93, 
        [
          'Cree', 'Greek', 'Indonesian', 'Egyptian', 'Norse', 'Japanese', 'Aztec', 'Mayan', 'Celtic', 'Indian',
          'Chinese', 'African', 'Polynesian', 'Roman', 'Viking', 'Aboriginal', 'Inuit', 'Slavic', 'Persian', 'Maori',
        ], function (randomTag) { return `influenced by ${randomTag} culture`}
      ),
      genre: defineCategory(
        'Genre', 
        94, 
        [
          'Western', 'Crime', 'Comedy', 'Sci-Fi', 'Fantasy', 'Horror', 'Historical', 'Post-Apocalyptic', 'Cyberpunk', 'Steampunk',
          'Noir', 'Adventure', 'Mystery', 'Romance', 'Thriller', 'Surrealism', 'Dystopian', 'Fairy Tale', 'War', 'Supernatural',
        ], 
        function (randomTag) { return `in the ${randomTag} genre`}
      ),
      colorScheme: defineCategory(
        'Color Scheme',
        95, 
        [
          'Limited Palette', 'Achromatic', 'One Color Dominant', 'Monochromatic', 'Vibrant', 'Warm', 'Cool',
          'Earthy Tones', 'Complementary Colors', 'Analogous Colors', 'Triadic Colors', 'Dark and Moody', 'Light and Airy', 'Sunset Colors', 'Winter Palette',
          'Pastel', 'Neon', 'Monochrome', 'Earth Tones', 'Metallic',
          'High Contrast', 'Muted', 'Gradient', 'Warm/Cool',
          'Primary Colors', 'Dark Academia', 'Cyberpunk', 'Aquatic',
          'Forest Palette', 'Desert Hues', 'Industrial Greys', 'Vibrant Pop', 'Burnt'
        ], 
        function (randomTag) { return `with ${randomTag.toLowerCase()} color scheme`}
      ),
    },

    characterTags: {
      race: defineCategory(
        'Race/Species', 
        61, 
        [
          'Human', 'Demon', 'Alien', 'Elf', 'Dwarf', 'Orc', 'Robot', 'Vampire', 'Werewolf', 'Angel',
          'Ghost', 'Goblin', 'Troll', 'Fairy', 'Dragon', 'Cyborg', 'Mermaid', 'Zombie', 'Shapeshifter', 'Giant', 'Humanoid'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      bodyType: defineCategory(
        'Body Type', 
        1,
        [
          'Slim', 'Muscular', 'Fat', 'Tall', 'Short', 'Lanky', 'Stocky',
          'Ethereal', 'Mechanical', 'Animalistic', 'Monstrous', 'Elegant', 'Bulky', 'Fragile', 'Agile', 'Powerful', 'Delicate',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      occupation: defineCategory(
        'Occupation', 
        63, 
        [
          'Prisoner', 'Android', 'Priest', 'Knight', 'Scientist', 'Artist', 'Merchant', 'Farmer', 'Soldier', 'Thief',
          'Wizard', 'Engineer', 'Doctor', 'Pilot', 'Detective', 'Explorer', 'Chef', 'Musician', 'Blacksmith', 'Scholar',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      personality: defineCategory(
        'Personality',
        2, 
        [
          'Brave', 'Cowardly', 'Cunning', 'Naive', 'Wise', 'Foolish', 'Kind', 'Cruel', 'Loyal', 'Betrayer',
          'Optimistic', 'Pessimistic', 'Charismatic', 'Shy', 'Arrogant', 'Humble', 'Ambitious', 'Lazy', 'Curious', 'Stoic',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      state: defineCategory(
        'State', 
        3, 
        [
          'Injured', 'Healthy', 'Tired', 'Energized', 'Happy', 'Sad', 'Angry', 'Confused', 'Determined', 'Scared',
          'Calm', 'Nervous', 'Excited', 'Bored', 'Focused', 'Distracted', 'Hopeful', 'Despairing', 'Lonely', 'Content',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      action: defineCategory(
        'Action', 
        99, 
        [
          'Walking', 'Running', 'Fighting', 'Meditating', 'Dancing', 'Singing', 'Reading', 'Writing', 'Crafting', 'Exploring',
          'Flying', 'Swimming', 'Climbing', 'Sleeping', 'Eating', 'Laughing', 'Crying', 'Thinking', 'Observing', 'Creating',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      role: defineCategory(
        'Role', 
        62, 
        [
          'Hero', 'Villain', 'Antihero', 'Sidekick', 'Mentor', 'Rogue', 'Soldier', 'King', 'Queen', 'Nomad', 
          'Outcast', 'Inventor', 'Mercenary', 'Scholar', 'Scavenger',
          'Diplomat', 'Pilgrim', 'Engineer', 'Spy', 'Survivor',
          'Guardian', 'Smuggler', 'Healer', 'Prophet', 'Entertainer',
          'Rebel', 'Aristocrat', 'Drifter', 'Artisan', 'Experiment'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      emotion: defineCategory(
        'Emotion', 
        4, 
        [
          'Fearful', 'Joyful', 'Angry', 'Sad', 'Hopeful', 'Lonely', 'Confident', 'Anxious', 'Desperate', 'Mischievous'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      age: defineCategory(
        'Age', 
        5, 
        [
          'Young', 'Old', 'Middle-aged', 'Teen', 'Child', 'Elder'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      appearance: defineCategory(
        'Appearance', 
        6, 
        [
          'Bald', 'Bearded', 'Scarred', 'Elegant', 'Dirty', 'Clean', 'Wounded', 'Beautiful', 'Handsome', 'Attractive',
          'Scarred', 'Tattooed', 'Augmented', 'Weathered', 'Androgynous',
          'Regal', 'Ragged', 'Armored', 'Luminous', 'Masked',
          'Bionic', 'Veiled', 'Tattooed', 'Pierced', 'Distinctive',
          'Fashionable', 'Practical', 'Ceremonial', 'Improvised', 'Uniformed'
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
    },

    propTags: {
      size: defineCategory(
        'Size', 
        1, 
        [
          'Tiny', 'Small', 'Medium-size', 'Large', 'Huge', 'Enormous', 'Portable', 'Handheld', 'Wearable', 'Massive',
          'Microscopic', 'Compact', 'Oversized', 'Lightweight', 'Heavy', 'Bulky', 'Slim', 'Delicate', 'Sturdy', 'Fragile',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      type: defineCategory(
        'Type', 
        2, 
        [
          'Ornament', 'Weapon', 'Foliage', 'Furniture', 'Vehicle', 'Clothing', 'Jewelry', 'Book', 'Artifact', 'Machine',
          'Food', 'Drink', 'Container', 'Instrument', 'Gadget', 'Relic', 'Toy', 'Tool', 'Device', 'Accessory',
        ], 
        function (randomTag) { return `${randomTag}`}
      ),
      condition: defineCategory(
        'Condition', 
        3, 
        [
          'Broken', 'New', 'Worn', 'Polished', 'Rusted', 'Damaged', 'Shiny', 'Weathered'
        ], 
        function (randomTag) { return `in ${randomTag.toLowerCase()} condition`}
      ),
      style: defineCategory(
        'Style',
        4, 
        [
          'Gothic', 'Vintage', 'Futuristic', 'Minimalist', 'Ornate', 'Industrial', 'Baroque', 'Art Deco', 'Steampunk', 'Cyberpunk'
        ], 
        function (randomTag) { return `with ${randomTag} style`}
      ),
      era: defineCategory(
        'Era', 
        5, 
        [
          'Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Modern', 'Futuristic', 'Prehistoric', 'Post-Apocalyptic', 'Space Age', 'Victorian',
          'Stone Age', 'Bronze Age', 'Golden Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes', 'Dying Earth',
        ], 
        function (randomTag) { return `from ${randomTag} era`}
      ),
      material: defineCategory(
        'Material', 
        98, 
        [
          'Wood', 'Metal', 'Stone', 'Glass', 'Fabric', 'Plastic', 'Crystal', 'Bone', 'Leather', 'Ceramic',
          'Paper', 'Rubber', 'Gold', 'Silver', 'Bronze', 'Iron', 'Steel', 'Obsidian', 'Marble', 'Silk',
          'Carbon Fiber', 'Bamboo', 'Recycled', 'Bioplastic', 'Ceramic',
          'Living Wood', 'Smart Glass', 'Nanoweave', 'Volcanic Rock', 'Meteoric Iron',
          'Compressed Paper', 'Liquid Crystal', 'Fossilized', 'Organic Composite', 
          'Magnetic', 'Glow-in-Dark', 'Self-healing', 'Radioactive', 'Translucent'
        ], 
        function (randomTag) { return `made from ${randomTag} material`}
      ),
      functionality: defineCategory(
        'Functionality', 
        99, 
        [
          'Speed', 'Toxic', 'Destruction', 'Healing', 'Protection', 'Communication', 'Transportation', 'Storage', 'Illumination', 'Decoration',
          'Weaponry', 'Tool', 'Entertainment', 'Surveillance', 'Navigation', 'Energy Source', 'Time Manipulation', 'Illusion', 'Transformation', 'Defense', 
          'Communication', 'Defense', 'Navigation', 'Energy', 'Transport',
          'Medical', 'Entertainment', 'Construction', 'Disguise', 'Measurement',
          'Containment', 'Illumination', 'Survival', 'Artistic', 'Hacking',
          'Farming', 'Timekeeping', 'Tracking', 'Cleaning', 'Recording'
        ], 
        function (randomTag) { return `for ${randomTag}`}
      ),
    },
  }),
  getters: {
    orderedCategories: (state) => ({
      environment: Object.entries(state.environmentTags)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([key, config]) => ({ key, ...config })),
        
      character: Object.entries(state.characterTags)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([key, config]) => ({ key, ...config })),
        
      prop: Object.entries(state.propTags)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([key, config]) => ({ key, ...config }))
    }),
  },
  actions: {
    addInspirationCard(card) {
      this.inspirationCards.unshift(card);
    },
    editInspirationCard(card, id) {
      
    },
    removeInspirationCard(id) {
      this.inspirationCards.splice(id, 1);
    },
    clearInspirationCards() {
      this.inspirationCards = [];
    },
    toggleLike(card, id) {
      if (!card.isLiked && !this.favoritedInspirationCards.includes(card)) {
        this.inspirationCards[id].isLiked = true;
      } else {
        this.inspirationCards[id].isLiked = false;
      }
        
      // console.log(this.favoritedInspirationCards);
    }
  }
});