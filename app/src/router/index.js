import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from '@/views/Contacts.vue'
import ContactInfo from '@/views/ContactInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/contacts'
  },
  {
    path: '/contacts',
    component: Contacts,
    children: [
      {
        path: ':contactId',
        component: ContactInfo,
        props: true,
        meta: {
          showModal: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
