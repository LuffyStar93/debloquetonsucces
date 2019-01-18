<template>
    <footer>
        <div>
        <a class="lien" href="">Contact</a>
      
        <a class="lien" href="">Site Map</a>
       </div>
        <p>DebloqueTonSucces 2018 - Chagnon Maxime</p>
    <div>
        <a class="reseau" href=""><img src="" alt=""><i class="fab fa-twitter-square fa-2x"></i></a>
        <a class="reseau" href=""><img src="" alt=""><i class="fab fa-facebook-square fa-2x"></i></a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
   footer{
       
       margin-top: 50px;
       width: 100%;
       height: 50px;
       background: black;
       display: flex;
       justify-content: space-around;
       align-items: center;
       color: white;

       .lien{
           margin-left: 10px;
       }   

       .reseau{
           margin-left: 10px;
       }
   }

   a{
       text-decoration: none;
       color: white;

       &:hover{
           color:#007f0c;
       }
   }


</style>

