import { defineStore } from 'pinia'

// Helper function for category definitions
const defineCategory = (displayName, order, tags) => ({
  displayName,
  order,
  tags
})

export const useTagsStore = defineStore('tags', {
  state: () => ({
    availableTypes: [
      { title: 'Characters', value: 'character' },
      { title: 'Environments', value: 'environment' },
      { title: 'Props', value: 'prop' }
    ],
    selectedType: 'character',

    environmentTags: {
      location: defineCategory('Location', 1, [
        'Jungle', 'Island', 'City', 'Desert', 'Arctic', 'Ocean', 'Forest', 'Mountain', 'Cave', 'Swamp',
        'Village', 'Metropolis', 'Ruins', 'Space Station', 'Underwater City', 'Farmland', 'Canyon', 'Volcano', 'Graveyard', 'Castle',
        'Jungle', 'Space Station', 'Desert Oasis', 'Underground Bunker', 'Floating Market',
        'Abandoned Factory', 'Mountain Peak', 'Cyberpunk Alley', 'Medieval Village', 'Tropical Beach',
        'Haunted Mansion', 'Futuristic Farm', 'Ancient Library', 'Crystal Cave', 'War Zone',
        'Frozen Lake', 'Nomad Camp', 'Vertical Slums', 'Radioactive Crater', 'Sky Port'
      ]),
      emotion: defineCategory('Emotion', 2, [
        'Fearful', 'Sad', 'Sinister', 'Joyful', 'Mysterious', 'Peaceful', 'Tense', 'Melancholic', 'Hopeful', 'Eerie',
        'Nostalgic', 'Romantic', 'Chaotic', 'Lonely', 'Oppressive', 'Serene', 'Surreal', 'Whimsical', 'Dark', 'Vibrant',
        'Isolated', 'Hopeful', 'Foreboding', 'Nostalgic', 'Mysterious',
        'Tranquil', 'Chaotic', 'Oppressive', 'Inviting', 'Unnerving',
        'Majestic', 'Claustrophobic', 'Eerie', 'Lively', 'Desolate',
        'Sacred', 'Sinister', 'Surreal', 'Bleak', 'Uplifting'
      ]),
      genre: defineCategory('Genre', 3, [
        'Western', 'Crime', 'Comedy', 'Sci-Fi', 'Fantasy', 'Horror', 'Historical', 'Post-Apocalyptic', 'Cyberpunk', 'Steampunk',
        'Noir', 'Adventure', 'Mystery', 'Romance', 'Thriller', 'Surrealism', 'Dystopian', 'Fairy Tale', 'War', 'Supernatural',
      ]),
      architecture: defineCategory('Architecture Style', 4, [
        'Nordic', 'Postmodern', 'Art Deco', 'Gothic', 'Brutalist', 'Futuristic', 'Victorian', 'Baroque', 'Minimalist', 'Classical',
        'Industrial', 'Rustic', 'Organic', 'Ancient', 'Medieval', 'Colonial', 'Islamic', 'Japanese', 'Byzantine', 'Neoclassical',
        'Brutalist', 'Art Nouveau', 'Steampunk', 'Bamboo', 'Underground',
        'Floating', 'Cantilevered', 'Ruined', 'Prefab', 'Organic',
        'Modular', 'Retrofuturistic', 'Geodesic', 'Arcology', 'Cave-carved',
        'Crystal', 'Nomadic', 'Bio-dome', 'Hive-like', 'Converted'
      ]),
      colorScheme: defineCategory('Color Scheme', 3, [
        'Limited Palette', 'Achromatic', 'One Color Dominant', 'Pastel', 'Monochromatic', 'Vibrant', 'Muted', 'Warm', 'Cool', 'High Contrast',
        'Earthy Tones', 'Neon', 'Gradient', 'Complementary Colors', 'Analogous Colors', 'Triadic Colors', 'Dark and Moody', 'Light and Airy', 'Sunset Colors', 'Winter Palette',
        'Pastel', 'Neon', 'Monochrome', 'Earth Tones', 'Metallic',
        'High Contrast', 'Muted', 'Gradient', 'Complementary', 'Warm/Cool',
        'Primary Colors', 'Dark Academia', 'Cyberpunk', 'Sunset', 'Aquatic',
        'Forest Palette', 'Desert Hues', 'Industrial Greys', 'Vibrant Pop', 'Burnt'
      ]),
      ambience: defineCategory('Ambience', 3, [
        'Dreary', 'Uninhabitable', 'Golden Hour', 'Foggy', 'Rainy', 'Sunny', 'Stormy', 'Twilight', 'Moonlit', 'Haunted',
        'Lively', 'Quiet', 'Busy', 'Mystical', 'Ethereal', 'Claustrophobic', 'Expansive', 'Cozy', 'Alien', 'Dreamlike',
      ]),
      scale: defineCategory('Scale', 3, [
        'Human', 'Planet', 'Galactic', 'Microscopic', 'Room-Sized', 'City-Sized', 'Continent-Sized', 'Solar System', 'Universe', 'Pocket Dimension',
        'Infinite', 'Tiny', 'Massive', 'Intimate', 'Monumental', 'Vast', 'Compact', 'Overwhelming', 'Minimal', 'Grand',
      ]),
      culture: defineCategory('Culture', 3, [
        'Cree', 'Greek', 'Indonesian', 'Egyptian', 'Norse', 'Japanese', 'Aztec', 'Mayan', 'Celtic', 'Indian',
        'Chinese', 'African', 'Polynesian', 'Roman', 'Viking', 'Aboriginal', 'Inuit', 'Slavic', 'Persian', 'Maori',
      ]),
      timePeriod: defineCategory('Time Period', 3, [
        'Dying Earth', 'Stone Age', 'Space Age', 'Medieval', 'Renaissance', 'Industrial Revolution', 'Victorian Era', 'Ancient Times', 'Future', 'Prehistoric',
        'Modern Day', 'Post-Apocalyptic', 'Golden Age', 'Bronze Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes',
      ]),
      style: defineCategory('Style', 3, [
        'Vintage', 'Formal', 'Military', 'Gothic', 'Rustic', 'Futuristic', 'Cybernetic', 'Organic', 'Minimalist', 'Baroque',
        'Industrial', 'Fantasy', 'Sci-Fi', 'Steampunk', 'Post-Apocalyptic', 'Surreal', 'Whimsical', 'Dark', 'Light', 'Abstract',
      ]),
      season: defineCategory('Season', 3, [
        'Winter', 'Spring', 'Summer', 'Fall', 'Rainy', 'Dry', 'Stormy', 'Drought', 'Snowy'
      ]),
      timeOfDay: defineCategory('Time Of Day', 3, [
        'Morning', 'Noon', 'Dusk', 'Night', 'Twilight', 'Dawn', 'Midnight'
      ]),
      climate: defineCategory('Climate', 3, [
        'Hot', 'Cold', 'Temperate', 'Humid', 'Arid', 'Windy', 'Stormy', 'Tropical', 'Frigid', 'Warm'
      ]),
    },

    characterTags: {
      race: defineCategory('Race/Species', 601, [
        'Human', 'Demon', 'Alien', 'Elf', 'Dwarf', 'Orc', 'Robot', 'Vampire', 'Werewolf', 'Angel',
        'Ghost', 'Goblin', 'Troll', 'Fairy', 'Dragon', 'Cyborg', 'Mermaid', 'Zombie', 'Shapeshifter', 'Giant', 'Humanoid'
      ]),
      bodyType: defineCategory('Body Type', 1, [
        'Slim', 'Muscular', 'Fat', 'Tall', 'Short', 'Lanky', 'Stocky',
        'Ethereal', 'Mechanical', 'Animalistic', 'Monstrous', 'Elegant', 'Bulky', 'Fragile', 'Agile', 'Powerful', 'Delicate',
      ]),
      occupation: defineCategory('Occupation', 603, [
        'Prisoner', 'Android', 'Priest', 'Knight', 'Scientist', 'Artist', 'Merchant', 'Farmer', 'Soldier', 'Thief',
        'Wizard', 'Engineer', 'Doctor', 'Pilot', 'Detective', 'Explorer', 'Chef', 'Musician', 'Blacksmith', 'Scholar',
      ]),
      personality: defineCategory('Personality', 2, [
        'Brave', 'Cowardly', 'Cunning', 'Naive', 'Wise', 'Foolish', 'Kind', 'Cruel', 'Loyal', 'Betrayer',
        'Optimistic', 'Pessimistic', 'Charismatic', 'Shy', 'Arrogant', 'Humble', 'Ambitious', 'Lazy', 'Curious', 'Stoic',
      ]),
      state: defineCategory('State', 3, [
        'Injured', 'Healthy', 'Tired', 'Energized', 'Happy', 'Sad', 'Angry', 'Confused', 'Determined', 'Scared',
        'Calm', 'Nervous', 'Excited', 'Bored', 'Focused', 'Distracted', 'Hopeful', 'Despairing', 'Lonely', 'Content',
      ]),
      action: defineCategory('Action', 999, [
        'Walking', 'Running', 'Fighting', 'Meditating', 'Dancing', 'Singing', 'Reading', 'Writing', 'Crafting', 'Exploring',
        'Flying', 'Swimming', 'Climbing', 'Sleeping', 'Eating', 'Laughing', 'Crying', 'Thinking', 'Observing', 'Creating',
      ]),
      role: defineCategory('Role', 602, [
        'Hero', 'Villain', 'Antihero', 'Sidekick', 'Mentor', 'Rogue', 'Soldier', 'King', 'Queen', 'Nomad', 
        'Outcast', 'Inventor', 'Mercenary', 'Scholar', 'Scavenger',
        'Diplomat', 'Pilgrim', 'Engineer', 'Spy', 'Survivor',
        'Guardian', 'Smuggler', 'Healer', 'Prophet', 'Entertainer',
        'Rebel', 'Aristocrat', 'Drifter', 'Artisan', 'Experiment'
      ]),
      emotion: defineCategory('Emotion', 4, [
        'Fearful', 'Joyful', 'Angry', 'Sad', 'Hopeful', 'Lonely', 'Confident', 'Anxious', 'Desperate', 'Mischievous'
      ]),
      age: defineCategory('Age', 5, [
        'Young', 'Old', 'Middle-aged', 'Teen', 'Child', 'Elder'
      ]),
      appearance: defineCategory('Appearance', 6, [
        'Bald', 'Bearded', 'Scarred', 'Elegant', 'Dirty', 'Clean', 'Wounded', 'Beautiful', 'Handsome', 'Attractive',
        'Scarred', 'Tattooed', 'Augmented', 'Weathered', 'Androgynous',
        'Regal', 'Ragged', 'Armored', 'Luminous', 'Masked',
        'Bionic', 'Veiled', 'Tattooed', 'Pierced', 'Distinctive',
        'Fashionable', 'Practical', 'Ceremonial', 'Improvised', 'Uniformed'
      ]),
    },

    propTags: {
      functionality: defineCategory('Functionality', 99, [
        'Speed', 'Toxic', 'Destruction', 'Healing', 'Protection', 'Communication', 'Transportation', 'Storage', 'Illumination', 'Decoration',
        'Weaponry', 'Tool', 'Entertainment', 'Surveillance', 'Navigation', 'Energy Source', 'Time Manipulation', 'Illusion', 'Transformation', 'Defense', 
        'Communication', 'Defense', 'Navigation', 'Energy', 'Transport',
        'Medical', 'Entertainment', 'Construction', 'Disguise', 'Measurement',
        'Containment', 'Illumination', 'Survival', 'Artistic', 'Hacking',
        'Farming', 'Timekeeping', 'Tracking', 'Cleaning', 'Recording'
      ]),
      type: defineCategory('Type', 97, [
        'Ornament', 'Weapon', 'Foliage', 'Furniture', 'Vehicle', 'Clothing', 'Jewelry', 'Book', 'Artifact', 'Machine',
        'Food', 'Drink', 'Container', 'Instrument', 'Gadget', 'Relic', 'Toy', 'Tool', 'Device', 'Accessory',
      ]),
      material: defineCategory('Material', 98, [
        'Wood', 'Metal', 'Stone', 'Glass', 'Fabric', 'Plastic', 'Crystal', 'Bone', 'Leather', 'Ceramic',
        'Paper', 'Rubber', 'Gold', 'Silver', 'Bronze', 'Iron', 'Steel', 'Obsidian', 'Marble', 'Silk',
        'Carbon Fiber', 'Bamboo', 'Recycled', 'Bioplastic', 'Ceramic',
        'Living Wood', 'Smart Glass', 'Nanoweave', 'Volcanic Rock', 'Meteoric Iron',
        'Compressed Paper', 'Liquid Crystal', 'Fossilized', 'Organic Composite', 
        'Magnetic', 'Glow-in-Dark', 'Self-healing', 'Radioactive', 'Translucent'
      ]),
      size: defineCategory('Size', 1, [
        'Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Enormous', 'Portable', 'Handheld', 'Wearable', 'Massive',
        'Microscopic', 'Compact', 'Oversized', 'Lightweight', 'Heavy', 'Bulky', 'Slim', 'Delicate', 'Sturdy', 'Fragile',
      ]),
      era: defineCategory('Era', 3, [
        'Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Modern', 'Futuristic', 'Prehistoric', 'Post-Apocalyptic', 'Space Age', 'Victorian',
        'Stone Age', 'Bronze Age', 'Golden Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes', 'Dying Earth',
      ]),
      condition: defineCategory('Condition', 2, [
        'Broken', 'New', 'Worn', 'Polished', 'Rusted', 'Damaged', 'Shiny', 'Weathered'
      ]),
      style: defineCategory('Style', 4, [
        'Gothic', 'Vintage', 'Futuristic', 'Minimalist', 'Ornate', 'Industrial', 'Baroque', 'Art Deco', 'Steampunk', 'Cyberpunk'
      ]),
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
  
  //   currentTypeTitle: (state) => {
  //     return state.availableTypes.find(t => t.value === state.selectedType)?.title || ''
  //   }
  // },
  },
});