import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/o-anetce',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/leczenie',
      name: 'treatment',
      component: () => import('../views/TreatmentView.vue')
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/podziekowania',
      name: 'gratitude',
      component: () => import('../views/GratitudeView.vue')
    },
    {
      path: '/fundacja',
      name: 'foundation',
      component: () => import('../views/FoundationView.vue')
    },
    {
      path: '/pomoc',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
