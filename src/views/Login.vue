<template>
  <div class="login">
    <div class="content">
      <a-form
          :label-col="{ span: 4 }"
          :model="formState"
          :wrapper-col="{ span: 18 }"
          autocomplete="off"
          name="basic"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <a-form-item
            :rules="[{ required: true, message: '请输入账号!' }]"
            label="账号"
            name="loginName"
        >
          <a-input v-model:value="formState.loginName"/>
        </a-form-item>

        <a-form-item
            :rules="[{ required: true, message: '请输入密码!' }]"
            label="密码"
            name="password"
        >
          <a-input-password v-model:value="formState.password"/>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }" name="remember">
          <a-checkbox v-model:checked="formState.remember">
            记住我
          </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button html-type="submit" type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </div>

  </div>
</template>

<script setup>
import {reactive} from "vue";
import axios from "axios";


const formState = reactive({
  loginName: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log(values)
  // const data = $login(values);
  axios.post({})
  console.log("Success:", data);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, rgb(5, 57, 79), rgb(200, 235, 250));
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    padding: 20px;
    width: 500px;
    border: 1px solid #ffff;
    border-radius: 6px;
  }

}
</style>
