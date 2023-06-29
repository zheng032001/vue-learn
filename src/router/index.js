import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import router from './router';

let baseRoutes = []

let newRouter = createRouter({
    //electron 使用hash模式,默认
    history: createWebHistory(),
    routes: router.concat(baseRoutes)
})

export default newRouter;
