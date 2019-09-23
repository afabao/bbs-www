<template>
    <div style="margin-top: 0px">
      <el-container>
        <el-header height="45px">
          <div>
            <div style="float: left;width:10%">
              <h3 style="margin-top: 12px;margin-left: 10px;">Manager</h3>
            </div>
            <div style="float: right;width:10%">
              <div style="float: left;width:50%">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="float: right"></el-avatar>
              </div>
              <div style="float: left;width:50%" align="center">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="float: left;margin-top: 12px;margin-left: 10px;font-size:18px">
                    user<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-warning">注销</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside width="160px">
            <el-row class="tac">
              <el-col :span="12">
                <el-menu
                  :default-active="$router.path"
                  router
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#B3C0D1">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-s-tools"></i>
                      <span>系统管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="/home/employee"><i class="el-icon-user-solid"></i>员工管理</el-menu-item>
                      <el-menu-item index="/home/role"><i class="el-icon-star-off"></i>角色管理</el-menu-item>
                      <el-menu-item index="/home/resource"><i class="el-icon-star-on"></i>资源管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-container>
            <el-main>
              <router-view/>
            </el-main>
            <!--<el-footer height="45px">Footer</el-footer>-->
          </el-container>
        </el-container>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            isCollapse: true
          }
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    padding: 0 0;
    /*text-align: center;*/
    /*line-height: 60px;*/
    width: 100%;
    margin: 0px;
  }
  .el-aside {
    background-color: #B3C0D1;
    color: #333;
    /*text-align: center;*/
    /*line-height: 200px;*/
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    padding: 0 0;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu{
    flex: 0px;
    margin-left: 0px;
  }
  div{
    height:100%;
    width: 100%;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
<style type="text/css">
  /*
      找到html标签、body标签，和挂载的标签
      都给他们统一设置样式
  */
  html,body,#app,.el-container{
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }
</style>
