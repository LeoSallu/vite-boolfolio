import {createWebHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutUs from './pages/AboutUs.vue';
import AppDetails from './pages/AppDetails.vue';
import CardInfo from './pages/CardInfo.vue';
import TypesPage from './pages/TypesPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about-us',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppDetails
        },
        {
            path:'/projects/project-:id',
            name:'project',
            component:CardInfo
        },
        {
            path:'/types/:id',
            name:'type',
            component:TypesPage
        }
    ]
});

export { router };
