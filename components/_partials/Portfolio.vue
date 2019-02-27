<template>
    <div class="col-md-8">

        <!-- MAIN NAV -->

        <div class="inside-sec">
            <!-- BIO AND SKILLS -->
            <h5 class="tittle">PORTFOLIO</h5>

            <!-- PORTFOLIO -->
            <section class="portfolio padding-top-50 padding-bottom-50">
                <!-- Work Filter -->
                <!--<ul class="tabs portfolio-filter text-center margin-bottom-30">-->
                    <!--<li class="filter" data-filter="all">all</li>-->
                    <!--<li class="filter" data-filter=".brand">GitHub Access</li>-->
                    <!--<li class="filter" data-filter=".design">Front End</li>-->
                    <!--<li class="filter" data-filter=".photo">BackEnd</li>-->
                <!--</ul>-->

                <!-- PORTFOLIO ITEMS -->
                <div id="Container" class="item-space row col-3">


                    <!-- ITEM -->
                    <article class="portfolio-item mix  design photo visual" style="display: block; "
                             v-on:mouseover="show = true" v-on:mouseleave="show = false">



                        <div :class="className"   >
                            <!--<a href="#.">-->
                                <!--<img class="img-responsive" alt="Open Imagination" src="../../assets/images/moving_squad.png">-->
                            <!--</a>-->
                            <transition name="slide">
                                <p  v-if="show"><i>Improved zip code form</i></p>
                        </transition>

                        </div>


                        <!--<transition name="slide">-->
                            <!--<div style="width:216px; height: 149px; background-color: #f5f5f5;" v-if="showtest">-->
                                <!--<p >Improved form</p>-->
                            <!--</div>-->
                        <!--</transition>-->

                        <div style="background-color: #f5f5f5; padding:15px;text-align: center;">
                            <div style="    text-transform: uppercase;
                            color: #252525;
                            font-weight: 600;
                            font-size: 15px;
                            margin-bottom: 3px;
                            ">Moving</div>
                            <div><i>movingsquad.com</i></div>
                        </div>

                    </article>


                    <!-- ITEM -->
                    <!--<article class="portfolio-item mix  design photo visual" style="display: block;">-->
                        <!--<div class="portfolio-image">-->
                            <!--<a href="#.">-->
                                <!--<img class="img-responsive" alt="Open Imagination" src="../../assets/images/moving_squad.png">-->
                            <!--</a>-->

                        <!--</div>-->
                    <!--</article>-->



                </div>
            </section>



        </div>


    </div>
</template>

<script>



    export default {
        name: "Portfolio",
        data(){

            return {
                show: false,
                className: 'portfolio-image background1'

            }
        },
        watch:{
            show: function () {
                this.className = (this.show?' portfolio-image background2 ':' portfolio-image background1 ');
            }
        }
    }
</script>

<style >


</style>