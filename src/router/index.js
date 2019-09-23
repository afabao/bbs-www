import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login'
import Home from '../components/home/Home'
import Employee from '../components/home/employee/Employee'
import Role from '../components/home/role/Role'
import Resource from '../components/resource/Resource'
import Index from '../components/index/Index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/home/employee',
          name: 'employee',
          component: Employee
        },
        {
          path: '/home/role',
          name: 'role',
          component: Role
        },
        {
          path: '/home/resource',
          name: 'resource',
          component: Resource
        }
      ]
    }
  ]
})
