<template>
    <div id="professional-div">

            <!-- Professional Details -->
            <h5 class="tittle">Professional Details  <i class="fa fa-plus  hide-show-btn" aria-hidden="true" v-if="!hideProfessionalBtn" v-on:click="toggleProfessionalDiv"></i>
            <i class="fa fa-minus hide-show-btn " aria-hidden="true" v-if="hideProfessionalBtn" v-on:click="toggleProfessionalDiv"></i></h5>

        <div :class="divProfessionalClass">

            <img src="../assets/images/avatar-4.jpg" class="img-responsive" alt="">
            <ul class="personal-info">
                <li>
                    <p> <span> Name</span> {{ WebSiteData.my_details[0].full_name }} </p>
                </li>
                <li>
                    <p> <span> Location</span> {{ WebSiteData.my_details[0].location }} </p>
                </li>
                <li>
                    <p> <span> Experience</span> {{ WebSiteData.my_details[0].experience }} </p>
                </li>
                <li>
                    <p> <span> Degree</span> {{ WebSiteData.my_details[0].degree }} </p>
                </li>
                <li>
                    <p> <span> Career Level</span> {{ WebSiteData.my_details[0].career_level }} </p>
                </li>

            </ul>


            <!-- Social Profiles -->
            <h5 class="tittle">Social Profiles</h5>
            <div class="social-icon bor-btm padding-25">
                <ul >
                    <li v-for="value in WebSiteData.about_me[0].social" > <a :href="value.link" target="_blank"> <i :class="value.icon"></i></a> </li>
                </ul>
            </div>

            <!-- Contact Me -->
            <h5 class="tittle">Contact Me</h5>
            <div class="contact padding-25">
                <!-- Success Msg -->
                <div id="contact_message" class="success-msg"> <i class="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>

                <!-- FORM -->
                <form role="form" id="contact_form" class="contact-form" method="post" onSubmit="return false">
                    <ul class="row">
                        <li class="col-sm-12">
                            <label>
                                <input type="text" class="form-control" name="email" id="email" placeholder="Email">
                            </label>
                        </li>
                        <li class="col-sm-12">
                            <label>
                                <input type="text" class="form-control" name="company" id="company" placeholder="Subject">
                            </label>
                        </li>
                        <li class="col-sm-12">
                            <label>
                                <textarea class="form-control" name="message" id="message" rows="5" placeholder="Message"></textarea>
                            </label>
                        </li>



                            <li class="col-sm-12">

                                <vue-recaptcha :sitekey="sitekey">
                                    <button type="submit"  value="submit" id="btn_submit" onClick="proceed();">Send Message</button>

                                </vue-recaptcha>


                        </li>
                    </ul>
                </form>
            </div>

        </div>
    </div>
</template>

<script>

    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: "ProfessionalDetail",
        props: ['WebSiteData'],
        data:function(){
            return {
                hideProfessionalBtn: 0,
                divProfessionalClass: ' professional-div-display ',
                sitekey: '6LepIJMUAAAAAAjWbejekZ4RSRwg62MR0SzBPZg6'
            }
        },
        mounted: function () {
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize)
        },
        components: {
            'vue-recaptcha': VueRecaptcha
        },
        methods: {
            sendMessage: function(){
                alert('hi there');
            },
            toggleProfessionalDiv: function(){

                this.hideProfessionalBtn = this.hideProfessionalBtn?0:1;

                this.divProfessionalClass = this.hideProfessionalBtn?' ':' professional-div-display d-none';
            },
            handleResize: function() {
                this.hideProfessionalBtn = document.documentElement.clientHeight>990?0:1 ;
            },
            onSubmit: function () {
                this.$refs.invisibleRecaptcha.execute()
            },
            onVerify: function (response) {
                console.log('Verify: ' + response)
            },
            onExpired: function () {
                console.log('Expired')
            },
            resetRecaptcha () {
                this.$refs.recaptcha.reset() // Direct call reset method
            }
        }

    }



</script>

<style scoped>

</style>