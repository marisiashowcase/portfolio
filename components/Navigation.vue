<template>
    <div>

        <nav class="margin-bottom-30">
            <!-- Brand and toggle get grouped for better mobile display -->
            <button v-on:click="toggleExpanded" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-tabis" aria-expanded="false"> <span class="tittle">MENU</span>
                <span class="fa fa-navicon icon-nav"  ></span></button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div :class="className" id="nav-tabis">
                <ul class="isop-filter nav nav-pills modifywidth">
                    <li role="presentation" :class="isActiveTab('about-me')" v-on:click="toggleExpanded('about-me')">
                        <router-link to="/" ><i class="icon-user"></i> ABOUT ME</router-link>
                    </li>
                    <li role="presentation" :class="isActiveTab('resume')" v-on:click="toggleExpanded('resume')">
                        <router-link to="/resume" ><i class="icon-book-open"></i>EXPERIENCE</router-link>
                    </li>
                    <li role="presentation" :class="isActiveTab('portfolio')" v-on:click="toggleExpanded('portfolio')">

                        <router-link to="/portfolio" ><i class="fa fa-briefcase"></i>PORTFOLIO</router-link>
                    </li>
                    <!--<li role="presentation" v-on:click="toggleExpanded">-->
                        <!--<a :href="WebSiteData.about_me[0].social[0].link" target="_blank"><i :class="WebSiteData.about_me[0].social[0].icon"></i>GitHub</a>-->
                    <!--</li>-->
                    <!--<li role="presentation" v-on:click="toggleExpanded">-->
                        <!--<a :href="WebSiteData.about_me[0].social[1].link" target="_blank"><i :class="WebSiteData.about_me[0].social[1].icon"></i>LinkedIn</a>-->
                    <!--</li>-->
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>

    // Import the EventBus we just created.
    import { EventBus } from '../assets/js/event-bus.js';

    export default {
        name: "Navigation",
        props: ['WebSiteData'],
        data: function () {
            return {
                nabBarExpanded: 0,
                className: 'collapse navbar-collapse',
                activeTab: 'about-me',
                pageStatus: {
                    'about_me': 1,
                    'resume': 0,
                    'portfolio': 0
                }
            }
        },
        methods:{
            toggleExpanded: function (page) {

                this.nabBarExpanded = this.nabBarExpanded?0:1;
                this.className = this.nabBarExpanded?'collapse navbar-collapse':' navbar-collapse';

                switch (page){
                    case 'about-me':
                        this.pageStatus.about_me = 1;
                        this.pageStatus.resume = 0;
                        this.pageStatus.portfolio = 0;
                        this.activeTab = page;
                    break;

                    case 'resume':
                        this.pageStatus.about_me = 0;
                        this.pageStatus.resume = 1;
                        this.pageStatus.portfolio = 0;
                        this.activeTab = page;
                    break;

                    case 'portfolio':
                        this.pageStatus.about_me = 0;
                        this.pageStatus.resume = 0;
                        this.pageStatus.portfolio = 1;
                        this.activeTab = page;
                    break;

                    default:
                        this.pageStatus.about_me = 1;
                        this.pageStatus.resume = 0;
                        this.pageStatus.portfolio = 0;

                }

                EventBus.$emit('pageStatusCheck', this.pageStatus);
            },
            isActiveTab: function (tab) {

                return tab == this.activeTab?' active ':'';
            }
        }

    }
</script>

<style scoped>

</style>