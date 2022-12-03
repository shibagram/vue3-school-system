<script lang="ts">
  export default {
    name: 'Sidebar',
  };
</script>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from 'vue-router'

const router = useRouter();
const links = ref([
  ['mdi-home', 'Inbox'],
  ['mdi-account-box', 'Send'],
  ['mdi-gavel', 'Trash'],
])

const logout = async () => {
  try {
    await signOut(auth);
    localStorage.successMessage = "ログアウトに成功しました。"
    router.push("/login")
    console.log("logout")
  } catch (error) {
    console.log(error);
  }
}
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
        <v-btn @click="logout" block>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>



