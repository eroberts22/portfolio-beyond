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

  //https://stackoverflow.com/questions/50633001/vuejs-vue-router-linking-an-external-website

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
    return { x: 0, y: 0 }
  }
})

export default router