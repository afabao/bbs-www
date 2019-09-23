<template>
  <div>
    <h1>Welcome</h1>
    <h2>
      <el-link type="primary" style="font-size: 20px" :underline="false" @click="toLogin">Click me to login!</el-link>
    </h2>
  </div>
</template>

<script>
    export default {
      methods:{
        toLogin(){
          this.$router.replace('/login')
        }
      }
    }
</script>

<style scoped>

</style>
