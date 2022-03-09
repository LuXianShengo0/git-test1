import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { requests } from './network/index.js'
/*引入公共样式*/
import './assets/css/global.css'
/*引入element-ui*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.prototype.$http = requests;
// Vue.use(http);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: h => h(App)
}).$mount('#app')
