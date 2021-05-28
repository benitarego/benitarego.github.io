<!--<template>
  <v-navigation-drawer color="#0A5C32" app width="320" class="d-none d-sm-flex" >
    <v-card color="#0A5C32" class="justify-space-between" elevation="0">
      <v-card class="justify-center mx-16 my-8 mt-16" id="image-card" elevation="0">
        <v-img src="@/assets/benita.jpg"></v-img>
      </v-card>
    </v-card>

    <v-list dense nav>
      <v-list-item class="mx-auto px-5" color="white" v-for="item in items" :key="item.title" router :to="item.route">
        <v-list-item-content color="white">
          <h3 class="font-weight-bold">{{ item.title }}</h3>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Navbar",
    data () {
      return {
        items: [
          { title: 'ABOUT', icon: 'mdi-help-box', route: '/' },
          { title: 'EXPERIENCE', icon: 'mdi mdi-note-multiple', route: '/experience' },
          { title: 'PROJECTS', icon: 'mdi-folder', route: '/projects' },
          { title: 'EDUCATION', icon: 'mdi-school', route: '/education' },
          { title: 'SKILLS', icon: 'mdi-certificate', route: '/skills' },
          { title: 'INTERESTS', icon: 'mdi-heart', route: '/interests' },
        ],
        right: null,
      }
    },
  }
</script>
<style scoped>
#image-card {
  border-radius: 50%; 
  border: 10px solid #6C8A5D;
  width: 80;
  height: 80; 
}
</style>

<template>
<v-app-bar app color="white" elevation="0">
        <v-btn text normal class="transparent" @click="goto('home')">
          <v-toolbar-title class="text-uppercase brown--text transparent">
            <span style="font-size: 30px" class="font-weight-light">Benita </span>
            <span style="font-size: 30px">Rego</span>
          </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <div class="flex-grow-1"></div>
        <v-toolbar-items>
          <v-btn @click="goto('experience')" color="brown" text>Experience</v-btn>
          <v-btn @click="goto('projects')" color="brown" text>Projects</v-btn>
          <v-btn @click="goto('education')" color="brown" text>Education</v-btn>
          <v-btn @click="goto('skills')" color="brown" text>Skills</v-btn>
          <v-btn @click="goto('publications')" color="brown" text>Publications</v-btn>
        </v-toolbar-items> 

        </v-app-bar>
</template>

<script>
  export default {
    name: "Navbar",
    data () {},
  }
</script> -->