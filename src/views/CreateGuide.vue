<template>
    <div>
        <h1>
           Créer un guide
        </h1>

        <router-link class="link" to="/jeux" id="retour">Retour a la liste de jeux</router-link>
        <router-link class="link" id="retour" :to="{ path: `/jeux/${this.$route.params.id}/achievement/`, name: 'achievements'}" >Retour a la liste des succes</router-link>
        
        <!-- <p> HELLO ->{{ this.$route.params.achievement }}</p> -->


    <form  id="formz" action>
        <label for="achievement_name">Nom du succès :</label>
      <select name="achievement_name" id="selector">
        <option v-for="(achievement, i) in achievements" :key="i" value="">{{achievement.apiName}} || {{achievement.name}} </option>
      </select> <br>
      <label for="id1">Guide</label>
      <tinymce  name="id1" id="id1" :other_options="options"></tinymce>

      <button id="formvalidate">Valider</button>
    </form>
        <!-- <templateguide id="guide"></templateguide> -->
    </div>
</template>




<script>
// import templateguide from "@/components/createGuideTemplate.vue"
import tinymce from 'vue-tinymce-editor'

export default {
    data() {
        return {
            
            options: {
                "height": "200px",
                "width": "99,9%",
            },
            achievements: ""
        }
    },
  components: {
    // 'editor': Editor, // <- Important part
    'tinymce': tinymce
  },
  created(){
    this.achievements = this.$route.params.achievement;   
  }
};
</script>

<style lang="scss" scoped>
    .link{
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: rgb(13, 59, 87);
    }


    #formz{
    width: 90%;
    height: 100%;
    border: 4px solid black;
    background: rgba($color: #0d3b57, $alpha: .8);
    border-radius: 10px;
    margin: 10px auto ;
    padding: 10px;
    color: white;
    font-size: 18px;
}

#selector{
    margin: 10px 0px;
    width: 90%;
    height: 30px;
}
#formvalidate{
    margin-top: 10px;
    width: 40%;
    height: 40px;
    border-radius: 10px;
    background: #0d3b57;
    color: white;
    font-size: 14px;

    &:hover{
        border: 3px solid #00668d; 
    
    }
}
#id1{

}

</style>

