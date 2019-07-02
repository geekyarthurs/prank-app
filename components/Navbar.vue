<template>
   <nav>
   <v-toolbar class = "indigo white--text">
   
   <v-toolbar-title>
   <router-link :to="{name: 'home'}">
   <v-icon left class = "white--text">mood</v-icon>
    <span class="font-weight-light white--text">Love Meter</span>
</router-link>
    

   </v-toolbar-title>

   <v-spacer></v-spacer>
    <v-btn flat class = "font-weight-light white--text">
    <v-icon left>info</v-icon>
    About Us
    
    </v-btn>





    
   
   </v-toolbar>
   
   </nav>
</template>