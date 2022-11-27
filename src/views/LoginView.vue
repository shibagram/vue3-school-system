<script lang="ts">
  export default {
    name: 'LoginView',
  };
</script>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped>
.login-form {
  width: 50%;
  margin: 150px auto;
}

.subtitle {
  margin: 10px 0 30px;
  text-align: left;
}
</style>

<template>
  <v-app>
    <v-card class="login-form">
      <v-card-title class="title">Login</v-card-title>
      <v-card-subtitle class="subtitle">ユーザー情報を入力して下さい。</v-card-subtitle>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
        <v-btn
          color="success"
          class="mr-4"
          @click="validate"
        >
          送信
        </v-btn>
      </v-form>
    </v-card>
  </v-app>
</template>
