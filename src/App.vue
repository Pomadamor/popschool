<template>
  <div>
    <Header />
    <Master />
    <button v-on:click="say('accueil')">accueil</button>
    <button v-on:click="say('apropos')">apropos</button>
    <button v-on:click="say('mentionLegale')">mentionLegale</button>
    <button v-on:click="say('connexion')">connexion</button>

    <Accueil v-if="pageMenu == 'accueil'"/>
    <Apropos v-if="pageMenu == 'apropos'"/>
    <MentionLegale v-if="pageMenu == 'mentionLegale'"/>
    <Formulaire v-if="pageMenu == 'formulaire'"/>
    <Connexion v-if="pageMenu == 'connexion'"/>
    <Footer />
  </div>

</template>

<script>
import Master from './pages/Master.vue'
import Accueil from './pages/Accueil.vue'
import Apropos from './pages/Apropos.vue'
import MentionLegale from './pages/MentionLegale.vue'
import Connexion from './pages/Connexion.vue'
import Header from './template/Header'
import Footer from './template/Footer'
import Formulaire from './pages/Formulaire'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Accueil,
    Apropos,
    MentionLegale,
    Connexion,
    Master,
    Header,
    Footer,
    Formulaire,
  },
  data(){
    return{
      pageMenu : 'formulaire',
      plop :""
    }
  },

  //Ecoute les valeurs qui changent
  computed: {
    ...mapState(["pseudo"]),
  },

  methods: {
      say: function (message) {
        this.pageMenu = (message)
      },
  },

//Surveille si la valeur change
  watch: {
      pseudo: function(nouveauPseudo){
        // if(this.pseudo!="") ==> if(this.pseudo)
        if(nouveauPseudo!=""){
          this.pageMenu='formulaire'
        }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
