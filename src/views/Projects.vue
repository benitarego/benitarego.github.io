<template>
    <v-container class="pa-md-10">
        <h1 class="font-weight-bold grey--text display-1 my-5">PROJECTS</h1>
        <v-list dense nav>
            <v-list-item color="white" v-for="proj in projs" :key="proj.ptitle" target="_blank">
                <v-list-item-content>
                    <v-row class="justify-space-between">
                        <h2 class="pa-3 black--text font-weight-bold"><a :href="proj.proute" target="_blank" class="black--text">{{ proj.ptitle }}</a></h2>
                        <h3 class=" pa-3 green--text">{{ proj.ptimeperiod }}</h3>
                    </v-row>
                    <h3 class="body-1 pa-3">
                        <li>{{ proj.pdesc }}</li>
                    </h3>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    name: "Projects",
    data(){
        return {
           projs: [
            { 
                ptitle: 'AI-based Social Media Data Analytics for Mental Health Evaluation', 
                ptimeperiod: 'Jul 2020 - Present', 
                pdesc: 'A system which provides assistance to the user by analyzing his state of mind by his social media contents and further recommending health care experts to get through their declining mental state.', 
                proute: 'https://github.com/benitarego' 
            },
            { 
                ptitle: 'Human Act Recognition', 
                ptimeperiod: 'Mar 2020 - May 2020', 
                pdesc: 'An application that detects the individuals living alone at their residence, for any suspicious behavior and alerts the person monitoring, from anywhere, also recording all activities in real-time.', 
                proute: 'https://github.com/benitarego/Human-Act-Recognition' 
                },
            { 
                ptitle: 'ML Target Prediction System', 
                ptimeperiod: 'Apr 2020', 
                pdesc: 'A web application that predicts a target variable from a dataset uploaded by the user and also selecting the algorithms he wishes to use (eg. regression).', 
                proute: 'https://github.com/benitarego/ML-Prediction-using-VueJS-Flask' 
                },
            { 
                ptitle: 'NGO Manager Website', 
                ptimeperiod: 'Sept 2018 - Oct 2018', 
                pdesc: 'A web application where contents related to the organization is displayed as well as registering as a volunteer, staff and volunteers management with event creation and many more features are provided.', 
                proute: 'https://github.com/benitarego/NGO-website' 
            },
            { 
                ptitle: 'Text Summarization', 
                ptimeperiod: 'Aug 2018 - Oct 2018', 
                pdesc: 'Headlines of news articles summarized to a summary or short paragraph using NLP.', 
                proute: 'https://github.com/benitarego/Text-Summarization' 
                },
            ], 
        }
    }
}
</script>
