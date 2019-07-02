<template>
<div class="app">
  <v-app >
    
  <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>

      
         <Footer />
 
  </v-app>

  </div>
  
</template>

<script>

import Navbar from './components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar, Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>


<style>
a{
  text-decoration: none;
}
</style>
