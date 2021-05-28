<template>
<section class="home">
      <v-container class="pt-16 justify-center">
        <v-card class="justify-center pt-10 d-sm-none" elevation="0">
          <v-card style="border-radius: 50%; height: 300px; width: 300px;" elevation="0" class="justify-center">
            <v-img class="justify-center" src="@/assets/benita.jpg"></v-img>
          </v-card>
        </v-card>
        <p class="px-4 pt-6 d-sm-none brown--text" style="text-align: center; font-size:40px; font-weight: 500">Benita Rego</p>
        
        <h1 style="font-size: 50px; font-weight: 400" class="brown--text mt-10 ml-3 d-none d-sm-flex">About Me</h1>
          
        <p class="d-sm-none px-5 black--text headline" 
          style="font-family: Arial, Helvetica, sans-serif; font-size: 30px; text-align: center; font-weight: 400">
          Final Year CS Student
        </p>
        <p class="d-sm-none px-5 black--text" 
          style="font-size: 20px; text-align: center; font-weight: 300">
          University of Mumbai
        </p>
        <v-row class="d-sm-none justify-center pt-6 pb-10">
          
          <v-btn elevation="0" class="mx-2" href="https://www.linkedin.com/in/benitarego/" target="_blank" fab dark color=brown>
            <v-icon size="30" dark>mdi-linkedin</v-icon>
          </v-btn>
          
          <v-btn elevation="0" class="mx-2" href="https://github.com/benitarego" target="_blank" fab dark color=brown>
            <v-icon size="30" dark>mdi-github</v-icon>
          </v-btn>
          
          <v-btn elevation="0" class="mx-2" href="https://twitter.com/regobenita" target="_blank" fab dark color=brown>
            <v-icon size="30" dark>mdi-twitter</v-icon>
          </v-btn>
          
          <v-btn elevation="0" class="mx-2" href="https://drive.google.com/file/d/1buPxztTWKMxSWQfycBktf4KFS0BWN2js/view?usp=sharing" target="_blank" fab dark color=brown>
            <v-icon size="30" dark>mdi-text-box</v-icon>
          </v-btn>
        
        </v-row>  


        <h3 style="font-weight: 300" class="py-2 px-4 black--text title">
          I am a Bachelor’s student in the Department of Computer Engineering at the University of Mumbai graduating in June 2021. <br>
          Background experience in the field of Mobile Application and Full Stack Development. Additionally, I've also worked on projects
          related to domains such as Image Processing, Deep Learning and Data Analysis. Always trying to have an hands on experience on the new
          technologies I learn which I apply on my projects. I look forward to researching, learning and applying on my upcoming ventures. <br>
          My interests lie in designing and developing applications using the frameworks trending and evolving.
        </h3>
        <br>
        <v-row class="justify-space-between d-none d-sm-flex">
          <v-col>
            <h2 class="px-4 pb-3 brown--text">Interests</h2>
            <li class="px-4 pt-1"><span style="font-weight: 500; font-size: 18px">Mobile Application Development</span></li>
            <li class="px-4 pt-1"><span style="font-weight: 500; font-size: 18px">Web Designing</span></li>
            <li class="px-4 pt-1"><span style="font-weight: 500; font-size: 18px">Personal blog <v-btn color="transparent" elevation="0" x-small href="https://www.instagram.com/picturenot.perfect/" target="_blank" fab><v-icon size="25" color="brown">mdi-instagram</v-icon></v-btn></span></li>
          </v-col>

          <v-col>
            <h2 class="px-4 brown--text">Education</h2>
            <v-card elevation="0">
            <v-card-title>B.E in Computer Engineering, 2021</v-card-title>
            <v-card-subtitle style="font-size: 17px">University of Mumbai</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-col class="d-sm-none">
            <h2 class="px-2 pb-3 brown--text">Interests</h2>
            <li class="px-2 pt-1"><span style="font-weight: 500; font-size: 20px">Mobile Application Development</span></li>
            <li class="px-2 pt-1"><span style="font-weight: 500; font-size: 20px">Web Designing</span></li>
            <li class="px-2 pt-1"><span style="font-weight: 500; font-size: 20px">Personal blog <v-btn color="transparent" elevation="0" x-small href="https://www.instagram.com/picturenot.perfect/" target="_blank" fab><v-icon size="25" color="brown">mdi-instagram</v-icon></v-btn></span></li>
          </v-col>
          <br><br>
          <v-col class="d-sm-none">
            <h2 class="px-2 brown--text">Education</h2>
            <span class="px-2" style="font-weight: 500; font-size: 20px">B.E in Computer Engineering, 2021</span><br>
            <span class="px-2 grey--text" style="font-size: 17px">University of Mumbai</span>
          </v-col>
    </v-container>
</section>
</template>

<script>

export default {
  name: "Home",
  data(){
    return {}
  } 
}
</script>
