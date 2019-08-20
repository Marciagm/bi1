import Main from './components/Main'
import DieBank from './components/DieBank'
import Products from './components/Products/Index'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import SearchResults from './components/SearchResults'

import Memory from './components/Products/Memory.vue'
import Linear from './components/Products/Linear.vue'
import Logic from './components/Products/Logic.vue'
import Opto from './components/Products/Opto.vue'
import DT from './components/Products/Dt.vue'



const router = [
    {
        path: '/',
        name: 'index',
        component: Main
    },
    {
        path: '/die-bank',
        name: 'die-bank',
        component: DieBank
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
        children: [
            {
                path: 'memory',
                name: 'memory',
                component: Memory,
            },
            {
                path: 'linear',
                name: 'linear',
                component: Linear,
            },
            {
                path: 'logic',
                name: 'logic',
                component: Logic,
            },
            {
                path: 'opto',
                name: 'opto',
                component: Opto,
            },
            {
                path: 'dt',
                name: 'dt',
                component: DT,
            }
        ]
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUs
    },
    {
        path: '/searchResult',
        name: 'searchResult',
        component: SearchResults
    }
]
export default router
