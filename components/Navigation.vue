<template>
    <div>

        <nav class="margin-bottom-30">
            <!-- Brand and toggle get grouped for better mobile display -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-tabis" aria-expanded="false"> <span class="tittle">MENU</span> <span class="fa fa-navicon icon-nav"></span> </button>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="nav-tabis">
                <ul class="isop-filter nav nav-pills">
                    <li role="presentation" class="active">
                        <router-link to="/" ><i class="icon-user"></i> ABOUT ME</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/resume" ><i class="icon-book-open"></i>RESUME</router-link>
                    </li>
                    <li role="presentation">

                        <router-link to="/portfolio" ><i class="icon-rocket"></i>PORTFOLIO</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/blog" ><i class="icon-note"></i>BLOG</router-link>
                    </li>
                    <li role="presentation">
                        <router-link to="/contact-me" > <i class="icon-pencil"></i>CONTACT ME</router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>