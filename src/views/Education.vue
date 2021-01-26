<template>
    <v-container class="pa-md-10">
        <h1 class="font-weight-bold grey--text display-1 pl-3 my-5">EDUCATION</h1>
        <v-list dense nav>
            <v-list-item color="white" v-for="edu in edus" :key="edu.etitle">
                <v-list-item-content>
                    <v-row class="justify-space-between">
                        <h2 class="pa-3 black--text font-weight-bold">{{ edu.etitle }}</h2>
                        <h3 class=" pa-3 green--text">{{ edu.etimeperiod }}</h3>
                    </v-row>
                    <v-list-item-h3 class="mx-1 mt-2 font-weight-medium grey--text">{{ edu.board }}</v-list-item-h3>
                    <v-list-item-h3 class="mx-1 mt-2 font-weight-medium grey--text">{{ edu.degree }}</v-list-item-h3>
                    <v-list-item-h3 class="mx-1 mt-2 font-weight-medium grey--text">{{ edu.grade }}</v-list-item-h3>
                </v-list-item-content>
            </v-list-item>
            <br>
        </v-list>
    </v-container>
</template>


<script>


export default {
  name: "Education",
  data(){
      return {
          edus: [
            { 
                etitle: 'Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai', 
                etimeperiod: 'August 2017 - Present', 
                board: 'University of Mumbai',
                degree: 'Bachelor of Engineering in Computer Engineering (B.E)',
                grade: 'CGPA: 8.55/10, WES: 3.71/4',
            },
            { 
                etitle: 'Sathaye College, Vile Parle, Mumbai', 
                etimeperiod: 'July 2015 - May 2017', 
                board: 'Maharashtra State Board',
                degree: 'Higher Secondary Certificate - HSC',
                grade: 'Percentage: 78.77%'
                },
            { 
                etitle: 'St. Charles High School, Santacruz, Mumbai', 
                etimeperiod: 'June 2005 - May 2015', 
                board: 'Maharashtra State Board',
                degree: 'Secondary School Certificate - SSC',
                grade: 'Percentage: 93.00%'
                },
          ]
      }
  }
}
</script>
