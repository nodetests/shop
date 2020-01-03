import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from "./http"
import dayjs from 'dayjs'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import BScroll from 'better-scroll'

Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(dayjs)
    // 把service对象挂载在Vue的原型对象上
    // 每一个组件都可以使用
Vue.prototype.$api = api
Vue.prototype.$axios = service
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')