import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoad('Home'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: lazyLoad('Projects'),
  },
  {
    path: '/experience',
    name: 'Experience',
    component: lazyLoad('Experience')
  },
  {
    path: '/art',
    name: 'Art',
    component: lazyLoad('Art'),
  },
  {
    path: '/about',
    name: 'About',
    component: lazyLoad('About'),
  },
  {
    path: '/space-explorer',
    name: 'SpaceExplorer',
    component: lazyLoad('projects/SpaceExplorer')
  },
  {
    path: '/haunted-apothecary',
    name: 'HauntedApothecary',
    component: lazyLoad('projects/HauntedApothecary')
  },
  {
    path: '/asteroids',
    name: 'Asteroids3D',
    component: lazyLoad('projects/Asteroids3D')
  },
  {
    path: '/portfolio-beyond',
    name: 'PortfolioBeyond',
    component: lazyLoad('projects/PortfolioBeyond')
  },
  {
    path: '/schedular-dispatch',
    name: 'SchedularDispatchSim',
    component: lazyLoad('projects/SchedularDispatchSim')
  },
  {
    path: '/memory-manager',
    name: 'MemoryManager',
    component: lazyLoad('projects/MemoryManager')
  },
  {
    path: '/coffee-script',
    name: 'CoffeeScript',
    component: lazyLoad('projects/CoffeeScript')
  },
  {
    path: '/farm-simulation',
    name: 'FarmSimulation',
    component: lazyLoad('projects/FarmSimulation')
  }
]

const router = createRouter({
  linkExactActiveClass: 'is-active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash }
    }
    window.scrollTo(0, 0)
  }
})

export default router