<template>
    <div class="col-md-8">

        <!-- MAIN NAV -->

        <div class="inside-sec">
            <!-- BIO AND SKILLS -->
            <h5 class="tittle">PORTFOLIO</h5>

            <!-- PORTFOLIO -->
            <section class="portfolio padding-top-50 padding-bottom-50">

                <!-- PORTFOLIO ITEMS -->
                <div id="Container" class="item-space row col-3" >

                    <!-- ITEM -->
                    <article class="portfolio-item mix  design photo visual" style="display: block;" v-for="data in WebSiteData.portfolio[0]">
                        <div class="portfolio-image">
                            <div>
                                <img  class="img-responsive" alt="Open Imagination" :src="imageUrl(data.logo)">
                            </div>


                            <div class="company-info-div">
                                <div class=" company-info-industry ">{{ data.industry}}</div>
                                <a :href="sites_url(data.url)" target="_blank"><span><i>{{ data.url}}</i></span> </a>

                            </div>

                        </div>



                        <!--<div class="popover fade top in" role="tooltip" id="pop625"-->
                             <!--style="top: 10px; left: 0px; display: block;">-->
                            <!--<div class="arrow" style="top: 100%;"></div>-->

                            <!--<div class="popover-content">-->

                                <!--<p>- Ultrices mi tempus imperdiet nulla malesuada pellentesq</p>-->
                                <!--<p>- Ultrices mi tempus imperdiet nulla malesuada pellentesq</p>-->
                            <!--</div>-->
                        <!--</div>-->
                    </article>
                </div>

            </section>



        </div>


    </div>
</template>

<script>

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    gtag('config', 'GA_MEASUREMENT_ID_3', {
        'page_path': '/portfolio'
    });

    export default {
        name: "Portfolio",
        props: ['WebSiteData'],
        data(){

            return {
                show: false,
                className: 'portfolio-image background1',
                metaTitle: this.WebSiteData.portfolio[0].meta_title,
                metaDescription: this.WebSiteData.portfolio[0].meta_description,
            }
        },
        watch:{
            show: function () {
                this.className = (this.show?' portfolio-image background2 ':' portfolio-image background1 ');
            }
        },
        methods: {
            imageUrl: function (image) {

                return "/companies/"+ image;

            },
            sites_url: function (url) {

                return "http://"+url;
            }
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

<style >


</style>