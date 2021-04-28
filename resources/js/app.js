require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import router from './Router'
import store from './Store';
import App from './App.vue'

Vue.use(Vuetify);
Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
    store,
    components: { App }
});
