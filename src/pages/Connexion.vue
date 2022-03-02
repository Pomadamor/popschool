<template>
  <div class="connexion">
      <h1>Connexion</h1>
      <input v-model="pseudo" />
    <input type="password" v-model="password" />
      <button @click="saveConnexion">Connexion</button>
  </div>
</template>
  

<script>
import { mapMutations } from "vuex";
export default {
  name: 'ConnexionForm',
  data: function() {
    return {
      pseudo: "",
      plop:"plop",
      password: "",
    }
  },
  methods: {
    ...mapMutations(["setPseudo"]),
    ...mapMutations(["setPassword"]),
    saveConnexion() {
        this.setPseudo(this.pseudo);
        if(this.pseudo == this.plop && this.password == this.plop){
          alert("bien joué")
        }else{
          alert("tu es mauvais")
        }
        this.setPassword(this.password);
    }
  }
}
</script>