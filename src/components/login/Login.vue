<template>
    <div id="loginBox">
      bbs-manager
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="LoingName">
          <el-input v-model="loginForm.loginName" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button style="margin: auto" type="primary" @click="onSubmit">SIGN IN<i class="el-icon-check"></i></el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{

            loginForm:{
              loginName:'',
              password:''
            }

          }
      },

      methods:{
          onSubmit(){
            this.$router.replace('/home')
          }
      }
    }
</script>

<style scoped>
  #loginBox{
    width: 400px;
    height: 200px;
    border: black 1px solid;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -200px;
    background-color: lavender;
  }
</style>
