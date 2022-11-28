<script lang="ts">
  export default {
    name: 'Signup',
  };
</script>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const valid = ref(true);

const emailRules = [
  v => !!v || 'メールアドレスは必須です。',
  v => /.+@.+\..+/.test(v) || 'メールアドレスの形式が適切でありません。',
]
const passwordRules = [
  v => !!v || 'パスワードは必須です。',
  v => v.length >= 8 || 'パスワードは8文字以上に設定してください。',
];

const signup: any = async () => {
  try {
    // todo: ここでエラー出る
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
    );
    const user = userCredential.user
    console.log("user", userCredential)
  } catch(error) {
    console.log(error)
  }
};
</script>

<style scoped>
.signup-form {
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
.login-btn {
    margin-bottom: 30px;
}
</style>

<template>
  <v-app>
    <v-card class="signup-form">
      <v-card-title class="title">Signup</v-card-title>
      <v-card-subtitle class="subtitle">ユーザー情報を入力して下さい。</v-card-subtitle>
      <v-btn to="login" color="light-blue" class="login-btn">ログインはこちら</v-btn>
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
          @click="signup"
          color="success"
          class="mr-4"
          :disabled="!valid"
        >
          登録
        </v-btn>
      </v-form>
    </v-card>
  </v-app>
</template>