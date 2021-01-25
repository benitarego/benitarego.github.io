<template>
  <v-navigation-drawer color="#0A5C32" app width="300" class="d-none d-sm-flex" >
    <v-card color="#0A5C32" class="justify-space-between" elevation="0">
      <v-card id="image-card" color="#0A5C32" elevation="0" class="justify-center mx-6 my-6 ml-6" size="260">
        <v-img src="@/assets/benita.jpg"></v-img>
      </v-card>
    </v-card>
    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item color="#C2C7C4" v-for="item in items" :key="item.title" router :to="item.route">
        <v-list-item-icon>
          <v-icon color="#C2C7C4" size="30">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content color="#C2C7C4">
          <h3 class="#C2C7C4--text font-weight-bold">{{ item.title }}</h3>
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
        ],
        right: null,
      }
    },
  }
</script>
<style scoped>
#image-card {
  border-radius: 50%; 
}
</style>