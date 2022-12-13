<script lang="ts">
  export default {
    name: 'VueCurriculumTable',
  };
</script>

<script setup lang="ts">
import Sidebar from "../../components/layouts/Sidebar.vue";
// import { ref } from "vue";

const curriculums = [
  "始めに",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
  "環境構築",
]

</script>

<style>
</style>

<template>
  <v-app>
    <Sidebar/>
      <v-main>
        <v-table>
          <thead>
            <tr>
              <th>
                カリキュラム
              </th>
              <th>
                内容
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(curriculum, i) in curriculums"
              :key="curriculum"
            >
              <td>{{ `カリキュラム${i}` }}</td>
              <td>{{ curriculum }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-main>
  </v-app>
</template>