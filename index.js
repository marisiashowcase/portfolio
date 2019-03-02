import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import AboutMe from './components/_partials/AboutMe.vue';
import Resume from './components/_partials/Resume.vue';
import Portfolio from './components/_partials/Portfolio.vue';
import Blog from './components/_partials/Blog.vue';
import ContactMe from './components/_partials/ContactMe.vue';
import WebSiteData from './data';


Vue.use(VueRouter);


const routes = [
    { path: '/', component: AboutMe, props: { WebSiteData } },
    { path: '/resume', component: Resume, props: { WebSiteData }  },
    { path: '/portfolio', component: Portfolio, props: { WebSiteData }  },
    { path: '/blog', component: Blog , props: { WebSiteData } },
    { path: '/contact-me', component: ContactMe, props: { WebSiteData }  },
]


const router = new VueRouter({
    mode: 'history',
    routes
})



new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
