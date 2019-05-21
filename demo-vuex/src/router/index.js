import Vue from 'vue'
import Router from 'vue-router'
import start from '@/components/start'
import daohanOne from '@/components/navList/daohanOne'
import daohanTwo from '@/components/navList/daohanTwo'
import daohanThree from '@/components/navList/daohanThree'
import daohanFour from '@/components/navList/daohanFour'
import daohanFive from '@/components/navList/daohanFive'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
        path: '/',
        redirect: '/start',
    },
    {
        path: '/start',
        name: 'start',
        component: start,
        meta: {
            title: "start",
        },
        redirect: '/daohanOne',
        children:[
            {
                path: '/daohanOne',
                name: 'daohanOne',
                component: daohanOne,
                meta: {
                    title: "daohanOne",
                },
            },
            {
                path: '/daohanTwo',
                name: 'daohanTwo',
                component: daohanTwo,
                meta: {
                    title: "daohanTwo",
                },
            },
            {
                path: '/daohanThree',
                name: 'daohanThree',
                component: daohanThree,
                meta: {
                    title: "daohanThree",
                },
            },
            {
                path: '/daohanFour',
                name: 'daohanFour',
                component: daohanFour,
                meta: {
                    title: "daohanFour",
                },
            },
            {
                path: '/daohanFive',
                name: 'daohanFive',
                component: daohanFive,
                meta: {
                    title: "daohanFive",
                },
            }
        ]
    }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

export default router;
