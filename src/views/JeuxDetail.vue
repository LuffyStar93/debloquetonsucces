<template>
    <div>
       <h1>Details</h1>
        <router-link to="/jeux" id="retour">Retour au Shop</router-link>
        <div id="box">
             <p>{{ this.$route.params.id}}</p>
            <p>{{ this.$route.params.name }}</p>
           
           <p>{{ achievement }}</p>

           <table>
      <thead>
        <tr>
         <th>Logo</th>
         <th> Nom</th>
         <th> Nombre de succès</th>
    
        </tr>
      </thead>
      <tbody>
        <router-link tag="tr" v-for="(stats, i) in orderBy(stat, 'name')" :key="i"  :to="{ path: `/jeux/${stats.appId}/achievement`, name: 'achievements', params: { id: stats.appId, name: stats.name } }">
        
        <td><img :src="'https://www.achievementstats.com/' + stats.logo" alt=""></td>
        <td>{{ achievement.name}}</td>
        <td>{{ stats.numOfAchievements}}</td>
       
        
        </router-link> 

      </tbody>

    </table>
          
            
        </div>

    </div>
</template>
<script>
import axios from "axios";
import cors from "cors";
export default {
  data(){
    return{
      stat : "",
      achievement: ""
      
    }
    },
  created(){
    var self = this;
    axios.post(`http://localhost:9999/external_api/achievement`,{
      idjeux : this.$route.params.id
    })

    .then(function(response) {
      console.log(response)
      self.achievement = response.data
    })
    // axios.get("http://localhost:9999/external_api/games")
    //   .then(function(response) {
    //     console.log(response);
      
    //     //console.log(response);
    //     self.stat = response.data
    //     //console.log(self.stat);
    //   })

      
    //   .catch(function(error){
    //     console.log("err", error);
    //   });
    
    // axios.get("https://api.achievementstats.com/games/" + this.$route.params.id + "/achievements"+ "/?key=1085bed860429488376615821")
    // .then(function(res) {
    //     console.log(res);
      
    //     //console.log(response);
    //     self.achievement = res.data
    //     //console.log(self.stat);
    //   })
    //     .catch(function(error){
    //     console.log("err", error);
    //   });
  }
}
</script>