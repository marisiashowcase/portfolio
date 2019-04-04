import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import AboutMe from './components/_partials/AboutMe.vue';
import Resume from './components/_partials/Resume.vue';
import Portfolio from './components/_partials/Portfolio.vue';
import Blog from './components/_partials/Blog.vue';
import ContactMe from './components/_partials/ContactMe.vue';
import WebSiteData from './data';
import Meta from 'vue-meta';


Vue.use(VueRouter);
Vue.use(Meta, {
    keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
    attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
    ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
    tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})


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
