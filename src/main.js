import Vue from 'vue'
import App from './App.vue'

//Router
import Router from './router.js' 
import VueMoment from 'vue-moment'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.config.productionTip = false

Vue.use(VueMoment)

new Vue({
  router:Router,
  render: h => h(App),
}).$mount('#app')
