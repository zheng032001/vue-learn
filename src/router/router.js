import App from '../App.vue';

const router = [
    {
        path: '/',
        component: App,
        children: []
    },
    {
        path: '/login',
        component: () => import('../views/Login/Login.vue')
    },
    {
        path: '/home',
        component: () => import('../views/Home/Home.vue')
    }
]

export default router;
