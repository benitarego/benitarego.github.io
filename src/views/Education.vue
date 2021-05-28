<!-- <template>
<section class="education">
    <v-app class="page-wrapper">
        <v-container class="pa-10">
            <h1 style="font-size: 50px; font-weight: 400" class="brown--text mt-10 ml-3">Education</h1><br>
            <v-list dense nav>
                <v-list-item color="white" v-for="edu in edus" :key="edu.etitle">
                    <v-list-item-content>
                        <v-row class="justify-space-between">
                            <h2 class="pa-3 black--text font-weight-medium">{{ edu.board }}</h2>
                            <h3 class=" pa-3 font-weight-regular brown--text">{{ edu.etimeperiod }}</h3>
                        </v-row>
                        <v-list-item-h3 class="mx-2 mt-1 title font-weight-light">{{ edu.etitle }}</v-list-item-h3>
                        <v-list-item-h3 class="mx-2 mt-2 title font-weight-light">{{ edu.degree }}</v-list-item-h3>
                        <v-list-item-h3 class="mx-2 mt-2 title font-weight-regular brown--text">{{ edu.grade }}</v-list-item-h3>
                        <br>
                    </v-list-item-content>
                </v-list-item>
                <br>
            </v-list>
        </v-container>
    </v-app>
</section>
</template>


<script>


export default {
  name: "Education",
  data(){
      return {
          edus: [
            { 
                etitle: 'Fr. Conceicao Rodrigues College of Engineering, Bandra', 
                etimeperiod: '2017 - Present', 
                board: 'University of Mumbai',
                degree: 'Bachelor of Engineering in Computer Engineering - B.E',
                grade: 'CGPA: 8.67/10',
            },
            { 
                etitle: 'Sathaye College', 
                etimeperiod: '2015 - 2017', 
                board: 'Maharashtra State Board',
                degree: 'Higher Secondary Certificate - H.S.C',
                grade: 'Percentage: 78.77%'
                },
            { 
                etitle: 'St. Charles High School', 
                etimeperiod: '2005 - 2015', 
                board: 'Maharashtra State Board',
                degree: 'Secondary School Certificate - S.S.C',
                grade: 'Percentage: 93.00%'
                },
          ]
      }
  }
}
</script> -->
