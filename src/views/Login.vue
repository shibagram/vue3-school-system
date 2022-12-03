<script lang="ts">
  export default {
    name: 'LoginView',
  };
</script>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

const router = useRouter();
const email = ref("");
const password = ref("");
const valid = ref(true);
const successMessage = ref("");
const errorMessage = ref("");

const emailRules = [
  v => !!v || 'メールアドレスは必須です。',
  v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が適切でありません。',
]
const passwordRules = [
  v => !!v || 'パスワードは必須です。',
  v => v.length >= 8 || 'パスワードは8文字以上に設定してください。',
];

if (localStorage.successMessage) {
  successMessage.value = localStorage.successMessage;
  localStorage.successMessage = "";
}

const signin: any = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push ("/");
    console.log("signin");
  } catch (error) {
    console.log(error);
    errorMessage.value = "ユーザーのログインに失敗しました。"
  };
}
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
.email-text-field {
  margin-bottom: 5px;
}
.password-text-field {
  margin-bottom: 5px;
}

.signup-btn {
  margin-bottom: 30px;
}

.success-message {
  margin-top: 30px;
}
.error-message {
  margin-top: 30px;
}
</style>

<template>
  <v-app>
    <v-card class="login-form">
      <v-card-title class="title">Login</v-card-title>
      <v-card-subtitle class="subtitle">ユーザー情報を入力して下さい。</v-card-subtitle>
      <v-btn to="signup" color="light-blue" class="signup-btn">新規登録はこちら</v-btn>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          :rules="emailRules"
          type="text"
          label="E-mail"
          class="email-text-field"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          label="Password"
          class="password-text-field"
          required
        ></v-text-field>
        <v-btn
          @click="signin(auth, email, password)"
          color="success"
          class="mr-4"
          :disabled="!valid"
        >
          ログイン
        </v-btn>

        <v-alert
          v-if="successMessage"
          density="comfortable"
          type="success"
          variant="tonal"
          class="success-message"
        >
          {{ successMessage }}
        </v-alert>
        <v-alert
          v-if="errorMessage"
          type="error"
          class="error-message"
        >
          {{ errorMessage }}
        </v-alert>
      </v-form>
    </v-card>
  </v-app>
</template>
