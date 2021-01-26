<template>
    <v-container class="pa-md-10">
        <h1 class="font-weight-bold grey--text my-5">EXPERIENCE</h1>
        <v-list dense nav>
            <v-list-item color="white" v-for="exp in exps" :key="exp.title">
                <v-list-item-content>
                    <v-row class="justify-space-between">
                        <h2 class="pa-3 black--text font-weight-bold">{{ exp.title }}</h2>
                        <h3 class=" pa-3 green--text">{{ exp.timeperiod }}</h3>
                    </v-row>
                    <h3 class="mx-3 mt-2 font-weight-medium grey--text">{{ exp.company }}</h3>
                    <h3 class="body-1 pa-3">
                        Developed an application where:
                        <li>Seekers can find a suitable job or an internship and apply for the same</li>
                        <li>Recruiters can post a job or an internship and hire seekers applied for the positions posted by them</li>
                        <li>Direct connection between the seekers and recruiters</li>
                        <li>Technology Stack: Flutter by Google, Cloud Firestore and Authentication</li>
                    </h3>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-container>
</template>

<script>
export default {
    name: "Experience",
    data(){
        return {
            exps: [
                {
                    title: 'Mobile App Developer (Intern)',
                    timeperiod: 'Jun 2020 - Jul 2020',
                    company: 'Stack Nation, Chennai'
                }
            ]
        }
    }
}
</script>