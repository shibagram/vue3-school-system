<script lang="ts">
export default {
  name: 'CurriculumsImageList',
};
</script>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const pathList = [
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
  "/curriculums/vue",
]

const gotoSpecificCurriculum = (path: string) => {
  router.push(path);
}

</script>

<template>
  <v-row>
    <v-col
      v-for="path in pathList"
      :key="path"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        @click="gotoSpecificCurriculum(path)"
        :src="`https://picsum.photos/500/300?image=${1}`"
        :lazy-src="`https://picsum.photos/10/6?image=${1}`"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            >
            </v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>