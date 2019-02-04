<template>
    <div>
       <h1>Liste des succès</h1>
        <router-link class="link" to="/jeux" id="retour">Retour a la liste de jeux</router-link>
        <router-link class="link" :to="{ path: `/jeux/${this.$route.params.id}/achievement/createguide`, name: 'createguide', params: { achievement } }">Créer guide</router-link>
        <div id="box">
            
          <!-- <p id="game_name">{{ game_id }}</p> -->
           
           <!-- <p>{{ achievement }}</p> -->
              
           <table>
      <thead>
        <tr>
          <th>Icone</th>
         <th> Nom</th>
         <th>Description</th>
         <th>Guide ?</th>
        </tr>
      </thead>
      <tbody>
        <router-link tag="tr" v-for="(achievements, i) in achievement" :key="i"  :to="{ path: `/jeux/${game_id}/achievement/${achievements.apiName}`, name: 'achievements-guide', params: { achievements_id: achievements.apiName,  name: achievements.name, icon: achievements.iconUnlocked, description: achievements.description } }">
         <td><img :src="'https://www.achievementstats.com/' + achievements.iconUnlocked" alt=""></td>
        <td>{{ achievements.name}}</td>
        <td>{{ achievements.description}}</td>
        <td v-if="achievements.apiName"><i id="check" class="fas fa-check"></i></td>
        <td v-else=""><i id="cross" class="fas fa-times"></i></td>
      </router-link>
    
      
     

      </tbody>

    </table>
          
            
        </div>

    </div>
</template>
<script>
import axios from "axios";


export default {
  data(){
    return{
      game_id: "",
      stat : "",
      achievement: {name: "notloadedyet"}
      
    }
    },

  created(){
    var self = this;
    axios.post(`http://localhost:9999/external_api/achievement`,{
      idjeux : this.$route.params.id
    })

    .then(function(response) {
      //console.log(response)
      self.achievement = response.data
    }),
    self.game_id = this.$route.params.id;
  }
}
</script>

<style lang="scss" scoped>

#game_name{
  font-size: 25px;
  margin: 10px;
  text-transform: uppercase;
}

table{
  width: 90%;
   margin: auto;
   background: black;
}
table,  th, td {
  border: 2px solid black;
  border-collapse: collapse;
  padding: 5px;
  color:white;
 
}
thead, th{
  height: 90px;
  background: #00668d;
}

tbody tr:hover{
  &:hover{
    box-shadow: #3f3f3f -1px 1px, #3f3f3f -2px 2px, #3f3f3f -3px 3px, #3f3f3f -4px 4px, #3f3f3f -5px 5px, #3f3f3f -6px 6px;
  transform: translate3d(6px, -6px, 0);
	transition-duration: 0.4s;

  }
}

tbody tr:nth-child(even){
  background:#00668d;
}
tbody tr:nth-child(odd){
  background:#0d3b57;
}

td{
  padding-top: 10px;
}

td{
  img{
    max-width: 64px;
    max-height: 64px;
    min-width: 64px;
    min-height: 64px;
  }
}
td:nth-child(1){
  width: 20%;
}

td:nth-child(3){
 width: 30%;
}

td:nth-child(4){
 width: 10%;
}

td:nth-child(1), td:nth-child(2){
  cursor: pointer;
}

.link{
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #0d3b57;
  font-size: 20px;

}

#check{
  color: rgb(0, 233, 0);
}

#cross{
  color: red;
}



</style>