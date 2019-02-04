<template>
    <div id="content">
        <h1 class="title">Mes infos</h1>

        <form id="infos" action="">
        <table id="table">
            <tr>
                <td>Pseudo : </td>
                <td> <input type="text" :value="user.pseudo"></td>
            </tr>

            <tr>
                <td>Email :</td>
                <td> <input type="text" :value="user.email"></td>
            </tr>

            <tr>
                <td>Age :</td>
                <td> <input type="number" :value="user.age"></td>  
            </tr>

            <tr>
                <td>Gamertag :</td>
                <td> <input type="text" :value="user.gamertag"></td>
            </tr>

            <tr>
                <td>PSN :</td>
                <td> <input type="text" :value="user.psn"></td>
            </tr>

            <tr>
                <td>SteamID :</td>
                <td> <input type="text" :value="user.steamid"></td>
            </tr>
            <td colspan="2">
            <button>Modifier</button>
            </td>
        </table>
        </form>

        
    </div>
</template>

<script>

export default {
    data(){
        return{
            user : null
        }
    },
    created(){
    this.user = JSON.parse(window.localStorage.getItem('user'))
    //console.log(this.user);
  }
}
</script>

<style lang="scss" scoped>
    #content{
        display: flex;
        justify-content: center;
    
    }

    #infos{
        border: 4px solid #0d3b57;
        background: rgba(#00668d, 1) ;
        border-radius: 10px;
        width: 80%;
        margin: auto;
        color: white;
    }
    #table{
        margin: auto;

        td{
            width:200px;
            height: 50px;
            font-size: 20px;
        }
    }
    input{
        padding: 5px;
        height: 80%;
        width: 100%;
        
    }

    button{
        padding: 5px;
        width: 80%;
        height: 100%;
        background: #0d3b57;
        text-transform: uppercase;
        font-size: 18px;
        color: white;
        border: 2px solid black;

        &:hover{
           background: #00668d; 
        }
    }
</style>
