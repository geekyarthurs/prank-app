<template>
    <v-container>

        <v-card v-if = "!loading" class ="ma-1 py-3">
        
        <v-layout row wrap justify-space-around>

        <v-flex sm12 md6 lg5 xs12 align-self-center>
        
        <v-img
        
        src = "https://via.placeholder.com/300"
        max-height = "400" contain
        ></v-img>
       
        </v-flex>

        <v-flex sm12 md6 lg5>
        <form>
         
    
         
        <p class = "font-weight-light my-3 px-2">
        
        Love Meter is a complex algorithm app designed by skilled and advanced computer scientist and religious professionals.
        Our data servers directly scan your name in the rich datasets and find your aspects which differs your love life with your partner.
        We ensure 100% data privacy and your information isn't logged into the server. Database is flushed every 0.3seconds. 
        
       
        
        
        </p>

        
        
        <v-layout row wrap justify-space-around class = "mx-2">
       
       <v-flex xs12 sm12 md12 lg5>
       
            <v-text-field v-model="userName"
            label="Your Name">
            </v-text-field>
       
       </v-flex> 

       <v-flex xs12 sm12 md12 lg5>

            <v-text-field v-model="crushName"
            label="Crush Name">
            </v-text-field>
       
       </v-flex> 

 </v-layout>

       <v-btn block  @click="pushData" class ="indigo white--text font-weight-light" flat>Calculate</v-btn>

         
        
        
        
        
        
       
        
        </form>
</v-flex>
        </v-layout>
        </v-card>
<div v-if="loading">
         
         <h1 class = "display-3 text-xs-center font-weight-light indigo white--text">You got pranked !!!</h1>
         
         </div>
    </v-container>
</template>

<script>
import db from '@/firebase/init';
export default {
    data(){
        return{
            userName: '',
            crushName: '',
            loading: false,
            userid: ''

        }
    },
    methods: {

        pushData(){
            this.loading = !this.loading;
            this.userid = this.$route.params.id;


            if(this.userName && this.crushName){
            db.collection('prank-app').doc(this.userid).collection('prankedUsers').
            add({user: this.userName, crush: this.crushName})
            }

        }
    }
}
</script>