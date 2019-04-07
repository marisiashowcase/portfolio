<template>
    <div class="col-md-8">

        <div class="tab-content">

            <!-- ABOUT ME -->
            <div role="tabpanel" :class="showPage" id="about-me">
                <div class="inside-sec">
                    <!-- BIO AND SKILLS -->
                    <h5 class="tittle">About Me</h5>

                    <!-- Blog -->
                    <section class="about-me padding-top-10">

                        <!-- Personal Info -->

                        <div class="padding-20">
                            <p>
                                {{ WebSiteData.about_me[0].main_paragraph }}

                            </p>
                        </div>

                        <!-- Skills -->
                        <h5 class="tittle">Skills</h5>

                        <div class="row padding-20 margin-bottom-10">

                            <!-- Icon -->
                            <div class="col-md-4 ">
                                <div class="icon-box i-large ib-black">

                                    <div class="ib-info ">

                                        <h4 class="h6 text-left margin-left-40" v-for="value in WebSiteData.about_me[0].skills.slice(0, 4)">{{ value.title }}</h4>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ">
                                <div class="icon-box i-large ib-black">

                                    <div class="ib-info ">

                                        <h4 class="h6 text-left margin-left-40" v-for="value in WebSiteData.about_me[0].skills.slice(4, 8)">{{ value.title }}</h4>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ">
                                <div class="icon-box i-large ib-black">

                                    <div class="ib-info ">

                                        <h4 class="h6 text-left margin-left-40" v-for="value in WebSiteData.about_me[0].skills.slice(8, 12)">{{ value.title }}</h4>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- Services -->
                        <h5 class="tittle">Services</h5>
                        <div class="row padding-20 margin-top-50">

                            <div  v-for="(value, index) in WebSiteData.about_me[0].services.slice(0, 3)">

                                <!-- Icon -->
                                <div class="col-md-4 text-center">
                                    <div class="icon-box i-large ib-black">
                                        <div class="ib-icon"> <i :class="value.icon"></i> </div>
                                        <div class="ib-info">
                                            <h4 class="h6">{{ value.title }}</h4>
                                            <p>{{ value.description }}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <!-- Icon Row -->
                        <div class="row padding-20 margin-bottom-50">

                            <div  v-for="(value, index) in WebSiteData.about_me[0].services.slice(3, 6)">

                                <!-- Icon -->
                                <div class="col-md-4 text-center">
                                    <div class="icon-box i-large ib-black">
                                        <div class="ib-icon"> <i :class="value.icon"></i> </div>
                                        <div class="ib-info">
                                            <h4 class="h6">{{ value.title }}</h4>
                                            <p>{{ value.description }}</p>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        </div>

                    </section>
                </div>
            </div>


        </div>
    </div>
</template>

<script>

    import { EventBus } from '../../assets/js/event-bus.js';

    export default {
        name: "AboutMe",
        props: ['WebSiteData'],
        data: function () {

            return {
                showPage: 'tab-pane fade in active',
                metaTitle: this.WebSiteData.about_me[0].meta_title,
                metaDescription: this.WebSiteData.about_me[0].meta_description,
            }
        },
        created() {

            EventBus.$on('pageStatusCheck', (data) => {

                this.showPage = data.about_me? 'tab-pane fade in active':'tab-pane fade in '
            });


            gtag('config', 'GA_MEASUREMENT_ID_1', {
                'page_path': '/'
            });
        },
        metaInfo() {
            return {
                    title: this.metaTitle,
                    meta: [
                        { vmid: 'description', name: 'description', content: this.metaDescription }
                    ]
            }

        }
    }
</script>

<style scoped>

</style>