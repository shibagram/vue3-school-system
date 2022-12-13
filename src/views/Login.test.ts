import  Login  from "./Login.vue";
import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

describe("Login.vue", () => {
    // サンプルのユーザーでログインできるかどうかのテスト
    it("I can login", async () => {
      const wrapper = mount(Login)

      console.log("logを表示")
      console.log(wrapper)
      
      // await wrapper.find(".submit").trigger("click");

      // エラーメッセージが存在しないことを確認
      // expect(wrapper.find(".error-message").text).toBeFalsy;
    });
})