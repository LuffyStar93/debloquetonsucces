<template>
    <header id="header">
      <router-link class="lien" to="/"><img id="logo" src="@/assets/LogoProjet.svg" alt="Logo"></router-link>
      <nav id="nav">
      <router-link class="lien" to="/">Accueil</router-link>
      <router-link class="lien" to="/jeux">Les jeux</router-link>
      <router-link class="lien" to="/faq">FAQ</router-link>
      </nav>
     <div id="login">
         <router-link v-if="!auth.isLoggedIn()" to="/login">Connexion</router-link>
         <router-link v-if="!auth.isLoggedIn()" to="/inscription">S'enregistrer</router-link>
         <router-link v-if=" auth.isLoggedIn()" to="/user/moi">Mon Compte</router-link>
     </div>
    </header>
</template>

<script>
import libAuth from "@/utils/auth.js" 

export default {
    data(){
        return{
         auth: libAuth
        }
    },
    watch: {
        "$route": function(to, from) {
            this.$forceUpdate();
           
            this.logged = false;
        }
    }
    
}
</script>


<style lang="scss" scoped>

#header {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: black;
        height: 80px;


    
    #nav{
        display: flex; 
        width: 60%;
        justify-content: center;
    }

    .lien{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: 1s;
      width: 15%;
      height: 80px;

      &:hover{  
        color:white;
        background:#0d3b57;
      }
    }

   a{
    font-weight: bold;
    color: white;
    text-decoration: none;
   
    &.router-link-exact-active {
      color: #00668d;

    }
   }

   #login{
    display: flex;
    flex-direction: column;

    a:hover{
        color: #0d3b57;
    }
   }

}
</style>
