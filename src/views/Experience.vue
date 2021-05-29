<template>
<section class="experience">
        <v-container class="pa-10">
            <h1 style="font-size: 45px; font-weight: 400" class="brown--text mt-5 mb-3 ml-3">Experience</h1>
            <v-card hover>
            <v-list dense nav>
                <v-list-item color="white" v-for="exp in exps" :key="exp.title">
                    <v-list-item-content>
                        <v-row class="pa-4 ">
                            <v-img class="justify-center" height=50 max-width="220" src="@/assets/stacknation.png"></v-img>
                            <v-col>
                            <h2 class="justify-start pa-3 black--text font-weight-medium">{{ exp.title }}</h2>
                            <v-row>
                            <h3 class="justify-start pl-3 py-2 ml-3 black--text font-weight-light">{{ exp.company }}</h3>
                            <h3 class="justify-start pl-3 py-2 font-weight-regular brown--text">|</h3>
                            <h3 class="justify-start pl-3 py-2 font-weight-regular brown--text">{{ exp.timeperiod }}</h3>
                            </v-row>
                            </v-col>
                        </v-row>
                        <h2 class="title font-weight-light mb-4">
                            Developed an application where:
                            <li>Job/internship seekers can find a desired job or an internship with in-built resume created by providing the necessary inputs.</li>
                            <li>Job/internship recruiters can publicly post a job/internship positions open at their organization and hire seekers applied for the positions posted by them</li>
                            <li>Direct connection between the seekers and recruiters</li>
                            <li>Designed using Dart language along with the Pub package manager for necessary libraries in Flutter SDK and backend using Cloud Firestore and authentication in Firebase</li>
                        </h2>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-card>
        </v-container>
</section>
</template>

<script>
export default {
    name: "Experience",
    data(){
        return {
            exps: [
                {
                    title: 'Mobile App Developer Intern',
                    timeperiod: 'June 2020 - July 2020',
                    company: 'Stack Nation, Chennai'
                }
            ]
        }
    }
}
</script>
