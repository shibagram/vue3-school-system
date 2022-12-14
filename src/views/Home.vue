<script lang="ts">
  export default {
    name: 'Home',
  };
</script>

<script setup lang="ts">
import Sidebar from "../components/layouts/Sidebar.vue";
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css;
</script>

<style>
</style>

<template>
  <v-app>
    <Sidebar/>
    <v-main>
      <video-player
        src="/your-path/video.mp4"
        poster="/your-path/poster.jpg"
        controls
        :loop="true"
        :volume="0.6"
      />
    </v-main>
  </v-app>
</template>
