import  Login  from "./Login.vue";
import { describe, expect, it } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("Login.vue", () => {
    // サンプルのユーザーでログインできるかどうかのテスト
    it("I can login", async () => {
      const wrapper = shallowMount(Login)
      console.log(wrapper)
    });
})