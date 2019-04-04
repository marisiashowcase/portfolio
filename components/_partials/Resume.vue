<template>
    <div class="col-md-8" >

        <!-- Professional Experience -->
        <div class="inside-sec ">
            <!-- Professional Experience -->
            <h5 class="tittle">Professional Experience</h5>
            <div class=" margin-top-25">
                <div class="exp-history-padding exp-history " v-for="value in WebSiteData.resume[0].jobs" >

                    <div class="exp ">
                        <div class="media-left"> <span class="sun">{{ value.date}}</span> </div>
                        <div class="media-body">

                            <h6>{{ value.my_title}}</h6>
                            <p style="font-size: 16px;">{{ value.company}}</p>
                            <p>{{ value.location}}</p>

                            <div v-for="job in value.bullets">
                                <p class="margin-top-10">
                                    • {{ job.li}}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>

        <!-- Academic Background -->
        <div class="inside-sec margin-top-30">
            <!-- Academic Background -->
            <h5 class="tittle">Academic Background</h5>
            <div class="padding-30 exp-history">

                <div class="exp">
                    <div class="media-left"> <span class="sun">2008</span> </div>
                    <div class="media-body">

                        <h6>Linux+ Certification</h6>
                        <p>CompTia</p>
                        <p>Fort Lauderdale, FL</p>

                    </div>
                </div>

                <div class="exp">
                    <div class="media-left"> <span class="sun">1997 - 2003</span> </div>
                    <div class="media-body">

                        <h6>Bachelors Degree in MIS and Finance</h6>
                        <p>Florida Atlantic University</p>
                        <p>Boca Raton, FL</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { EventBus } from '../../assets/js/event-bus.js';



    export default {
        props: ['WebSiteData'],
        name: "Resume",

        data: function () {

            return {
                showPage: 1
            }
        },
        created() {

            EventBus.$on('pageStatusCheck', (data) => {

                this.showPage = data.resume? 1:0
            });

            gtag('config', 'GA_MEASUREMENT_ID_2', {
                'page_path': '/resume'
            });
        }
    }
</script>

<style scoped>

</style>