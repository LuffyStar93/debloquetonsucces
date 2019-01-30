<template>
  <section id="dashboard" class="page dashboard">
    <h1 id="title" class="title">Mon Compte</h1>
  <div class="dashboard_content">
    
    <nav id="nav_dashboard" class="nav">

      <div class="list">

       <router-link class="clickable item" to="/user/moi">Infos</router-link>

        <router-link class="clickable item" to="/user/guides-favoris">Guides favoris</router-link>
        <p class="clickable" @click="logout">Déconnexion</p>
      </div>      
    </nav>

    <router-view id="page_content"/>
  </div>
  </section>
</template>

<script>
import auth from "@/utils/auth.js"
export default {
  data(){
    return{
      logged: true
    }
  },
  methods: {
    logout() {
      
      auth.logUserOut(this);
    }
  },
  
};
</script>

<style lang="scss" scoped>

#title{
  font-size: 40px;
  margin-bottom: 20px;
}

#dashboard{
height: 100vh;
}

.dashboard_content{
 display: flex;
}

#nav_dashboard {
  width: 20%;
  text-decoration: none;

  
  

  .clickable{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color:white;
    width: 90%;
    height: 80px;
    line-height: 80px;
    background: #0d3b57;
    margin: 30px;
    border: 1px solid black;
    cursor: pointer;

    &:hover{
      background: #00668d;
    }

    &.router-link-exact-active {
      background: #00668d;

    }

  }
}



#page_content{
  width: 80%;
}

</style>
