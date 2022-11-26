<script lang="ts">
  export default {
    name: 'App',
  };
</script>

<script setup lang="ts">
import Chat from "./components/Chat";
</script>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
