import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        activeMenuName: 'Memory',
    },
    mutations: {
        setActiveMenuName: (state, data) => {
            state.activeMenuName = data
        }
    }
})

export default store
