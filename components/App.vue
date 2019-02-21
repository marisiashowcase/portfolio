<template>
    <div>

        <main class="cd-main-content">
            <div id="content">
                <div class="resume">
                    <div class="container">

                        <!-- TOP HEAD -->
                        <div class="top-head">
                            <div class="row">
                                <div class="col-sm-6">
                                    <h4>Full Stack PHP Developer </h4>

                                </div>

                            </div>
                        </div>

                        <!-- NAV LINKS -->
                        <navigation :WebSiteData="WebSiteData"></navigation>
                        <!-- NAV LINKS END -->

                        <!-- Resume -->
                        <div class="row">

                            <!-- Sidebar -->
                            <div class="col-md-4">
                                <div class="side-bar">

                                    <!-- Professional Details -->
                                <professional-detail :WebSiteData="WebSiteData"></professional-detail>

                                </div>
                            </div>

                            <!-- MAIN CONTENT -->
                               <router-view></router-view>
                        </div>
                    </div>
                </div>

            </div>
        </main>

    </div>

</template>

<script>

    import WebSiteData from '../data';
    import ProfessionalDetail from "./ProfessionalDetails.vue";
    import Navigation from "./Navigation.vue";


    export default {
        name: "App",
        data: function(){
            return {
                WebSiteData
            }
        },
        components: {
            ProfessionalDetail,
            Navigation
        }
    }

</script>

<style scoped>

</style>