<template>
  <div class="about">
    <h1>Liste des jeux</h1>
    <!-- <p>{{ stat }}</p> -->

    <table>
      <thead>
        <tr>
         <th>Logo</th>
         <th> Nom</th>
         <th> Nombre de succès</th>
         <th> Nombre de DLC</th>
        </tr>
      </thead>
      <tbody>
        <router-link tag="tr" v-for="(stats, i) in orderBy(stat, 'name')" :key="i"  :to="{ path: `/jeux/${stats.appId}/achievement`, name: 'achievements', params: { id: stats.appId, name: stats.name } }">
        
        <td><img :src="'https://www.achievementstats.com/' + stats.logo" alt=""></td>
        <td>{{ stats.name}}</td>
        <td>{{ stats.numOfAchievements}}</td>
        <td>{{ stats.numOfDlcs}}</td>
        
        </router-link> 

      </tbody>

    </table>
    
  </div>
</template>

<script>
import axios from 'axios'
import Vue2Filters from 'vue2-filters'

export default {
  mixins: [Vue2Filters.mixin],

  data(){
    return{
      stat : ""
    }
  },
  created(){
    var self = this;
    axios.get("http://localhost:9999/external_api/games")
      .then(function(response) {
       // console.log(response);
        self.stat = response.data
       
       
       
      })

      
      .catch(function(error){
        console.log("err", error);
      });
  }
}
</script>

<style lang="scss" scoped>

table{
  width: 80%;
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
    max-width: 184px;
    max-height: 69px;
    min-width: 184px;
    min-height: 69px;
  }
}
td:nth-child(1), td:nth-child(3), td:nth-child(4){
  width: 10%;
}

td:nth-child(1), td:nth-child(2){
  cursor: pointer;
}




</style>

