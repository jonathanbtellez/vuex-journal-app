//Creating a router in a module
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children:[
        
    ]
}