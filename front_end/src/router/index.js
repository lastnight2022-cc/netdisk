import {createWebHistory,createRouter} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/filecloud',
    },
    {
        name:'filecloud',
        path: '/filecloud',
        meta:{title:'个人云盘'},
        component:() => import('@/views/Filecloud')
    },
    {
        name:"login",
        path:'/filecloud/login',
        meta: {title: '个人云盘登录'},
        component: ()=> import('@/views/Login')
    },
    {
        name: 'fileshared',
        path: '/shared/s/:key',
        meta: {title: '个人云盘分享'},
        component: () => import('@/views/FileShared')
    },
    {
        name: 'sharedlist',
        path: '/shared/list',
        meta: {title: '我的分享'},
        component: () => import('@/views/SharedList')
    },
    {
        path: '*',
        redirect: '/404',
    },
    {
        path: '/404',
        meta: {title: '404'},
        component: () => import('@/views/404')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
});

export default router