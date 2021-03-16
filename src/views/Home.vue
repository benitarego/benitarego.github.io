<template class="primary">
<v-container> 
    <v-container class="pa-10 mt-16 justify-center">
      <v-card class="mb-4 justify-space-between d-flex d-sm-none" elevation="0">
        <v-card id="image-card" color="#0A5C32" elevation="0" class="justify-center ml-2 mb-4" size="260">
          <v-img src="@/assets/benita.jpg"></v-img>
        </v-card>
      </v-card>
        <h1 class="px-4 font-weight-bold display-3 text--teal-darken-4">BENITA REGO</h1>
        <p class="px-4 pt-4 black--text font-weight-bold headline">Full Stack App & Web Developer | Deep Learning & AI Enthusiast</p>
        <p class="px-4 black--text font-weight-regular title">Mumbai, India | regobenita26@gmail.com</p>
        <h3 class="font-weight-regular grey--text px-4">Senior Year CS student, interested in the field of Software Development and AI. Additionally, I've also worked on projects
          related to domains like Image Processing, Deep Learning and Data Analysis. I always try to have an hands on experience on the new
          technologies I learn which I apply on my projects. I look forward to researching, learning and applying on my upcoming ventures.
        </h3>
        <h3 class="px-4 pt-4"><a href="https://drive.google.com/file/d/1LN5VMBkuyCcKykhghxuU1Vk4kcrornx1/view?usp=sharing" target="_blank" class="green--text font-weight-regular title">My Resume</a></h3>
        <v-row class="d-flex pa-3 mt-2">
          <v-btn class="mx-2" href="https://www.linkedin.com/in/benitarego/" target="_blank" fab dark large color="#0A5C32">
            <v-icon size="40" dark>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="mx-2" href="https://github.com/benitarego" target="_blank" fab dark large color="#0A5C32">
            <v-icon size="40" dark>mdi-github</v-icon>
          </v-btn>
          <v-btn class="mx-2" href="https://twitter.com/regobenita" target="_blank" fab dark large color="#0A5C32">
            <v-icon size="40" dark>mdi-twitter</v-icon>
          </v-btn>
        </v-row>
    </v-container>
  
    <Experience class="d-sm-none"/>
    <Projects class="d-sm-none"/>
    <Education class="d-sm-none"/>
    <Skills class="d-sm-none"/>

    </v-container>
</template>

<script>
import Experience from "./Experience"
import Projects from "./Projects"
import Education from "./Education"
import Skills from "./Skills"

export default {
  name: "Home",
  components: {
    Experience,
    Projects,
    Education,
    Skills
  },
  data(){
    return {

    }
  } 
}
</script>
<style scoped>
#image-card {
  border-radius: 50%; 
}
</style>
