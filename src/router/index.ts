import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {Pages} from "@/router/pages";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: Pages.home,
            component: () => import('@/views/Root.vue'),
            redirect: {name: Pages.discover},
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import('@/views/discover/Discover.vue'),
                    meta: {
                        menu: 'discover',
                        keepAlive: true
                    }
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
