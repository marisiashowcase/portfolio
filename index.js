import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import AboutMe from './components/_partials/AboutMe.vue';
import Resume from './components/_partials/Resume.vue';
import Portfolio from './components/_partials/Portfolio.vue';
import Blog from './components/_partials/Blog.vue';
import ContactMe from './components/_partials/ContactMe.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AboutMe },
    { path: '/resume', component: Resume },
    { path: '/portfolio', component: Portfolio },
    { path: '/blog', component: Blog },
    { path: '/contact-me', component: ContactMe },
]


const router = new VueRouter({
    mode: 'history',
    routes
})



new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
