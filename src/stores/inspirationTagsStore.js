import { defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', {
  state: () => ({
    environmentTags: {
      location: [
        'Jungle', 'Island', 'City', 'Desert', 'Arctic', 'Ocean', 'Forest', 'Mountain', 'Cave', 'Swamp',
        'Village', 'Metropolis', 'Ruins', 'Space Station', 'Underwater City', 'Farmland', 'Canyon', 'Volcano', 'Graveyard', 'Castle',
        'Jungle', 'Space Station', 'Desert Oasis', 'Underground Bunker', 'Floating Market',
        'Abandoned Factory', 'Mountain Peak', 'Cyberpunk Alley', 'Medieval Village', 'Tropical Beach',
        'Haunted Mansion', 'Futuristic Farm', 'Ancient Library', 'Crystal Cave', 'War Zone',
        'Frozen Lake', 'Nomad Camp', 'Vertical Slums', 'Radioactive Crater', 'Sky Port'
      ],
      emotion: [
        'Fearful', 'Sad', 'Sinister', 'Joyful', 'Mysterious', 'Peaceful', 'Tense', 'Melancholic', 'Hopeful', 'Eerie',
        'Nostalgic', 'Romantic', 'Chaotic', 'Lonely', 'Oppressive', 'Serene', 'Surreal', 'Whimsical', 'Dark', 'Vibrant',
        'Isolated', 'Hopeful', 'Foreboding', 'Nostalgic', 'Mysterious',
        'Tranquil', 'Chaotic', 'Oppressive', 'Inviting', 'Unnerving',
        'Majestic', 'Claustrophobic', 'Eerie', 'Lively', 'Desolate',
        'Sacred', 'Sinister', 'Surreal', 'Bleak', 'Uplifting'
      ],
      genre: [
        'Western', 'Crime', 'Comedy', 'Sci-Fi', 'Fantasy', 'Horror', 'Historical', 'Post-Apocalyptic', 'Cyberpunk', 'Steampunk',
        'Noir', 'Adventure', 'Mystery', 'Romance', 'Thriller', 'Surrealism', 'Dystopian', 'Fairy Tale', 'War', 'Supernatural',
      ],
      architecture: [
        'Nordic', 'Postmodern', 'Art Deco', 'Gothic', 'Brutalist', 'Futuristic', 'Victorian', 'Baroque', 'Minimalist', 'Classical',
        'Industrial', 'Rustic', 'Organic', 'Ancient', 'Medieval', 'Colonial', 'Islamic', 'Japanese', 'Byzantine', 'Neoclassical',
        'Brutalist', 'Art Nouveau', 'Steampunk', 'Bamboo', 'Underground',
        'Floating', 'Cantilevered', 'Ruined', 'Prefab', 'Organic',
        'Modular', 'Retrofuturistic', 'Geodesic', 'Arcology', 'Cave-carved',
        'Crystal', 'Nomadic', 'Bio-dome', 'Hive-like', 'Converted'
      ],
      colorScheme: [
        'Limited Palette', 'Achromatic', 'One Color Dominant', 'Pastel', 'Monochromatic', 'Vibrant', 'Muted', 'Warm', 'Cool', 'High Contrast',
        'Earthy Tones', 'Neon', 'Gradient', 'Complementary Colors', 'Analogous Colors', 'Triadic Colors', 'Dark and Moody', 'Light and Airy', 'Sunset Colors', 'Winter Palette',
        'Pastel', 'Neon', 'Monochrome', 'Earth Tones', 'Metallic',
        'High Contrast', 'Muted', 'Gradient', 'Complementary', 'Warm/Cool',
        'Primary Colors', 'Dark Academia', 'Cyberpunk', 'Sunset', 'Aquatic',
        'Forest Palette', 'Desert Hues', 'Industrial Greys', 'Vibrant Pop', 'Burnt'
      ],
      ambience: [
        'Dreary', 'Uninhabitable', 'Golden Hour', 'Foggy', 'Rainy', 'Sunny', 'Stormy', 'Twilight', 'Moonlit', 'Haunted',
        'Lively', 'Quiet', 'Busy', 'Mystical', 'Ethereal', 'Claustrophobic', 'Expansive', 'Cozy', 'Alien', 'Dreamlike',
      ],
      scale: [
        'Human', 'Planet', 'Galactic', 'Microscopic', 'Room-Sized', 'City-Sized', 'Continent-Sized', 'Solar System', 'Universe', 'Pocket Dimension',
        'Infinite', 'Tiny', 'Massive', 'Intimate', 'Monumental', 'Vast', 'Compact', 'Overwhelming', 'Minimal', 'Grand',
      ],
      culture: [
        'Cree', 'Greek', 'Indonesian', 'Egyptian', 'Norse', 'Japanese', 'Aztec', 'Mayan', 'Celtic', 'Indian',
        'Chinese', 'African', 'Polynesian', 'Roman', 'Viking', 'Aboriginal', 'Inuit', 'Slavic', 'Persian', 'Maori',
      ],
      timePeriod: [
        'Dying Earth', 'Stone Age', 'Space Age', 'Medieval', 'Renaissance', 'Industrial Revolution', 'Victorian Era', 'Ancient Times', 'Future', 'Prehistoric',
        'Modern Day', 'Post-Apocalyptic', 'Golden Age', 'Bronze Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes',
      ],
      style: [
        'Vintage', 'Formal', 'Military', 'Gothic', 'Rustic', 'Futuristic', 'Cybernetic', 'Organic', 'Minimalist', 'Baroque',
        'Industrial', 'Fantasy', 'Sci-Fi', 'Steampunk', 'Post-Apocalyptic', 'Surreal', 'Whimsical', 'Dark', 'Light', 'Abstract',
      ],
      season: [
        'Winter', 'Spring', 'Summer', 'Fall', 'Rainy', 'Dry', 'Stormy', 'Drought', 'Snowy'
      ],
      timeOfDay: [
        'Morning', 'Noon', 'Dusk', 'Night', 'Twilight', 'Dawn', 'Midnight'
      ],
      climate: [
        'Hot', 'Cold', 'Temperate', 'Humid', 'Arid', 'Windy', 'Stormy', 'Tropical', 'Frigid', 'Warm'
      ],
    },

    characterTags: {
      race: [
        'Human', 'Demon', 'Alien', 'Elf', 'Dwarf', 'Orc', 'Robot', 'Vampire', 'Werewolf', 'Angel',
        'Ghost', 'Goblin', 'Troll', 'Fairy', 'Dragon', 'Cyborg', 'Mermaid', 'Zombie', 'Shapeshifter', 'Giant',
      ],
      bodyType: [
        'Humanoid', 'Orc', 'Robot', 'Slim', 'Muscular', 'Fat', 'Tall', 'Short', 'Lanky', 'Stocky',
        'Ethereal', 'Mechanical', 'Animalistic', 'Monstrous', 'Elegant', 'Bulky', 'Fragile', 'Agile', 'Powerful', 'Delicate',
      ],
      occupation: [
        'Prisoner', 'Android', 'Priest', 'Knight', 'Scientist', 'Artist', 'Merchant', 'Farmer', 'Soldier', 'Thief',
        'Wizard', 'Engineer', 'Doctor', 'Pilot', 'Detective', 'Explorer', 'Chef', 'Musician', 'Blacksmith', 'Scholar',
      ],
      personality: [
        'Brave', 'Cowardly', 'Cunning', 'Naive', 'Wise', 'Foolish', 'Kind', 'Cruel', 'Loyal', 'Betrayer',
        'Optimistic', 'Pessimistic', 'Charismatic', 'Shy', 'Arrogant', 'Humble', 'Ambitious', 'Lazy', 'Curious', 'Stoic',
      ],
      state: [
        'Injured', 'Healthy', 'Tired', 'Energized', 'Happy', 'Sad', 'Angry', 'Confused', 'Determined', 'Scared',
        'Calm', 'Nervous', 'Excited', 'Bored', 'Focused', 'Distracted', 'Hopeful', 'Despairing', 'Lonely', 'Content',
      ],
      action: [
        'Walking', 'Running', 'Fighting', 'Meditating', 'Dancing', 'Singing', 'Reading', 'Writing', 'Crafting', 'Exploring',
        'Flying', 'Swimming', 'Climbing', 'Sleeping', 'Eating', 'Laughing', 'Crying', 'Thinking', 'Observing', 'Creating',
      ],
      role: [
        'Hero', 'Villain', 'Antihero', 'Sidekick', 'Mentor', 'Rogue', 'Soldier', 'King', 'Queen', 'Nomad', 
        'Outcast', 'Inventor', 'Mercenary', 'Scholar', 'Scavenger',
        'Diplomat', 'Pilgrim', 'Engineer', 'Spy', 'Survivor',
        'Guardian', 'Smuggler', 'Healer', 'Prophet', 'Entertainer',
        'Rebel', 'Aristocrat', 'Drifter', 'Artisan', 'Experiment'
      ],
      emotion: [
        'Fearful', 'Joyful', 'Angry', 'Sad', 'Hopeful', 'Lonely', 'Confident', 'Anxious', 'Desperate', 'Mischievous'
      ],
      age: [
        'Young', 'Old', 'Middle-aged', 'Teen', 'Child', 'Elder'
      ],
      appearance: [
        'Bald', 'Bearded', 'Scarred', 'Elegant', 'Dirty', 'Clean', 'Wounded', 'Beautiful', 'Handsome', 'Attractive',
        'Scarred', 'Tattooed', 'Augmented', 'Weathered', 'Androgynous',
        'Regal', 'Ragged', 'Armored', 'Luminous', 'Masked',
        'Bionic', 'Veiled', 'Tattooed', 'Pierced', 'Distinctive',
        'Fashionable', 'Practical', 'Ceremonial', 'Improvised', 'Uniformed'
      ],
      clothingStyle: [
        'Casual', 'Formal', 'Armor', 'Tattered', 'Elegant', 'Practical', 'Military', 'Traditional', 'Futuristic'
      ],
    },

    propTags: {
      functionality: [
        'Speed', 'Toxic', 'Destruction', 'Healing', 'Protection', 'Communication', 'Transportation', 'Storage', 'Illumination', 'Decoration',
        'Weaponry', 'Tool', 'Entertainment', 'Surveillance', 'Navigation', 'Energy Source', 'Time Manipulation', 'Illusion', 'Transformation', 'Defense', 
        'Communication', 'Defense', 'Navigation', 'Energy', 'Transport',
        'Medical', 'Entertainment', 'Construction', 'Disguise', 'Measurement',
        'Containment', 'Illumination', 'Survival', 'Artistic', 'Hacking',
        'Farming', 'Timekeeping', 'Tracking', 'Cleaning', 'Recording'
      ],
      type: [
        'Ornament', 'Weapon', 'Foliage', 'Furniture', 'Vehicle', 'Clothing', 'Jewelry', 'Book', 'Artifact', 'Machine',
        'Food', 'Drink', 'Container', 'Instrument', 'Gadget', 'Relic', 'Toy', 'Tool', 'Device', 'Accessory',
      ],
      material: [
        'Wood', 'Metal', 'Stone', 'Glass', 'Fabric', 'Plastic', 'Crystal', 'Bone', 'Leather', 'Ceramic',
        'Paper', 'Rubber', 'Gold', 'Silver', 'Bronze', 'Iron', 'Steel', 'Obsidian', 'Marble', 'Silk',
        'Carbon Fiber', 'Bamboo', 'Recycled', 'Bioplastic', 'Ceramic',
        'Living Wood', 'Smart Glass', 'Nanoweave', 'Volcanic Rock', 'Meteoric Iron',
        'Compressed Paper', 'Liquid Crystal', 'Fossilized', 'Organic Composite', 
        'Magnetic', 'Glow-in-Dark', 'Self-healing', 'Radioactive', 'Translucent'
      ],
      size: [
        'Tiny', 'Small', 'Medium', 'Large', 'Huge', 'Enormous', 'Portable', 'Handheld', 'Wearable', 'Massive',
        'Microscopic', 'Compact', 'Oversized', 'Lightweight', 'Heavy', 'Bulky', 'Slim', 'Delicate', 'Sturdy', 'Fragile',
      ],
      era: [
        'Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Modern', 'Futuristic', 'Prehistoric', 'Post-Apocalyptic', 'Space Age', 'Victorian',
        'Stone Age', 'Bronze Age', 'Golden Age', 'Information Age', 'Age of Exploration', 'Age of Sail', 'Age of Machines', 'Age of Magic', 'Age of Heroes', 'Dying Earth',
      ],
      condition: [
        'Broken', 'New', 'Worn', 'Polished', 'Rusted', 'Damaged', 'Shiny', 'Weathered'
      ],
      style: [
        'Gothic', 'Vintage', 'Futuristic', 'Minimalist', 'Ornate', 'Industrial', 'Baroque', 'Art Deco', 'Steampunk', 'Cyberpunk'
      ],
    },
  }),

});