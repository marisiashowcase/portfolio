let about_me_description = 'Web developer, coder, freelancer with PHP, Laravel, MySql, Javascript, Vue.js, API, MVC, Ajax, JSON, XML, ecommerce, amazon, PDF, CSV, web scraping, web crawling  experience in South Florida, Broward county.';
let experience_description = 'Web developer, coder, freelancer with custom programming, custom ecommerce, PDF, CSV, web scraping, web crawling, database experience in a variety of industries in South Florida, Broward county.';
let portfolio_description = 'Motivated Web developer, coder, freelancer with proven experience building web applications in South Florida, Broward county.';


const website_data = {

    'site_url': 'http://themcdeveloper.com/',
    'my_details' : [{
        'full_name': 'Marisia Coelho',
        'location': 'Pompano Beach, FL',
        'experience': '8 Years',
        'degree': 'Bachelors in MIS',
        'career_level': 'Mid-Level',
        'email': 'contact@themcdeveloper.com',
        'website': 'themcdeveloper.com'

    }],

    'about_me' : [{
        'meta_title': 'Full Stack PHP Developer - About Me',
        'meta_description': about_me_description,
        'main_paragraph': 'Self-motivated web developer passionate in creating user-friendly experiences utilizing a mix of both frontend and backend technologies. Through my eagerness to learn and share what I learn, I have been able to successfully deploy several projects from ideas to fully functional platforms. ',

        'services': [
            {'title': 'WEB DEVELOPMENT', 'description': 'Created dynamic, high-speed, responsive websites. Well versed with technologies like Vue.js & jQuery', 'icon':'fa fa-globe'},
            {'title': 'DATABASE MANAGEMENT', 'description': 'Proficient with MySQL database management with efficiently organizing, recording and implementing data sets.', 'icon':'fa fa-database'},
            {'title': 'e-commerce', 'description': 'Ecommerce solution provider. Professional designer, developer & integrator of ecommerce functionalities. ', 'icon':'fa fa-shopping-cart'},
            {'title': 'systems automation', 'description': 'Substantial knowledge over the system automation process. Planned, developed and executed several projects. ', 'icon':'fa fa-cogs'},
            {'title': 'front end development', 'description': 'Specialized in creating clean, compact & compliant front ends. Successfully prototyped myriad of websites.', 'icon':'fa fa-html5'},
            {'title': 'tdd', 'description': 'Skilled at implementing test-driven development to provide quality, maintainable and easily extensible application.', 'icon':'fa fa-check-circle'},
        ],
        'skills': [
            {'title': 'PHP'},
            {'title': 'MySQL'},
            {'title': 'HTML & CSS & SASS'},
            {'title': 'Javascript & JQuery'},
            {'title': 'Vue.js'},
            {'title': 'MVC'},
            {'title': 'AJAX & JSON & XML'},
            {'title': 'Restful API'},
            {'title': 'Git with Git Flow'},
            {'title': 'Bootstrap'},
            {'title': 'Webpack & Parcel'},
            {'title': 'Laravel'},
            {'title': 'LAMP & LEMP'},
            {'title': 'SugarCRM'},
            {'title': 'WordPress'},
        ],

        'social': [
            { 'link': 'https://github.com/marisiashowcase/', 'icon': 'fa fa-github'},
            { 'link': 'https://www.linkedin.com/in/marisia-coelho-028633106/', 'icon': 'fa fa-linkedin'},
            { 'link': 'https://opensourcedivateam.slack.com', 'icon': 'fa fa-slack'}
            ]

    }],

    'resume' : [{
        'meta_title': 'Full Stack PHP Developer - Experience',
        'meta_description': experience_description,
        'jobs': [

            {'date': '2019 - Present', 'company': 'SCI Direct', 'location':'Plantation, FL', 'my_title': 'PHP Developer',
                'bullets' :[
                    {'li': 'Assist with module development within the current design of the application.'},
                    {'li': 'Responsible for integration of applications to the current platform.'},

                ]
            },
            {'date': '2017 - 2019', 'company': 'Agile Element', 'location':'Fort Lauderdale, FL', 'my_title': 'Full Stack PHP Developer',
                'bullets' :[
                    {'li': 'Responsible for improving performance on our existing API\'s used by multiple web applications by integrating a caching solution, improving error handling along with new business requirements and validations.'},
                    {'li': 'Programmed a new queuing system into our applications allowing faster processing of existing data imports and events, along with a reporting system which logs any possible data issues across our multi-import queueing system.'},
                    {'li': 'Designed and Developed a custom SMS messaging solution, based on Twilio, where specific users are able to message their customers via their web portal.'},
                    {'li': 'Overhauled existing modules of our various SugarCRM integrations to improve processing and validations of our leads and data that passes through to the system.'},
                    {'li': 'Revamped our Laravel applications to improve the flow of handling donations. Enhanced our reporting to allow better filtering of our data along with logging more information to get more accurate reports on our users.'},
                ]
            },
            {'date': '2013 - 2017', 'company': 'Online Media Group', 'location':'Davie, FL', 'my_title': 'Senior PHP Developer',
                'bullets' :[
                    {'li': 'Aligned with out designers to successfully launch several website projects, primary focused around e-commerce.'},
                    {'li': 'Responsible for integrating new design into our Kryptronics shopping cart and extending the ecommerce functionality. '},
                    {'li': 'Established several 3rd party API integrations from online credit card applications to integrations with other online booking systems.'},
                    {'li': 'Enhanced existing web applications focusing on usability and simplicity by implementing frontend technologies such as Vue.js and jQuery in order to improve the reactivity of pages for our customers.'},
                    {'li': 'Improved conversion rates for many of our customers by implementing advanced tracking features from Google Analytics and Crazy Egg, and adjusting the user experience and flow based on results.'},

                ]
            },
            {'date': '2011 - 2013', 'company': 'Nationwide Relocation Service', 'location':'Margate, FL', 'my_title': 'Junior PHP Developer',
                'bullets' :[
                    {'li': 'Design, developed and maintained a custom CMS lead tracking system '},
                    {'li': 'Revamped all customer facing lead forms by adding validations and by ensuring unique form submission.'},
                    {'li': 'Tested for Cross/Browser compatibility.'},

                ]
            },
        ]

    }],
    'portfolio': [
        [
            {'industry': 'Fundraiser', 'url':'givingspirit.com', 'logo': 'givingspirit.jpg', 'github': 'https://github.com/marisiashowcase/donation_system'},
            {'industry': 'Wholesale Supplier', 'url':'arnhub.com', 'logo': 'uncsdb.jpg', 'github': 'https://github.com/marisiashowcase/uncs_crm'},
            {'industry': 'Drug Discount Card', 'url':'prescriptionassistance.info', 'logo': 'prescriptionassistance.jpg'},
            {'industry': 'Drug Discount Card', 'url':'watertreehealthcard.com', 'logo': 'watertreehealth.jpg'},
            {'industry': 'Drug Discount Card', 'url':'pharmaquotes.com', 'logo': 'pharmaquotes.jpg'},

            {'industry': 'Party Events', 'url':'partyforus.com', 'logo': 'party-for-us.jpg'},
            {'industry': 'Car Wash', 'url':'rccontherise.com', 'logo': 'royal-care-care.jpg'},
            {'industry': 'Supplement', 'url':'hotrawks.com', 'logo': 'hot-rawks.jpg'},
            {'industry': 'Transportation', 'url':'paris-shuttle.com', 'logo': 'parisshuttle.png', 'github': 'https://github.com/marisiashowcase/paris_shuttle'},
            {'industry': 'Insurance', 'url':'welcomefunds.com', 'logo': 'welcomefunds.jpg'},
            {'industry': 'Medical Cost', 'url':'favmedsusa.com', 'logo': 'fav-meds.jpg'},
            {'industry': 'Travel & Tours', 'url':'alaskashoreexcursions.com', 'logo': 'alaska-shoreexcursions.jpg'},
            {'industry': 'Health Care', 'url':'scanabilities.com', 'logo': 'scanabilities.jpg'},

            {'industry': 'Relocation Services', 'url':'movingsquad.com', 'logo': 'moving_squad.jpg'},
            {'industry': 'Relocation Services', 'url':'movingcost.com', 'logo': 'movingcost.jpg'},
            {'industry': 'Relocation Services', 'url':'allstatevanlinesrelo.com', 'logo': 'allstaterelocation.png'},


        ],
        {
            'meta_title': 'Full Stack PHP Developer - Portfolio',
            'meta_description': portfolio_description,
        }
    ]
};


export default website_data;
