import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/Home.vue'
import ActivityPage from '@/views/Activity.vue'
import ExpensesPage from '@/views/Expenses.vue'
import TeamPage from '@/views/Team.vue'
import Activity from "@/views/Activity";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            redirect : '/home'
        },
        {
            path: '/home',
            name: 'homePage',
            component: HomePage
        },
        {
            path: '/team',
            name: 'teamPage',
            component: TeamPage
        },
        {
            path: '/activity',
            name: 'activityPage',
            component: ActivityPage
        },
        {
            path: '/expenses',
            name: 'expensesPage',
            component: ExpensesPage
        }
    ]
})
