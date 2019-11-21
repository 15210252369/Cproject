import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)
const home = () => import('views/home/home')
const category = () => import('views/category/category')
const profile = () => import('views/profile/profile')
const shopcar = () => import('views/shopcar/shopcar')
const router = new vueRouter({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/category',
            component: category
        },
        {
            path: "/profile",
            component: profile
        },
        {
            path: '/shopcar',
            component: shopcar
        }
    ],
    mode: 'history'
})

export default router