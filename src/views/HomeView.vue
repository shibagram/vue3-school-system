<script lang="ts">
  export default {
    name: 'HomeView',
  };
</script>

<script setup lang="ts">
import Sidebar from "../components/layouts/Sidebar.vue";
import Chat from "../components/Chat.vue";
import { ref } from "vue";

const cards = ref(['Today', 'Yesterday']);
const drawer = ref(null);
const links = ref([
  ['mdi-inbox-arrow-down', 'Inbox'],
  ['mdi-send', 'Send'],
  ['mdi-delete', 'Trash'],
  ['mdi-alert-octagon', 'Spam'],
])
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <v-app>
    <Sidebar/>
    <v-main>
      <Chat/>
    </v-main>
  </v-app>
</template>
