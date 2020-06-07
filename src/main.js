import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Firebase from "firebase";
import firebaseConfig from "@/firebase";

Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Firebase.auth().onAuthStateChanged(() =>{
  new Vue({
    router,
    Firebase,
    render: h => h(App)
  }).$mount('#app')
})
