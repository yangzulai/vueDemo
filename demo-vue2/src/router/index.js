import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import infiniteScroll from '@/components/infiniteScroll'
import lazyLoad from '@/components/lazyLoad'
import vuex from '@/components/vuex'
import vuexA from '@/components/vuexA'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            meta: {
                title: "index",
            },
            component: index,
        },
        {
            path: '/infiniteScroll',
            name: 'infiniteScroll',
            meta: {
                title: "infiniteScroll",
            },
            component: infiniteScroll,
        },
        {
            path: '/lazyLoad',
            name: 'lazyLoad',
            meta: {
                title: "lazyLoad",
            },
            component: lazyLoad,
        },
        {
            path: '/vuex',
            name: 'vuex',
            meta: {
                title: "vuex",
            },
            component: vuex,
        },
        {
            path: '/vuexA',
            name: 'vuexA',
            meta: {
                title: "vuexA",
            },
            component: vuexA,
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

export default router;
