<template>
    <div class="col-md-8">

        <div class="tab-content">

            <!-- ABOUT ME -->
            <div role="tabpanel" class="tab-pane fade in active" id="about-me">
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

                        <!-- Skills -->
                        <h5 class="tittle">Skills</h5>

                        <!-- Sound Engineering -->
                        <div class="panel-group accordion padding-20" id="accordion">

                            <div v-for="value in WebSiteData.about_me[0].skills">

                                <div class="panel panel-default">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <!-- PANEL HEADING -->
                                            <div class="panel-heading">
                                                <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="collapsed"> {{ value.title}}</a> </h4>
                                            </div>
                                        </div>

                                        <!-- Skillls Bars -->
                                        <div class="col-sm-8">
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"> <span class="sr-only">{{ value.percent }}% Complete</span> </div>
                                            </div>

                                            <!-- Skillls Text -->
                                            <div id="collapseOne" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.</p>
                                                </div>
                                            </div>
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
    export default {
        name: "AboutMe",
        props: ['WebSiteData']
    }
</script>

<style scoped>

</style>