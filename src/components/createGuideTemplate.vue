<template>
  <div>
    <form  id="formz" action>
        <label for="achievement_name">Nom du succès :</label>
      <select name="achievement_name" id="selector">
        <option value></option>
      </select> <br>
      <label for="id1">Guide</label>
      <tinymce  name="id1" id="id1" :other_options="options"></tinymce>

      <button id="formvalidate">Valider</button>
    </form>
    
  </div>
</template>
<script>
import tinymce from 'vue-tinymce-editor'



export default {
    data() {
        return {
            myToolbar1: '',
            API_KEY: "8e2krxv565piovucr3tj1ktlh8j2knkzy0e23w41w88g04ak",
            options: {
                "height": "200px",
                "width": "99,9%",
                
                // language_url: 'http://example.com/js/langs/fa_IR.js' //This url points to location of persian language file.
            },
            achievement: ""
        }
    },
  components: {
    // 'editor': Editor, // <- Important part
    'tinymce': tinymce
  },
  created(){
      
      this.$ebus.$on( "achievements", achievement =>  {
          this.achievement = achievement;
          console.log("Coucou"  + this.achievement)
      });
      
  }
};
</script>


<style lang="scss" scoped>
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


