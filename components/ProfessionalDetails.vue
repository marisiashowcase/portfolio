<template>
    <div id="professional-div">

            <!-- Professional Details -->
            <h5 class="tittle">Professional Details</h5>
            <img src="../assets/images/avatar.jpg" class="img-responsive" alt="">
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


                <li>
                    <p> <span> E-mail</span> <a href="#."> {{ WebSiteData.my_details[0].email }}</a> </p>
                </li>
                <li>
                    <p> <span> Website</span><a href="#."> {{ WebSiteData.my_details[0].website }} </a></p>
                </li>
            </ul>


            <!-- Social Profiles -->
            <h5 class="tittle">Social Profiles</h5>
            <div class="social-icon bor-btm padding-25">
                <ul>
                    <li> <a href="#."> <i class="fa fa-facebook"></i></a> </li>
                    <li> <a href="#."> <i class="fa fa-google"></i></a> </li>
                    <li> <a href="#."> <i class="fa fa-twitter"></i></a> </li>
                    <li> <a href="#."> <i class="fa fa-linkedin"></i></a> </li>
                    <li> <a href="#."> <i class="fa fa-skype"></i></a> </li>
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
                            <button type="submit"  value="submit" id="btn_submit" onClick="proceed();">Send Message</button>
                        </li>
                    </ul>
                </form>
            </div>


    </div>
</template>

<script>

    export default {
        name: "ProfessionalDetail",
        props: ['WebSiteData']
    }
</script>

<style scoped>

</style>