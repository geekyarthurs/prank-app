<template>
  <v-container>
  <v-btn @click="directCheck" class = "indigo white--text">You have UserID , Click Here? </v-btn>

  <v-card class="pa-3 elevation-3" v-if="(!userid) && (!checkDirectly)">
  
  <v-card-title>
    <div class="headline font-weight-light">Create a new prank.</div>    
  </v-card-title>
  


  <div>

    <v-img
    src= "https://cdn2.vectorstock.com/i/1000x1000/64/21/love-meter-vector-18496421.jpg"
    max-height="300"
    contain
    ></v-img>

    

  </div>


  <form>

  <v-text-field
   v-model="name"
   label="Enter your name."></v-text-field>
  
  <v-btn  @click="createUser" block class = "indigo white--text flat">Create</v-btn>
  
 
  
  </form>

 </v-card>

 <v-card class = "pa-5 mt-3 elevation-5" v-if="userid || checkDirectly">

    

    <v-text-field v-model="userid" v-if="checkDirectly || userid" label="Enter Your User ID"></v-text-field>



    <router-link :to = "{name: 'LoveMeter' , params:{id: userid}}">
    <v-btn block class = "indigo white--text">Right Click and Get Link</v-btn></router-link>

   <v-layout justify-end>
    
    <v-btn fab @click="getUser" class = "indigo white--text"> <v-icon>refresh</v-icon> </v-btn>
    </v-layout>

<h1 class = "text-sm-center font-weight-light mb-2">Your Users</h1>

<v-list two-line v-for="user in prankedUsers">

<v-list-tile @click = "">
            <v-list-tile-content>User : {{user.user}}</v-list-tile-content>
            <v-list-tile-content>Crush : {{user.crush}} </v-list-tile-content>
</v-list-tile>

</v-list>



    
   
   
   
   
   
   
   </v-card>
  
  
  
  
  </v-container>
</template>

<script>
  
import db from '@/firebase/init.js'
  export default {
    components: {
      
    },
    data(){
      return{
        name: '',
        userid : "",
        list: false,
        prankedUsers: [],
        checkDirectly: false
      }
    },
    methods: {

      directCheck(){

          this.checkDirectly = true;

      },

      createUser(){
        
        db.collection('prank-app').add({
          username: "Something Unique goes here"
        }).then(x => { this.userid = x.id; this.list = true });

      },

      getUser(){

        if(this.userid){
        db.collection('prank-app').doc(this.userid).collection('prankedUsers').get().then(
          docs => {
            
            docs.forEach(doc => {
              this.prankedUsers.push(doc.data());
              
            })
          }
        )

        }
      }


    }
  }
</script>
