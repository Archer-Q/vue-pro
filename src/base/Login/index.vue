<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
      <h3>"智缘"企业信息化支撑平台</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" clearable placeholder="请输入用户名">
          <svg-icon slot="prefix" iconClass="user"></svg-icon>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" show-password clearable placeholder="请输入密码" @keyup.enter.native='login'>
          <svg-icon slot="prefix" iconClass="password"></svg-icon>
        </el-input>
      </el-form-item>
      <div class="count">
        <el-checkbox v-model="loginForm.rememberMe">记住账号</el-checkbox>
        <router-link :to="{name:'register'}" >立即注册</router-link>
      </div>
      <el-form-item>
        <el-button size="small" type="primary" style="width:100%;" @click="login(loginForm)">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Login } from "@/api/api";
export default {
  name: "LoginContent",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
    }
  },
  mounted() {
  },
  methods: {
    login(val) {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  width: 100%;
  // background-image: url("../../../public/images/login-bg.jpg");
  // background-size: contain;
  background: #fff;
  // &::before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100vh;
  //   z-index: 1;
  //   background-color: rgba($color: #000000, $alpha: 0.5);
  // }
}
h3 {
  margin: 0px auto 20px auto;
  font-size: 16px;
  font-weight: 500;
  color: #555;
}

.login-form {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  border: 1px solid #EBEEF5;
  border-radius: 6px;
  background: #ffffff;
  width: 320px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .count {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .el-checkbox__label {
      font-size: 13px;
    }
    a {
      color: #8590a6;
      text-decoration: none;
      font-size: 13px;
      &:hover {
        color: grey;
      }
    }
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
</style>
<style lang="scss">
  .login .el-input__prefix {
    left: 10px;
  }
</style>