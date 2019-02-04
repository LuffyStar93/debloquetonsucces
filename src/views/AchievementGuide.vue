<template>
    <div>
        <router-link class="link" to="/jeux" id="retour">Retour a la liste de jeux</router-link>
        <router-link class="link" :to="{ path: `/jeux/${this.$route.params.id}/achievement/`, name: 'achievements' }">Retour a la liste des succes</router-link>

 

    <button id="favoris"><i class="fas fa-star"></i>Ajouter en favoris</button>
        <div id="guide">
            
            <h1 id="title" v-if="achievement_name"> {{achievement_name}}</h1>
            <h1 id="title" v-else>Guide</h1>
            <div id="achievementinfos">
            <img :src="'https://www.achievementstats.com/'+ achievement_icon" alt="">
            <p id="descri">{{achievement_description}}</p>
            </div>
            <div class="content" v-if="guideContenus.contenus" v-html="guideContenus.contenus"></div>
            <div v-else>Erreur lors du chargement du guide ou guide inexistant veuillez revenir à la page précédente et réessayez</div>
            
       </div>
        
           
            


        <!-- COMMENTAIRE ZONE -->
       <div id="commentaires">
           <h3>Commentaires</h3>
           <div v-if="message.id_guide == guideContenus.id" v-for="(message, i) in messages" :key="i"  id="Comment_Template">
                <p  id="Comment_User">{{message.pseudo}}</p>
                <p  id="Comment">{{message.message}}</p> 
            </div>
            
           <div id="writecomment">
               <p>Commentez : </p>
               <form @submit="$event.preventDefault()"  id="formcomment" action="">
               <textarea required v-model="message" name="" form="formcomment" cols="75" rows="7" maxlength="255"></textarea>
               <router-link class="link" :to="{ path: `/jeux/${this.$route.params.id}/achievement/`, name: 'achievements' }"><input type="button" id="btn" @click="postMessage" value="envoyez"></router-link>
               </form>
           </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            content: "",
            achievement_name:"",
            achievement_icon:"",
            achievement_description:"",
            gameId : "",
            guideContenus:"",
            messages:"",
            user:"",
            message:""
            
            
        }
    }, 
    methods:{
            postMessage(){
            const url= `http://localhost:8080/api/v1/message`;
            if( 
             !this.message 
            // !this.contenus
            ){
                alert("Veuillez remplir tous les champs !");
            } else {
                axios.post(url,{
                 message: this.message,
                 id_user: this.user.id,
                 id_guide: this.guideContenus.id
                                 
                })
            .then(function() {
                //console.log("Response =" + response);
                confirm("Commentaire ajouté");
                
                 })
            .catch(function(error) {
                console.log(error);
            });

             }
        }
    },
    created(){
    var self = this;
    this.user = JSON.parse(window.localStorage.getItem('user'))
    self.achievement_name = this.$route.params.name;
    self.achievement_icon = this.$route.params.icon;
    self.achievement_description = this.$route.params.description;
    self.gameId = this.$route.params.id
    console.log(this.$route);
    
    //console.log(this.$route.params.name)
   
    axios.get("http://localhost:9999/api/v1/guide") 
      .then(function(response) {
       var succesName = self.achievement_name
       var jeuxId = self.gameId
       //console.log(jeuxId)
       var guides = response.data
       //console.log(guides);
       guides.forEach(guide => {
         if(guide.id_succesName === succesName && guide.id_jeux == jeuxId){
            return self.guideContenus = guide
            //console.log(guide.contenus)
            
         } else{
          // return console.log("Error")
            
         }   
       });
       
      })
      .catch(function(error){
        console.log("err", error);
      });


    axios.get("http://localhost:9999/api/v1/message") 
      .then(function(response) {
        // var guides = self.guideContenus
    //    var jeuxId = self.gameId
      // console.log(guides)
       return  self.messages = response.data
       //console.log(messages);
    //    messages.forEach(message => {
    //      if(message.id_guide == guides.id){
    //         return self.messages = message,
    //         console.log(self.messages);
    //      } else{
    //       // return console.log("Error")
            
    //      }   
    //    });
       
       
      })
      .catch(function(error){
        console.log("err", error);
      });
    },
}
</script>

<style lang="scss" scoped>

.link{
  display: flex;
  font-size: 20px;
  justify-content: center;
  text-decoration: none;
  color: #0d3b57;

}

#title{
    font-size: 22px;
}
#guide{
    margin:  auto;
    padding: 20px;
    color: white;
    width: 90%;
    background: #0d3b57;
    border: 2px solid #00668d;
    border-radius:10px;

    #descri{
        font-size: 22px;
        margin-left: 10px;
        line-height: 30px;
    }

    .content{
        margin-top: 10px;
        color: #0d3b57;
        padding: 15px;
        background: rgb(218, 220, 248);
        border: 1px solid black;
    }

}

#achievementinfos{
    display: flex;
    justify-content: center;

    img{
        min-width: 64px;
        max-width: 64px;
        min-height: 64px;
        max-height: 64px;
    }
}

#favoris{
    width: 20%;
    height:35px;
    font-size: 16px;
    margin: 10px 5%  5px 75%;
    color:white;
    border: 1px solid #00668d;
    border-radius: 7px;
    background: #0d3b57;
    transition: 0.4s;

    i{
        color: yellow;
        margin-right:2px;
        -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: black;
    }

    &:hover{
    border: 1px solid  #0d3b57;
    background:#00668d;
    }
}

#commentaires{
    width: 90%;
    border: 3px solid #00668d;
    border-radius: 10px;
    margin: 30px auto 10px auto;
    background: #0d3b57;

    h3{
        color:white;
    }
}

#Comment_Template{
    width: 95%;
    border: 1px solid black;
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    background:  #00668d;
    
    
    


    #Comment_User{
      justify-items: left;
      font-size: 16px;
      color: white;
    }
    #Comment{
    margin: 10px auto;
    font-size: 16px;
    min-width: 90%;
    max-width: 80%;
    width: 80%; 
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    }
}

#writecomment{

    border: 2px solid #00668d;
    border-radius: 10px;
    width: 70%;
    color: white;
    margin: 20px auto;
    font-weight: bold;
    font-size: 18px;
}
#formcomment{
    display: flex;
    flex-direction: column;

    #btn{
        width:60%;
        height: 40px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px auto;
        background: #00668d;
        font-size: 18px;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        transition: .2s;

        &:hover{
            border: 3px solid #0d3b57;
            color: #0d3b57;
        }
    }
}

textarea{
    resize:none;
    width: 80%;
    margin: 10px auto;
}
</style>


