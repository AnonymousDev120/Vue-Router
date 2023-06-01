import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AdminView from '../views/AdminView.vue'
import History from '../components/History.vue'
import Delivery from '../components/Delivery.vue'
import Locations from '../components/Locations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      children: [
        {
          path: 'history',
          name: 'history',
          component: History
        },
        {
          path: 'delivery',
          name: 'delivery',
          component: Delivery
        },
        {
          path: 'locations',
          name: 'locations',
          component: Locations
        }
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ]
})

export default router
