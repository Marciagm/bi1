import Vue from 'vue'
import routes from './router'
import store from './store'
import App from './App.vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router);
Vue.use(Element, {
  size: 'medium' // set element-ui default size
})
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

const router = new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
          return savedPosition
    } else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
	}
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
