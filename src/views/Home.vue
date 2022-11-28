<script lang="ts">
  export default {
    name: 'HomeView',
  };
</script>

<script setup lang="ts">
import Sidebar from "../components/layouts/Sidebar.vue";
import Chat from "../components/Chat.vue";

</script>

<style>
</style>

<template>
  <v-app>
    <Sidebar/>
    <v-main>
      <Chat/>
    </v-main>
  </v-app>
</template>
