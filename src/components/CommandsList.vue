<script setup lang="ts">
import { ref } from "vue";

const commands = [
  {
    name: "help",
    description: "Display more information about the bot!",
    usage: "help <help>",
    example: "help music, help playlist",
    category: "Info",
  },
  {
    name: "ping",
    description: "Replies with the ping of the bot!",
    usage: "help",
    example: "ping",
    category: "Info",
  },
  {
    name: "info",
    description: "Info about the current song!",
    usage: "info",
    example: "info",
    category: "Music",
  },
  {
    name: "pause",
    description: "Pause the music!",
    usage: "info",
    example: "info",
    category: "Music",
  },
  {
    name: "play",
    description: "Plays a song from YouTube or Spotify.",
    usage: "play <song>",
    example: "play https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Music",
  },
  {
    name: "play-playlist",
    description: "Play a playlist in the voice channel!",
    usage: "play-playlist <playlist-name>",
    example: "play-playlist my-playlist",
    category: "Music",
  },
  {
    name: "previous",
    description: "Go back to the previous track!",
    usage: "previous",
    example: "previous",
    category: "Music",
  },
  {
    name: "queue",
    description: "See the queue of the bot!",
    usage: "queue",
    example: "queue",
    category: "Music",
  },
  {
    name: "quit",
    description: "Disconnect the bot of music!",
    usage: "quit",
    example: "quit",
    category: "Music",
  },
  {
    name: "resume",
    description: "Resume the music!",
    usage: "resume",
    example: "resume",
    category: "Music",
  },
  {
    name: "skip",
    description: "Skip the current song!",
    usage: "skip",
    example: "skip",
    category: "Music",
  },
  {
    name: "playlist add",
    description: "Add a new song in your playlist.",
    usage: "playlist add <song>",
    example: "playlist add Enemy",
    category: "Playlist",
  },
  {
    name: "playlist create",
    description: "Create a new playlist.",
    usage: "playlist create <playlist-name>",
    example: "playlist create vilbot-playlist",
    category: "Playlist",
  },
  {
    name: "playlist delete",
    description: "Delete a specific playlist.",
    usage: "playlist delete <playlist-name>",
    example: "playlist delete vilbot-playlist",
    category: "Playlist",
  },
  {
    name: "playlist list",
    description: "List your saved playlists.",
    usage: "playlist list",
    example: "playlist list",
    category: "Playlist",
  },
  {
    name: "playlist remove",
    description: "Remove a song in your playlist.",
    usage: "playlist remove <song-id>",
    example: "playlist remove 1",
    category: "Playlist",
  },

  {
    name: "playlist show",
    description: "Display the songs in a playlist.",
    usage: "playlist show <playlist-name>",
    example: "playlist show vilbot-playlist",
    category: "Playlist",
  },
  {
    name: "clear",
    description: "Remove messages from the bot on this channel!",
    usage: "clear",
    example: "clear",
    category: "Utils",
  },
];

const commandCategories = Array.from(
  new Set(commands.map((command) => command.category))
);

const commandsFilter = ref(commands);
const search = ref("");
const currentCategory = ref("All");

const filterCommands = () => {
  commandsFilter.value = commands.filter((command) =>
    command.name.toLowerCase().includes(search.value.toLowerCase())
  );
};

const filterCategory = (category: string) => {
  if (category === "All") {
    commandsFilter.value = commands;
    currentCategory.value = category;
    return;
  }

  commandsFilter.value = commands.filter(
    (command) => command.category === category
  );
  currentCategory.value = category;
};
</script>

<template>
  <ul class="flex border-b border-white/10 mb-4">
    <li
      :class="{
        'border-transparent text-zinc-400': currentCategory !== 'All',
        'border-fuchsia-400 text-fuchsia-400 font-semibold':
          currentCategory === 'All',
      }"
      class="py-2 px-4 border-b-2 transition-colors duration-300"
    >
      <button
        @click="filterCategory('All')"
        class="text-lg group-hover:text-fuchsia-400"
      >
        All
      </button>
    </li>
    <li
      v-for="category in commandCategories"
      :key="category"
      :class="{
        'border-transparent text-zinc-400': currentCategory !== category,
        'border-fuchsia-400 text-fuchsia-400 font-semibold':
          currentCategory === category,
      }"
      class="group py-2 px-4 border-b-2 transition-colors duration-300 hover:border-fuchsia-400"
    >
      <button @click="filterCategory(category)" class="text-lg font-semibold">
        {{ category }}
      </button>
    </li>
  </ul>

  <div class="relative grow mb-4">
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="absolute top-1/2 -translate-y-1/2 left-3 text-white/10 pointer-events-none"
      role="img"
      aria-label="Magnifying Glass"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      ></path>
    </svg>

    <input
      v-model="search"
      @input="filterCommands"
      type="text"
      class="bg-transparent w-full rounded border border-white/10 pl-12 pr-4 py-3 text-white focus:outline-none focus:border-fuchsia-400"
      placeholder="Search commands..."
    />
  </div>
  <div
    v-for="command in commandsFilter"
    :key="command.name"
    class="flex items-center gap-6 text-white px-8 py-3 rounded-lg border border-white/5 bg-zinc-400/5 transition-all duration-300 hover:border-fuchsia-400 hover:-translate-y-1 group mb-4"
  >
    <span
      class="p-3 bg-white/5 rounded-lg group-hover:bg-fuchsia-400/10 group-hover:text-fuchsia-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        role="img"
        aria-label="Slash icon"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M17 5l-10 14"></path>
      </svg>
    </span>
    <div>
      <h3 class="text-white text-lg font-semibold mb-2">
        {{ command.name }}
      </h3>
      <p class="text-gray-300 text-sm mb-2">
        {{ command.description }}
      </p>
    </div>
  </div>
</template>
