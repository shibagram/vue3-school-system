<script lang="ts">
  export default {
    name: 'Sidebar',
  };
</script>

<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  ['mdi-view-dashboard', 'Inbox'],
  ['mdi-account-box', 'Send'],
  ['mdi-gavel', 'Trash'],
])
</script>

<template>
  <v-navigation-drawer
    class="bg-deep-purple"
    theme="dark"
    permanent
  >
    <v-list color="transparent">
      <!-- todo: アイコンが表示されない原因とtoが設定できない原因を調査 -->
      <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
      >
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>



