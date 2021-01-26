<template>
  <v-app class="black">
    <v-row>
      <Navbar/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-row>
  </v-app>
</template>



<script>
import Navbar from "./components/Navbar"


export default {
  name: 'App',

  components: {
    // HelloWorld,
    Navbar
    
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
