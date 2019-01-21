<template>
  <div>
    <h1 class="title">Mes Jeux</h1>
          <p> {{stat}} </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      stat : "",
  }
  },
  created(){
    axios.get("http://localhost:9999/external_api/mygames")
    .then(function(response) {
         console.log(response);
      
        //console.log(response);
         self.stat = response.data
         //console.log(self.stat);
      })
  }

}
</script>


<style lang="scss" scoped>
</style>
