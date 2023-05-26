import {createWebHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutUs from './pages/AboutUs.vue';
import AppDetails from './pages/AppDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/progetti',
            name: 'projects',
            component: AppDetails
        }
    ]
});

export { router };
