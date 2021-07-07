require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import router from './Router'
import store from './Store';
import App from './App.vue'

Vue.use(Vuetify);
Vue.use(VueRouter)

window.events = new Vue();

window.flash = function(messageObj) {
    window.events.$emit('flash', messageObj);
}

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        iconfont: 'mdi', //追記
    }),
    router,
    store,
    components: { App }
});
