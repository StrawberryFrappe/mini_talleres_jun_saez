

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import Uno from './components/Uno.vue'
import Dos from './components/Dos.vue'
import Tres from './components/Tres.vue'
import Cuatro from './components/Cuatro.vue'
import Cinco from "@/components/Cinco.vue";

const routes = [
  { path: '/', component: Uno },
  { path: '/dos', component: Dos },
  { path: '/tres', component: Tres },
  { path: '/cuatro', component: Cuatro },
  { path: '/cinco', component: Cinco },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
createApp(App).use(router).mount('#app')
