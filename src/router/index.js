import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Destination from '../components/destination/destination'
import Notes from '../components/notes/notes'
import Member from '../components/member/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
  ]
})
