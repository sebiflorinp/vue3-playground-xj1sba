const { createApp } = require('vue');
import App from "./App.vue";

import {createStore} from 'vuex';

const store =  createStore({
  state:{count:0},
  mutations:{
    inc(state){
      state.count++;
    },
    dec(state){
      state.count--;
    }
  }
})

const app =  createApp(App);
app.use(store)
app.mount("#app");
