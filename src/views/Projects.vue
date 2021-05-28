<template>
<section class="projects">
        <v-container class="pa-10">
            <h1 style="font-size: 50px; font-weight: 400" class="brown--text mt-10 ml-3">Projects</h1><br>
            <v-card hover>
                <v-list dense nav>
                <v-list-item color="white" v-for="proj in projs" :key="proj.ptitle" target="_blank">
                    <v-list-item-content>
                        <v-row class="justify-space-between">
                            <h2 class="pa-3 black--text font-weight-medium"><a :href="proj.proute" style="text-decoration:none" target="_blank" class="black--text">{{ proj.ptitle }}</a></h2>
                            <h3 class=" pa-3 font-weight-regular brown--text">{{ proj.ptimeperiod }}</h3>
                        </v-row>
                        <h3 class="title font-weight-light mb-4">
                            {{ proj.pdesc }}
                        </h3>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-card><br><br>
            <center><v-btn href="https://github.com/benitarego?tab=repositories" target="_blank" color="brown" outlined><v-icon left>mdi-github</v-icon>Click to explore more...</v-btn></center>
        </v-container>
</section>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return {
           projs: [
            { 
                ptitle: 'AI-based Social Media Data Analytics for Mental Health Evaluation', 
                ptimeperiod: 'July 2020 - May-2021', 
                pdesc: 'A system which provides assistance to the user by analyzing his state of mind by his social media contents and further recommending health care experts to get through their declining mental state.', 
                proute: 'https://github.com/benitarego/Stress-Not-Application' 
            },
            { 
                ptitle: 'Human Action Recognition Application for House Monitoring', 
                ptimeperiod: 'March 2020 - May 2020', 
                pdesc: 'An application that detects the individuals living alone at their residence, for any suspicious behavior and alerts the person monitoring, from anywhere, also recording all activities in real-time.', 
                proute: 'https://github.com/benitarego/Human-Act-Recognition' 
            },
            { 
                ptitle: 'Expendo - Task and Event Management Application', 
                ptimeperiod: 'September 2020 - November 2020', 
                pdesc: 'A productivity application which combines the features of to-do task management and budget tracker. This user-friendly app regains clarity and calmness by getting all those tasks out of your head and onto your to-do list along with controlling the expenses and reminds the user of the task to be done using push notifications. ', 
                proute: 'https://github.com/benitarego/Expendo-App' 
            },
            { 
                ptitle: 'Machine Learning Target Prediction Portal', 
                ptimeperiod: 'April 2020', 
                pdesc: 'A web application that predicts a target variable from a dataset uploaded by the user and also selecting the algorithms he wishes to use (eg. regression).', 
                proute: 'https://github.com/benitarego/ML-Prediction-using-VueJS-Flask' 
                },
            { 
                ptitle: 'Event Management and Organization Portal for NGO', 
                ptimeperiod: 'September 2019 - October 2019', 
                pdesc: 'A web application where contents related to the organization is displayed as well as registering as a volunteer, staff and volunteers management with event creation and many more features are provided.', 
                proute: 'https://github.com/benitarego/NGO-website' 
            },
            { 
                ptitle: 'Document Summarisation for News Articles', 
                ptimeperiod: 'August 2019 - October 2019', 
                pdesc: 'Headlines of news articles summarized to a summary or short paragraph using NLP.', 
                proute: 'https://github.com/benitarego/Text-Summarization' 
                },
            ], 
        }
    }
}
</script>
