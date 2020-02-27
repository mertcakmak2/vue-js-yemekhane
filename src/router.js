import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './components/Index.vue'
import AddFoodDay from './components/AddFoodDay'
import EditFoodDay from './components/EditFoodDay'

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Index,
            name:'Index'
        },
        {
            path:'/food-day',
            component:AddFoodDay,
            name:'AddFoodDay'
        },
        {
            path:'/edit-food-day/:food_day_slug',
            component:EditFoodDay,
            name:'EditFoodDay'
        },
    ]
})