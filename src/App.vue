<template>
  <div id="app">
    <headerMain></headerMain>
    <main>
    <router-view/>
    </main>
    <footerMain></footerMain>
  </div>
</template>

<script>
import headerMain from "@/components/Content/header.vue";
import footerMain from "@/components/Content/footer.vue";
import auth from "@/utils/auth.js";

export default {

   components: {
    headerMain,
    footerMain
  }
 
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: black;
}
main{
  padding-top: 80px;
  width: 80%;
  height: 100%;
  margin: auto;
  background: rgba($color: #eee, $alpha: 1);
}
#app {
  font-family:'Noto Sans JP', sans-serif, Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
