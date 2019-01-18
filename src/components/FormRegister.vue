<template>
  <form id="form" @submit="$event.preventDefault()" ref="form">
    <ul id="logs_list" class="logs" :class="logLevel">
      <li v-for="(log, i) in logs" :key="i">{{log}}</li>
    </ul>

    <h1 id="title">Inscription</h1>

    <label name="pseudo" for="">Pseudonyme :</label>
    <input type="text" name="pseudo" v-model="user.pseudo" class="input"
      :class="{warning: !user.pseudo.length}">

    <label name="email" for="">Adresse email :</label>
    <input type="email" name="email" v-model="user.email" class="input"
      :class="{warning: !user.email.length}">

    <label name="password" for="">Mot de passe :</label>
    <input type="password" name="password" v-model="user.password"
      class="input" :class="{warning: !user.password.length}">

    <label name="passwordcheck" for="">Vérification du mot de passe :</label>
    <input type="password" name="passwordConfirm" v-model="user.confirmPassword" class="input"
      :class="{warning: user.password !== user.confirmPassword}">

    <label name="age" for="">Age :</label>
    <input type="text" name="age" v-model="user.age" class="input"
    :class="{warning: !user.age.length}">

    <label name="gamertag" for="">Gamertag :</label>
    <input type="text" name="gamertag" v-model="user.gamertag" class="input"
    :class="{warning: !user.gamertag.length}">

      <label name="PSN" for="">PSN : </label>
      <input type="text" name="psn" v-model="user.psn" class="input"
      :class="{warning: !user.psn.length}">

      <label name="SteamId" for="">SteamId : </label>
      <input type="text" name="steamid" v-model="user.steamid" class="input"
      :class="{warning: !user.steamid.length}">

    <button @click="register" class="btn">S'enregistrer</button>

    <router-link class="link" to="/login"> Déjà enregistré ?</router-link>
  </form>
</template>

<script>
import formUtils from "@/utils/forms.js";

export default {
  data() {
    return {
      logs: {},
      logLevel: null,
      passwordMinLength: 8,
      user: {
        email: "guillaume@owlab.io",
        pseudo: "guillaume",
        password: "123Soleil",
        confirmPassword: "123Soleil",
        age: "37",
        gamertag: "123Soleil",
        psn: "123Soleil",
        steamid: "123Soleil",
      }
    };
  },
  methods: {
    checkRegister() {
      return true;
      this.logs = [];
      const fd = new FormData(this.$refs.form);

      const isFormValueOk = function isFormValueOk() {
        let errors = 0;
        for (let arr of fd) {
          if (!arr[1]) errors += 1;
        }
        const res = errors === 0;

        if (!res) {
          this.logs.push("please fill all the fields");
        }
        return res;
      }.bind(this);

      const isPassMatch = function isPassMatch() {
        const res = this.user.password === this.user.confirmPassword;
        if (!res) {
          this.logs.push("the confirm-password doesn't match password");
        }
        return res;
      }.bind(this);

      const isPassLengthValid = function isPassLengthValid() {
        const res = this.user.password.length >= this.passwordMinLength;
        if (!res) {
          this.logs.push(
            `the password is too short (${this.passwordMinLength} chars min)`
          );
        }
        return res;
      }.bind(this);

      const isPassSequenceOk = function isPassSequenceOk() {
        return true;
      };

      const runTestsSuite = function runTestsSuite(acc, fn) {
        acc += fn() === false ? 1 : 0;
        return acc;
      };

      // const tests = [isPassSequenceOk];
      const tests = [
        isFormValueOk,
        isPassMatch,
        isPassLengthValid,
        isPassSequenceOk
      ];

      this.logs.errorCount = tests.reduce(runTestsSuite, 0);

      this.logLevel = !this.logs.errorCount ? null : "warning";
      const data = !this.logs.errorCount
        ? formUtils.convertFormDataToObject(fd)
        : null;

      return {
        errors: this.logs.errorCount !== 0,
        data
      };
    },
    register() {
      const check = this.checkRegister();

      // if (!check.errors) {
      if (check) {
        // console.log(check.data);
        this.$store
          // .dispatch("user/register", check.data)
          
          .dispatch("user/register", this.user)
          .then(res => {
            console.log("res@ajax-register", res);
            this.logLevel = "success";
            this.logs = ["all good"];
          })
          .catch(err => {
            console.error("error@ajax-register", err);
            this.logLevel = "error";
            this.logs = [err];
          });
      }
    }
  }
};
</script>


<style lang="scss" scoped>

    #form{
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 630px;
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
            height: 80px;
            margin: 10px auto 5px;
            background: #0d3b57;
            color: white;
            padding: 5px;
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

