import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Art from '../views/Art'
import About from '../views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/art',
    name: 'Art',
    component: Art,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  linkExactActiveClass: 'is-active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router