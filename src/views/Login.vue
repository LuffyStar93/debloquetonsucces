
<template>
    <section id="coucou">
        <FormLogin  class="log"/>
    </section>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
    components: {
        FormLogin
    }
}
</script>

<style lang="scss" scoped>
    #coucou{
        width: 100%;
        height: 100vh;
        background:url(../assets/bginscrip.jpg) 0 0px;
        background-size: cover;
    }
</style>


