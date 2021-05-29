<template>
<section class="publications">
        <v-container class="pa-10">
            <h1 style="font-size: 45px; font-weight: 400" class="brown--text mt-10 ml-3">Publications</h1>
            <v-list dense nav class="pb-16">
                <v-list-item color="white" v-for="pub in pubs" :key="pub.title" target="_blank">
                    <v-list-item-content>
                        <h2 class="py-2 black--text font-weight-medium"><a :href="pub.link" style="text-decoration:none" target="_blank" class="black--text">{{ pub.title }}</a></h2>
                        <h3 class=" title font-weight-light mb-4">{{ pub.authors }}</h3>
                        <v-row class="pl-3 py-3 justify-start">
                            <v-btn class="mr-4" href="https://www.ijraset.com/fileserve.php?FID=33962" target="_blank" small outlined color="brown">Publication</v-btn>
                            <v-btn href="https://github.com/benitarego/Stress-Not-Application" target="_blank" small outlined color="brown">Project</v-btn>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>
</section>
</template>

<script>
export default {
    name: "Publicationss",
    data(){
        return {
           pubs: [
            { 
                title: 'Social Media Data Analytics for Mental Health Evaluation', 
                authors: 'Benita Rego, Nolita Rego, Mohit Kunder', 
                route: 'https://github.com/benitarego/Stress-Not-Application',
                link: 'https://www.ijraset.com/fileserve.php?FID=33962' 
            },
            ], 
        }
    }
}
</script>
