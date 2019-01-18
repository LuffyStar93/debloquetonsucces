<template>
  <div id="form_login">
    <ul id="logs">
      <li v-for="(log, k) in logs" :key="k">{{log}}</li>
    </ul>
    <form id="form" ref="form" @submit="$event.preventDefault()">

       <h1 class="title">Login</h1>

      <label name="email" for="">Email :</label>
      <input
        type="email"
        name="email"
        v-model="user.email"
        class="input"
        :class="{warning: !user.email.length}"
      >

      <label name="password" for="">Mot de passe :</label>
      <input
        type="password"
        name="password"
        v-model="user.password"
        class="input"
        :class="{warning: !user.password.length}"
      >
      <button @click="login($event)" class="btn">Connexion</button>

      <router-link  class="link" to="/inscription"> Pas encore de compte ?</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: {},
      passwordPattern: {
        regex: null,
        hint:
          "8 caractère minimum dont au moins 1 majuscule, 1 nombre et 1 caractère spécial"
      },
      user: {
        email: "guillaume@owlab.io",
        password: "123Soleil"
      }
    };
  },
  methods: {
    checkLogin() {
      const checkMail = function checkMail(email) {
        const res = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email
        );
        if (!res) this.logs["mailFormat"] = "Please enter a valid mail address";
        return res;
      };

      const checkPass = function checkPass(password) {
        // const res = ta regex ici :D;
        const res = true;
        if (!res)
          this.logs["passwordFormat"] = `Required password pattern: ${
            this.passwordPattern.hint
          }`;
        return res;
      };

      const runTestsSuite = function runTestsSuite(acc, fn) {
        acc += fn() ? 0 : 1;
        return acc;
      };

      const tests = [
        checkMail.bind(this, this.user.email),
        checkPass.bind(this, this.user.password)
      ];

      const errors = tests.reduce(runTestsSuite, 0);

      console.log("@checkLogin", errors, this.logs);

      return errors === 0;
    },
    login(evt) {
      const status = this.checkLogin();
      if (status) {
        this.$store
          .dispatch("user/login", this.user)
          .then(res => {
            this.$router.push({ path: `/user/moi` });
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>
<style scoped lang="scss">

    #form_login{
      
        padding-top: 14%;
  
    }
    #form{
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 300px;
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
            width: 60%;
            margin: auto;
            border: 1px solid #ccc;
            border-radius: 4px;
    

        }

        .btn{
            width: 60%;
            height: 40px;
            margin: 10px auto 5px;
            background: #0d3b57;
            color: white;
            font-size: 18px;
            cursor: pointer;
            transition: 1s;

            &:hover{
              background-color: #00668d;
            }
        }

        .link{
          text-decoration: underline;
          color: #0d3b57;
          margin-bottom: 10px;
          transition: 1s;

          &:hover{
            color: white;

          }

        }
    }
</style>

