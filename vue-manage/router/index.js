import Vue from 'vue'
import VueRouter from 'vue-router'
//import Router from 'vue-router'

/* //解决vue路由重复导航错误
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch ()
}                                          无用    */

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/ViewsMain.vue'), /* 组件按需引入 */
        children: [
            {
                path: '/home',
                name: 'home',/* name名称应该跟/views/home中的home名称一致，官方没有说明 */
                component: () => import('../views/home/HomeIndex.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/UserIndex.vue') /* 组件按需引入 */
            },                                                                                                                                                                                                                                                                                                                                                                                                             
        ]
    },

/* 将创建好的Home页面引入两种方式，一种已知的先import再component注册，另一种按需引入直接在component那写 */    

]
const router = new VueRouter({
    mode: 'history',/* 路由匹配模式为history */
    routes,
})
export default router