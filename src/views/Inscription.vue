<template>
    <div id="coucou">
        
    
    <FormRegister/>
    </div>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";
export default {
    components: {
        FormRegister
    }
}
</script>


<style lang="scss" scoped>
     #title{
         color: #0d3b57;
         text-transform: uppercase;

     }
    #coucou{
        width: 100%;
        height: 100vh;
        background:url(../assets/bginscrip.jpg) 0 0px;
        background-size: cover;
    }
    #inscription{
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 550px;
        background: rgba(#FFF, 0.3);
        border: 4px solid #0d3b57;
        border-radius: 10px;
        margin: auto;

        label{
            font-weight: bold;
            margin: 5px 0px;
        }

        input{
            height: 50px;
            padding: 5px 0px;
            width: 50%;
            margin: auto;
            border: 1px solid #ccc;
            border-radius: 4px;
    

        }


    }
</style>