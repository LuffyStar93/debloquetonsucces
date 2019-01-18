<template>
  <div>
    <!-- <h1 class="title">Bienvenue sur DebloqueTonSucces</h1> -->

    <div id="slider">
      <div id="slider_text">
        <div class="slide_content">
      <h1>Les derniers guides</h1>
      <p>Red Dead Redemption 2</p>
      <button id="button"> En savoir plus</button>
      </div>
      </div>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia quasi modi eius?
       Corporis quis hic ea temporibus ad pariatur, aliquam sapiente alias dignissimos repellat saepe
        tenetur animi iste iure.</p>

    <div id="classement">
    <ol id="topjour"> Top 10 du jour
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
    </ol>

    <ol id="topmois"> Top 10 du mois
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
      <li>coucou - 2349 G score </li>
    </ol>
    </div>

  </div>
  

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.title{
     color:#0d3b57;
     padding-top: 30px;
     font-size: 40px;
   }
#slider{
  margin-top: 10px;
  width: 100%;
  height: 400px;
  background: url(../assets/redead.jpeg) 0 0;
  background-size: cover;

    #slider_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      
    }

  h1{
    
    font-size: 40px;
    color: #0d3b57;
  }

  p{
   font-size: 30px;
   color: black;
  }
  #button{
    width: 50%;
    height: 50px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 10px;
    background: transparent;
    border: 2px solid black;
    text-transform: uppercase;
    margin:10px 0px;
    transition: 1s;

    &:hover{
      background: rgba($color: #0d3b57, $alpha: 1);
      border-radius: 0px;
    }
  } 
  .slide_content{
  background: rgba($color: white, $alpha: .8);
  width: 40%;
  border: 4px solid #0d3b57;
  border-radius: 20px;
  }
}

#classement{
  display: flex;

  ol{
    list-style: none;
    border: 3px solid #00668d;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 700;
    background: rgba(#0d3b57,.2);
    &:first-child{
      margin-right: 5px;
    }
  }

  li{
    font-size: 22px;

    &:first-child{
      -webkit-text-stroke: 1px gold;

  
    }

    &:nth-child(2){
      -webkit-text-stroke: 1px silver;
      
    }

    &:nth-child(3){
      -webkit-text-stroke: 1px #cd7f32;
    }
  }

  #topjour{
    width: 50%;
  }

  #topmois{
    width: 50%;
  }
}
  
</style>

