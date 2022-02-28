import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      pseudo: ""
    }
  },
  mutations: {
    setPseudo (state, pseudo) {
      console.error("setting pseudo", pseudo)
      state.pseudo = pseudo
    }
  }
});

const app = createApp(App)

app.use(store);

app.mount("#app")