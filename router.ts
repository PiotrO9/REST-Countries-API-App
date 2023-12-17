import { createRouter, createWebHistory } from 'vue-router';
const Countries = () => import('./src/components/Countries.vue');
const SingleCountry = () =>
    import('./src/components/singleCountry/SingleCountry.vue');

const routes = [
    { path: '/', component: Countries },
    { path: '/:name', component: SingleCountry },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
