<script lang="ts">
  export default {
    name: 'Curriculums',
  };
</script>

<script setup lang="ts">
import Sidebar from "../../components/layouts/Sidebar.vue";
import CurriculumImageList from "../../components/CurriculumImageList.vue";

</script>

<style>
</style>

<template>
  <v-app>
    <Sidebar/>
    <v-main>
      <CurriculumImageList/>
    </v-main>
  </v-app>
</template>