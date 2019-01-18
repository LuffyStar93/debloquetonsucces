<template>
    <header id="header">
      <router-link class="lien" to="/"><img id="logo" src="@/assets/LogoProjet.svg" alt="Logo"></router-link>
      <nav id="nav">
      <router-link class="lien" to="/">Accueil</router-link>
      <router-link class="lien" to="/jeux">Les jeux</router-link>
      <router-link class="lien" to="/faq">FAQ</router-link>
      </nav>
     <div id="login">
         <router-link to="/login">Connexion</router-link>
         <router-link to="/inscription">S'enregistrer</router-link>
     </div>
    </header>
</template>

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
