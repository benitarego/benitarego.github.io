<template>
  <v-app>
      <v-app-bar fixed elevation="0" color="white" height=60 class="d-none d-sm-flex">
        <v-btn text normal class="transparent" to="#" plain>
          <v-toolbar-title class="text-uppercase brown--text transparent">
            <span style="font-size: 30px" class="font-weight-light">Benita </span>
            <span style="font-size: 30px">Rego</span>
          </v-toolbar-title>
        </v-btn>
      </v-app-bar>
      <v-row>
      <v-main>
        <v-row no-gutters>
        
          <v-col cols="8" md="4" class="pt-16 d-none d-sm-flex">
            <v-card class="justify-center mx-16 mt-16" elevation="0">
              <v-card class="justify-center mx-10" id="image-card" elevation="0">
                <v-img src="@/assets/benita.jpg"></v-img>
              </v-card>
              <v-card-title class="justify-center my-4" style="font-size: 40px">Benita Rego</v-card-title>
              <v-card-subtitle class="font-weight-light" style="font-size: 20px; text-align: center;">Final Year CS Student</v-card-subtitle>
              <v-row class="d-none d-sm-flex justify-center px-3 pt-5">
                <v-btn elevation="0" class="mx-2" href="mailto:regobenita26@gmail.com" target="_blank" fab dark color=brown>
                  <v-icon size="30" dark>mdi-email</v-icon>
                </v-btn>
                
                <v-btn elevation="0" class="mx-2" href="https://www.linkedin.com/in/benitarego/" target="_blank" fab dark color=brown>
                  <v-icon size="30" dark>mdi-linkedin</v-icon>
                </v-btn>
                
                <v-btn elevation="0" class="mx-2" href="https://github.com/benitarego" target="_blank" fab dark color=brown>
                  <v-icon size="30" dark>mdi-github</v-icon>
                </v-btn>
                
                <v-btn elevation="0" class="mx-2" href="https://drive.google.com/file/d/1buPxztTWKMxSWQfycBktf4KFS0BWN2js/view?usp=sharing" target="_blank" fab dark color=brown>
                  <v-icon size="30" dark>mdi-text-box</v-icon>
                </v-btn>
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="8" class="d-sm-flex">
            <v-card class="pa-2" elevation="0">
              <Home/>
            </v-card>
          </v-col>
        </v-row><br><br><br>
          <Experience /><br><br>
          <Projects/><br><br>
          <!-- <Education/> -->
          <Skills/><br><br>
          <Publications/><br><br><br>
      </v-main>
    </v-row>
        <center><span class="py-16 brown--text font-weight-light justify-center" style="font-size: 18px">Made with &nbsp;&hearts;&nbsp; by <a class="brown--text font-weight-regular" href="#" style="text-decoration: none; font-weight: 400;">Benita Rego</a></span></center>
  </v-app>
</template>



<script>
import Home from "./views/Home"
import Experience from "./views/Experience"
import Projects from "./views/Projects"
import Skills from "./views/Skills"
import Publications from "./views/Publications"
 

export default {
  name: 'App',
  components: {
    Home,
    Experience,
    Projects,
    Skills, 
    Publications,
  },
};

</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

#image-card {
  border-radius: 50%; 
  height: 350px;
  width: 350px;
}

.page-wrapper {
  animation-duration: 0.2s;
}
</style>
