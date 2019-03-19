import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-Y6fVCLv-7wYm2dTIdEl8gIOStwqwcbQ",
    authDomain: "prosper-and-co.firebaseapp.com",
    databaseURL: "https://prosper-and-co.firebaseio.com",
    projectId: "prosper-and-co",
    storageBucket: "prosper-and-co.appspot.com",
    messagingSenderId: "170257103974"
  };
  firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
